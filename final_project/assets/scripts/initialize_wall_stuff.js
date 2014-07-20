function initialize_wall_stuff(scene) {

        var quadro1_geom = new THREE.PlaneGeometry(5,5);
        var quadro1_mat = new THREE.MeshPhongMaterial();
        var quadro1_texture = THREE.ImageUtils.loadTexture("assets/textures/general/cornice.jpg");
        var quadro1_bump = THREE.ImageUtils.loadTexture("assets/textures/general/cornice_bump.jpg");
        quadro1_mat.side = THREE.DoubleSide;
        quadro1_mat.map = quadro1_texture;
        quadro1_mat.bumpMap = quadro1_bump;
        quadro1_mat.bumpScale = 0.2;
        var quadro1 = new THREE.Mesh(quadro1_geom,quadro1_mat);
        quadro1.rotation.y = Math.PI/2;
        quadro1.position.set(3.02,20,-136);
        scene.add(quadro1);

        var quadro2_geom = new THREE.PlaneGeometry(8,10);
        var quadro2_mat = new THREE.MeshPhongMaterial();
        var quadro2_texture = THREE.ImageUtils.loadTexture("assets/textures/general/cornice2.jpg");
        var quadro2_bump = THREE.ImageUtils.loadTexture("assets/textures/general/cornice2_bump.jpg");
        quadro2_mat.side = THREE.DoubleSide;
        quadro2_mat.map = quadro2_texture;
        quadro2_mat.bumpMap = quadro2_bump;
        quadro2_mat.bumpScale = 0.2;
        var quadro2 = new THREE.Mesh(quadro2_geom,quadro2_mat);
        quadro2.position.set(56.4,21,-106.2);
        scene.add(quadro2);

        //orologio cucina
        var quadro3_geom = new THREE.PlaneGeometry(3,3);
        var quadro3_mat = new THREE.MeshPhongMaterial();
        var quadro3_texture = THREE.ImageUtils.loadTexture("assets/textures/general/clock.jpg");
        var quadro3_bump = THREE.ImageUtils.loadTexture("assets/textures/general/clock_bump.jpg");
        quadro3_mat.side = THREE.DoubleSide;
        quadro3_mat.map = quadro3_texture;
        quadro3_mat.bumpMap = quadro3_bump;
        quadro3_mat.bumpScale = 0.2;
        var quadro3 = new THREE.Mesh(quadro3_geom,quadro3_mat);
        quadro3.rotation.y = Math.PI;
        quadro3.position.set(40,24,-73.02);
        scene.add(quadro3);

        var quadro4_geom = new THREE.PlaneGeometry(8,12);
        var quadro4_mat = new THREE.MeshPhongMaterial();
        var quadro4_texture = THREE.ImageUtils.loadTexture("assets/textures/general/civilwar.jpg");
        quadro4_mat.side = THREE.DoubleSide;
        quadro4_mat.map = quadro4_texture;
        var quadro4 = new THREE.Mesh(quadro4_geom,quadro4_mat);
        quadro4.rotation.y = Math.PI;
        quadro4.position.set(46,22,-44.02);
        scene.add(quadro4);

        var quadro5_geom = new THREE.PlaneGeometry(12,10);
        var quadro5_mat = new THREE.MeshPhongMaterial();
        var quadro5_texture = THREE.ImageUtils.loadTexture("assets/textures/general/lvsm.jpg");
        var quadro5_bump = THREE.ImageUtils.loadTexture("assets/textures/general/lvsm_bump.jpg");
        quadro5_mat.side = THREE.DoubleSide;
        quadro5_mat.map = quadro5_texture;
        quadro5_mat.bumpMap = quadro5_bump;
        quadro5_mat.bumpScale = 0.2;
        var quadro5 = new THREE.Mesh(quadro5_geom,quadro5_mat);
        quadro5.rotation.y = -Math.PI/2;
        quadro5.position.set(56.38,20,-17.5);
        scene.add(quadro5);

}

function initialize_mirror_ing(scene) {
	     //specchio ingresso
        var cubeGeom = new THREE.BoxGeometry(7, 17, .1);
        mirrorCubeCamera = new THREE.CubeCamera( 0.1, 500, 512 );
        scene.add( mirrorCubeCamera );
        var mirrorCubeMaterial = new THREE.MeshBasicMaterial( { envMap: mirrorCubeCamera.renderTarget } );
        mirrorCube = new THREE.Mesh( cubeGeom, mirrorCubeMaterial );
        var panel = createMesh_simple(new THREE.BoxGeometry(8,18,.4),"wood_wind.jpg");
        panel.position.set(0,0,-.2);
        mirrorCube.add(panel);
        mirrorCube.rotation.y = Math.PI;
        mirrorCube.position.set(86.7,15,-106.4);
        mirrorCubeCamera.position = mirrorCube.position;
        if(mirror1_ena)
            scene.add(mirrorCube);
 
}

function initialize_mirror_bath(scene) {
	    //specchio bagno
        var cubeGeom2 = new THREE.BoxGeometry(5,8.2,.05);
        mirrorCubeCamera2 = new THREE.CubeCamera( 0.1, 40, 512 );
        scene.add( mirrorCubeCamera2 );
        var mirrorCubeMaterial2 = new THREE.MeshBasicMaterial( { envMap: mirrorCubeCamera2.renderTarget } );
        mirrorCube2 = new THREE.Mesh( cubeGeom2, mirrorCubeMaterial2 );
        mirrorCube2.position.set(78.1,20,-24.2);
        mirrorCube2.rotation.y = Math.PI/2;
        mirrorCubeCamera2.position = mirrorCube2.position;
        if(mirror2_ena)
            scene.add(mirrorCube2);
}

