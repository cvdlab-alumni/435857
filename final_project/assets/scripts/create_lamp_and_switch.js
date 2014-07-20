    function create_lampada(colore) {

        var obj_lam = new THREE.Object3D();
        var lamp_mat = new THREE.MeshPhongMaterial({color:0x909090,metal:true,shininess:200});
        var uplamp = new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,.2,32,32),lamp_mat);
        uplamp.position.y = 2.1;
        var asta_lamp = new THREE.Mesh(new THREE.CylinderGeometry(.15,.15,4,32,32),lamp_mat);

        obj_lam.add(uplamp);
        obj_lam.add(asta_lamp);

        var lamp_mat2 = new THREE.MeshPhongMaterial({color:colore,metal:true,
                                                     shininess:200,side:THREE.DoubleSide});
        var coppa = new THREE.Mesh(new THREE.CylinderGeometry(.5,2,3,32,32,true),lamp_mat2);
        coppa.position.y = -3;
        obj_lam.add(coppa);

        var downlamp = new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,.5,32,32),lamp_mat);
        downlamp.position.y = -1.75;
        obj_lam.add(downlamp);

        var lampadina_mat = new THREE.MeshPhongMaterial({color:0xffffff,transparent:true,opacity:0.2})
        var lampadina = new THREE.Mesh(new THREE.SphereGeometry(.4,32,32),lampadina_mat);
        lampadina.position.y = -2.5;
        obj_lam.add(lampadina);

        var luce = new THREE.PointLight(0xE2F257,3,3);
        luce.position.y = -3;
        obj_lam.add(luce);

        obj_lam.turnOn = function () {
          luce.intensity = 3;
        }

        obj_lam.turnOff = function () {
          luce.intensity = 0;
        }

        return obj_lam;
    }

    function create_switch(lampada,light,intensity) {

        var int_mat1 = new THREE.MeshPhongMaterial({color:0x000000});
        var int_mat2 = new THREE.MeshPhongMaterial({color:0xffffff});

        var obj_interruttore = new THREE.Object3D();

        var interrutore = new THREE.Mesh(new THREE.BoxGeometry(1.2,1,.1), int_mat1); 
        obj_interruttore.add(interrutore); 

        var interrutorein = new THREE.Mesh(new THREE.BoxGeometry(.2,.5,.2),int_mat2);
        obj_interruttore.add(interrutorein); 
        obj_interruttore.interrutorein = interrutorein;
        obj_interruttore.interrutorein.rotation.x = Math.PI/16;

        obj_interruttore.contact = interrutorein;

        obj_interruttore.ison = true;

        var swsound;

        obj_interruttore.interact = function() {
          if(!obj_interruttore.ison) {
            swsound = Sound("switch",.2,false);
            swsound.play();
            lampada.turnOn();
            light.intensity = intensity;
            obj_interruttore.interrutorein.rotation.x = Math.PI/16;
            obj_interruttore.ison = true;
          } else {
            swsound = Sound("switch",.2,false);
            swsound.play();
            lampada.turnOff();
            light.intensity = 0;
            obj_interruttore.interrutorein.rotation.x = -Math.PI/16;
            obj_interruttore.ison = false;
          }
        }

        return obj_interruttore;
    }


    function create_campanello() {

        var obj_ring = new THREE.Object3D();

        var ring = new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,.4,32,32),new THREE.MeshPhongMaterial({color:0x9F9F9F,metal:true,shininess:200}));
        
        var ring2 = new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,.2,32,32),new THREE.MeshPhongMaterial({color:0x505050,metal:true,shininess:200}));
        
        ring.position.x = -.1;
        ring2.rotation.z = Math.PI/2;
        ring.rotation.z = Math.PI/2;
        obj_ring.add(ring);
        obj_ring.add(ring2);
        obj_ring.contact = ring2;
        
        obj_ring.interact = function () {
          var suono = Sound("doorbell",0.2,false);
          suono.play();
          var tween2 = new TWEEN.Tween(ring.position)
                               .to({x:-.1},500);
          var tween = new TWEEN.Tween(ring.position)
                               .to({x:.1},500)
                               .chain(tween2)
                               .start();
        }

        return obj_ring;

    }