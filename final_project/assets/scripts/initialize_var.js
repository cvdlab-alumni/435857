function initialize_var()  {

			var camera, scene, renderer,axisHelper;
			var geometry, material, mesh;
            var video, videoImage, videoImageContext, videoTexture,video_web;
            var controls;
            var grammofono,exposer,forn,appoggiotvcucina,cinepresa,proiettore;
            var box1,box2,box3,espositore;
            var clock = new THREE.Clock();
            var videotvcucina1,videotvcucina2,videotvcucina3;
            var mirrorCube, mirrorCubeCamera,mirrorCube2, mirrorCubeCamera2;
			var house = new THREE.Object3D();
			var objects = [];
            var mirror1_ena = false;
            var mirror2_ena = true;
            var step=0;
            var sole,directLight,extlight1,extlight2;
            var giorno,notte;
            var ufo;
            var interruttore1,interruttore2,interruttore3,interruttore4,interruttore5,interruttore6;
            var fin,fin2,fin3,fin4,fin5,fin6,fin7,fin8;
            var door_b1,door_b2,door_b3,door_b4;
            var door1,door2,door3,door4,door5,door6,door7;
            var ray;
            var armadio,pc,balls;
            var sveglia,gabin,lavatr,ring;

            var urls_day = ["assets/textures/general/lostatseaday_front.jpg",
                            "assets/textures/general/lostatseaday_back.jpg",
                            "assets/textures/general/lostatseaday_top.jpg",
                            "",
                            "assets/textures/general/lostatseaday_left.jpg",
                            "assets/textures/general/lostatseaday_right.jpg"];
            var urls_night = ["assets/textures/general/lostatseanight_front.jpg",
                            "assets/textures/general/lostatseanight_back.jpg",
                            "assets/textures/general/lostatseanight_top.jpg",
                            "",
                            "assets/textures/general/lostatseanight_left.jpg",
                            "assets/textures/general/lostatseanight_right.jpg"];
}