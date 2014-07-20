        function render() { 
            var dt = clock.getDelta();
            step += 0.002;
            annie.update(1000 * dt);
            annie2.update(1000 * dt);

            if(dinamic) {
            sole.position.y = 400*(Math.sin(step));
            sole.position.x = 400*(Math.cos(step));
            }

            directLight.position = sole.position;
            
            if (FPCon === true) {
                animate();
            }

            if(sole.position.y <0) {
                if(FPCon && aliens && !is_in_house(controls)) {
                    if(is_on_victim(ufo,controls)) {
                        document.getElementById("abducted").style.display="block";
                        controls.enabled = false;
                        dinamic = false;
                        var tween = new TWEEN.Tween(controls.getObject().position).to({y:200},12000).start();
                        setTimeout(function(){location.reload();},8000);
                    }
                    update_ufo_position(ufo,controls);
                    aliensound.play();
                }
                else if(FPCon && aliens && is_in_house(controls)) {goaway_ufo(ufo);aliensound.pause();} 
                scene.remove(giorno);
                scene.add(notte);
                extlight1.intensity = .5;
                extlight2.intensity = .5;
            } else {
                if(FPCon && aliens) {goaway_ufo(ufo);aliensound.pause();}               
                scene.remove(notte);
                scene.add(giorno);
                extlight1.intensity = 0;
                extlight2.intensity = 0;
            }
            
            if(mirror1_ena) {
                mirrorCube.visible = false;
                mirrorCubeCamera.updateCubeMap( renderer, scene );
                mirrorCube.visible = true;
            }
            if(mirror2_ena) {
                mirrorCube2.visible = false;
                mirrorCubeCamera2.updateCubeMap( renderer, scene );
                mirrorCube2.visible = true;
            }
            
            if(forn.acceso) 
                forn.pentolone.engine.update( dt * 0.1 );
            
            /*if(clouds) 
                engine2.update(dt * 0.1); */

            if ( video.readyState === video.HAVE_ENOUGH_DATA ) {
                video.videoImageContext.drawImage( video, 0, 0 );
                if ( video.videoTexture ) 
                    video.videoTexture.needsUpdate = true;
            }

            if ( video_web.readyState === video_web.HAVE_ENOUGH_DATA ) {
                video_web.videoImageContext.drawImage( video_web, 0, 0, video_web.videoImage.width, video_web.videoImage.height );
                if ( video_web.videoTexture ) 
                    video_web.videoTexture.needsUpdate = true;
            }
                requestAnimationFrame( render );
                renderer.render( scene, camera );
                trackballControls.update();
                TWEEN.update();

        }


        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function onDocumentMouseDown (event) {
          event.preventDefault();
          if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
         
             var vector = new THREE.Vector3(0,0, -1);
              projector.unprojectVector(vector, camera);

              var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();
              
              var raycaster = new THREE.Raycaster(controls.getObject().position,cameraDirection,0,30); 

              var intersects = raycaster.intersectObjects(interactable);
              if (intersects.length > 0) {
                intersects[0].object.first.interact();         
              }
          } else {
            var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
            projector.unprojectVector(vector, camera);

            var raycaster = new THREE.Raycaster(camera.position, 
            vector.sub(camera.position).normalize());
            var intersects = raycaster.intersectObjects(interactable);
                if (intersects.length > 0) {
                  intersects[0].object.first.interact();         
                }
            }
        }