   function create_fornello () {
    
        engine = new ParticleEngine();
        engine.setValues( Examples.smoke );

        var fornello = new THREE.Object3D();

        var gas_hob = get_obj("gasHob.obj","gasHob.mtl");
        gas_hob.scale.set(.15,.15,.15);
        fornello.add(gas_hob);  

        var fuoco_geo = new THREE.TorusGeometry( .32, .08, 32, 32);
        var fuoco_material = new THREE.MeshBasicMaterial( { color: 0xDB5613 } );
        var fuoco = new THREE.Mesh( fuoco_geo, fuoco_material );
        fuoco.rotation.x = Math.PI/2;
        fuoco.position.set(-3.1,13,-1.85);
        fornello.add( fuoco );

        fornello.gashob = gas_hob;
        fornello.fuoco = fuoco;

        var corpo_pentola = new THREE.Object3D();

        //costruisco pentola
        var pentola_geometry = new THREE.CylinderGeometry(1,1,1.5,32,32,true);
        var pentola_material = new THREE.MeshPhongMaterial({color: 0x707070, side: THREE.DoubleSide,
                                                              metal:true, shininess:200} );
        var pentola = new THREE.Mesh(pentola_geometry,pentola_material);
        corpo_pentola.add(pentola);

        var pentolabottom_geometry = new THREE.CylinderGeometry(1,1,.1,32,32);
        var pentola2 = new THREE.Mesh(pentolabottom_geometry,pentola_material);
        pentola2.position.y = -.75;
        corpo_pentola.add(pentola2);

        //manici
        var manico1_geo = new THREE.TorusGeometry( .3,.08, 32, 32,Math.PI);
        var manico1 = new THREE.Mesh(manico1_geo,pentola_material);
        manico1.rotation.x = Math.PI/2;
        manico1.rotation.z = -Math.PI/2;
        manico1.position.set(.92,.4,0);
        corpo_pentola.add(manico1);

        var manico2 = new THREE.Mesh(manico1_geo,pentola_material);
        manico2.rotation.x = Math.PI/2;
        manico2.rotation.z = Math.PI/2;
        manico2.position.set(-.92,.4,0);
        corpo_pentola.add(manico2);

        //contenuto 
        var contenuto_geometry = new THREE.CylinderGeometry(.99,.99,1,32,32);
        var contenuto_material = new THREE.MeshPhongMaterial({color:0x61C7DA,
                                                    transparent: true,opacity: 0.5,side:THREE.DoubleSide});
        var contenuto = new THREE.Mesh(contenuto_geometry,contenuto_material);
        contenuto.position.y = -.25;
        corpo_pentola.add(contenuto);


        //coperchio       
        var coperchio_geometry = new THREE.CylinderGeometry(.2,.99,.3,32,32,true);
        var coperchio = new THREE.Mesh(coperchio_geometry,pentola_material);

        //manico coperchio
        var mancop_geometry = new THREE.CylinderGeometry(.2,.2,.04,32,32);
        var mancop = new THREE.Mesh(mancop_geometry,pentola_material);
        mancop.position.y = .15;
       
        var mancop2_geometry = new THREE.TorusGeometry( .1,.04, 32, 32,Math.PI);
        var mancop2 = new THREE.Mesh(mancop2_geometry,pentola_material);
        mancop2.position.y = .16;

        var perno = new THREE.Object3D();
        perno.position.y = .85;
        perno.add(coperchio);
        perno.add(mancop);
        perno.add(mancop2);

        var obj_coperchio = new THREE.Object3D();
        obj_coperchio.add(perno);
        obj_coperchio.perno = perno;

        var pentolone = new THREE.Object3D();
        pentolone.add(obj_coperchio);
        pentolone.add(corpo_pentola);

        var contatto_geom = new THREE.CylinderGeometry(.2,.2,.1,32,32);
        var contatto_mat = new THREE.MeshPhongMaterial({color:0xCB5620});

        var contatto = new THREE.Mesh(contatto_geom,contatto_mat);
        contatto.position.set(3.8,13,1.9);

        fornello.add(contatto);
        fornello.contatto = contatto;

        pentolone.position.set(-3.1,14,-1.85);

        pentolone.coperchio = obj_coperchio;

        var tween2 = new TWEEN.Tween(obj_coperchio.perno.rotation)
                    .to({z:-Math.PI/12}, 100);

        var tween = new TWEEN.Tween(obj_coperchio.perno.rotation)
                    .to({z:Math.PI/12}, 100);

        tween2.chain(tween);
        tween.chain(tween2);

        pentolone.tween2 = tween2;
        pentolone.tween = tween;
        pentolone.engine = engine;
        pentolone.isboiling = false;

        //parte inferiore
        var panel_material = new THREE.MeshPhongMaterial({color:0x9A9999, metal:true, shininess:200});
        var panel_inferiore = new THREE.Mesh(new THREE.BoxGeometry(7,1,6),panel_material);      
        var panel_lt = new THREE.Mesh(new THREE.BoxGeometry(1,9,6),panel_material);                   
        var panel_back = new THREE.Mesh(new THREE.BoxGeometry(7,7,1),panel_material);                   
        
        panel_lt.position.x = -4;
        var panel_lt2 = panel_lt.clone();
        panel_lt2.position.x = 4;
        
        panel_inferiore.position.y = -4;
        var panel_inferiore2 = panel_inferiore.clone();
        panel_inferiore2.position.y = 4;

        panel_back.position.z = -2.5;

        var panel_front = new THREE.Mesh(new THREE.BoxGeometry(7,7,.5),panel_material);
        var planetext = new THREE.PlaneGeometry(7,7);

        var plane_mat = new THREE.MeshPhongMaterial();
        var plane_texture = THREE.ImageUtils.loadTexture("assets/textures/general/forno.jpg");
        plane_mat.side = THREE.DoubleSide;
        plane_mat.map = plane_texture;
        var plane = new THREE.Mesh(planetext,plane_mat);
        plane.position.z = .26;

        var frontale = new THREE.Object3D();
        frontale.add(panel_front);
        frontale.add(plane);

        frontale.position.y = 3.5;

        var perno = new THREE.Object3D();
        perno.position.set(0,0,.25);

        perno.add(frontale);

        var davanti = new THREE.Object3D();
        davanti.add(perno);
        davanti.perno = perno;

        davanti.position.set(0,-3.5,2.5);

        var objretro = new THREE.Object3D();
        objretro.add(panel_inferiore);
        objretro.add(panel_inferiore2);
        objretro.add(panel_lt);
        objretro.add(panel_lt2);
        objretro.add(panel_back);

        //contenuto
        var astina = new THREE.Mesh(new THREE.CylinderGeometry(.3,.3,.2,32,32),
                                    new THREE.MeshPhongMaterial({color:0x000000}));
        astina.position.y = -3.4;
        var asta = new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,3,32,32),pentola_material);
        asta.position.y = -1.8;

        var piatto = new THREE.Mesh(new THREE.CylinderGeometry(1.5,1.5,.2,32,32),pentola_material);
        piatto.position.y = -0.2;

        var pizza = get_obj("pizza.obj","pizza.mtl");
        pizza.scale.set(.1,.1,.1);

        var obj_piatto = new THREE.Object3D();
        obj_piatto.add(asta);
        obj_piatto.add(astina);
        obj_piatto.add(piatto);
        obj_piatto.add(pizza);

        var forno = new THREE.Object3D();
        forno.add(davanti);
        forno.add(objretro);
        forno.add(obj_piatto);

        forno.davanti = davanti;
        forno.objretro = objretro;
        forno.obj_piatto = obj_piatto;

        var tweendpiatto = new TWEEN.Tween(forno.obj_piatto.rotation)
        .to({y:2*Math.PI},5000)
        .repeat(Infinity);

        forno.tweenpiatto = tweendpiatto;

        forno.interact = function() {
            var tweendavanti;
            if (forno.davanti.perno.rotation.x === 0) {             
               tweendavanti = new TWEEN.Tween(forno.davanti.perno.rotation)
                               .to({x:Math.PI/4},2000)
                               .start();
               TWEEN.add(forno.tweenpiatto);
            } else {
               tweendavanti = new TWEEN.Tween(forno.davanti.perno.rotation)
                               .to({x:0},2000)
                               .start();
               setTimeout(function(){TWEEN.remove(forno.tweenpiatto);},2000);
            }
        }

        forno.contact = plane;
        forno.position.set(-.1,8.25,-.34);
        //aggiungo piedini alti 1
        var complex = new THREE.Object3D();

        complex.add(fornello);
        complex.add(pentolone);
        complex.add(forno);
        complex.fornello = fornello;
        complex.pentolone = pentolone;
        complex.forno = forno;

        var soundbolli = Sound("boiling",0.5,true);

        pentolone.bolli = function() {
            soundbolli.play();
            TWEEN.add(pentolone.tween);
            pentolone.engine.initialize();
            pentolone.isboiling = true;
        }

        pentolone.stop_bolli = function() {
            soundbolli.pause();
            TWEEN.remove(pentolone.tween);
            TWEEN.remove(pentolone.tween2);
            pentolone.coperchio.perno.rotation.z=0;
            pentolone.engine.destroy();
            pentolone.engine = new ParticleEngine();
            pentolone.engine.setValues( Examples.smoke );
            pentolone.engine.positionBase = new THREE.Vector3(complex.position.x-3,complex.position.y+15,
                                                              complex.position.z-2);
            pentolone.isboiling = false;          
        }

        var lavello = get_obj("lavello.obj","lavello.mtl");
        lavello.scale.set(.1,.12,.1);
        lavello.position.set(8.4,3.55,16.65);

        var singolo = get_obj("singolo.obj","singolo.mtl");
        singolo.scale.set(.1,.12,.1);
        singolo.position.set(-4.6,3.55,2.65);

        var cassettiera = get_obj("cassettiera.obj","cassettiera.mtl");
        cassettiera.scale.set(.1,.12,.1);
        cassettiera.position.set(-6.6,3.55,-16.35);
        
        var frigo = get_obj("frigo.obj","frigo.mtl");
        frigo.scale.set(.1,.12,.1);
        frigo.position.set(-65,2.5,-11);

        var pensile = get_obj("pensileDoppio.obj","pensileDoppio.mtl");
        pensile.scale.set(.1,.12,.1);
        pensile.position.set(1.5,-2,2.7);
        
        var cappa = get_obj("capa_Scene.obj","capa.mtl");
        cappa.scale.set(3,1.5,3);
        cappa.position.set(0,20,-.25);

        var cannavaccio = get_obj("towel.obj","towel.mtl");
        cannavaccio.scale.set(.15,.15,.15);
        cannavaccio.position.set(-18,10,-17.5);
      
        var cestino = get_obj("poubelleInox.obj","poubelleInox.mtl");
        cestino.scale.set(.1,.1,.1);
        cestino.position.set(19,9.5,0);

        //creo bicchiere
        var glassbodyGeom =  new THREE.CylinderGeometry( .4, .4, 1.2, 32, 32, true);
        var underglassGeom =  new THREE.CylinderGeometry( .39, .39, .1, 32, 32);
                    
        var glass_Material1 = new THREE.MeshPhongMaterial( { 
            color: 0xffffff, 
            transparent: true,
            opacity : 0.3,
            side: THREE.DoubleSide, 
            } );    

        var glass_Material2 = new THREE.MeshPhongMaterial( { 
            color: 0xffffff, 
            transparent: true,
            opacity : 0.55,
            side: THREE.DoubleSide, 
            } );    

        var glass = new THREE.Mesh(glassbodyGeom,glass_Material1);
        var underglass = new THREE.Mesh(underglassGeom,glass_Material2);
        
        underglass.position.y = -.55;

        var bicchiere = new THREE.Object3D();
        bicchiere.add(glass);
        bicchiere.add(underglass);

        bicchiere.position.set(11.75,11.9,-1.5);

        //filo acqua
        var filo_geom = new THREE.CylinderGeometry(.05,.05,.1,32,32);
        var acqua_material = new THREE.MeshPhongMaterial({color:0x4BAEFF,side:THREE.DoubleSide});

        var acqua = new THREE.Mesh(filo_geom,acqua_material);
        acqua.position.set(11.75,14.4,-1.5);

        var acqua2 = new THREE.Mesh(new THREE.CylinderGeometry(.39, .39, .05, 32, 32),acqua_material);
        acqua2.position.set(11.75,11.425,-1.5);        

        var obj_water_glass = new THREE.Object3D();

        obj_water_glass.add(acqua2);
        obj_water_glass.acqua2 = acqua2;
        obj_water_glass.acqua2.visible = false;
        obj_water_glass.add(acqua);
        obj_water_glass.acqua = acqua;
        obj_water_glass.full = false;

        obj_water_glass.interact = function() {
            if(obj_water_glass.full) {
              scene.remove(obj_water_glass.acqua);
              scene.remove(obj_water_glass.acqua2);
              obj_water_glass.remove(obj_water_glass.acqua);
              obj_water_glass.remove(obj_water_glass.acqua2);
              var filo_geom = new THREE.CylinderGeometry(.05,.05,.1,32,32);
              var acqua_material = new THREE.MeshPhongMaterial({color:0x4BAEFF,side:THREE.DoubleSide});

              var acqua = new THREE.Mesh(filo_geom,acqua_material);
              acqua.position.set(11.75,14.4,-1.5);

              var acqua2 = new THREE.Mesh(new THREE.CylinderGeometry(.39, .39, .05, 32, 32),acqua_material);
              acqua2.position.set(11.75,11.425,-1.5);        
             
              obj_water_glass.add(acqua2);
              obj_water_glass.acqua2 = acqua2;
              obj_water_glass.acqua2.visible = false;
              obj_water_glass.add(acqua);
              obj_water_glass.acqua = acqua;

              obj_water_glass.full = false;

            } 
              else {
            
                var dimensione_iniziale = .1;
                var dimensione_finale = 3;
                var fattore_espansione = dimensione_finale/dimensione_iniziale;
                var espansione_up_down = (dimensione_finale-dimensione_iniziale)/2;

                var dimensione_iniziale2 = .05;
                var dimensione_finale2 = .8;
                var fattore_espansione2 = dimensione_finale2/dimensione_iniziale2;
                var espansione_up_down2 = (dimensione_finale2-dimensione_iniziale2)/2;

                var apritween,apritween2;

                apritween2 = new TWEEN.Tween(obj_water_glass.acqua.position)
                                              .to({y:obj_water_glass.acqua.position.y-espansione_up_down}, 1000);
                apritween = new TWEEN.Tween(obj_water_glass.acqua.scale)
                                              .to({y:fattore_espansione}, 1000);

                var riempitween,riempitween2;

                riempitween2 = new TWEEN.Tween(obj_water_glass.acqua2.position)
                                              .to({y:obj_water_glass.acqua2.position.y+espansione_up_down2}, 1000);
                riempitween = new TWEEN.Tween(obj_water_glass.acqua2.scale)
                                              .to({y:fattore_espansione2}, 1000);
             
                var chiuditween,chiuditween2;

                chiuditween2 = new TWEEN.Tween(obj_water_glass.acqua.position)
                                              .to({y:obj_water_glass.acqua.position.y-2*espansione_up_down}, 1000);
                chiuditween = new TWEEN.Tween(obj_water_glass.acqua.scale)
                                              .to({y:dimensione_iniziale}, 1000);  

                apritween.start();
                apritween2.start();
                setTimeout(function(){riempitween.start();
                                      riempitween2.start();
                                      obj_water_glass.acqua2.visible=true;},1000);
                setTimeout(function(){chiuditween.start();chiuditween2.start();},1500);
                obj_water_glass.full = true;
          }
        }

        //
        var objcontatto = new THREE.Mesh(new THREE.CylinderGeometry(.12,.12,.2,32,32),pentola_material);
        objcontatto.position.set(12.41,13.4,-2.44);
        
        complex.add(cassettiera);
        complex.add(lavello);
        complex.add(singolo);
        complex.add(frigo);
        complex.add(pensile);      
        complex.add(cappa);      
        complex.add(cannavaccio);      
        complex.add(cestino);      
        complex.add(bicchiere);
        complex.add(obj_water_glass);
        complex.add(objcontatto);
        complex.objcontatto = objcontatto;
        complex.obj_water_glass = obj_water_glass;

        return complex;
    }