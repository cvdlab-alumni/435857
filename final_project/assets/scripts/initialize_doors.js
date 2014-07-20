function initialize_doors(house) {

	    door_b1 = create_door_b(.8,.5,20.5,5,20.5,"wood_wind.jpg",.2,.2);
        door_b1.position.set(16.1,35,3);
        house.add(door_b1);

        door_b2 = create_door_b(.8,.5,20.5,5,20.5,"wood_wind.jpg",.2,.2);
        door_b2.position.set(16.1,55.5,3);
        house.add(door_b2);

        door_b3 = create_door_b(.8,.5,20.5,5,20.5,"wood_wind.jpg",.2,.2);
        door_b3.position.set(16.1,92.5,3);
        house.add(door_b3);

        door_b4 = create_door_b(.8,.5,20.5,5,20.5,"wood_wind.jpg",.2,.2);
        door_b4.rotation.z = Math.PI/2;
        door_b4.position.set(12,105.1,3);
        house.add(door_b4);

        door1 = create_door_a(.8,2,20.5,7.5,20.5,"wood_wind.jpg",1,.2,.2);
        door1.position.set(66.9,109.5,3);
        house.add(door1); //porta sx salone

        door2 = create_door_a(.8,2,20.5,7.5,20.5,"wood_wind.jpg",-1,.2,.2);
        door2.position.set(66.9,117,3);
        house.add(door2); //porta dx salone
        
        door3 = create_door_a(.8,2,20.5,7,20.5,"wood_wind.jpg",-1,.2,.2);
        door3.position.set(66.9,85.5,3);
        house.add(door3);

        door4 = create_door_a(.8,2,20.5,7,20.5,"wood_wind.jpg",-1,.2,.2);
        door4.position.set(66.9,54.5,3);
        house.add(door4);

        door5 = create_door_a(.8,2,20.5,7,20.5,"wood_wind.jpg",-1,.2,.2);
        door5.position.set(66.9,34,3);
        house.add(door5);
        
        door6 = create_door_a(.8,2,20.5,7,20.5,"wood_wind.jpg",-1,.2,.2);
        door6.rotation.z = -Math.PI/2;
        door6.position.set(69.2,31.1,3);
        house.add(door6);

        //porta ingresso
        door7 = create_door_ing (1,1,20.5,9,20.5,"wood_wind.jpg",.5);
        door7.rotation.z = -Math.PI/2;
        door7.position.set(81.9,130.5,3);
        house.add(door7);

     	door1.contact.first = door1;
        door2.contact.first = door2;
        door3.contact.first = door3;
        door4.contact.first = door4;
        door5.contact.first = door5;
        door6.contact.first = door6;
        door7.contact.first = door7;

        door_b1.contact.first = door_b1;
        door_b2.contact.first = door_b2;
        door_b3.contact.first = door_b3;
        door_b4.contact.first = door_b4;
}