function initialize_ufo(scene) {
        
        ufo = get_obj("flying Disk flying.obj","flying_Disk_flying.mtl");
        ufo.scale.set(.1,.1,.1);
        ufo.position.set(-1200,200,0);
        scene.add(ufo);
}

function update_ufo_position(ufo,controls) {
	    var tween = new TWEEN.Tween(ufo.position)
                             .to({x:controls.getObject().position.x,y:200,z:controls.getObject().position.z},1000)
                             .start();
}

function goaway_ufo(ufo) {
	    var tween = new TWEEN.Tween(ufo.position)
                             .to({x:-1200,y:200,z:0},5000)
                             .start();
} 



function initialize_alienSymbol(scene) {
        var quadro1_geom = new THREE.PlaneGeometry(5,5);
        var quadro1_mat = new THREE.MeshPhongMaterial();
        var quadro1_texture = THREE.ImageUtils.loadTexture("assets/textures/general/alien.png");
        quadro1_mat.side = THREE.DoubleSide;
        quadro1_mat.map = quadro1_texture;
        aliensymbol = new THREE.Mesh(quadro1_geom,quadro1_mat);
        aliensymbol.rotation.x = Math.PI/2;
        aliensymbol.position.set(78.4,30.02,-112);
        scene.add(aliensymbol);

        aliensymbol.contact = aliensymbol;
        aliensymbol.contact.first = aliensymbol;

        aliensymbol.interact = function() {
            aliens = true;
            aliensound = Sound("ufo",0.5,true);
            document.getElementById("advertisement").style.display="block";
            setTimeout(function(){document.getElementById("advertisement").style.display="none";},5000);
        }

}

function is_in_house(controls) {
    return ((controls.getObject().position.x <101)&&(controls.getObject().position.x > 0) &&
            (controls.getObject().position.z <0)&&(controls.getObject().position.z > -150.5) &&
            controls.getObject().position.y<30);
}

function is_on_victim(ufo,controls) {
    return ((Math.abs(ufo.position.x-controls.getObject().position.x)<2)&&
            (Math.abs(ufo.position.z-controls.getObject().position.z)<2)&& !is_in_house(controls));

}