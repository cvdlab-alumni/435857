function initialize_room1_stuff(scene) {
	armadio = create_armsoff();
        armadio.rotation.y = Math.PI;
        armadio.position.set(22.5,12,-49.2);
        scene.add(armadio);

        pc = create_webcam();
        pc.rotation.y = Math.PI;
        pc.position.set(46,10.5,-49);
        scene.add(pc);

        pc.contact.first = pc;
        video_web = pc.video;
        armadio.complex.contact.first = armadio.complex;

        balls = create_palline();
        balls.position.set(52,11,-45);
        balls.contact.first = balls;
        scene.add(balls);
}