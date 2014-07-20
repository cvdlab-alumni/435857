function initialize_grammofono_exposer(scene) {
	    //Aggiungo grammofono
        grammofono = create_grammofono();
        grammofono.rotation.y = Math.PI/4;
        grammofono.position.set(12,13,-137);
        grammofono.active = false;
        scene.add(grammofono);

        //Aggiungo espositore
        exposer = create_espositorecd();
        //exposer.position.set(16,13,-131);
        exposer.position.set(20,13,-144.4);

        //Aggiungo funzione di interazione con i CD
        box1 = exposer.box1;
        box2 = exposer.box2;
        box3 = exposer.box3;
        espositore = exposer.obj_support;

        box1.contact.first = box1;
        box1.coord_x = box1.cd.position.x;
        box1.coord_y = box1.cd.position.y;
        box1.coord_z = box1.cd.position.z;
        
        box2.contact.first = box2;
        box2.coord_x = box2.cd.position.x;
        box2.coord_y = box2.cd.position.y;
        box2.coord_z = box2.cd.position.z;
        
        box3.contact.first = box3;
        box3.coord_x = box3.cd.position.x;
        box3.coord_y = box3.cd.position.y;
        box3.coord_z = box3.cd.position.z;
        

        scene.add(exposer);


        box1.interact = function() {
            //se il grammofono è gia in funzione, devo prima mettere al suo posto il cd di prima
            //se questo cd non lo sto ascoltando, allora lo prendo dalla custodia e lo metto
            if(grammofono.active) {
                if(box2.inplay) { 
                    box2.interact2();
                    setTimeout(function(){box1.interact2();},4000);
                }
                else
                    if(box3.inplay) {
                        box3.interact2();
                        setTimeout(function(){box1.interact2();},4000);
                    } else box1.interact2();
            } else box1.interact2();
        }

        box1.interact2 = function() {

            if(!box1.inplay) {
                    grammofono.open();

                    var tween_box4 = new TWEEN.Tween(box1.cd.position)
                    .to({y:2.8}, 1000);

                    var tween_box3 = new TWEEN.Tween(box1.cd.position)
                    .to({x:-8}, 1000)
                    .chain(tween_box4);

                    var tween_box2 = new TWEEN.Tween(box1.cd.rotation)
                    .to({x:0}, 1000)
                    .chain(tween_box3);
                    
                    var tween_box1 = new TWEEN.Tween(box1.cd.position)
                    .to({x:0,y:4,z:7.4}, 1000);

                    var tween_box = new TWEEN.Tween(box1.cd.position)
                    .to({x:4}, 1000)
                    .chain(tween_box1,tween_box2)
                    .start();
                    

                    setTimeout(function(){grammofono.close();},4000);
                    setTimeout(function(){grammofono.gira();},5000);
                    setTimeout(function(){box1.play();},6000);  

                    grammofono.active=true;
                    box1.inplay = true; 

                    } else {

                    box1.stop_play();
                    grammofono.stop();
                    grammofono.open();

                    var tween_box4 = new TWEEN.Tween(box1.cd.position)
                    .to({x:box1.coord_x}, 1000);

                    var tween_box3 = new TWEEN.Tween(box1.cd.position)
                    .to({x:4,y:box1.coord_y,z:box1.coord_z}, 1000)
                    .chain(tween_box4);

                    var tween_box2 = new TWEEN.Tween(box1.cd.rotation)
                    .to({x:Math.PI/2}, 1000);
                    
                    
                    var tween_box1 = new TWEEN.Tween(box1.cd.position)
                    .to({x:0}, 1000)
                    .chain(tween_box2,tween_box3);

                    var tween_box = new TWEEN.Tween(box1.cd.position)
                    .to({y:4}, 1000)
                    .chain(tween_box1)
                    .start();

                    box1.inplay = false;
                    grammofono.active = false;
                }
        }
        


        box2.interact = function() {
            
            if(grammofono.active) {
                if(box1.inplay) { 
                    box1.interact2();
                    setTimeout(function(){box2.interact2();},4000);
                }
                else
                    if(box3.inplay) {
                        box3.interact2();
                        setTimeout(function(){box2.interact2();},4000);
                    } else box2.interact2();
            } else box2.interact2();
        }

        box2.interact2 = function() {

            if(!box2.inplay) {
        
                    grammofono.open();

                    var tween_box4 = new TWEEN.Tween(box2.cd.position)
                    .to({y:2.8}, 1000);

                    var tween_box3 = new TWEEN.Tween(box2.cd.position)
                    .to({x:-8}, 1000)
                    .chain(tween_box4);

                    var tween_box2 = new TWEEN.Tween(box2.cd.rotation)
                    .to({x:0}, 1000)
                    .chain(tween_box3);
                    
                    var tween_box1 = new TWEEN.Tween(box2.cd.position)
                    .to({x:0,y:4,z:7.4}, 1000);
                    

                    var tween_box = new TWEEN.Tween(box2.cd.position)
                    .to({x:4}, 1000)
                    .chain(tween_box1,tween_box2)
                    .start();
                    

                    setTimeout(function(){grammofono.close();},4000);
                    setTimeout(function(){grammofono.gira();},5000);
                    setTimeout(function(){box2.play();},6000);  

                    grammofono.active=true;
                    box2.inplay = true;    
            } else {
                    box2.stop_play();
                    grammofono.stop();
                    grammofono.open();

                    var tween_box4 = new TWEEN.Tween(box2.cd.position)
                    .to({x:box2.coord_x}, 1000);

                    var tween_box3 = new TWEEN.Tween(box2.cd.position)
                    .to({x:4,y:box2.coord_y,z:box2.coord_z}, 1000)
                    .chain(tween_box4);

                    var tween_box2 = new TWEEN.Tween(box2.cd.rotation)
                    .to({x:Math.PI/2}, 1000);
                    
                    
                    var tween_box1 = new TWEEN.Tween(box2.cd.position)
                    .to({x:0}, 1000)
                    .chain(tween_box2,tween_box3);

                    var tween_box = new TWEEN.Tween(box2.cd.position)
                    .to({y:4}, 1000)
                    .chain(tween_box1)
                    .start();

                    box2.inplay = false;
                    grammofono.active = false;
                }
        }


        box3.interact = function() {
            
            if(grammofono.active) {
                if(box1.inplay) { 
                    box1.interact2();
                    setTimeout(function(){box3.interact2();},4000);
                }
                else
                    if(box2.inplay) {
                        box2.interact2();
                        setTimeout(function(){box3.interact2();},4000);
                    } else box3.interact2();
            } else box3.interact2();
        }

        box3.interact2 = function() {

            if(!box3.inplay) {
        
                    grammofono.open();

                    var tween_box4 = new TWEEN.Tween(box3.cd.position)
                    .to({y:2.8}, 1000);

                    var tween_box3 = new TWEEN.Tween(box3.cd.position)
                    .to({x:-8}, 1000)
                    .chain(tween_box4);

                    var tween_box2 = new TWEEN.Tween(box3.cd.rotation)
                    .to({x:0}, 1000)
                    .chain(tween_box3);
                    
                    var tween_box1 = new TWEEN.Tween(box3.cd.position)
                    .to({x:0,y:4,z:7.4}, 1000);
                    

                    var tween_box = new TWEEN.Tween(box3.cd.position)
                    .to({x:4}, 1000)
                    .chain(tween_box1,tween_box2)
                    .start();
                    

                    setTimeout(function(){grammofono.close();},4000);
                    setTimeout(function(){grammofono.gira();},5000);
                    setTimeout(function(){box3.play();},6000);  

                    grammofono.active=true;
                    box3.inplay = true;    
            } else {
                    box3.stop_play();
                    grammofono.stop();
                    grammofono.open();

                    var tween_box4 = new TWEEN.Tween(box3.cd.position)
                    .to({x:box3.coord_x}, 1000);

                    var tween_box3 = new TWEEN.Tween(box3.cd.position)
                    .to({x:4,y:box3.coord_y,z:box3.coord_z}, 1000)
                    .chain(tween_box4);

                    var tween_box2 = new TWEEN.Tween(box3.cd.rotation)
                    .to({x:Math.PI/2}, 1000);
                    
                    
                    var tween_box1 = new TWEEN.Tween(box3.cd.position)
                    .to({x:0}, 1000)
                    .chain(tween_box2,tween_box3);

                    var tween_box = new TWEEN.Tween(box3.cd.position)
                    .to({y:4}, 1000)
                    .chain(tween_box1)
                    .start();

                    box3.inplay = false;
                    grammofono.active = false;
                }
        }
}