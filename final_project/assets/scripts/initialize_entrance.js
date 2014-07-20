        //GRADINI INGRESSO (5 gradini)
        function initialize_entrance(house) {

        var x_lt = 3;
        var y_lt = 16.5;
        var x_ct = 10;

        lt_sx = createMesh_simple(new THREE.BoxGeometry(x_lt,y_lt,3),"stone_wall.jpg");
        lt_sx.position.set(x_lt/2+78.4,y_lt/2+131,3/2);
        lt_dx = lt_sx.clone();
        lt_dx.position.x += 13;
        lt_ct = createMesh_simple(new THREE.BoxGeometry(x_ct,y_lt/2,3),"stone_wall.jpg");
        lt_ct.position.set(x_ct/2+81.4,y_lt/4+131,3/2); 

        house.add(lt_sx);
        house.add(lt_dx);
        house.add(lt_ct);
        
        //5 gradini
        var h_gradino = 3/5;
        var lg_gradino = y_lt/10;
        var gradino;
        var j=1;

        for(var i=5; i>0; i--) {
          gradino = createMesh_simple(new THREE.BoxGeometry(x_ct,lg_gradino,h_gradino*i),"stone_wall.jpg");
          gradino.position.set(x_ct/2+81.4,(lg_gradino/2)*j+139.25,(h_gradino*i)/2);
          j++;
          house.add(gradino);
        } 

    }