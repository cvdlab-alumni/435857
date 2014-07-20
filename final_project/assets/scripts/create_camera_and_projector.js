    function create_camera() {

        var toAdd = [];
        var cubeMaterial = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});

        // corpo cinepresa
        var cubeGeometry = new THREE.BoxGeometry(3,3,6);
        var cube = createMesh_simple(cubeGeometry,"plastic.jpg");
        cube.position.set(1.5,1.5,3);
        toAdd.push(cube);

        //cilindro con obiettivo finale
        var cilinderGeometry = new THREE.CylinderGeometry(.5,.5,3,32);
        var cilinder = createMesh_simple(cilinderGeometry,"plastic.jpg");
        //var cilinder = new THREE.Mesh(cilinderGeometry, cubeMaterial);
        cilinder.rotation.x = Math.PI/2;
        cilinder.position.set(1.5,1.5,7.5);
        toAdd.push(cilinder);

        //obiettivo: parte finale 
        var obiettivo_Geometry = new THREE.CylinderGeometry(.7,.7,1,32,32,true);
        var obiettivo = createMesh_simple(obiettivo_Geometry, "plastic.jpg");
        obiettivo.rotation.x = Math.PI/2;
        obiettivo.position.set(1.5,1.5,9.5);
        toAdd.push(obiettivo);

        //obiettivo camera: retro della pt finale
        var obiettivo_b_Geometry = new THREE.CircleGeometry(.7,32);        
        var circle = createMesh_simple( obiettivo_b_Geometry, "plastic.jpg" );
        circle.position.set(1.5,1.5,9);
        toAdd.push( circle );

        //lente nell'obiettivo della camera
        var lente_Material = new THREE.MeshPhongMaterial({color: 0xffffff, 
                                        side: THREE.DoubleSide, transparent: true,opacity: 0.5});
        var lente = new THREE.Mesh( obiettivo_b_Geometry, lente_Material );
        lente.position.set(1.5,1.5,9.5);
        toAdd.push( lente );

        //luce della lente
        var light = new THREE.PointLight( 0xffffff, 0, 1 );
        light.position.set(1.5,1.5,10);
        toAdd.push( light );

        //bottoni cinepresa
        var button1_Geometry = new THREE.CylinderGeometry(.2,.2,3.2,32,32);
        var button1_Material = new THREE.MeshPhongMaterial({color: 0xff0000});
        var button1 = new THREE.Mesh(button1_Geometry, button1_Material);
        button1.rotation.z = Math.PI/2;
        button1.position.set(1.5,2,1);
        toAdd.push(button1);

        var button2_Material = new THREE.MeshPhongMaterial({color: 0x00ff00});
        var button2 = new THREE.Mesh(button1_Geometry, button2_Material);
        button2.rotation.z = Math.PI/2;
        button2.position.set(1.5,1.5,1.5);
        toAdd.push(button2);

        //schermo cinepresa
        var display_geometry = new THREE.BoxGeometry(.1,1.2,1.2);
        var display = createMesh_simple(display_geometry,"display.jpg")
        display.position.set(-.05,1.5,4);
        toAdd.push(display);

        display2 = display.clone();
        display2.position.x = 3;
        toAdd.push(display2);

        //aste reggenti le bobine
        var asta_Geometry = new THREE.CylinderGeometry(.1,.1,6,32,32);
        var asta = createMesh_simple(asta_Geometry,"plastic.jpg");

        var asta2_Geometry = new THREE.CylinderGeometry(.1,.1,1,32,32);
        var asta2 = createMesh_simple(asta2_Geometry,"plastic.jpg");
        asta2.rotation.z = Math.PI/2;
        asta2.position.set(.5,3.2,0);

        var ring_asta_geometry = new THREE.TorusGeometry(.2,.1,32,32);
        var ring = createMesh_simple( ring_asta_geometry, "plastic.jpg" );
        ring.rotation.y = Math.PI/2;
        ring.position.y = 3.2;

        //creazione bobina 
        var bobina_lt_geometry = new THREE.CylinderGeometry(2.2,2.2,.1,32,32);
        var bobina_lt = createMesh_simple(bobina_lt_geometry,"stripes2.jpg");
        bobina_lt.rotation.z = Math.PI/2;
        bobina_lt.position.x = .25;

        var bobina_lt2_geometry = new THREE.CylinderGeometry(2.2,2.2,.1,32,32);
        var bobina_lt2 = createMesh_simple(bobina_lt2_geometry,"stripes2.jpg");
        bobina_lt2.rotation.z = Math.PI/2;
        bobina_lt2.position.x = .75;

        //bobina_lt2.position.set(.7,3,0);

        var bobina_ct_geometry =  new THREE.CylinderGeometry(2,2,.4,32,32); 
        var bobina_ct = new THREE.Mesh(bobina_ct_geometry,cubeMaterial);
        bobina_ct.rotation.z = Math.PI/2;
        bobina_ct.position.x = .5;

        var bobina = new THREE.Object3D();
        //bobina.position.set(.7,3,0)
        bobina.add(bobina_lt);
        bobina.add(bobina_lt2);
        bobina.add(bobina_ct);
        
        bobina.position.set(0,3,0);

        var supporto = new THREE.Object3D();
        supporto.add(ring);
        supporto.add(asta);

        var supporto2 = supporto.clone();
        supporto2.position.x = 1;

        var supporto_back = new THREE.Object3D();
        supporto_back.add(supporto);
        supporto_back.add(supporto2);
        supporto_back.add(asta2);
        supporto_back.add(bobina);
        supporto_back.position.x = 1;
        supporto_back.position.y = 3;
        supporto_back.position.z +=1.5; 
        supporto_back.rotation.x = -Math.PI/8;

        var bobina2 = bobina.clone();
        var supporto_back2 = new THREE.Object3D();
        supporto_back2.add(supporto.clone());
        supporto_back2.add(supporto2.clone());
        supporto_back2.add(asta2.clone());
        supporto_back2.add(bobina2);
        supporto_back2.rotation.x = Math.PI/8;
        supporto_back2.position.x = 1;
        supporto_back2.position.y = 3;
        supporto_back2.position.z = 4.5;
        toAdd.push(supporto_back);
        toAdd.push(supporto_back2);

        var pellicola = createMesh_simple(new THREE.BoxGeometry(.4,.01,6),"pellicola.png");
        pellicola.position.set(1.5,7.7,3);
        toAdd.push(pellicola);

        pellicola2 = pellicola.clone();
        pellicola2.position.y = 3.9;
        toAdd.push(pellicola2);

        var cinepresa = new THREE.Object3D();
        cinepresa.contact = cube;
        cinepresa.light = light;
        cinepresa.bobina = bobina;
        cinepresa.bobina2 = bobina2;

        for(var i=0; i<toAdd.length; i++)
          cinepresa.add(toAdd[i]);

        var cam_sound = Sound("camera_sound",0.2,true);
        var bobTween = new TWEEN.Tween(cinepresa.bobina.rotation)
                            .to({x:2*Math.PI}, 1000)
                            .repeat(Infinity);
        var bobTween2 = new TWEEN.Tween(cinepresa.bobina2.rotation)
                            .to({x:2*Math.PI}, 1000)
                            .repeat(Infinity);
        var turnedOn = false;

        cinepresa.cam_sound = cam_sound;
        cinepresa.bobTween = bobTween;
        cinepresa.bobTween2 = bobTween2;
        cinepresa.turnedOn = turnedOn;
        cinepresa.light = light;

        var v = get_video("Bioshock 2 Plasmids Advertisements",480,350,18,12);
        var texture_video = v[0];
        var video_movie = v[1];

        cinepresa.texture_video = texture_video;
        cinepresa.video_movie = video_movie;

        cinepresa.interact = function() {

          if(!cinepresa.turnedOn) {
              cinepresa.cam_sound.play();
              cinepresa.light.intensity = 100;
              TWEEN.add(cinepresa.bobTween);
              TWEEN.add(cinepresa.bobTween2);
              cinepresa.texture_video.visible = true;
              setTimeout(function(){cinepresa.video_movie.play();},2000);
              cinepresa.turnedOn = true;        
          } else {
              cinepresa.cam_sound.pause();
              cinepresa.light.intensity = 0;
              TWEEN.remove(cinepresa.bobTween);
              TWEEN.remove(cinepresa.bobTween2);
              cinepresa.texture_video.visible = false;
              cinepresa.video_movie.pause();
              cinepresa.turnedOn = false;
            }
        }

        //sostegni:

        var appoggio = new THREE.Object3D();
      
        var sostegno_Geometry = new THREE.CylinderGeometry(.2,.2,10,32,32);
        var sostegno = createMesh_simple(sostegno_Geometry,"plastic.jpg");
        var sostegno_feet_Geometry = new THREE.CylinderGeometry(.4,.4,.5,32,32);
        var feet = createMesh_simple(sostegno_feet_Geometry,"plastic.jpg");
        feet.position.y =-10.25;
        sostegno.position.y = -5;

        var hook = new THREE.Object3D();
        hook.add(sostegno);
        hook.add(feet);

        var hook1 = hook.clone();
        var hook2 = hook.clone();
        var hook3 = hook.clone();
        var hook4 = hook.clone();
        hook1.rotation.x = Math.PI/8;
        hook2.rotation.z = -Math.PI/8;
        hook3.rotation.z = Math.PI/8;
        hook4.rotation.x = -Math.PI/8;
        appoggio.add(hook1);
        appoggio.add(hook2);
        appoggio.add(hook3);
        appoggio.add(hook4);

        var sost_up_geo = new THREE.CylinderGeometry(1,1,.5,32,32);
        var sost_up = createMesh_simple(sost_up_geo,"plastic.jpg");
        

        var sost_strict_geo = new THREE.CylinderGeometry(.4,.4,1,32,32);
        var sost_strict = createMesh_simple(sost_strict_geo,"plastic.jpg");
        sost_strict.position.y = .75;

        appoggio.add(sost_up);
        appoggio.add(sost_strict);

        appoggio.position.set(1.5,-1,3);

        cinepresa.add(appoggio);

        return cinepresa;
    }

    function create_projector() {

        var proj_obj = new THREE.Object3D();

        var contenitore_geometry = new THREE.BoxGeometry(22,1,1); 
        var contenitore_material = new THREE.MeshPhongMaterial({color:0x707070, metal:true, shininess:100});
        var contenitore = new THREE.Mesh(contenitore_geometry,contenitore_material);
        contenitore.position.set(0,20,1.5);
        proj_obj.add(contenitore);

        var sost_cont_geometry = new THREE.CylinderGeometry(.25,.25,1,32);
        sost_cont = new THREE.Mesh(sost_cont_geometry,contenitore_material);
        sost_cont.rotation.x = Math.PI/2;
        sost_cont.position.set(-10,20,.5);

        var sost_cont2 = sost_cont.clone();
        sost_cont2.position.x = 10;
        
        proj_obj.add(sost_cont);
        proj_obj.add(sost_cont2);

        //telo proiettore
        var telo_geometry = new THREE.BoxGeometry(20,1,.1);
        var telo_material = new THREE.MeshPhongMaterial({color:0xffffff});
        var telo = new THREE.Mesh(telo_geometry,telo_material);
        telo.position.set(0,19,1.55);
        proj_obj.add(telo);

        //asta proiettore
        var asta_c_geometry = new THREE.CylinderGeometry(.125,.125,21,32);
        var asta_c = new THREE.Mesh(asta_c_geometry,contenitore_material);
        asta_c.rotation.z = Math.PI/2;

        var filo = new THREE.Mesh(new THREE.CylinderGeometry(.02,.02,2,32),contenitore_material);
        filo.position.y = -1;

        var ring_asta_geometry = new THREE.TorusGeometry(.1,.05,32,32);
        var ring = new THREE.Mesh(ring_asta_geometry,contenitore_material);
        ring.position.y = -2.15;

        var asta = new THREE.Object3D();
        asta.add(asta_c);
        asta.add(filo);
        asta.add(ring);

        asta.position.set(0,18.5,1.55);
        proj_obj.add(asta);

        proj_obj.contact = contenitore;
        proj_obj.telo = telo;
        proj_obj.telo_abbassato = false;
        proj_obj.asta = asta;

        //Animazione
        //dim iniziale = 1 -> raddoppio = 1 in più in altezza (0.5+ in alto e in basso)
        //quindi discesa di 0.5. Invece l'asta che è in fondo scende di 0.5 per la scalatura in basso
        //e di 0.5 per la discesa di posizione -> 1

        var dimensione_iniziale = 1;
        var dimensione_finale = 15;
        var fattore_espansione = dimensione_finale/dimensione_iniziale;
        var espansione_up_down = (dimensione_finale-dimensione_iniziale)/2;

        var astaTween,teloTween2,teloTween;

        proj_obj.interact = function () {

              if (!proj_obj.telo_abbassato) {
                      astaTween = new TWEEN.Tween(proj_obj.asta.position)
                                      .to({y:proj_obj.asta.position.y-espansione_up_down*2}, 2000)
                                      .start();
                      teloTween2 = new TWEEN.Tween(proj_obj.telo.position)
                                      .to({y:proj_obj.telo.position.y-espansione_up_down}, 2000)
                                      .start();
                      teloTween = new TWEEN.Tween(proj_obj.telo.scale)
                                      .to({y:fattore_espansione}, 2000)
                                      .start();
                      proj_obj.telo_abbassato = true;
              } else {
                      astaTween = new TWEEN.Tween(proj_obj.asta.position)
                                      .to({y:proj_obj.asta.position.y+espansione_up_down*2}, 2000)
                                      .start();
                      teloTween2 = new TWEEN.Tween(proj_obj.telo.position)
                                      .to({y:proj_obj.telo.position.y+espansione_up_down}, 2000)
                                      .start();
                      teloTween = new TWEEN.Tween(proj_obj.telo.scale)
                                      .to({y:dimensione_iniziale}, 2000)
                                      .start();
                      proj_obj.telo_abbassato = false;
                }
        }

        return proj_obj;
    }
