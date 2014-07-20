    function build_wall(positions,holes,texture,texture_bump) {

      var h,i,j;
      var shape = new THREE.Shape();


      shape.moveTo(positions[0][0]/1000,positions[0][1]/1000);

      for(i=1; i<positions.length; i++)
          shape.lineTo(positions[i][0]/1000,positions[i][1]/1000);

      for(i=0; i<holes.length; i++) {
          h = new THREE.Path();
          h.moveTo(holes[i][0][0]/1000,holes[i][0][1]/1000);
          for(j=1; j<holes[i].length; j++)
              h.lineTo(holes[i][j][0]/1000,holes[i][j][1]/1000);
          shape.holes.push(h);
      }

      var wall_geo = new THREE.ShapeGeometry(shape);
      var wall = createMesh(wall_geo,texture,texture_bump);
      wall.scale.set(1000,1000,1000);

      return wall;
    }

    //     ____
    //   /___ /|             l_hole 
    //   |   | |              _______
    //   |   | | alt         |       |       
    //   |   | |             |       |h_hole
    //   i___i/ spessore     |_______|
    //    largh
    function create_border_door(spessore,largh,alt,largh_hole,h_hole,texture) {
        var cont_pt1 = new createMesh_simple(new THREE.BoxGeometry(spessore,largh,alt), texture);
        cont_pt1.position.set(spessore/2,largh/2,alt/2);
        var cont_pt2 = cont_pt1.clone();
        cont_pt2.position.y = largh_hole-largh/2;
        var n = largh_hole-(2*largh);
        var cont_pt3 = new createMesh_simple(new THREE.BoxGeometry(spessore,n,largh), texture);
        cont_pt3.position.set(spessore/2,largh+n/2,alt-largh/2);

        var cont = new THREE.Object3D();
        cont.add(cont_pt1);
        cont.add(cont_pt2);
        cont.add(cont_pt3);
        
        return cont;

    }

    function create_border_window(spessore,largh,alt,largh_hole,h_hole,texture) {
        var cont_pt1 = new createMesh_simple(new THREE.BoxGeometry(spessore,largh,alt), texture);
        cont_pt1.position.set(spessore/2,largh/2,alt/2);
        var cont_pt2 = cont_pt1.clone();
        cont_pt2.position.y = largh_hole-largh/2;
        var n = largh_hole-(2*largh);
        var cont_pt3 = new createMesh_simple(new THREE.BoxGeometry(spessore,n,largh), texture);
        cont_pt3.position.set(spessore/2,largh+n/2,largh/2);
        var cont_pt4 = cont_pt3.clone();
        cont_pt4.position.z = h_hole-largh/2;

        var cont = new THREE.Object3D();
        cont.add(cont_pt1);
        cont.add(cont_pt2);
        cont.add(cont_pt3);
        cont.add(cont_pt4);
        
        return cont;

    }

    //finestra semplice con un pannesso di vetro. Apertura: ad entrare.
    function create_windows(spess_b,largh_b,alt_b,largh_hole,h_hole,texture,pos_perno,spess_glass,opacity) {
          var fin_border = create_border_window(spess_b,largh_b,alt_b,largh_hole,h_hole,texture);
          var l_h = largh_hole-(2*largh_b);
          var h_g = alt_b-(2*largh_b);
          var glass_fin = new THREE.Mesh(new THREE.BoxGeometry(spess_glass,l_h,h_g),
                          new THREE.MeshPhongMaterial({color: 0xFFFFFF,transparent: true,opacity: opacity}));
          glass_fin.position.set(spess_glass/2+(spess_b/2-spess_glass/2),l_h/2+largh_b,h_g/2+largh_b);
          //se pos_perno = 1, metto il perno a dx, altrimenti a sx ed aggiungo la maniglia
          var joint = new THREE.Object3D();
          var perno = new THREE.Object3D();
          
          joint.contact = glass_fin;

          //per non entrare nel muro
          fin_border.position.x += -spess_b; //rispetto al sistema di riferimento del perno saranno
          glass_fin.position.x += -spess_b;  //arretrati in modo da avere il perno frontale
          perno.position.x = spess_b;
          
          if(pos_perno==1) {
            joint.add(perno);
            perno.add(fin_border);
            perno.add(glass_fin);
            joint.perno = perno;
            joint.interact = function() {
              var doorTween;
              if(joint.perno.rotation.z == 0) {
              doorTween = new TWEEN.Tween(joint.perno.rotation)
              .to({z:-Math.PI/2}, 2000)
              .start();
              } else {
                doorTween = new TWEEN.Tween(joint.perno.rotation)
                .to({z:0}, 2000)
                .start();
              }
            }
          } else {
            //metto la maniglia
            var man_1 = new THREE.Mesh( new THREE.CylinderGeometry( .2, .1, .2), 
                                        new THREE.MeshPhongMaterial( {color: 0x505050, metal: true, shininess: 100} ) );
            var man_2 = new THREE.Mesh( new THREE.CylinderGeometry( .1, .1, 1), 
                                        new THREE.MeshPhongMaterial( {color: 0x505050, metal: true, shininess: 100} ) );
            man_1.add(man_2);
            man_2.rotation.z = Math.PI/2;
            man_2.position.x = .5;
            man_1.rotation.z = Math.PI/2;
            man_1.rotation.x = -Math.PI/2;
            man_1.position.set(.1,-largh_hole+spess_b/3,alt_b/2);

            fin_border.position.y += -largh_hole; 
            glass_fin.position.y += -largh_hole;
            perno.position.y = largh_hole;
            
            joint.add(perno);
            perno.add(fin_border);
            perno.add(glass_fin);
            perno.add(man_1);
            joint.perno = perno;
            joint.perno.maniglia = man_1;          
            joint.interact = function() {
              var doorTween,doorTween2;
              if(joint.perno.rotation.z == 0) {
              doorTween = new TWEEN.Tween(joint.perno.rotation)
              .to({z:Math.PI/2}, 2000);
              
              doorTween2 = new TWEEN.Tween(joint.perno.maniglia.rotation)
              .to({x:0}, 1000)
              .chain(doorTween)
              .start();
              } else {
                doorTween2 = new TWEEN.Tween(joint.perno.maniglia.rotation)
                .to({x:-Math.PI/2}, 1000);
               
                doorTween = new TWEEN.Tween(joint.perno.rotation)
                .to({z:0}, 2000)
                .chain(doorTween2)
                .start();           
              }
            }
          }
          return joint;
    }
    

    function create_door_b(spess_b,largh_b,alt_b,largh_hole,h_hole,texture,spess_glass,opacity) {
          var fin_border = create_border_window(spess_b,largh_b,alt_b,largh_hole,h_hole,texture);
          var l_h = largh_hole-(2*largh_b);
          var h_g = alt_b-(2*largh_b);
          var glass_fin = new THREE.Mesh(new THREE.BoxGeometry(spess_glass,l_h,h_g),
                          new THREE.MeshPhongMaterial({color: 0xFFFFFF,transparent: true,opacity: opacity}));
          glass_fin.position.set(spess_glass/2+(spess_b/2-spess_glass/2),l_h/2+largh_b,h_g/2+largh_b);
          //se pos_perno = 1, metto il perno a dx, altrimenti a sx ed aggiungo la maniglia
          var n = largh_hole-(2*largh_b);
          var intermezzo = new createMesh_simple(new THREE.BoxGeometry(spess_b,n,largh_b), texture);
          intermezzo.position.set(spess_b/2,n/2+largh_b,largh_b/2+h_hole/3);
          
          var joint = new THREE.Object3D();
          var perno = new THREE.Object3D();
          
          joint.contact = glass_fin;

          //per non entrare nel muro
          fin_border.position.x += -spess_b; //rispetto al sistema di riferimento del perno saranno
          glass_fin.position.x += -spess_b;  //arretrati in modo da avere il perno frontale
          intermezzo.position.x += -spess_b;
          perno.position.x = spess_b;
          
          var man_1 = new THREE.Mesh( new THREE.CylinderGeometry( .2, .1, .2), 
                                        new THREE.MeshPhongMaterial( {color: 0x505050, metal: true, shininess: 100} ) );
          var man_2 = new THREE.Mesh( new THREE.CylinderGeometry( .1, .1, 1), 
                                        new THREE.MeshPhongMaterial( {color: 0x505050, metal: true, shininess: 100} ) );
          man_1.add(man_2);
          man_2.rotation.z = Math.PI/2;
          man_2.position.x = .5;
          man_1.rotation.z = Math.PI/2;
          man_1.rotation.x = -Math.PI/2;
          man_1.position.set(.1,-largh_hole+spess_b/3,alt_b/2);

          fin_border.position.y += -largh_hole; 
          glass_fin.position.y += -largh_hole;
          intermezzo.position.y += -largh_hole;
          perno.position.y = largh_hole;
            
          joint.add(perno);
          perno.add(fin_border);
          perno.add(glass_fin);
          perno.add(intermezzo);
          perno.add(man_1);
          joint.perno = perno;
          joint.perno.maniglia = man_1;          
          joint.interact = function() {
          var doorTween,doorTween2;
            if(joint.perno.rotation.z == 0) {
            doorTween = new TWEEN.Tween(joint.perno.rotation)
            .to({z:Math.PI/2}, 2000);
              
            doorTween2 = new TWEEN.Tween(joint.perno.maniglia.rotation)
            .to({x:0}, 1000)
            .chain(doorTween)
            .start();
            } else {
            doorTween2 = new TWEEN.Tween(joint.perno.maniglia.rotation)
              .to({x:-Math.PI/2}, 1000);
             
              doorTween = new TWEEN.Tween(joint.perno.rotation)
              .to({z:0}, 2000)
              .chain(doorTween2)
              .start();           
            }
          }
        
        return joint;
    }

        //finestra semplice con un pannesso di vetro. Apertura: ad entrare.
    function create_door_a(spess_b,largh_b,alt_b,largh_hole,h_hole,texture,pos_perno,spess_glass,opacity) {
          var fin_border = create_border_window(spess_b,largh_b,alt_b,largh_hole,h_hole,texture);
          var l_h = largh_hole-(2*largh_b);
          var h_g = alt_b-(2*largh_b);
          var glass_fin = new THREE.Mesh(new THREE.BoxGeometry(spess_glass,l_h,h_g),
                          new THREE.MeshPhongMaterial({color: 0xFFFFFF,transparent: true,opacity: opacity}));
          glass_fin.position.set(spess_glass/2+(spess_b/2-spess_glass/2),l_h/2+largh_b,h_g/2+largh_b);
          //se pos_perno = 1, metto il perno a dx, altrimenti a sx ed aggiungo la maniglia
          var joint = new THREE.Object3D();
          var perno = new THREE.Object3D();
          
          //per non entrare nel muro
          //fin_border.position.x += -spess_b; //rispetto al sistema di riferimento del perno saranno
          //glass_fin.position.x += -spess_b;  //arretrati in modo da avere il perno frontale
          perno.position.x = -spess_b;
          
          joint.contact = glass_fin;

          if(pos_perno==1) {
            joint.add(perno);
            perno.add(fin_border);
            perno.add(glass_fin);
            joint.perno = perno;
            joint.interact = function() {
              var doorTween;
              if(joint.perno.rotation.z == 0) {
              doorTween = new TWEEN.Tween(joint.perno.rotation)
              .to({z:Math.PI/2}, 2000)
              .start();
              } else {
                doorTween = new TWEEN.Tween(joint.perno.rotation)
                .to({z:0}, 2000)
                .start();
              }
            }
          } else {
            //metto la maniglia
            var man_1 = new THREE.Mesh( new THREE.CylinderGeometry( .2, .2, .4+spess_b), 
                                        new THREE.MeshPhongMaterial( {color: 0x505050, metal: true, shininess: 100} ) );
            var man_2 = new THREE.Mesh( new THREE.CylinderGeometry( .1, .1, 1), 
                                        new THREE.MeshPhongMaterial( {color: 0x505050, metal: true, shininess: 100} ) );
            var man_3 = new THREE.Mesh( new THREE.CylinderGeometry( .1, .1, 1), 
                                        new THREE.MeshPhongMaterial( {color: 0x505050, metal: true, shininess: 100} ) );
            man_1.add(man_2);
            man_1.add(man_3);
            man_2.rotation.z = Math.PI/2;
            man_3.rotation.z = Math.PI/2;
            man_2.position.x = .5;
            man_3.position.x = .5;
            man_2.position.y = -(spess_b-.3);
            man_3.position.y = spess_b-.3;
            man_1.rotation.z = Math.PI/2;
            man_1.position.set(.4,-largh_hole+spess_b/3,alt_b/2);

            fin_border.position.y += -largh_hole; 
            glass_fin.position.y += -largh_hole;
            perno.position.y = largh_hole;
            
            joint.add(perno);
            perno.add(fin_border);
            perno.add(glass_fin);
            perno.add(man_1);
            joint.perno = perno;
            joint.perno.maniglia = man_1;
            var snd;          
            joint.interact = function() {
              var doorTween,doorTween2;
              if(joint.perno.rotation.z == 0) {
              snd = Sound("door_open",.5,false);
              snd.play();
              doorTween = new TWEEN.Tween(joint.perno.rotation)
              .to({z:-Math.PI/2}, 2000);
              
              doorTween3 = new TWEEN.Tween(joint.perno.maniglia.rotation)
              .to({x:0}, 500);

              doorTween2 = new TWEEN.Tween(joint.perno.maniglia.rotation)
              .to({x:-Math.PI/2}, 500)
              .chain(doorTween,doorTween3)
              .start();
              } else { 
                snd = Sound("door_close",.2,false);
                setTimeout(function(){snd.play();},1800);              
                doorTween = new TWEEN.Tween(joint.perno.rotation)
                .to({z:0}, 2000)
                .start();           
              }
            }
          }
          return joint;
    }

    function create_door_ing(spess_b,largh_b,alt_b,largh_hole,h_hole,texture,spess_panel) {
          var fin_border = create_border_window(spess_b,largh_b,alt_b,largh_hole,h_hole,texture);
          var l_h = largh_hole-(2*largh_b);
          var h_g = alt_b-(2*largh_b);
          var panel = createMesh_simple(new THREE.BoxGeometry(spess_panel,l_h,h_g), texture);
          panel.position.set(spess_panel/2+(spess_b/2-spess_panel/2),l_h/2+largh_b,h_g/2+largh_b);

          var n = largh_hole-(2*largh_b);
          var pomello = new THREE.Mesh(new THREE.SphereGeometry(.4), 
                                       new THREE.MeshPhongMaterial( {color: 0xC39C0E, metal: true, shininess: 100} ));
          pomello.position.set(.1,largh_hole/2,h_hole/2);
          
          var joint = new THREE.Object3D();
          var perno = new THREE.Object3D();
          
          joint.contact = panel;
          //per non entrare nel muro
          fin_border.position.x += -spess_b; //rispetto al sistema di riferimento del perno saranno
          panel.position.x += -spess_b;  //arretrati in modo da avere il perno frontale
          pomello.position.x += -spess_b;
          perno.position.x = spess_b;
          
          var man_1 = new THREE.Mesh( new THREE.CylinderGeometry( .2, .1, .2), 
                                        new THREE.MeshPhongMaterial( {color: 0xC39C0E, metal: true, shininess: 100} ) );
          var man_2 = new THREE.Mesh( new THREE.CylinderGeometry( .1, .1, 1), 
                                        new THREE.MeshPhongMaterial( {color: 0xC39C0E, metal: true, shininess: 100} ) );
          man_1.add(man_2);
          man_2.rotation.z = Math.PI/2;
          man_2.position.x = .5;
          man_1.rotation.z = Math.PI/2;
          man_1.position.set(.1,-largh_hole+spess_b/3,alt_b/2);

          fin_border.position.y += -largh_hole; 
          panel.position.y += -largh_hole;
          pomello.position.y += -largh_hole;
          perno.position.y = largh_hole;
            
          joint.add(perno);
          perno.add(fin_border);
          perno.add(panel);
          perno.add(pomello);
          perno.add(man_1);
          joint.perno = perno;
          joint.perno.maniglia = man_1;
          joint.interact = function() {
          var doorTween,doorTween2,snd;
            if(joint.perno.rotation.z == 0) {
            snd = Sound("door-lock-1",.2,false);
            snd.play();
            doorTween = new TWEEN.Tween(joint.perno.rotation)
            .to({z:Math.PI/2}, 2000);

            doorTween3 = new TWEEN.Tween(joint.perno.maniglia.rotation)
            .to({x:0}, 500);
              
            doorTween2 = new TWEEN.Tween(joint.perno.maniglia.rotation)
            .to({x:-Math.PI/2}, 500)
            .chain(doorTween,doorTween3)
            .start();
            } else {
              snd = Sound("door-lock-2",.2,false);
              setTimeout(function(){snd.play();},1800);
              doorTween = new TWEEN.Tween(joint.perno.rotation)
              .to({z:0}, 2000)
              .start();           
            }
          }
        
        return joint;
    }