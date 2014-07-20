
   function initialize_objs(house,scene) {

        //Import di qualche oggetto di scena 
        var plant = get_obj("spatifilum.obj","spatifilum.mtl");
        plant.scale.set(0.1,0.1,0.1);
        plant.position.set( 80, 146, 3);
        plant.rotation.x = Math.PI/2; 
        house.add(plant);

        var plant2 = get_obj("spatifilum.obj","spatifilum.mtl");
        plant2.scale.set(0.1,0.1,0.1);
        plant2.position.set( 93, 146, 3);
        plant2.rotation.x = Math.PI/2; 
        house.add(plant2);

        //SALONE

        //poltrona salone
        var chair1 = get_obj("singleChair.obj","singleChair.mtl");
        chair1.scale.set(4,4,4);
        chair1.rotation.y = -Math.PI/6;
        chair1.position.set(58,8,-234);
        scene.add(chair1);        

        //Aggiungo libreria alta
        var lib = create_library();
        lib.rotation.y = -Math.PI/2;
        lib.position.set(65.5,14,-135);
        scene.add(lib);

        //Aggiungo tavolino
        var tavolino = create_table();
        tavolino.position.set(12,12,-137);
        scene.add(tavolino);

        //Aggiungo un termosifone
        var termosifone = get_obj("radiator_7section.obj","radiator_7section.mtl");
        termosifone.scale.set(0.08,0.1,0.08);
        termosifone.position.set(56.4,5,-107);
        scene.add(termosifone);

                //importo una scopa da mettere in cucina
        var scopa = get_obj("broom.obj","broom.mtl");
        scopa.scale.set(.1,.1,.1);
        scopa.rotation.x = -Math.PI/12;
        scopa.position.set(19,3,-101);
        scene.add(scopa);

        //tavolo cucina
        var table = get_obj("table4.obj","table4.mtl");
        table.scale.set(.08,.11,.1);
        table.position.set(40,3,-78);
        scene.add(table);

        //sedie cucina 
        var sedia = get_obj("chair4.obj","chair4.mtl");
        sedia.scale.set(.1,.11,.1);
        sedia.position.set(40,3,-81);
        scene.add(sedia);

        var sedia2 = get_obj("chair4.obj","chair4.mtl");
        sedia2.scale.set(.1,.11,.1);
        sedia2.rotation.y = Math.PI/2;
        sedia2.position.set(35,3,-78);
        scene.add(sedia2);

        var sedia3 = get_obj("chair4.obj","chair4.mtl");
        sedia3.scale.set(.1,.11,.1);
        sedia3.rotation.y = -Math.PI/2;
        sedia3.position.set(45,3,-78);
        scene.add(sedia3);

        var scrivania = get_obj("scrivania160W.obj","scrivania160W.mtl");
        scrivania.scale.set(.1,.1,.1);
        scrivania.position.set(-16,3,-57);
        scene.add(scrivania);

        var angoliera = get_obj("angolo160W.obj","angolo160W.mtl");
        angoliera.scale.set(.1,.08,.1);
        angoliera.rotation.y = Math.PI;
        angoliera.position.set(117,3,-69);
        scene.add(angoliera);

        var letto = create_letto();
        letto.position.set(29,7,-67.2);
        scene.add(letto);

        var vestiti = get_obj("hanging-clothes2.obj","hanging-clothes2.mtl");
        vestiti.scale.set(.1,.1,.05);
        vestiti.position.set(38,11.5,-42);
        scene.add(vestiti);

                var sediacameretta = get_obj("office_chair.obj","office_chair.mtl");
        sediacameretta.scale.set(10,8,10);
        sediacameretta.position.set(50.5,3,-49);
        scene.add(sediacameretta);

        var cdrack = get_obj("CDrack.obj","CDrack.mtl");
        cdrack.scale.set(.1,.1,.1);
        cdrack.position.set(51,3,-72);
        scene.add(cdrack);

        var phone = get_obj("phone.obj","phone.mtl");
        phone.scale.set(.1,.1,.1);
        phone.rotation.y = -(3/4)*Math.PI;
        phone.position.set(65,16,-46.5);
        scene.add(phone);

        var books = get_obj("livres.obj","livres.mtl");
        books.scale.set(0.1,0.1,0.1);
        books.rotation.y = Math.PI;
        books.position.set(65,10.5,-45.5);
        scene.add(books);

        //camera da letto
        var bedmatrim = get_obj("bedWithTexture.obj","bedWithTexture.mtl");
        bedmatrim.rotation.y = Math.PI;
        bedmatrim.scale.set(0.1,0.1,0.1);
        bedmatrim.position.set(37,4,-15);
        scene.add(bedmatrim);

        var comodino1 = get_obj("bedsideTable.obj","bedsideTable.mtl");
        comodino1.rotation.y = Math.PI;
        comodino1.scale.set(0.1,0.1,0.1);
        comodino1.position.set(23,4,-6);
        scene.add(comodino1);

        var comodino2 = get_obj("bedsideTable.obj","bedsideTable.mtl");
        comodino2.rotation.y = Math.PI;
        comodino2.scale.set(0.1,0.1,0.1);
        comodino2.position.set(51,4,-6);
        scene.add(comodino2);

        var guardaroba = get_obj("wardrobe1.obj","wardrobe1.mtl");
        guardaroba.scale.set(.08,.08,.08);
        guardaroba.position.set(37,3.8,-40.5);
        scene.add(guardaroba);

        var lamp = get_obj("deskLamp1.obj","deskLamp1.mtl");
        lamp.scale.set(.08,.08,.08);
        lamp.position.set(49.5,9,-7.5);
        scene.add(lamp);

        var lamp2 = get_obj("deskLamp1.obj","deskLamp1.mtl");
        lamp2.scale.set(.08,.08,.08);
        lamp2.position.set(21.5,9,-7.5);
        scene.add(lamp2);

        var termosifone2 = get_obj("radiator_7section.obj","radiator_7section.mtl");
        termosifone2.scale.set(0.08,0.09,0.05);
        termosifone2.position.set(17.6,3.5,-17);
        termosifone2.rotation.y = -Math.PI/2
        scene.add(termosifone2);

        //Bagno
        var lavandino = get_obj("bathroom_vanity.obj","bathroom_vanity.mtl");
        lavandino.scale.set(.08,.1,.1);
        lavandino.rotation.y = -Math.PI/2;
        lavandino.position.set(76.5,12,-24.5);
        scene.add(lavandino);

        var toilet = get_obj("water.obj","water.mtl");
        toilet.scale.set(.12,.12,.12);
        toilet.rotation.y = -Math.PI/2;
        toilet.position.set(75,3,-8.5);
        scene.add(toilet);

        var bidet = get_obj("bidet.obj","bidet.mtl");
        bidet.scale.set(.12,.12,.12);
        bidet.rotation.y = -Math.PI/2;
        bidet.position.set(75,3,-9);
        scene.add(bidet);

        var bath = get_obj("bath_jay_hardy.obj","bath_jay_hardy.mtl");
        bath.scale.set(.08,.1,.1);
        bath.rotation.y = -Math.PI/2;
        bath.position.set(64.5,3,-10.5);
        scene.add(bath);

        var radiator = get_obj("bathroomRadiator.obj","bathroomRadiator.mtl");
        radiator.scale.set(.08,.08,.08);
        radiator.rotation.y = -Math.PI/2;
        radiator.position.set(76.5,3,-8.5);
        scene.add(radiator);

        var paper = get_obj("toiletPaperDispenser.obj","toiletPaperDispenser.mtl");
        paper.scale.set(.1,.1,.1);
        paper.rotation.y = Math.PI;
        paper.position.set(74,10,-3.1);
        scene.add(paper);

        //appendi-abiti in ingresso
        var appab = get_obj("portemanteaux2.obj");
        appab.scale.set(.1,.1,.1);
        appab.position.set(95.4,11,-117)
        scene.add(appab);

        //lampada solare entrata
        var solamp = get_obj("porch-light.obj","porch-light.mtl");
        solamp.rotation.y = Math.PI;
        solamp.scale.set(2,2,2);
        solamp.position.set(77,23,-132.5);
        scene.add(solamp);

        var solamp2 = get_obj("porch-light.obj","porch-light.mtl");
        solamp2.rotation.y = Math.PI;
        solamp2.scale.set(2,2,2);
        solamp2.position.set(95.8,23,-132.5);
        scene.add(solamp2);
}