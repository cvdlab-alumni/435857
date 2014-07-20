    function create_grammofono() {

        var grammofono = new THREE.Object3D();

        var cilgeometry;
        var cil_material = new THREE.MeshPhongMaterial({color:0xFDD017, metal:true, shininess:100, side:THREE.DoubleSide});
        
        //CONO DORATO 
        var cono = new THREE.Object3D();

        var start,end;
        start = .1;
        end = .2;
        for(var i=0; i<5; i++) {
          cil = new THREE.Mesh(new THREE.CylinderGeometry(start,end,.8,32,32,true),cil_material);
          cil.position.y = -.8*i;
          start=end;
          end = end*2;
          cono.add(cil);
        }

        grammofono.add(cono);
        //FINE CONO DORATO

        //STRUTTURA IN LEGNO
        var base_geo = new THREE.CylinderGeometry(3,3,.5,32,32);
        var base = createMesh_simple(base_geo,"wood_wind.jpg");
        base.position.y = -.25

        var mezzo = createMesh_simple(new THREE.CylinderGeometry(2.5,2.5,2,32,32),"wood_wind.jpg");
        mezzo.position.y = 1;

        var base2 = base.clone();
        base2.position.y = 2.25;

        var b = new THREE.Object3D();
        b.add(base);
        b.add(mezzo);
        b.add(base2);

        grammofono.add(b);
        //FINE STRUTTURA IN LEGNO

        //lavoro sul cono
        var cono_fin1_geo = new THREE.TorusGeometry( 1, .1, 32, 32,Math.PI);
        var cono_fin1 = new THREE.Mesh(cono_fin1_geo,cil_material);
        cono_fin1.position.set(1,.4,0);

        var obj_cono = new THREE.Object3D();
        obj_cono.add(cono);
        obj_cono.add(cono_fin1);

        //SISTEMA CILINDRO PUNTINA
        var disc_slot_material = new THREE.MeshPhongMaterial({color:0x505050, metal:true, shininess:100, side:THREE.DoubleSide});

        var cil_punta_geo = new THREE.CylinderGeometry(.3,.3,.4,32,32);
        var cil_punta = new THREE.Mesh(cil_punta_geo,disc_slot_material);
        cil_punta.position.set(2,.25,0);
        obj_cono.add(cil_punta);

        var puntina_geo = new THREE.CylinderGeometry(.05,0,.2,32,32);
        var puntina = new THREE.Mesh(puntina_geo,disc_slot_material);
        puntina.rotation.z = Math.PI/2;
        puntina.position.set(2.39,.25,0);
        //FINE SISTEMA CILINDRO PUNTINA

        obj_cono.add(puntina);
        obj_cono.rotation.y = Math.PI/2;
        obj_cono.rotation.x = -(2*Math.PI)/3;
        obj_cono.position.z = .5;
        
        var perno = new THREE.Object3D();
        perno.position.set(0,5,-3);
        
        perno.add(obj_cono);

        var asta_geo = new THREE.CylinderGeometry(.1,.1,1.2,32,32);
        var asta = new THREE.Mesh(asta_geo,disc_slot_material);
        asta.position.set(0,2.6,-3);
        grammofono.add(asta);

        var cil_reggente_geo = new THREE.CylinderGeometry(.2,.2,.2,32,32);
        var cil_reggente = new THREE.Mesh(cil_reggente_geo,disc_slot_material);
        cil_reggente.position.set(1.5,1.4,0);
        obj_cono.add(cil_reggente);

        var joint = new THREE.Object3D();
        joint.add(perno);
        joint.perno = perno;

        grammofono.add(joint); 

        //SEDE 45 GIRI
        var disc_slot = new THREE.CylinderGeometry(2.2,2.3,.1,32,32);
        
        var disc = new THREE.Mesh(disc_slot,disc_slot_material);
        disc.position.y = 2.55;
        grammofono.add(disc);

        var disc_slot2 = new THREE.CylinderGeometry(2,2.1,.1,32,32);
        var disc_slot2_material = new THREE.MeshPhongMaterial({color:0x000000});

        var disc2 = new THREE.Mesh(disc_slot2,disc_slot2_material);
        disc2.position.y = 2.5+.1+.05;
        grammofono.add(disc2);

        var p_geo = new THREE.CylinderGeometry(.05,.05,.2,32,32);
        var p = new THREE.Mesh(p_geo,disc_slot_material);

        p.position.y = 2+.5 +.2 +.1;
        grammofono.add(p);

        //FINE SEDE 45 GIRI

        //MANOVELLA
        var joint2 = new THREE.Object3D();
        var perno2 = new THREE.Object3D();
        perno2.position.set(2.5,1,0);

        var m1_geo = new THREE.CylinderGeometry(.2,.2,.3,32,32);
        var m1 = new THREE.Mesh(m1_geo,disc_slot2_material);
        m1.rotation.z = Math.PI/2;

        var m2_geo = new THREE.CylinderGeometry(.1,.1,1,32,32);
        var m2 = new THREE.Mesh(m2_geo,disc_slot_material);
        m2.rotation.z = Math.PI/2;
        m2.position.x = .65;

        var m3_geo = new THREE.CylinderGeometry(.08,.08,1,32,32);
        var m3 = new THREE.Mesh(m3_geo,disc_slot_material);
        m3.position.set(1,.5,0);

        var m4_geo = new THREE.CylinderGeometry(.1,.1,1,32,32);
        var m4 = new THREE.Mesh(m4_geo,disc_slot_material);
        m4.rotation.z = Math.PI/2;
        m4.position.set(1.35,1,0);

        var m5_geo = new THREE.CylinderGeometry(.15,.15,.7,32,32);
        var m5 = new THREE.Mesh(m5_geo,disc_slot2_material);
        m5.rotation.z = Math.PI/2;
        m5.position.set(1.45,1,0);

        perno2.add(m1);
        perno2.add(m2);
        perno2.add(m3);
        perno2.add(m4);
        perno2.add(m5);
        joint2.add(perno2);
        grammofono.add(joint2);

        joint2.perno = perno2;
        
        //MOVIMENTO
        grammofono.cono = joint.perno;
        grammofono.manopola = joint2.perno;
        grammofono.disc2 = disc2;


        grammofono.open = function () {
            var disc_tween = new TWEEN.Tween(grammofono.cono.rotation)
                            .to({y:Math.PI/2}, 1000)
                            .start();
        }

        grammofono.close = function () {
            var disc_tween = new TWEEN.Tween(grammofono.cono.rotation)
                            .to({y:0}, 1000)
                            .start();
        }

        var tween_giro = new TWEEN.Tween(grammofono.manopola.rotation)
                            .to({x:2*Math.PI}, 2000)
                            .repeat(Infinity);

        var tween_giro2 = new TWEEN.Tween(grammofono.disc2.rotation)
                            .to({y:2*Math.PI}, 2000)
                            .repeat(Infinity);

        grammofono.giro = tween_giro;
        grammofono.giro2 = tween_giro2;

        grammofono.gira = function () {
            TWEEN.add(grammofono.giro);
            TWEEN.add(grammofono.giro2);
        }

        grammofono.stop = function () {
            grammofono.manopola.rotation.x = 0;
            TWEEN.remove(grammofono.giro);
            TWEEN.remove(grammofono.giro2);
        }

        return grammofono;

    }

    function create_espositorecd() {

        var box1 = new THREE.Object3D();
        var box2 = new THREE.Object3D();
        var box3 = new THREE.Object3D();
        var obj_support = new THREE.Object3D;

        var disc_slot_material = new THREE.MeshPhongMaterial({color:0x505050, metal:true, shininess:100, side:THREE.DoubleSide});
        var panel_geo = new THREE.BoxGeometry(5,14.5,.1);
        var panel = new THREE.Mesh(panel_geo,disc_slot_material);
        panel.position.y = 7.25;

        obj_support.add(panel);

        var support1_geo = new THREE.BoxGeometry(5,1,.1);
        var support1 = new THREE.Mesh(support1_geo,disc_slot_material);
        support1.position.set(0,.5,.3);

        var support2_geo = new THREE.BoxGeometry(5,.1,.25);
        var support2 = new THREE.Mesh(support2_geo,disc_slot_material);
        support2.position.set(0,.05,.125);

        var support = new THREE.Object3D();
        support.add(support1);
        support.add(support2);
        obj_support.add(support);
        
        var support_2 = support.clone();
        support_2.position.y = 5;
        obj_support.add(support_2);

        var support_3 = support.clone();
        support_3.position.y = 10;
        obj_support.add(support_3);

        var disco_cop1 = createMesh_simple(new THREE.BoxGeometry(4,4,.15),"cd1.jpg");
        disco_cop1.position.set(0,2.2,.15);
        box1.add(disco_cop1);
    
        var disco_cop2 = createMesh_simple(new THREE.BoxGeometry(4,4,.15),"cd2.jpg");
        disco_cop2.position.set(0,7.2,.15);
        box2.add(disco_cop2);

        var disco_cop3 = createMesh_simple(new THREE.BoxGeometry(4,4,.15),"cd3.jpg");
        disco_cop3.position.set(0,12.2,.15);
        box3.add(disco_cop3);


        var obj_cd1 = new THREE.Object3D();
        var obj_cd2 = new THREE.Object3D();
        var obj_cd3 = new THREE.Object3D();

        var cd1_geo = new THREE.CylinderGeometry(1.8,1.8,.05,32,32);
        var cd1_in_geo = new THREE.CylinderGeometry(.45,.45,.052,32,32);
        var disc_c_material1 = new THREE.MeshPhongMaterial({color:0x000000});
        var disc_c_material2 = new THREE.MeshPhongMaterial({color:0xA4AB1F});
        var disc_c_material3 = new THREE.MeshPhongMaterial({color:0x346E29});
        var disc_c_material4 = new THREE.MeshPhongMaterial({color:0xffffff});
        
        var cd1 = new THREE.Mesh(cd1_geo,disc_c_material1);
        var cd1_in = new THREE.Mesh(cd1_in_geo,disc_c_material2);
        obj_cd1.add(cd1);
        obj_cd1.add(cd1_in);
        obj_cd1.rotation.x = Math.PI/2;
        obj_cd1.position.set(0,2,.15);

        var cd2 = cd1.clone();
        var cd2_in = new THREE.Mesh(cd1_in_geo,disc_c_material3);
        obj_cd2.add(cd2);
        obj_cd2.add(cd2_in);
        obj_cd2.rotation.x = Math.PI/2;
        obj_cd2.position.set(0,7,.15);

        var cd3 = cd1.clone();
        var cd3_in = new THREE.Mesh(cd1_in_geo,disc_c_material4);
        obj_cd3.add(cd3);
        obj_cd3.add(cd3_in);
        obj_cd3.rotation.x = Math.PI/2;
        obj_cd3.position.set(0,12,.15);

        box1.add(obj_cd1);
        box2.add(obj_cd2);
        box3.add(obj_cd3);

        //il cd fisico che si deve spostare
        box1.cd = obj_cd1;
        box2.cd = obj_cd2;
        box3.cd = obj_cd3;

        //innesto per l'interact
        box1.contact = disco_cop1;
        box2.contact = disco_cop2;
        box3.contact = disco_cop3;

        //se il cd è sul grammofono
        box1.inplay = false; 
        box2.inplay = false;
        box3.inplay = false;

        var cd_sound1 = Sound("cd1",0.5,false);
        var cd_sound2 = Sound("cd2",0.5,false);
        var cd_sound3 = Sound("cd3",0.5,false);

        box1.sound = cd_sound1;
        box2.sound = cd_sound2;
        box3.sound = cd_sound3;

        box1.play = function() {
          box1.sound.play();
        } 

        box2.play = function() {
          box2.sound.play();
        } 

        box3.play = function() {
          box3.sound.play();
        } 

        box1.stop_play = function() {
          box1.sound.pause();
        } 

        box2.stop_play = function() {
          box2.sound.pause();
        } 

        box3.stop_play = function() {
          box3.sound.pause();
        }

        var expose = new THREE.Object3D();
        expose.add(obj_support);
        expose.add(box1);
        expose.add(box2);
        expose.add(box3);

        expose.obj_support = obj_support;
        expose.box1 = box1;
        expose.box2 = box2;
        expose.box3 = box3;

        return expose; 

    }
