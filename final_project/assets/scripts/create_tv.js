

    function create_tvcucina() {
       
        var appoggio = createMesh_simple(new THREE.BoxGeometry(4,.5,8),"wood_kitchen.jpg");
        var tv = get_obj("tv.obj","tv.mtl");     
        tv.scale.set(2,2,1.5);

        var runnerTexture = new THREE.ImageUtils.loadTexture( 'assets/textures/general/nosign.gif' );
        annie = new TextureAnimator( runnerTexture, 2, 2, 4, 75 ); // texture, #horiz, #vert, #total, duration.
        var runnerMaterial = new THREE.MeshBasicMaterial( { map: runnerTexture, side:THREE.DoubleSide } );
        var runnerGeometry = new THREE.PlaneGeometry(6, 3.5, 1, 1);
        var runner = new THREE.Mesh(runnerGeometry, runnerMaterial);
        runner.visible = false;

        runner.position.set(0,3.25,.14);
        tv.isonplay = false;

        var contatto = new THREE.Mesh(new THREE.CylinderGeometry(.15,.15,.2,32,32), 
                                      new THREE.MeshPhongMaterial({color: 0x505050,metal:true,shininess:200}));
        contatto.rotation.x = Math.PI/2;
        contatto.position.set(-.8,.9,.1);

        var obj_tv = new THREE.Object3D();
        obj_tv.add(tv);
        obj_tv.add(contatto);
        obj_tv.add(runner);
        obj_tv.contact = contatto;

        obj_tv.position.y = .2;
        obj_tv.rotation.y = -(Math.PI*5)/8;

        var nosignsound = Sound("nosign",0.01,true);

        obj_tv.interact = function () {
              if(!tv.isonplay1) {
                  runner.visible = true;
                  nosignsound.play();
                  tv.isonplay1 = true;
              } else {
                  runner.visible = false;
                  nosignsound.pause();
                  tv.isonplay1 = false;
              }
        }

        var completo = new THREE.Object3D();
        completo.add(appoggio);
        completo.add(obj_tv);

        completo.appoggio = appoggio;
        completo.obj_tv = obj_tv;

        return completo;
    }

function TextureAnimator(texture, tilesHoriz, tilesVert, numTiles, tileDispDuration) 
    { 
      // note: texture passed by reference, will be updated by the update function.
        
      this.tilesHorizontal = tilesHoriz;
      this.tilesVertical = tilesVert;
      // how many images does this spritesheet contain?
      //  usually equals tilesHoriz * tilesVert, but not necessarily,
      //  if there at blank tiles at the bottom of the spritesheet. 
      this.numberOfTiles = numTiles;
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
      texture.repeat.set( 1 / this.tilesHorizontal, 1 / this.tilesVertical );

      // how long should each image be displayed?
      this.tileDisplayDuration = tileDispDuration;

      // how long has the current image been displayed?
      this.currentDisplayTime = 0;

      // which image is currently being displayed?
      this.currentTile = 0;
        
      this.update = function( milliSec )
      {
        this.currentDisplayTime += milliSec;
        while (this.currentDisplayTime > this.tileDisplayDuration)
        {
          this.currentDisplayTime -= this.tileDisplayDuration;
          this.currentTile++;
          if (this.currentTile == this.numberOfTiles)
            this.currentTile = 0;
          var currentColumn = this.currentTile % this.tilesHorizontal;
          texture.offset.x = currentColumn / this.tilesHorizontal;
          var currentRow = Math.floor( this.currentTile / this.tilesHorizontal );
          texture.offset.y = currentRow / this.tilesVertical;
        }
      };
    }