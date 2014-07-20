    function create_palline() {

        var palline = new THREE.Object3D();

        var ball = new THREE.Mesh(new THREE.SphereGeometry(.2,32,32),new THREE.MeshPhongMaterial({color:0x505050,metal:true,shininess:200}));
        ball.position.y = -1;

        var pball = new THREE.Object3D();
        pball.position.set(-.8,1,0);
        pball.add(ball);
        palline.add(pball);

        var pball2 = pball.clone();
        pball2.position.set(.8,1,0);
        palline.add(pball2);

        palline.pball = pball;
        palline.pball2 = pball2;

        ballc1 = ball.clone();
        ballc1.position.set(0,0,0);
        palline.add(ballc1);

        ballc2 = ball.clone();
        ballc2.position.set(.4,0,0);
        palline.add(ballc2);

        ballc3 = ball.clone();
        ballc3.position.set(-.4,0,0);
        palline.add(ballc3);

        var suono = Sound("clang",0.05,true);
        
        var tween4 = new TWEEN.Tween(pball2.rotation)
                              .to({z:0},210);

        var tween3 = new TWEEN.Tween(pball2.rotation)
                              .to({z:Math.PI/4},210);

        var tween2 = new TWEEN.Tween(pball.rotation)
                              .to({z:0},210);

        var tween1 = new TWEEN.Tween(pball.rotation)
                              .to({z:-Math.PI/4},210);

        tween4.chain(tween1);
        tween3.chain(tween4);
        tween2.chain(tween3);
        tween1.chain(tween2);

        palline.started = false;
        palline.suono = suono;

        palline.interact = function() {
          if(!palline.started) { 
            palline.suono.play();
            tween1.start();
            palline.started = true;
          }
          else {
            palline.suono.pause();
            palline.suono = Sound("clang",.05,true);
            TWEEN.remove(tween1);
            TWEEN.remove(tween2);
            TWEEN.remove(tween3);
            TWEEN.remove(tween4);
            palline.pball.rotation.z = 0;
            palline.pball2.rotation.z = 0;
            palline.started = false;
          }
        }

        var piano = createMesh_simple(new THREE.BoxGeometry(2.4,.2,1),"wood_kitchen.jpg");
        piano.position.y = -.5;
        palline.add(piano);

        //struttura supporto
        var supp1 = new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,1.8,32,32),
                                   new THREE.MeshPhongMaterial({color:0x505050,metal:true,shininess:200}));
        supp1.position.set(-1.1,.5,.4);
        palline.add(supp1);

        var supp2 = supp1.clone();
        supp2.position.x = 1.1;
        palline.add(supp2);

        var supp3 = supp1.clone();
        supp3.position.z = -.4;
        palline.add(supp3);
        
        var supp4 = supp2.clone();
        supp4.position.z = -.4;
        palline.add(supp4);

        palline.contact = piano;

        var supp5 = new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.7,32,32),
                                   new THREE.MeshPhongMaterial({color:0x505050,metal:true,shininess:200}));
        supp5.rotation.x = Math.PI/2;
        supp5.position.y = 1.35;
        supp5.position.x = -1.1;

        var supp6 = supp5.clone();
        supp6.position.x = 1.1;

        var supp7 = new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,2.1,32,32),
                                   new THREE.MeshPhongMaterial({color:0x505050,metal:true,shininess:200}));
        supp7.rotation.z = Math.PI/2;
        supp7.position.y = 1.35;
        supp7.position.z = 0.4;

        var supp8 = supp7.clone();
        supp8.position.z = -.4;

        palline.add(supp6);
        palline.add(supp5);
        palline.add(supp7);
        palline.add(supp8);

        return palline;
    }