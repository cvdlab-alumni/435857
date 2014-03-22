from pyplasm import *
from Esercizio1 import *

#Definisco la faccia nord della ziggurat

#visuale davanti del primo piano
frontefondamenta = PROD([Q(57.6),Q(11.5)])
fronteprimopiano = PROD([QUOTE([-8,41.6]),QUOTE([-11.5,5])])
frontesecondopiano = PROD([QUOTE([-16,25.6]),QUOTE([-16.5,3])])

#Rampe di scale vista da davanti
rampasx = MKPOL([[[0,0],[26.8,0],[26.8,11.5]],[[1,2,3]],[[None]]])
rampadx = MKPOL([[[57.6,0],[30.8,0],[30.8,11.5]],[[1,2,3]],[[None]]])
rampact = PROD([QUOTE([-26.8,4]),Q(11.5)])

#sporgenze laterali + sporgenza centrale
sporgenzelaterali = PROD([QUOTE([-14.8,12,-4,12]),Q(6)])
sporgenzacentrale = PROD([QUOTE([-25.8,6]),QUOTE([16.5])])
aperturasporgenzacentrale = PROD([QUOTE([-27.8,2]),QUOTE([-11.5,2.5])])
sporgenzacentrale = STRUCT([sporgenzacentrale,COLOR(WHITE)(aperturasporgenzacentrale)])

#tempio
tempio = PROD([QUOTE([-25.8,6]),QUOTE([-19.5,6])])
aperturatempio = PROD([QUOTE([-27.8,2]),QUOTE([-19.5,2.5])])
tempio = STRUCT([tempio,COLOR(WHITE)(aperturatempio)])

#Colorazione
frontefondamenta = COLOR([0.9,0.95,0.3])(frontefondamenta)
fronteprimopiano = COLOR([0.95,0.4,0.4])(fronteprimopiano)
frontesecondopiano = COLOR([0.95,0.4,0.4])(frontesecondopiano)
rampasx = COLOR([0.9,0.95,0.3])(rampasx)
rampadx = COLOR([0.9,0.95,0.3])(rampadx)
rampact = COLOR([0.9,0.95,0.3])(T([3])([0.5])(rampact))
sporgenzacentrale = COLOR([0.3,0.5,0.8])(T([3])([0.3])(sporgenzacentrale))
sporgenzelaterali = COLOR([0.98,0.98,0.5])(T([3])([0.3])(sporgenzelaterali)) 
tempio = COLOR([0.3,0.5,0.8])(tempio)

north = STRUCT([frontefondamenta,fronteprimopiano,frontesecondopiano,rampact,rampadx,rampasx,sporgenzacentrale,sporgenzelaterali,tempio])
#VIEW(north)

#Definisco la faccia sud della ziggurat  X,Z

frontefondamenta = PROD([Q(57.6),Q(11.5)])
fronteprimopiano = PROD([QUOTE([-8,41.6]),QUOTE([-11.5,5])])
frontesecondopiano = PROD([QUOTE([-16,25.6]),QUOTE([-16.5,3])])
tempio = PROD([QUOTE([-25.8,6]),QUOTE([-19.5,6])])

frontefondamenta = COLOR([0.9,0.95,0.3])(frontefondamenta)
fronteprimopiano = COLOR([0.95,0.4,0.4])(fronteprimopiano)
frontesecondopiano = COLOR([0.95,0.4,0.4])(frontesecondopiano)
tempio = COLOR([0.3,0.5,0.8])(tempio)

south = STRUCT([frontefondamenta,fronteprimopiano,frontesecondopiano,tempio])
#VIEW(south)


#Definisco la faccia ovest della ziggurat  X,Z
frontefondamenta = PROD([Q(38.2),Q(11.5)])
fronteprimopiano = PROD([QUOTE([-4,30.2]),QUOTE([-11.5,5])])
frontesecondopiano = PROD([QUOTE([-8,22.2]),QUOTE([-16.5,3])])
tempio = PROD([QUOTE([-16.1,6]),QUOTE([-19.5,6])])

scalelaterali = PROD([QUOTE([-38.2,4]),QUOTE([11.5])])
scalafrontale = MKPOL([[[42.2,0],[42.2,11.5],[57.2,0]],[[1,2,3]],[[None]]])
sporgenzafrontale = PROD([QUOTE([-42.2,6]),Q(6)])
sporgenzacentrale = PROD([QUOTE([-37.2,6]),Q(16.5)])

frontefondamenta = COLOR([0.9,0.95,0.3])(frontefondamenta)
fronteprimopiano = COLOR([0.95,0.4,0.4])(fronteprimopiano)
frontesecondopiano = COLOR([0.95,0.4,0.4])(frontesecondopiano)
tempio = COLOR([0.3,0.5,0.8])(tempio)
scalelaterali = COLOR([0.9,0.95,0.3])(scalelaterali)
scalafrontale = COLOR([0.9,0.95,0.3])(scalafrontale)
sporgenzafrontale = COLOR([0.98,0.98,0.5])(sporgenzafrontale)
sporgenzacentrale = COLOR([0.3,0.5,0.8])(sporgenzacentrale)

west = STRUCT([frontefondamenta,fronteprimopiano,frontesecondopiano,tempio,scalafrontale,sporgenzacentrale,sporgenzafrontale,scalelaterali])
#VIEW(west)

#Definisco la faccia est della ziggurat X,Z
frontefondamenta = PROD([QUOTE([-19,38.2]),Q(11.5)])
fronteprimopiano = PROD([QUOTE([-23,30.2]),QUOTE([-11.5,5])])
frontesecondopiano = PROD([QUOTE([-27,22.2]),QUOTE([-16.5,3])])

tempio = PROD([QUOTE([-35.1,6]),QUOTE([-19.5,6])])

scalelaterali = PROD([QUOTE([-15,4]),QUOTE([11.5])])
scalafrontale = MKPOL([[[0,0],[15,0],[15,11.5]],[[1,2,3]],[[None]]])

sporgenzacentrale = PROD([QUOTE([-14,6]),Q(16.5)])
sporgenzafrontale = PROD([QUOTE([-9,6]),Q(6)])

#colorazione
frontefondamenta = COLOR([0.9,0.95,0.3])(T([3])([0.2])(frontefondamenta))
fronteprimopiano = COLOR([0.95,0.4,0.4])(fronteprimopiano)
frontesecondopiano = COLOR([0.95,0.4,0.4])(frontesecondopiano)
tempio = COLOR([0.3,0.5,0.8])(tempio)
scalelaterali = COLOR([0.9,0.95,0.3])(scalelaterali)
scalafrontale = COLOR([0.9,0.95,0.3])(scalafrontale)
sporgenzafrontale = COLOR([0.98,0.98,0.5])(sporgenzafrontale)
sporgenzacentrale = COLOR([0.3,0.5,0.8])(sporgenzacentrale)

east = STRUCT([frontefondamenta,fronteprimopiano,frontesecondopiano,tempio,scalafrontale,sporgenzacentrale,sporgenzafrontale,scalelaterali])
#VIEW(east)

# Aggrego le facciate in un unica struttura 2.5D

east = R([1,3])(3*PI/2)(east)
facciate25D = STRUCT([T([3])(38)(north),south,T([1,3])([57.6,58.2])(east),R([1,3])(PI/2)(west)])
#VIEW(facciate25D)

#Creo il mockup 3D: prendo la pianta della struttura vista dall'alto e la aggrago 
# con le facciate 

mock_up_3D = STRUCT([facciate25D,T([1,3])([-3,58])(two_and_half_model)])

VIEW(mock_up_3D)
