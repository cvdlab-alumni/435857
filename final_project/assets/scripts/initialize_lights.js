    function initialize_lights(house,scene) {    

        // LUCI
        directLight = new THREE.DirectionalLight(0xffffff);
        directLight.intensity = 1;
        scene.add(directLight);

        sole = new THREE.Mesh(new THREE.SphereGeometry(5,32,32),new THREE.MeshBasicMaterial({color:0xFF6B00}));
        scene.add(sole);

        extlight1 = new THREE.PointLight(0xffffff, 0, 40);
        extlight1.position.set(77,20,-134);  
        scene.add(extlight1);
        extlight2 = new THREE.PointLight(0xffffff, 0, 40); 
        extlight2.position.set(95.8,20,-134);  
        scene.add(extlight2);

        roof =build_wall([[16,0],[81.4,0],[81.4,105],[101,105],[101,131],[67,131],[67,147.5],[0,147.5],[0,105],
                              [16,105],[16,0]],[],"venetian.jpg");
        roof.position.y = 30.01;
        roof.rotation.x = -Math.PI/2;
        objects.push(roof);
        scene.add(roof);
        //salone
        var lamp1 = create_lampada(0xFFE850);
        lamp1.position.set(34.5,27.8,-126.75);
        scene.add(lamp1);
        //cucina
        var lamp2 = create_lampada(0xAD0202);
        lamp2.position.set(41.5,27.8,-91);
        scene.add(lamp2);
        //cameretta
        var lamp3 = create_lampada(0x4976FE);
        lamp3.position.set(41.5,27.8,-58);
        scene.add(lamp3);
        //matrimoniale
        var lamp4 = create_lampada(0xFFB0F7);
        lamp4.position.set(38.7,27.8,-23);
        scene.add(lamp4);
        //Bagno
        var lamp5 = create_lampada(0x86FF61);
        lamp5.position.set(67.9,27.8,-17);
        scene.add(lamp5);
        //Ingresso
        var lamp6 = create_lampada(0xD0D0D0);
        lamp6.position.set(82.5,27.8,-117);
        scene.add(lamp6);   

        //salone
		var room_light1 = new THREE.PointLight( 0xffffff, .8, 60 );
		room_light1.position.set( 34.5, 126.75, 20 );
		house.add( room_light1 );
        //cucina
        var room_light2 = new THREE.PointLight( 0xffffff, 0.5, 60 );
        room_light2.position.set( 41.5, 91, 20 );
        house.add( room_light2 );
        //cameretta
        var room_light3 = new THREE.PointLight( 0xffffff, .8, 60 );
        room_light3.position.set( 41.5, 58, 20 );
        house.add( room_light3 );
        //matrimoniale
        var room_light4 = new THREE.PointLight( 0xffffff, .8, 50 );
        room_light4.position.set( 38.7, 23, 20 );
        house.add( room_light4 );
        //bagno
        var room_light5 = new THREE.PointLight( 0xffffff, 0.8, 30 );
        room_light5.position.set( 67.9, 17, 20 );
        house.add( room_light5 );
        //ingresso
        var room_light6 = new THREE.PointLight( 0xffffff, 0.8, 30 );
        room_light6.position.set( 82.5, 117, 20 );
        house.add( room_light6 );

        //interruttori
        interrutore1 = create_switch(lamp1,room_light1,.8); 
        interrutore1.position.set(71,14,-127.95);
        interrutore1.contact.first = interrutore1;
        scene.add(interrutore1);     

        interrutore2 = create_switch(lamp2,room_light2,.5); 
        interrutore2.position.set(65.95,14,-83);
        interrutore2.rotation.y = -Math.PI/2;
        interrutore2.contact.first = interrutore2;
        scene.add(interrutore2);

        interrutore3 = create_switch(lamp3,room_light3,.8); 
        interrutore3.position.set(65.95,14,-52);
        interrutore3.rotation.y = -Math.PI/2;
        interrutore3.contact.first = interrutore3;
        scene.add(interrutore3);

        interrutore4 = create_switch(lamp4,room_light4,.8); 
        interrutore4.position.set(64,14,-32.05);
        interrutore4.contact.first = interrutore4;
        scene.add(interrutore4);

        interrutore5 = create_switch(lamp5,room_light5,.8); 
        interrutore5.position.set(66.7,14,-30.75);
        interrutore5.rotation.y = Math.PI;
        interrutore5.contact.first = interrutore5;
        scene.add(interrutore5);
        
        interrutore6 = create_switch(lamp6,room_light6,.8); 
        interrutore6.position.set(77,14,-127.95);
        interrutore6.contact.first = interrutore6;
        scene.add(interrutore6);
    }