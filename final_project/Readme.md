#Edoardo Carra (435857)
##Computational Graphics Final Project

###Project Organization
####Folders
* **source**: LARR model of the house and obj export of it  
* **libs**: THREE.js and javascript libraries used
* **model**: all the obj models imported in the scene 
* **scripts**: all the js scripts for the creation, import, animation, positioning and rendering of all the elements in the scene 
* **sounds**: all the .mp3 file used in the project
# **textures**: texture and bump images used
# **videos**: .avi file used

####Scripts
* **"create" scripts**: which contains all the functions wrote by me to create the objects to add to the scene like doors,windows,libraries,wardrobes and other stuff i'll describe later 
* **"initialize" scripts**: which contains all the functions that call che "create" functions, and put the output in the correct position inside the scene 
* **"support" scripts**: functions called by the create functions to add details to the object created like add sounds, texture with bumps and videos
* **control**: which contain the control GUI of the scene
* **load_house_struct**: "the obj converted LARR model" import function
* **fun_render**: Render() function and some "event driven" function

###Main Features
* **Dinamic day night effect**: The time flows dinamically with around 60 seconds of light and 60 of dark. 
* **Dinamic skybox**: The time determines the skybox applied to the scene (day-time style or night-time style)
* **Time-driven event**: if activated, an event will start and take place every night
* **Variable camera control**: the camera can be changed from a static one to a First Person Camera control
* **Not totally linear ambient**: we can move to different surface like the house's roof
* **Real mirrors in the bathroom and the entrance**
* **Animated Objects**: using the TWEEN library
* **Webcam used on an object inside the scene**
* **Objects with sounds**: some object will make noise if you inteact with them  
* **Control GUI**: Added a panel from which we can add or remove the mirrors and the roof, switch from day-time to night-time, change camera style of turn on/off the TrackBall controls

###Animations
* Doors and windows will open/close by touching them
* Lights will turn on/off by pressing the correct switch
* An old gramophone will play the vinyl you choice 
* A projector will play a video on the screen if you touch it
* The projector screen can be raised or lowered
* You can turn on the kitchen TV, but you will see that there's no signal
* Interacting with the kitchen sink, you can fill a glass of water
* By turning on the kitchen stove, you will make some water boil inside a pot (this will cause some steam in the kitchen)
* If you touch the ovel, you will find a pizza turning 
* A sliding wardrobe (accordion effect) may be open or cloed by touching it
* A computer with a screen saver can be activated, turning on the webcam
* A Newton's Cradle will move if you touch it
* An alarm Clock will wake you up if you touch it
* Be clean, flush the toilet when you've done!
* A washing machine can be opened or turned on by touching it

###A little event 
When you switch to the first person control, new objects and animations will be added to the scene. One of these objects allows you to activate an event taking place every night starting from the moment you touch it.


