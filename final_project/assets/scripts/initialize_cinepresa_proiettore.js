function initialize_cinepresa_proiettore(scene) {
	    cinepresa = create_camera();
        cinepresa.contact.first = cinepresa;
        cinepresa.position.set(35,14,-140);
        cinepresa.texture_video.rotation.y = Math.PI;
        cinepresa.texture_video.position.set(35,16,-107.61);
        video = cinepresa.video_movie;

        scene.add(cinepresa.texture_video);
        scene.add(cinepresa);

        //Aggiungo proiettore
        proiettore = create_projector();
        proiettore.contact.first = proiettore;
        proiettore.rotation.y = Math.PI;
        proiettore.position.set(35,5,-106)
        scene.add(proiettore);
}