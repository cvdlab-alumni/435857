
    function create_sciacquone() {

        var obj_gabin = new THREE.Object3D();

        var gabin = new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.4,32,32),new THREE.MeshPhongMaterial({color:0x909090,metal:true,shininess:200}));
        
        var gabin2 = new THREE.Mesh(new THREE.CylinderGeometry(.4,.4,.2,32,32),new THREE.MeshPhongMaterial({color:0x909090,metal:true,shininess:200}));
        
        gabin.position.x = -.1;
        gabin2.rotation.z = Math.PI/2;
        gabin.rotation.z = Math.PI/2;
        obj_gabin.add(gabin);
        obj_gabin.add(gabin2);
        obj_gabin.contact = gabin2;

        obj_gabin.interact = function () {
          var suono = Sound("ToiletFlush",0.2,false);
          suono.play();
          var tween2 = new TWEEN.Tween(gabin.position)
                               .to({x:-.1},800);
          var tween = new TWEEN.Tween(gabin.position)
                               .to({x:.1},800)
                               .chain(tween2)
                               .start();
        }

        return obj_gabin;

    }

/*
    function createMesh(geom,meshMaterial) {

        //geom.applyMatrix(new THREE.Matrix4().makeTranslation(-3, -4.5, -.25));

        // create a multimaterial
        var mesh = new THREE.Mesh(geom,meshMaterial);

        return mesh;
    }
*/
    function create_lavatrice() {

        var corpo_obj = new THREE.Object3D();

        var shape = new THREE.Shape();
        shape.moveTo(0,0);
        shape.lineTo(6,0);
        shape.lineTo(6,9);
        shape.lineTo(0,9);
        shape.lineTo(0,0);

        var hole = new THREE.Path();
        hole.absellipse(3, 5, 2, 2, 0, Math.PI * 2, true);
        shape.holes.push(hole);

          var options = {
            amount: .5,
            bevelThickness: 0,
            bevelSize: 0,
            bevelSegments: 0,
            bevelEnabled: false,
            curveSegments: 30,
          };
      
        var meshMaterial = new THREE.MeshPhongMaterial({color:0xC5C5C5,metal:true,shininess:200});

        var panel = new THREE.Mesh(new THREE.ExtrudeGeometry(shape,options),meshMaterial);
        panel.position.set(-3, -4.5, -.25);
        corpo_obj.add(panel);

        var panel2 = new THREE.Mesh(new THREE.BoxGeometry(6,.5,5.5),meshMaterial);
        panel2.position.set(0,-4.25,-3);
        corpo_obj.add(panel2);

        var panel3 = panel2.clone();
        panel3.position.y = 4.25;
        corpo_obj.add(panel3);

        var panel4 = new THREE.Mesh(new THREE.BoxGeometry(6,8,.5),meshMaterial);
        panel4.position.z = -5.5;
        corpo_obj.add(panel4);

        var panel5 = new THREE.Mesh(new THREE.BoxGeometry(.5,8,5),meshMaterial);
        panel5.position.set(-2.75,0,-2.75);
        corpo_obj.add(panel5);

        var panel6 = panel5.clone();
        panel6.position.x = 2.75;
        corpo_obj.add(panel6);

        var ctrl_geom = new THREE.PlaneGeometry(6,1.5);
        var ctrl_mat = new THREE.MeshPhongMaterial();
        var ctrl_texture = THREE.ImageUtils.loadTexture("assets/textures/general/ctrl.jpg");
        ctrl_mat.side = THREE.DoubleSide;
        ctrl_mat.map = ctrl_texture;
        var ctrl = new THREE.Mesh(ctrl_geom,ctrl_mat);
        ctrl.position.set(0,3.75,.26);
        corpo_obj.add(ctrl);

        var sport_cont = new THREE.Mesh(new THREE.TorusGeometry(1.8,.25,32,32),new THREE.MeshPhongMaterial({color:0x505050,metal:true,shininess:200}));
        sport_cont.position.x = 1.8;

        var vetrosport = new THREE.Mesh(new THREE.CylinderGeometry(1.8,1.8,.2,32,32),new THREE.MeshPhongMaterial({color:0xffffff,transparent:true,opacity:0.5}));
        vetrosport.rotation.x = Math.PI/2;
        vetrosport.position.x = 1.8;

        var perno = new THREE.Object3D();
        perno.position.set(-1.8,.5,.2);
        perno.add(sport_cont);
        perno.add(vetrosport);

        corpo_obj.add(perno);

        var centrifuga = new THREE.Mesh(new THREE.CylinderGeometry(2.2,2.2,4,8,8,true),new THREE.MeshPhongMaterial({color:0x505050,metal:true,shininess:200,side:THREE.DoubleSide}));
        centrifuga.rotation.x = Math.PI/2;
        centrifuga.position.set(0,.5,-2.25);
        corpo_obj.add(centrifuga);

        var acqua = new THREE.Mesh(new THREE.BoxGeometry(5,2.5,4),
          new THREE.MeshPhongMaterial({color:0x4BAEFF,transparent:true,opacity:0.5}));
        
        acqua.position.set(0,-3,-2.25);
        corpo_obj.add(acqua);

        perno.interact = function() {
          var tween;
          if(perno.rotation.y === 0) 
            tween = new TWEEN.Tween(perno.rotation).to({y:-Math.PI/2},1000).start();
          else
            tween = new TWEEN.Tween(perno.rotation).to({y:0}).start();
        }

        corpo_obj.interact = function() {
          var tween,tween2,tween3;
          if (perno.rotation.y === 0) {
            tween4 = new TWEEN.Tween(acqua.position).to({y:-3},1000);
            tween3 = new TWEEN.Tween(centrifuga.rotation).to({y:0},1000).chain(tween4);            
            tween2 = new TWEEN.Tween(centrifuga.rotation).to({y:2*Math.PI},1000).repeat(4).chain(tween3);            
            tween = new TWEEN.Tween(acqua.position).to({y:-.5},1000).chain(tween2).start();
          };
        }

        corpo_obj.perno = perno;
        corpo_obj.contact1 = panel;
        corpo_obj.contact2 = sport_cont;

        return corpo_obj;
    }
