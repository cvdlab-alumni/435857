    function createMesh_simple(geom, imageFile, bump) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
        geom.computeVertexNormals();
        var mat = new THREE.MeshLambertMaterial();
        mat.side = THREE.DoubleSide;
        mat.map = texture;

        if (bump) {
          var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
          mat.bumpMap = bump;
          mat.bumpScale = 0.2;
        }

        var mesh = new THREE.Mesh(geom, mat);

        return mesh;
    }


    function createMesh(geom, imageFile, bump) {
      var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.x = 80;
      texture.repeat.y = 80;
      geom.computeVertexNormals();
      var mat = new THREE.MeshPhongMaterial();
      mat.map = texture;
      mat.side = THREE.DoubleSide;

      if (bump) {
          var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
          bump.wrapS = THREE.RepeatWrapping;
          bump.wrapT = THREE.RepeatWrapping;
          bump.repeat.x = 80;
          bump.repeat.y = 80;
          mat.bumpMap = bump;
          mat.bumpScale = 0.5;
      }

      var mesh = new THREE.Mesh(geom, mat);
      return mesh;
    }


    function get_obj(name_obj,name_mtl) {
      var loader = new THREE.OBJMTLLoader();
      var obj = new THREE.Object3D();
      loader.addEventListener('load', function (event) {
        obj.add(event.content);
      });

      loader.load("assets/models/" + name_obj, 
                  "assets/models/" + name_mtl,
                  {side: THREE.DoubleSide});
      return obj;
    }


    function get_video(nome_video,videoImage_width,videoImage_height,movie_screen_x,movie_screen_y) {

        var video, videoImage, videoImageContext, videoTexture;
        
        // create the video element
        video = document.createElement( 'video' );
        video.src = "assets/videos/" + nome_video + ".avi";
        video.load(); 
           
        videoImage = document.createElement( 'canvas' );
        videoImage.width = videoImage_width;
        videoImage.height = videoImage_height;

        videoImageContext = videoImage.getContext( '2d' );
        // background color if no video present
        videoImageContext.fillStyle = '#ffffff';
        videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );
        video.videoImageContext = videoImageContext;

        videoTexture = new THREE.Texture( videoImage );
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        video.videoTexture = videoTexture;

        var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
        // the geometry on which the movie will be displayed;
        //    movie image will be scaled to fit these dimensions.
        var movieGeometry = new THREE.PlaneGeometry( movie_screen_x, movie_screen_y, 4, 4 );
        var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
        movieScreen.visible = false;

        return [movieScreen,video];
    }



    function add_skybox(urls) {
        var skyGeometry = new THREE.BoxGeometry( 1000, 1000, 1000 ); 
  
        var materialArray = [];
        for (var i = 0; i < 6; i++)
          materialArray.push( new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture(urls[i]), side: THREE.BackSide}));
        var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
        return skyBox;
    }