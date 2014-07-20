function load_house_struct(house) {
		var loader = new THREE.OBJLoader();
      	loader.load('source/home.obj', function (obj) {
        var material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.FlatShading, });
        material.side = THREE.DoubleSide;

        obj.traverse(function (child) {
          	if (child instanceof THREE.Mesh) {
         	    child.material = material;
         	  }
        });
            mesh = obj;
            obj.scale.set(10, 10, 10);
            house.add(obj);
      	});
}