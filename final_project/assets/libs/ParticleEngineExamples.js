/**
* @author Lee Stemkoski   http://www.adelphi.edu/~stemkoski/
*/

/* 
	Particle Engine options:
	
	positionBase   : new THREE.Vector3(),
	positionStyle : Type.CUBE or Type.SPHERE,

	// for Type.CUBE
	positionSpread  : new THREE.Vector3(),

	// for Type.SPHERE
	positionRadius  : 10,
	
	velocityStyle : Type.CUBE or Type.SPHERE,

	// for Type.CUBE
	velocityBase       : new THREE.Vector3(),
	velocitySpread     : new THREE.Vector3(), 

	// for Type.SPHERE
	speedBase   : 20,
	speedSpread : 10,
		
	accelerationBase   : new THREE.Vector3(),
	accelerationSpread : new THREE.Vector3(),
		
	particleTexture : THREE.ImageUtils.loadTexture( 'images/star.png' ),
		
	// rotation of image used for particles
	angleBase               : 0,
	angleSpread             : 0,
	angleVelocityBase       : 0,
	angleVelocitySpread     : 0,
	angleAccelerationBase   : 0,
	angleAccelerationSpread : 0,
		
	// size, color, opacity 
	//   for static  values, use base/spread
	//   for dynamic values, use Tween
	//   (non-empty Tween takes precedence)
	sizeBase   : 20.0,
	sizeSpread : 5.0,
	sizeTween  : new Tween( [0, 1], [1, 20] ),
			
	// colors stored in Vector3 in H,S,L format
	colorBase   : new THREE.Vector3(0.0, 1.0, 0.5),
	colorSpread : new THREE.Vector3(0,0,0),
	colorTween  : new Tween( [0.5, 2], [ new THREE.Vector3(0, 1, 0.5), new THREE.Vector3(1, 1, 0.5) ] ),

	opacityBase   : 1,
	opacitySpread : 0,
	opacityTween  : new Tween( [2, 3], [1, 0] ),
	
	blendStyle    : THREE.NormalBlending (default), THREE.AdditiveBlending

	particlesPerSecond : 200,
	particleDeathAge   : 2.0,		
	emitterDeathAge    : 60	
*/

Examples =
{
	
	smoke :
	{
		positionStyle    : Type.CUBE,
		positionBase     : new THREE.Vector3( 0, 4.5, 0 ),
		positionSpread   : new THREE.Vector3( 2.5, 0, 2.5 ),

		velocityStyle    : Type.CUBE,
		velocityBase     : new THREE.Vector3( 0, 150, 0 ),
		velocitySpread   : new THREE.Vector3( 80, 50, 80 ), 
		accelerationBase : new THREE.Vector3( 0,-10,0 ),
		
		particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/general/smokeparticle.png'),

		angleBase               : 720,
		angleSpread             : 0,
		angleVelocityBase       : 720,
		angleVelocitySpread     : 0,
								//dim iniziale-dim finale
		sizeTween    : new Tween( [0, .5], [2, 32]),
		opacityTween : new Tween( [0.8, 2], [0.5, 0] ),
		colorTween   : new Tween( [1, 0], [ new THREE.Vector3(1,1,1), new THREE.Vector3(1, 1, 1) ] ),

		particlesPerSecond : 720,
		particleDeathAge   : 0.05,		
		emitterDeathAge    : 60
	},

	clouds :
	{
		positionStyle  : Type.CUBE,
		positionBase   : new THREE.Vector3( -50, 300,  -50 ),
		positionSpread : new THREE.Vector3(    0,  50, 300 ),
		
		velocityStyle  : Type.CUBE,
		velocityBase   : new THREE.Vector3( 40, 0, 0 ),
		velocitySpread : new THREE.Vector3( 20, 0, 0 ), 
		
		particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/general/smokeparticle.png'),

		sizeBase     : 80.0,
		sizeSpread   : 100.0,
		colorBase    : new THREE.Vector3(0.0, 0.0, 1.0), // H,S,L
		opacityTween : new Tween([0,1,4,5],[0,1,1,0]),

		particlesPerSecond : 50,
		particleDeathAge   : 10.0,		
		emitterDeathAge    : 60
	}
}