function initialize_room2_stuff(scene) {

        sveglia = create_sveglia();
        sveglia.rotation.y = Math.PI+Math.PI/12;
        sveglia.position.set(50,9,-7.5);
        scene.add(sveglia);

        sveglia.contact.first = sveglia;

        gabin = create_sciacquone();
        gabin.position.set(78.2,16,-8);
        gabin.contact.first = gabin;
        scene.add(gabin);

        lavatr = create_lavatrice();
        lavatr.position.set(63.5,7.5,-25);
        lavatr.rotation.y =Math.PI/2;
        scene.add(lavatr);

        lavatr.contact1.first = lavatr;
        lavatr.contact2.first = lavatr.perno;  

        //Aggiungo campanello
        ring = create_campanello();
        ring.rotation.y = -Math.PI/2;
        ring.position.set(79,14,-131.15);
        ring.contact.first = ring;
        scene.add(ring);

}