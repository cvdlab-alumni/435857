function initialize_outside (scene,controls) {
	
	scala = create_stair();
	scala.position.set(48,0,4);
	scene.add(scala);

	scala.contact.first = scala;

	scala.interact = function() {
		var tween3 = new TWEEN.Tween(controls.getObject().position)
							 .to({x:48,y:48,z:-5},100);	
		var tween2 = new TWEEN.Tween(controls.getObject().position)
							 .to({x:48,y:48,z:5},1000)
							 .chain(tween3);
		var tween = new TWEEN.Tween(controls.getObject().position)
							 .to({x:48,z:5},1000)
							 .chain(tween2)
							 .start();
	}
}

/*
function initialize_clouds() {

	engine2 = new ParticleEngine();
    engine2.setValues( Examples.clouds );

}*/