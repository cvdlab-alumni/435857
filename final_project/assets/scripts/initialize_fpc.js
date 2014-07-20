var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

if (havePointerLock) {

 var element = document.body;

 var pointerlockchange = function(event) {
   if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
     FPCon = true;
     controls.enabled = true;
     controls.getObject().position.set(0, 0, 0);
     initialize_ufo(scene);
     initialize_outside(scene,controls);
     initialize_alienSymbol(scene);
     interactable.push(aliensymbol.contact);
     interactable.push(scala.contact);
     ray = new THREE.Raycaster();
     ray.ray.direction.set( 0, -1, 0 );
     $("#pointer").fadeIn(1000);
   } else {
     location.reload();
   }
 }

 var pointerlockerror = function(event) {
   location.reload();
 }

 document.addEventListener('pointerlockchange', pointerlockchange, false);
 document.addEventListener('mozpointerlockchange', pointerlockchange, false);
 document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

 document.addEventListener('pointerlockerror', pointerlockerror, false);
 document.addEventListener('mozpointerlockerror', pointerlockerror, false);
 document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

 var startFP = function() {
   trackballControls.reset();
   camera.position.set(0, 0, 0);
   controls = new THREE.PointerLockControls(camera);
   scene.add(controls.getObject());
   element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
   if (/Firefox/i.test(navigator.userAgent)) {
     var fullscreenchange = function(event) {
       if (document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element) {
         document.removeEventListener('fullscreenchange', fullscreenchange);
         document.removeEventListener('mozfullscreenchange', fullscreenchange);
         element.requestPointerLock();
       }
     }
     document.addEventListener('fullscreenchange', fullscreenchange, false);
     document.addEventListener('mozfullscreenchange', fullscreenchange, false);
     element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
     element.requestFullscreen();
   } else {
     element.requestPointerLock();
   }
 };

}

function animate() {
    controls.isOnObject( false );
    ray.ray.origin.copy( controls.getObject().position );
    ray.ray.origin.y -= 0;
    var intersections = ray.intersectObjects( objects );
    if ( intersections.length > 0 ) {
        var distance = intersections[ 0 ].distance;
        if ( distance > 0 && distance < 18 ) {
            controls.isOnObject( true );
        }
    }

    controls.update();
}