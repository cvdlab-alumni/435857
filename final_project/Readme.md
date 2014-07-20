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
# ##"create" scripts##: which contains all the functions wrote by me to create the objects to add to the scene like doors,windows,libraries,wardrobes and other stuff i'll describe later 
# ##"initialize" scripts##: which contains all the functions that call che "create" functions, and put the output in the correct position inside the scene 
# ##"support" scripts##: functions called by the create functions to add details to the object created like add sounds, texture with bumps and videos
# ##control##: which contain the control GUI of the scene
# ##load_house_struct##: "the obj converted LARR model" import function
# ##fun_render##: Render() function and some "event driven" function

###Main Features
# ##Dinamic day night effect##: The time flows dinamically with around 60 seconds of light and 60 of dark. 
# ##Dinamic skybox##: The time determines the skybox applied to the scene (day-time style or night-time style)
# ##Time-driven event##: if activated, an event will start and take place every night
# ##Variable camera control##: the camera can be changed from a static one to a First Person Camera control
# ##Not totally linear ambient##: we can move to different surface like the house's roof
# ##Real mirrors in the bathroom and the entrance##
# ##Animated Objects##: using the TWEEN library
# ##Control GUI##: Added a panel from which we can add or remove the mirrors and the roof, switch from day-time to night-time, change camera style of turn on/off the TrackBall controls


