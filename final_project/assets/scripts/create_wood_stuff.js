    function create_library() {

        var lib = new THREE.Object3D();

        var panel1Geometry = new THREE.BoxGeometry(14,10,.5);
        var panel1 = createMesh_simple(panel1Geometry,"wood-2.jpg");
        panel1.position.set(0,5,-.25);
        lib.add(panel1);

        var panel2Geometry = new THREE.BoxGeometry(.5,10,3);
        var panel2 = createMesh_simple(panel2Geometry,"wood-2.jpg");
        panel2.position.set(-6.75,5,1.5);
        lib.add(panel2);

        panel3 = panel2.clone();
        panel3.position.x = 6.75;
        lib.add(panel3);

        var panel4geometry = new THREE.BoxGeometry(13,.5,3);
        var panel4 = createMesh_simple(panel4geometry,"wood-2.jpg");
        panel4.position.set(0,.25,1.5);
        lib.add(panel4);

        var panel5 = panel4.clone();
        panel5.position.set(0,9.75,1.5);
        lib.add(panel5);

        var panel6 = panel4.clone();
        panel6.position.y = 3.75;
        lib.add(panel6);

        var panel7 = panel4.clone();
        panel7.position.y = 6.75;
        lib.add(panel7);

        var book1 = get_obj("livres.obj","livres.mtl");
        book1.scale.set(0.1,0.1,0.1);
        book1.position.set(-5.8,1.4,2);
        lib.add(book1);

        var book2 = get_obj("livres.obj","livres.mtl");
        book2.scale.set(0.1,0.1,0.1);
        book2.position.set(-3.8,1.4,2);
        lib.add(book2);

        var book3 = get_obj("livres.obj","livres.mtl");
        book3.scale.set(0.1,0.1,0.1);
        book3.position.set(4.7,1.4,2);
        lib.add(book3);

        var book4 = get_obj("livres.obj","livres.mtl");
        book4.scale.set(0.1,0.1,0.1);
        book4.position.set(4,4.9,2);
        lib.add(book4);

        var book5 = get_obj("livres.obj","livres.mtl");
        book5.scale.set(0.1,0.1,0.1);
        book5.position.set(-5.8,7.9,2);
        lib.add(book5);

        var book6 = get_obj("livres.obj","livres.mtl");
        book6.scale.set(0.1,0.1,0.1);
        book6.position.set(-3.8,7.9,2);
        lib.add(book6);
        
        var book7 = get_obj("livres.obj","livres.mtl");
        book7.scale.set(0.1,0.1,0.1);
        book7.position.set(-1.8,7.9,2);
        lib.add(book7);

        var book8 = get_obj("livres.obj","livres.mtl");
        book8.scale.set(0.1,0.1,0.1);
        book8.position.set(.8,7.9,2);
        lib.add(book8); 

        return lib; 
    }

    function create_table() {
        var tavolino = new THREE.Object3D();

        var pianogeometry = new THREE.CylinderGeometry(5,5,.5,32,32);
        var piano = createMesh_simple(pianogeometry,"oak.jpg");
        tavolino.add(piano);

        var cilgeometry = new THREE.CylinderGeometry(.5,.5,8,32,32);
        var cil = createMesh_simple(cilgeometry,"oak.jpg");
        cil.position.y = -4.25;
        tavolino.add(cil);

        var pt1geom = new THREE.BoxGeometry(1,.5,5);
        var pt1 = createMesh_simple(pt1geom,"oak.jpg");

        var pt2geom = new THREE.BoxGeometry(1,.2,.5);
        var pt2 = createMesh_simple(pt2geom,"oak.jpg");
        pt2.position.set(0,-.35,-2.25);      

        var pt3 = pt2.clone();
        pt3.position.z = 2.25;

        var obj_pt1 = new THREE.Object3D();
        obj_pt1.add(pt1);
        obj_pt1.add(pt2);
        obj_pt1.add(pt3);

        obj_pt1.position.y = -8;

        var obj_pt2 = obj_pt1.clone();
        obj_pt2.rotation.y = Math.PI/2;

        tavolino.add(obj_pt1);
        tavolino.add(obj_pt2);

        return tavolino;
    }

    function create_armsoff() {
        var ptanta_texture = THREE.ImageUtils.loadTexture("assets/textures/general/wood_kitchen.jpg");
        var ptanta_mat = new THREE.MeshPhongMaterial();
        ptanta_mat.side = THREE.DoubleSide;
        ptanta_mat.map = ptanta_texture;        

        var ptarm1 = new THREE.Mesh(new THREE.BoxGeometry(13,1,5), ptanta_mat);
        ptarm1.position.y = 8.5;
        var ptarm2 = new THREE.Mesh(new THREE.BoxGeometry(1,18,5), ptanta_mat);
        ptarm2.position.x = -7;
        var ptarm3 = ptarm2.clone();
        ptarm3.position.x = 7;
        var ptarm4 = ptarm1.clone();
        ptarm4.position.y = -8.5;
        var ptarm5 = new THREE.Mesh(new THREE.BoxGeometry(13,16,1),ptanta_mat);
        ptarm5.position.z = -2;
        
        var armadio = new THREE.Object3D();
        armadio.add(ptarm1);
        armadio.add(ptarm2);
        armadio.add(ptarm3);   
        armadio.add(ptarm4);   
        armadio.add(ptarm5);   
        armadio.position.set(-3.9,0,-2.3);

        var ptanta1 = new THREE.Mesh(new THREE.BoxGeometry(1.3,16,.2), ptanta_mat);
        ptanta1.position.set(0.65,0,.1);

        var ptanta2 = ptanta1.clone();
        ptanta2.position.set(-.65,0,.1);

        var perno1 = new THREE.Object3D();
        var perno2 = new THREE.Object3D();
        var perno12 = new THREE.Object3D();

        perno1.add(ptanta1);
        perno2.add(ptanta2);
        perno12.add(perno1);
        perno12.add(perno2);

        perno12.position.x = 1.3;
        var pos_in1 = 1.3;

        var tween12 = new TWEEN.Tween(perno12.position)
                               .to({x:perno12.position.x+1.1},2000);
        var tween1 = new TWEEN.Tween(perno1.rotation)
                               .to({y:Math.PI/2},2000);               
        var tween2 = new TWEEN.Tween(perno2.rotation)
                               .to({y:-Math.PI/2},2000);

        var tween12c = new TWEEN.Tween(perno12.position)
                               .to({x:pos_in1},2000);
        var tween1c = new TWEEN.Tween(perno1.rotation)
                               .to({y:0},2000);               
        var tween2c = new TWEEN.Tween(perno2.rotation)
                               .to({y:0},2000);

        var ptanta3 = new THREE.Mesh(new THREE.BoxGeometry(1.3,16,.2), ptanta_mat);
        ptanta3.position.set(.65,0,.1);

        var ptanta4 = ptanta3.clone();
        ptanta4.position.set(-.65,0,.1);

        var perno3 = new THREE.Object3D();
        var perno4 = new THREE.Object3D();
        var perno34 = new THREE.Object3D();

        perno3.add(ptanta3);
        perno4.add(ptanta4);
        perno34.add(perno3);
        perno34.add(perno4);

        perno34.position.x =-1.3;
        var pos_in2 = -1.3;

        var tween34 = new TWEEN.Tween(perno34.position)
                               .to({x:perno12.position.x+1.1-.4},2000);
        var tween3 = new TWEEN.Tween(perno3.rotation)
                               .to({y:Math.PI/2},2000);                             
        var tween4 = new TWEEN.Tween(perno4.rotation)
                               .to({y:-Math.PI/2},2000);

        var tween34c = new TWEEN.Tween(perno34.position)
                               .to({x:pos_in2},2000);
        var tween3c = new TWEEN.Tween(perno3.rotation)
                               .to({y:0},2000);                             
        var tween4c = new TWEEN.Tween(perno4.rotation)
                               .to({y:0},2000);      
        

        var ptanta5 = new THREE.Mesh(new THREE.BoxGeometry(1.3,16,.2), ptanta_mat);
        ptanta5.position.set(.65,0,.1);

        var ptanta6 = ptanta5.clone();
        ptanta6.position.set(-.65,0,.1);

        var perno5 = new THREE.Object3D();
        var perno6 = new THREE.Object3D();
        var perno56 = new THREE.Object3D();

        perno5.add(ptanta5);
        perno6.add(ptanta6);
        perno56.add(perno5);
        perno56.add(perno6);

        perno56.position.x =-3.9;
        var pos_in3 = -3.9;

        var tween56 = new TWEEN.Tween(perno56.position)
                               .to({x:perno34.position.x+3.3-.4},2000);
        var tween5 = new TWEEN.Tween(perno5.rotation)
                               .to({y:Math.PI/2},2000);                             
        var tween6 = new TWEEN.Tween(perno6.rotation)
                               .to({y:-Math.PI/2},2000);

        var tween56c = new TWEEN.Tween(perno56.position)
                               .to({x:pos_in3},2000);
        var tween5c = new TWEEN.Tween(perno5.rotation)
                               .to({y:0},2000);                             
        var tween6c = new TWEEN.Tween(perno6.rotation)
                               .to({y:0},2000);

        var ptanta7 = new THREE.Mesh(new THREE.BoxGeometry(1.3,16,.2), ptanta_mat);
        ptanta7.position.set(.65,0,.1);

        var ptanta8 = ptanta7.clone();
        ptanta8.position.set(-.65,0,.1);

        var perno7 = new THREE.Object3D();
        var perno8 = new THREE.Object3D();
        var perno78 = new THREE.Object3D();

        perno7.add(ptanta7);
        perno8.add(ptanta8);
        perno78.add(perno7);
        perno78.add(perno8);

        perno78.position.x =-6.5;
        var pos_in4 = -6.5;

        var tween78 = new TWEEN.Tween(perno78.position)
                               .to({x:perno56.position.x+5.5-.4},2000);
        var tween7 = new TWEEN.Tween(perno7.rotation)
                               .to({y:Math.PI/2},2000);                             
        var tween8 = new TWEEN.Tween(perno8.rotation)
                               .to({y:-Math.PI/2},2000);

        var tween78c = new TWEEN.Tween(perno78.position)
                               .to({x:pos_in4},2000);
        var tween7c = new TWEEN.Tween(perno7.rotation)
                               .to({y:0},2000);                             
        var tween8c = new TWEEN.Tween(perno8.rotation)
                               .to({y:0},2000);


        var ptanta9 = new THREE.Mesh(new THREE.BoxGeometry(1.3,16,.2), ptanta_mat);
        ptanta9.position.set(.65,0,.1);

        var ptanta10 = ptanta9.clone();
        ptanta10.position.set(-.65,0,.1);
        var maniglia = new THREE.Mesh(new THREE.SphereGeometry(.15,32,32), 
                      new THREE.MeshPhongMaterial({color:0x505050, metal:true, shininess:200}));
        var cilman = new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.2,32,32), 
                      new THREE.MeshPhongMaterial({color:0x505050, metal:true, shininess:200}));
        var asta = new THREE.Mesh(new THREE.CylinderGeometry(.15,.15,13,32,32),
                      new THREE.MeshPhongMaterial({color:0x505050, metal:true, shininess:200}));
        asta.rotation.z = Math.PI/2;
        asta.position.set(-4.2,4,-2.5);
        maniglia.position.set(-.65,0,.45);
        cilman.position.set(-.65,0,.2);
        cilman.rotation.x = Math.PI/2;
        var perno9 = new THREE.Object3D();
        var perno10 = new THREE.Object3D();
        var perno910 = new THREE.Object3D();

        perno9.add(ptanta9);
        perno10.add(ptanta10);
        perno10.add(maniglia);
        perno10.add(cilman);
        perno910.add(perno9);
        perno910.add(perno10);

        perno910.position.x =-9.1;
        var pos_in5 = -9.1;

        var tween910 = new TWEEN.Tween(perno910.position)
                               .to({x:perno78.position.x+7.7-.4},2000);
        var tween9 = new TWEEN.Tween(perno9.rotation)
                               .to({y:Math.PI/2},2000);                             
        var tween10 = new TWEEN.Tween(perno10.rotation)
                               .to({y:-Math.PI/2},2000);

        var tween910c = new TWEEN.Tween(perno910.position)
                               .to({x:pos_in5},2000);
        var tween9c = new TWEEN.Tween(perno9.rotation)
                               .to({y:0},2000);                             
        var tween10c = new TWEEN.Tween(perno10.rotation)
                               .to({y:0},2000);

        var complex = new THREE.Object3D();

        complex.contact = ptanta10;

        complex.add(perno12);
        complex.add(perno34);
        complex.add(perno56);
        complex.add(perno78);
        complex.add(perno910);
        complex.add(asta);

        complex.perno12 = perno12;
        complex.perno34 = perno34;
        complex.perno56 = perno56;
        complex.perno78 = perno78;
        complex.perno910 = perno910;

        complex.perno12.open = function () {
              tween1.start();
              tween2.start();
              tween12.start();
        }

        complex.perno34.open = function () {
              tween3.start();
              tween4.start();
              tween34.start();
        }

        complex.perno56.open = function () {
              tween5.start();
              tween6.start();
              tween56.start();
        }

        complex.perno78.open = function () {
              tween7.start();
              tween8.start();
              tween78.start();
        }

        complex.perno910.open = function () {
              tween9.start();
              tween10.start();
              tween910.start();
        }

        complex.perno12.close = function () {
              tween1c.start();
              tween2c.start();
              tween12c.start();
        }

        complex.perno34.close = function () {
              tween3c.start();
              tween4c.start();
              tween34c.start();
        }

        complex.perno56.close = function () {
              tween5c.start();
              tween6c.start();
              tween56c.start();
        }

        complex.perno78.close = function () {
              tween7c.start();
              tween8c.start();
              tween78c.start();
        }

        complex.perno910.close = function () {
              tween9c.start();
              tween10c.start();
              tween910c.start();
        }

        complex.isopen = false;

        complex.open = function() {
          complex.perno12.open();
          complex.perno34.open();
          complex.perno56.open();
          complex.perno78.open();
          complex.perno910.open();
          complex.isopen = true;

        }

        complex.close = function() {
          complex.perno12.close();
          complex.perno34.close();
          complex.perno56.close();
          complex.perno78.close();
          complex.perno910.close();
          complex.isopen = false;
        }

        complex.interact = function () {
              if (complex.isopen)
                  complex.close();
              else
                  complex.open();
        }

        var soff_arm = new THREE.Object3D();
        soff_arm.add(armadio);
        soff_arm.add(complex);
        soff_arm.complex = complex;

        return soff_arm;

    }

    function create_letto() {

        var obj_letto = new THREE.Object3D();
        //var letto = new THREE.Mesh(new THREE.BoxGeometry(22,3,9), new THREE.MeshPhongMaterial());
        var letto = createMesh_simple(new THREE.BoxGeometry(18,3,9),"coperta.jpg");
        letto.position.set(2,0,0);
        var letto2 = createMesh_simple(new THREE.BoxGeometry(4,3,9),"coperta2.jpg");
        letto2.position.set(-9,0,0);
        obj_letto.add(letto);
        obj_letto.add(letto2);

        var cuscino = get_obj("throwPillow.obj","throwPillow.mtl");
        cuscino.scale.set(3,5,2);
        cuscino.rotation.x = Math.PI/2;
        cuscino.position.set(-41,.5,-24);
        obj_letto.add(cuscino);

        var undletto = createMesh_simple(new THREE.BoxGeometry(22,.5,9.2),"wood_kitchen.jpg");
        undletto.position.y = -1.75;
        obj_letto.add(undletto);

        var ltletto1 = createMesh_simple(new THREE.BoxGeometry(.5,8,9.2),"wood_kitchen.jpg");
        ltletto1.position.x = -11.25;
        obj_letto.add(ltletto1);

        var ltletto2 = createMesh_simple(new THREE.BoxGeometry(.5,6,9.2),"wood_kitchen.jpg");
        ltletto2.position.set(11.25,-1,0);
        obj_letto.add(ltletto2);

        return obj_letto;
    }

    function create_stair() {

        var scala = new THREE.Object3D();

        var sc_sx =  createMesh_simple(new THREE.BoxGeometry(.5,30.5,.5),"wood-2.jpg");
        sc_sx.position.set(-1.75,15.25,0);
        scala.add(sc_sx);

        var sc_dx = createMesh_simple(new THREE.BoxGeometry(.5,30.5,.5),"wood-2.jpg");
        sc_dx.position.set(1.75,15.25,0);
        scala.add(sc_dx);

        var scalino;
        var i;
        for (i=1.75; i<28.75; i+=1.75) {
          scalino = createMesh_simple(new THREE.BoxGeometry(3,.5,.5),"wood-2.jpg");
          scalino.position.y = i;
          scala.add(scalino);
        }

        scala.rotation.x = -Math.PI/25;

        scala.contact = sc_sx;
        scala.nome = "scala";

        return scala;

    }

  