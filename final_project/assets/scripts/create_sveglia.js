    function create_sveglia() {

        var obj_sveglia = new THREE.Object3D();

        var sveglia = get_obj("Digital Alarm Clock.obj","Digital Alarm Clock.mtl");
        sveglia.scale.set(.25,.25,.25);
        obj_sveglia.add(sveglia);

        var ora_geom = new THREE.PlaneGeometry(1.2,.5);
        var ora_mat = new THREE.MeshPhongMaterial();
        var ora_texture = THREE.ImageUtils.loadTexture("assets/textures/general/sveglia.gif");
        ora_mat.side = THREE.DoubleSide;
        ora_mat.map = ora_texture;
        var orario = new THREE.Mesh(ora_geom,ora_mat);
        orario.position.y = .46;
        orario.position.z = .6;
        obj_sveglia.add(orario);

        var pulsante = new THREE.Mesh(new THREE.BoxGeometry(1.4,.1,.5),
                       new THREE.MeshPhongMaterial({color:0x909090,metal:true,shininess:200}));
        pulsante.position.y = .8;
        obj_sveglia.add(pulsante);

        obj_sveglia.contact = pulsante;
        obj_sveglia.orario = orario;
        obj_sveglia.orario.visible = false;
        obj_sveglia.ringing = false;

        var suono = Sound("sveglia",0.2,false);

        obj_sveglia.interact = function () {
          if(!obj_sveglia.ringing) {
            suono.play();
            obj_sveglia.orario.visible = true;
            obj_sveglia.ringing = true;
          } else {
            suono.pause();
            obj_sveglia.ringing = false;
          }
        }

        return obj_sveglia;
    }