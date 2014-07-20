    function create_webcam() {
        var video, videoImage, videoImageContext, videoTexture;
        
        var pc = get_obj("apple-ibook-2001.obj","apple-ibook-2001.mtl");
        pc.scale.set(10,10,10);
        
        var contact = new THREE.Mesh (new THREE.CylinderGeometry(.135,.135,.1,32,32),
                                        new THREE.MeshPhongMaterial({color:0x505050}));
        contact.position.set(1.8,.23,-2.1);
        
        var obj_pc = new THREE.Object3D();
        obj_pc.add(pc);
        obj_pc.add(contact);
        obj_pc.contact = contact;

        video = document.getElementById( 'monitor' );
        videoImage = document.getElementById( 'videoImage' );
        videoImageContext = videoImage.getContext( '2d' );
        // background color if no video present
        videoImageContext.fillStyle = '#000000';
        videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

        videoTexture = new THREE.Texture( videoImage );
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
          
        var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
          
        var movieGeometry = new THREE.PlaneGeometry( 5.1, 3.5, 1, 1 );
        var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
        movieScreen.rotation.x = -Math.PI/18;
        movieScreen.position.set(0,2.4,-2.8);
        movieScreen.visible = false;
        obj_pc.add(movieScreen);

        video.videoImageContext = videoImageContext;
        video.videoImage = videoImage;
        video.videoTexture = videoTexture;

        obj_pc.video = video;

        obj_pc.onair = false;

        var runnerTexture = new THREE.ImageUtils.loadTexture( 'assets/textures/general/saver.gif' );
        annie2 = new TextureAnimator( runnerTexture, 2, 2, 4, 100 ); // texture, #horiz, #vert, #total, duration.
        var runnerMaterial = new THREE.MeshBasicMaterial( { map: runnerTexture, side:THREE.DoubleSide } );
        var runnerGeometry = new THREE.PlaneGeometry(5.1, 3.5, 1, 1);
        var runner = new THREE.Mesh(runnerGeometry, runnerMaterial);
        runner.rotation.x = -Math.PI/18;
        runner.position.set(0,2.4,-2.8);

        obj_pc.add(runner);

        obj_pc.interact = function () {

              if (!obj_pc.onair) {
                movieScreen.visible = true;
                runner.visible = false;
                navigator.getUserMedia({video: true}, gotStream, noStream);
                obj_pc.onair = true;
              }
              else {
                movieScreen.visible = false;
                runner.visible = true;
                obj_pc.onair = false;
                camvideo.onerror("turnedoff");
              }
        }

        return obj_pc;

    }
