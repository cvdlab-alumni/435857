function initialize_windows(house) {
	fin = create_windows(.8,.5,11,7,11,"wood_wind.jpg",1,.2,.2);
        fin.position.set(16.1,10,12.5);
        house.add(fin);
                
        fin2 = create_windows(.8,.5,11,7,11,"wood_wind.jpg",-1,.2,.2);
        fin2.position.set(16.1,17,12.5);
        house.add(fin2);

        fin3 = create_windows(.8,.5,11,4.5,11,"wood_wind.jpg",1,.2,.2);
        fin3.position.set(16.1,80.5,12.5);
        house.add(fin3);
        
        fin4 = create_windows(.8,.5,11,4.5,11,"wood_wind.jpg",-1,.2,.2);
        fin4.position.set(16.1,85,12.5);
        house.add(fin4);
        
        fin5 = create_windows(.8,.5,11,5,11,"wood_wind.jpg",1,.2,.2);
        fin5.position.set(1.1,113.5,12.5);
        house.add(fin5);

        fin6 = create_windows(.8,.5,11,5,11,"wood_wind.jpg",-1,.2,.2);
        fin6.position.set(1.1,118.5,12.5);
        house.add(fin6);
        
        fin7 = create_windows(.8,.5,11,4,11,"wood_wind.jpg",-1,.2,.2);
        fin7.position.set(1.1,123.5,12.5);
        house.add(fin7);

        fin8 = create_windows(.8,.5,11,5,11,"wood_wind.jpg",-1,.2,.2);
        fin8.rotation.z = Math.PI/2;
        fin8.position.set(72.5,1.1,12.5);
        house.add(fin8);

        fin.contact.first = fin;
        fin2.contact.first = fin2;
        fin3.contact.first = fin3;
        fin4.contact.first = fin4;
        fin5.contact.first = fin5;
        fin6.contact.first = fin6;
        fin7.contact.first = fin7;
        fin8.contact.first = fin8;
}