    function initialize_walls_and_pavements(house) {    

        var prato = build_wall([[-500,-500],[500,-500],[500,500],[-500,500],[-500,500]],[],
                                "grass.jpg","grass_bump.jpg");
        prato.position.set(0,0,-0.01);
        house.add(prato);

        var coord_w1 = [[0,0],[27,0],[27,105],[0,105],[0,0]];
        var holes_w1 = [[[9,9.5],[21,9.5],[21,24.5],[9,24.5],[9,9.5]],
                        [[0,34.5],[21,34.5],[21,40.5],[0,40.5],[0,34.5]],
                        [[0,55],[21,55],[21,61],[0,61],[0,55]],
                        [[9,80],[21,80],[21,90],[9,90],[9,80]],
                        [[0,92],[21,92],[21,98],[0,98],[0,92]]];
        var wall = build_wall(coord_w1,holes_w1,"brick-wall.jpg","brick-wall_bump.jpg");
        wall.rotation.y = -Math.PI/2;
        wall.position.z = 3;
        wall.position.x = 15.99;
        house.add(wall);

        var und_wall = build_wall([[0,0],[3,0],[3,105],[0,105],[0,0]],[],
                                    "stone_wall_vert.jpg","stone_wall_bump_vert.jpg");
        und_wall.rotation.y = -Math.PI/2;
        und_wall.position.x = 15.99;
        house.add(und_wall);

        var coord_w2 = [[0,0],[16,0],[16,27],[0,27],[0,0]];
        var holes_w2 = [[[6.5,0],[12.5,0],[12.5,21],[6.5,21],[6.5,0]]];
        var wall2 = build_wall(coord_w2,holes_w2,"brick-wall-vert.jpg","brick-wall-vert-bump.jpg");
        wall2.rotation.x = Math.PI/2;
        wall2.position.z = 3;
        wall2.position.y = 104.9;
        house.add(wall2);

        var und_wall2 = build_wall([[0,0],[16,0],[16,3],[0,3],[0,0]],[],
                                    "stone_wall.jpg","stone_wall_bump.jpg");
        und_wall2.rotation.x = Math.PI/2;
        und_wall2.position.y = 104.9;
        house.add(und_wall2);

        var coord_w3 = [[0,0],[0,42.5],[27,42.5],[27,0],[0,0]];
        var holes_w3 = [[[9,8],[21,8],[21,23],[9,23],[9,8]]];
        var wall3 = build_wall(coord_w3,holes_w3,"brick-wall.jpg","brick-wall_bump.jpg");
        wall3.rotation.y = -Math.PI/2;
        wall3.position.set(-0.01,105,3);
        house.add(wall3);

        var und_wall3 = build_wall([[0,0],[0,42.5],[3,42.5],[3,0],[0,0]],[],
                                    "stone_wall_vert.jpg","stone_wall_bump_vert.jpg");
        und_wall3.rotation.y = -Math.PI/2;
        und_wall3.position.x = -0.01;
        und_wall3.position.y = 105;
        house.add(und_wall3);

        var coord_w4 = [[0,0],[67,0],[67,27],[0,27],[0,0]];
        var holes_w4 = [];
        var wall4 = build_wall(coord_w4,holes_w4,"brick-wall-vert.jpg","brick-wall-vert-bump.jpg");
        wall4.rotation.x = Math.PI/2;
        wall4.position.z = 3;
        wall4.position.y = 147.6;
        house.add(wall4);

        var und_wall4 = build_wall([[0,0],[67,0],[67,3],[0,3],[0,0]],[],
                                    "stone_wall.jpg","stone_wall_bump.jpg");
        und_wall4.rotation.x = Math.PI/2;
        und_wall4.position.y = 147.6;
        house.add(und_wall4);
        
        var coord_w5 = [[0,0],[0,16.5],[27,16.5],[27,0],[0,0]];
        var holes_w5 = [];
        var wall5 = build_wall(coord_w5,holes_w5,"brick-wall.jpg","brick-wall_bump.jpg");
        wall5.rotation.y = -Math.PI/2;
        wall5.position.set(67.1,131,3);
        house.add(wall5);

        var und_wall5 = build_wall([[0,0],[0,16.5],[3,16.5],[3,0],[0,0]],[],
                                    "stone_wall_vert.jpg","stone_wall_bump_vert.jpg");
        und_wall5.rotation.y = -Math.PI/2;
        und_wall5.position.x = 67.1;
        und_wall5.position.y = 131;
        house.add(und_wall5);
        
        var coord_w6 = [[0,0],[34,0],[34,27],[0,27],[0,0]];
        var holes_w6 = [[[14.4,0],[24.4,0],[24.4,21],[14.4,21],[14.4,0]]];
        var wall6 = build_wall(coord_w6,holes_w6,"stone_wall.jpg","stone_wall_bump.jpg");
        wall6.rotation.x = Math.PI/2;
        wall6.position.set(67,131.1,3);
        house.add(wall6);

        var und_wall6 = build_wall([[0,0],[34,0],[34,3],[0,3],[0,0]],[],
                                    "stone_wall.jpg","stone_wall_bump.jpg");
        und_wall6.rotation.x = Math.PI/2;
        und_wall6.position.x = 67;
        und_wall6.position.y = 131.1;
        house.add(und_wall6);

        var coord_w7 = [[0,0],[0,26],[27,26],[27,0],[0,0]];
        var holes_w7 = [];
        var wall7 = build_wall(coord_w7,holes_w7,"brick-wall.jpg","brick-wall_bump.jpg");
        wall7.rotation.y = -Math.PI/2;
        wall7.position.set(101.1,105,3);
        house.add(wall7);

        var und_wall7 = build_wall([[0,0],[0,26],[3,26],[3,0],[0,0]],[],
                                    "stone_wall_vert.jpg","stone_wall_bump_vert.jpg");
        und_wall7.rotation.y = -Math.PI/2;
        und_wall7.position.x = 101.1;
        und_wall7.position.y = 105;
        house.add(und_wall7);

        var coord_w8 = [[0,0],[19.6,0],[19.6,27],[0,27],[0,0]];
        var holes_w8 = [];
        var wall8 = build_wall(coord_w8,holes_w8,"brick-wall-vert.jpg","brick-wall-vert-bump.jpg");
        wall8.rotation.x = Math.PI/2;
        wall8.position.set(81.4,104.9,3);
        house.add(wall8);

        var und_wall8 = build_wall([[0,0],[19.6,0],[19.6,3],[0,3],[0,0]],[],
                                    "stone_wall.jpg","stone_wall_bump.jpg");
        und_wall8.rotation.x = Math.PI/2;
        und_wall8.position.x = 81.4;
        und_wall8.position.y = 104.9;
        house.add(und_wall8);

        var coord_w9 = [[0,0],[27,0],[27,105],[0,105],[0,0]];
        var holes_w9 = [];
        var wall9 = build_wall(coord_w9,holes_w9,"brick-wall.jpg","brick-wall_bump.jpg");
        wall9.rotation.y = -Math.PI/2;
        wall9.position.z = 3;
        wall9.position.x = 81.5;
        house.add(wall9);

        var und_wall9 = build_wall([[0,0],[3,0],[3,105],[0,105],[0,0]],[],
                                   "stone_wall_vert.jpg","stone_wall_bump_vert.jpg");
        und_wall9.rotation.y = -Math.PI/2;
        und_wall9.position.x = 81.5;
        house.add(und_wall9);
        
        var coord_w10 = [[0,0],[65.4,0],[65.4,27],[0,27],[0,0]];
        var holes_w10 = [[[51,9],[57,9],[57,21],[51,21],[51,9]]];
        var wall10 = build_wall(coord_w10,holes_w10,"brick-wall-vert.jpg","brick-wall-vert-bump.jpg");
        wall10.rotation.x = Math.PI/2;
        wall10.position.set(16,-0.1,3);
        house.add(wall10);

        var und_wall10 = build_wall([[0,0],[65.4,0],[65.4,3],[0,3],[0,0]],[],
                                     "stone_wall.jpg","stone_wall_bump.jpg");
        und_wall10.rotation.x = Math.PI/2;
        und_wall10.position.x = 16;
        und_wall10.position.y = -0.1;
        house.add(und_wall10);

        //TEXTURE PAVIMENTI

        var pavement = build_wall([[16,0],[56.4,0],[56.4,32],[78.4,32],[78.4,106],[98,106],[98,131],
                                  [67,131],[67,147.5],[3,147.5],[3,105],[67,105],[67,72],[16,72],[16,0]],
                                  [],"pavimento3.jpg","pavimento3_bump.jpg");
        pavement.position.z = 3.001;
        house.add(pavement);
   

        var pavement2 = build_wall([[16,72],[16,105],[67,105],[67,72],[16,72]],[],
                                    "pavimento2.jpg","pavimento2_bump.jpg");
        pavement2.position.z = 3.001;
        house.add(pavement2);

        var pavement3 = build_wall([[56.4,0],[56.4,32],[78.4,32],[78.4,0],[56.4,0]],[],
                                    "pavimento2.jpg","pavimento2_bump.jpg");
        pavement3.position.z = 3.001;
        house.add(pavement3);


        //Mattonelle muro cucina e bagno
        var ceramic_wall = build_wall([[0,0],[49,0],[49,21],[0,21],[0,0]],[],
                                       "mattonelle_muro1.jpg","mattonelle_muro1_bump.jpg");
        ceramic_wall.rotation.x = Math.PI/2;
        ceramic_wall.position.set(17,104.9,3);
        house.add(ceramic_wall);

        var ceramic_wall2 = build_wall([[57.4,0],[78.4,0],[78.4,22],[57.4,22],[57.4,0]],
                                        [[[67,9],[73,9],[73,21],[67,21],[67,9]]],
                                        "mattonelle_muro2.jpg","mattonelle_muro2_bump.jpg");
        ceramic_wall2.rotation.x = Math.PI/2;
        ceramic_wall2.position.z = 3;
        ceramic_wall2.position.y = 3.1;
        house.add(ceramic_wall2);

        var ceramic_wall3 = build_wall([[57.4,0],[78.4,0],[78.4,22],[57.4,22],[57.4,0]],
                                       [[[68.7,0],[76.7,0],[76.7,21],[68.7,21],[68.7,0]]],
                                        "mattonelle_muro2.jpg","mattonelle_muro2_bump.jpg");
        ceramic_wall3.rotation.x = Math.PI/2;
        ceramic_wall3.position.z = 3;
        ceramic_wall3.position.y = 30.9;
        house.add(ceramic_wall3);

        var ceramic_wall4 = build_wall([[0,3],[0,31],[22,31],[22,3],[0,3]],[],
                                       "mattonelle_muro2.jpg","mattonelle_muro2_bump.jpg");
        ceramic_wall4.rotation.y = -Math.PI/2;
        ceramic_wall4.position.x = 57.5;
        ceramic_wall4.position.z = 3;
        house.add(ceramic_wall4);

        var ceramic_wall5 = ceramic_wall4.clone();
        ceramic_wall5.position.x = 78.3;
        house.add(ceramic_wall5);

        //mura salone
        var salone_wall1 = build_wall([[3,0],[66,0],[66,27],[3,27],[3,0]],
                                      [[[6.5,0],[12.5,0],[12.5,21],[6.5,21],[6.5,0]]],
                                       "venetian.jpg");
        salone_wall1.rotation.x = Math.PI/2;
        salone_wall1.position.z = 3;
        salone_wall1.position.y = 106.01;
        house.add(salone_wall1);

        var battiscopa1 = build_wall([[3,0],[6.5,0],[6.5,1],[3,1],[3,0]],[],"battiscopa.jpg");      
        battiscopa1.rotation.x = Math.PI/2;
        battiscopa1.position.z = 3;
        battiscopa1.position.y = 106.02;
        house.add(battiscopa1);

        var battiscopa2 = build_wall([[12.5,0],[66,0],[66,1],[12.5,1],[12.5,0]],[],"battiscopa.jpg");      
        battiscopa2.rotation.x = Math.PI/2;
        battiscopa2.position.z = 3;
        battiscopa2.position.y = 106.02;
        house.add(battiscopa2);

        var salone_wall2 = build_wall([[0,106],[27,106],[27,147.5],[0,147.5],[0,0]],
                                      [[[0,109],[21,109],[21,125],[0,125],[0,109]]],
                                       "venetian.jpg");
        salone_wall2.rotation.y = -Math.PI/2;
        salone_wall2.position.z = 3;
        salone_wall2.position.x = 65.99;
        house.add(salone_wall2);

        var battiscopa3 = build_wall([[0,106],[0,109],[1,109],[1,106],[0,106]],[],"battiscopa_vert.jpg");
        battiscopa3.rotation.y = -Math.PI/2;
        battiscopa3.position.z = 3;
        battiscopa3.position.x = 65.98;
        house.add(battiscopa3);

        var battiscopa4 =build_wall([[0,125],[0,147.5],[1,147.5],[1,125],[0,125]],[],"battiscopa_vert.jpg");
        battiscopa4.rotation.y = -Math.PI/2;
        battiscopa4.position.z = 3;
        battiscopa4.position.x = 65.98;
        house.add(battiscopa4);

        var salone_wall3 = build_wall([[3,0],[66,0],[66,27],[3,27],[3,0]],[],"venetian.jpg");
        salone_wall3.rotation.x = Math.PI/2;
        salone_wall3.position.z = 3;
        salone_wall3.position.y = 144.49;
        house.add(salone_wall3);

        var battiscopa5 = build_wall([[3,0],[66,0],[66,1],[3,1],[3,0]],[],"battiscopa.jpg");
        battiscopa5.rotation.x = Math.PI/2;
        battiscopa5.position.z = 3;
        battiscopa5.position.y = 144.48;
        house.add(battiscopa5);

        var salone_wall4 = build_wall([[0,106],[27,106],[27,147.5],[0,147.5],[0,0]],
                                       [[[9,113],[21,113],[21,128],[9,128],[9,113]]],
                                       "venetian.jpg"); 
        salone_wall4.rotation.y = -Math.PI/2;
        salone_wall4.position.z = 3;
        salone_wall4.position.x = 3.01;
        house.add(salone_wall4);

        var battiscopa6 =build_wall([[0,106],[1,106],[1,147.5],[0,147.5],[0,106]],[],"battiscopa_vert.jpg");
        battiscopa6.rotation.y = -Math.PI/2;
        battiscopa6.position.z = 3;
        battiscopa6.position.x = 3.02;
        house.add(battiscopa6);

        //mura cucina
        var cucinawall1 = build_wall([[0,0],[49,0],[49,27],[0,27],[0,0]],[],"venetian.jpg");
        cucinawall1.rotation.x = Math.PI/2;
        cucinawall1.position.set(17,73.01,3);
        house.add(cucinawall1);

        var cucinawall2 = build_wall([[0,73],[27,73],[27,105],[0,105],[0,0]],
                                     [[[9,80],[21,80],[21,90],[9,90],[9,80]],
                                     [[0,92],[21,92],[21,98],[0,98],[0,92]]],"venetian.jpg");
        cucinawall2.rotation.y = -Math.PI/2;
        cucinawall2.position.set(17.01,0,3);
        house.add(cucinawall2);

        var cucinawall3 = build_wall([[0,73],[27,73],[27,105],[0,105],[0,0]],
                                     [[[0,85],[21,85],[21,93],[0,93],[0,85]]],"venetian.jpg");
        cucinawall3.rotation.y = -Math.PI/2;
        cucinawall3.position.set(65.99,0,3);
        house.add(cucinawall3);

        var cucinawall4 = cucinawall1.clone();
        cucinawall4.position.y =104.99;
        house.add(cucinawall4);
        
        //mura cameretta
        var camerettawall1 = build_wall([[0,0],[49,0],[49,27],[0,27],[0,0]],[],"cameretta.jpg");
        camerettawall1.rotation.x = Math.PI/2;
        camerettawall1.position.set(17,71.99,3);
        house.add(camerettawall1);

        var camerettawall2 = camerettawall1.clone();
        camerettawall2.position.y = 44.01;
        house.add(camerettawall2);

        var camerettawall3 = build_wall([[0,44],[27,44],[27,72],[0,72],[0,44]],
                                        [[[0,55],[21,55],[21,61],[0,61],[0,55]]],"cameretta.jpg");
        camerettawall3.rotation.y = -Math.PI/2;
        camerettawall3.position.set(17.01,0,3);
        house.add(camerettawall3);

        var camerettawall4 = build_wall([[0,44],[27,44],[27,72],[0,72],[0,44]],
                                        [[[0,54],[21,54],[21,62],[0,62],[0,54]]],"cameretta.jpg");
        camerettawall4.rotation.y = -Math.PI/2;
        camerettawall4.position.set(65.99,0,3);
        house.add(camerettawall4);

        //camera matrimoniale
        var matrimwall1 = build_wall([[0,0],[49,0],[49,27],[0,27],[0,0]],[],"matrimoniale.jpg");
        matrimwall1.rotation.x = Math.PI/2;
        matrimwall1.position.set(17.01,42.99,3);
        house.add(matrimwall1);

        var matrimwall2 = build_wall([[0,0],[39.4,0],[39.4,27],[0,27],[0,0]],[],"matrimoniale.jpg");
        matrimwall2.rotation.x = Math.PI/2;
        matrimwall2.position.set(17.01,3.01,3);
        house.add(matrimwall2);  
        
        var matrimwall3 = build_wall([[0,0],[9.6,0],[9.6,27],[0,27],[0,0]],[],"matrimoniale.jpg");
        matrimwall3.rotation.x = Math.PI/2;
        matrimwall3.position.set(56.4,32.01,3);
        house.add(matrimwall3);

        var matrimwall4 = build_wall([[0,3],[27,3],[27,32],[0,32],[0,3]],[],"matrimoniale.jpg");
        matrimwall4.rotation.y = -Math.PI/2;
        matrimwall4.position.set(56.39,0,3);
        house.add(matrimwall4);

        var matrimwall5 = build_wall([[0,3],[27,3],[27,43],[0,43],[0,3]],
                                     [[[9,9.5],[21,9.5],[21,24.5],[9,24.5],[9,9.5]],
                                     [[0,34.5],[21,34.5],[21,40.5],[0,40.5],[0,34.5]]],"matrimoniale.jpg");
        matrimwall5.rotation.y = -Math.PI/2;
        matrimwall5.position.set(17.01,0,3);
        house.add(matrimwall5);

        var matrimwall6 = build_wall([[0,32],[27,32],[27,43],[0,43],[0,32]],
                                     [[[0,33.5],[21,33.5],[21,41.5],[0,41.5],[0,33.5]]],"matrimoniale.jpg");
        matrimwall6.rotation.y = -Math.PI/2;
        matrimwall6.position.set(65.99,0,3);
        house.add(matrimwall6);

        //mura bagno
        var bagnowall1 = build_wall([[0,3],[27,3],[27,31],[0,31],[0,3]],[],"venetian.jpg");
        bagnowall1.rotation.y = -Math.PI/2;
        bagnowall1.position.set(78.39,0,3);
        house.add(bagnowall1);

        var bagnowall2 = bagnowall1.clone();
        bagnowall2.position.x = 57.41;
        house.add(bagnowall2);

        var bagnowall3 = build_wall([[57.4,0],[78.4,0],[78.4,27],[57.4,27],[57.4,0]],
                                    [[[68.7,0],[76.7,0],[76.7,21],[68.7,21],[68.7,0]]],"venetian.jpg");
        bagnowall3.rotation.x = Math.PI/2;
        bagnowall3.position.set(0,30.99,3);
        house.add(bagnowall3);

        var bagnowall4 = build_wall([[57.4,0],[78.4,0],[78.4,27],[57.4,27],[57.4,0]],
                                    [[[67,9],[73,9],[73,21],[67,21],[67,9]]],"venetian.jpg");
        bagnowall4.rotation.x = Math.PI/2;
        bagnowall4.position.set(0,3.01,3);
        house.add(bagnowall4);

        //mura ingresso
        var ingwall1 = build_wall([[0,32],[27,32],[27,128],[0,128],[0,32]],
                                  [[[0,33.5],[21,33.5],[21,41.5],[0,41.5],[0,33.5]],
                                   [[0,54],[21,54],[21,62],[0,62],[0,54]],
                                   [[0,85],[21,85],[21,93],[0,93],[0,85]],
                                   [[0,109],[21,109],[21,125],[0,125],[0,109]]],"ingresso.jpg");
        ingwall1.rotation.y = -Math.PI/2;
        ingwall1.position.set(67.01,0,3);
        house.add(ingwall1);

        var ingwall2 = build_wall([[67,0],[78.4,0],[78.4,27],[67,27],[67,0]],
                                    [[[68.7,0],[76.7,0],[76.7,21],[68.7,21],[68.7,0]]],"ingresso.jpg");
        ingwall2.rotation.x = Math.PI/2;
        ingwall2.position.set(0,32.01,3);
        house.add(ingwall2);

        var ingwall3 = build_wall([[67,0],[98,0],[98,27],[67,27],[67,0]],
                                    [[[81.4,0],[91.4,0],[91.4,21],[81.4,21],[81.4,0]]],"ingresso.jpg");
        ingwall3.rotation.x = Math.PI/2;
        ingwall3.position.set(0,127.99,3);
        house.add(ingwall3);

        var ingwall4 = build_wall([[0,32],[27,32],[27,106],[0,106],[0,32]],[],"ingresso.jpg");
        ingwall4.rotation.y = -Math.PI/2;
        ingwall4.position.set(78.39,0,3);
        house.add(ingwall4);

        var ingwall5 = build_wall([[0,106],[27,106],[27,128],[0,128],[0,106]],[],"ingresso.jpg");
        ingwall5.rotation.y = -Math.PI/2;
        ingwall5.position.set(97.99,0,3);
        house.add(ingwall5);

        var ingwall6 = build_wall([[78.4,0],[98,0],[98,27],[78.4,27],[78.4,0]],[],"ingresso.jpg");
        ingwall6.rotation.x = Math.PI/2;
        ingwall6.position.set(0,106.01,3);
        house.add(ingwall6);

        //CONTORNI PORTE

        var cont1 = create_border_door(1,.5,21,6,21,"wood_wind.jpg");
        cont1.position.set(16,34.5,3);
        house.add(cont1);

        var cont2 = cont1.clone();
        cont2.position.y = 55;
        house.add(cont2);

        var cont3 = cont1.clone();
        cont3.position.y = 92;
        house.add(cont3);

        var cont4 = create_border_door(1,.5,21,6,21,"wood_wind.jpg");
        cont4.rotation.z = -Math.PI/2;
        cont4.position.set(6.5,106,3);
        house.add(cont4);

        var cont5 = create_border_door(1,.5,21,8,21,"wood_wind.jpg");
        cont5.position.set(66,33.5,3);
        house.add(cont5);

        var cont6 = cont5.clone();
        cont6.position.y = 54;
        house.add(cont6);

        var cont7 = cont5.clone();
        cont7.position.y = 85;
        house.add(cont7);

        var cont8 = create_border_door(1,.5,21,8,21,"wood_wind.jpg");
        cont8.rotation.z = -Math.PI/2;
        cont8.position.set(68.7,32,3);
        house.add(cont8);

        var cont9 = create_border_door(1,.5,21,16,21,"wood_wind.jpg");
        cont9.position.set(66,109,3);
        house.add(cont9);

        var cont10 = create_border_door(3,.5,21,10,21,"wood_wind.jpg");
        cont10.rotation.z = -Math.PI/2;
        cont10.position.set(81.4,131,3);
        house.add(cont10);

        //CONTORNI FINESTRE
        var cont_f1 = create_border_window(1,.5,12,15,12,"wood_wind.jpg");
        cont_f1.position.set(16,9.5,12);
        house.add(cont_f1);

        var cont_f2 = create_border_window(1,.5,12,10,12,"wood_wind.jpg");
        cont_f2.position.set(16,80,12);
        house.add(cont_f2);

        var cont_f3 = create_border_window(3,.5,12,15,12,"wood_wind.jpg");
        cont_f3.position.set(0,113,12);
        house.add(cont_f3);

        var cont_f4 = create_border_window(3,.5,12,6,12,"wood_wind.jpg");
        cont_f4.rotation.z = -Math.PI/2;
        cont_f4.position.set(67,3,12);
        house.add(cont_f4);
    }