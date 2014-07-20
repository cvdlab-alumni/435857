function initialize_kitchen_stuff(scene) {

	    forn = create_fornello();
        forn.position.set(44,0,-101.5);

        forn.pentolone.engine.positionBase = new THREE.Vector3(forn.position.x-3,forn.position.y+15,
                                                               forn.position.z-2);

        forn.contact = forn.fornello.contatto;
        forn.forno.contact.first = forn.forno;
        forn.contact.first = forn;

        forn.acceso = false;
        forn.fornello.fuoco.visible = false;

        forn.interact = function () {
            if(!forn.acceso) {
                forn.fornello.fuoco.visible = true;
                forn.pentolone.bolli();
                forn.acceso = true;
            } else {
                forn.fornello.fuoco.visible = false;
                forn.pentolone.stop_bolli();
                forn.acceso = false;
            }

        }

        forn.contact2 = forn.objcontatto;
        forn.contact2.first = forn.obj_water_glass;
        scene.add(forn);

        appoggiotvcucina = create_tvcucina();
        appoggiotvcucina.obj_tv.contact.first = appoggiotvcucina.obj_tv;
        appoggiotvcucina.position.set(64,18,-77);
        scene.add(appoggiotvcucina); 
}