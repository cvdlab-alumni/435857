from pyplasm import *

""" Dalle informazioni ottenute, le misure della ziggurat di Ur sono 63x42 metri
	e si sviluppa in 3 livelli fino a raggiungere i 26 metri di altezza (tempio compreso)

	I 63x42 metri non tengono contro della struttura frontale con le 3 scalinate da 100
	gradini ciascuna, che quindi ampliano ulteriormente le misure della struttura.
"""

#Creo la base della ziggurat
fondamenta = PROD([QUOTE([-3,57.6]),QUOTE([-20,38.2])])

#Le due sporgenze frontali che includono la scalinata centrale
sporgenzefrontalisxdx = PROD([QUOTE([-17.8,12,-4,12]),QUOTE([-10,10])])

#La struttura che sorregge il punto di incontro tra le due scalinate laterali, e quella centrale
sporgenzafrontalecentro = PROD([QUOTE([-28.8,6]),QUOTE([-15,6])])

#Creo il primo piano della ziggurat
primopiano = PROD([QUOTE([-11,41.6]),QUOTE([-24,30.2])])

#Creo il secondo piano della ziggurat
secondopiano = PROD([QUOTE([-19,25.6]),QUOTE([-28,22.2])])

#Creo le rampe laterali al primo piano
rampelateraliprimopiano = PROD([QUOTE([-19.8,10,-4,10]),QUOTE([-20,4])])

#Creo le rampe laterali al piano terra
rampelateralipianoterra = PROD([QUOTE([-3,25.8,-6,25.8]),QUOTE([-16,4])])

#Creo la rampa centrale al piano terra
rampacentralepianoterra = PROD([QUOTE([-29.8,4]),QUOTE([15])]) 

#Creo il tempo visto dall'alto
tempio = PROD([QUOTE([-27.8,8]),QUOTE([-35.1,8])])

#COLORAZIONE
fondamenta = COLOR(RED)(fondamenta)
sporgenzefrontalisxdx = COLOR(BLUE)(sporgenzefrontalisxdx)
sporgenzafrontalecentro = COLOR(BLACK)(sporgenzafrontalecentro)
primopiano = COLOR(GREEN)(primopiano)
secondopiano = COLOR(YELLOW)(secondopiano)
rampelateraliprimopiano = COLOR(BROWN)(rampelateraliprimopiano)
tempio = COLOR(BLACK)(tempio)
#Qui utilizzo T()()() per traslare leggermente in z le rampe, in quanto
#il colore viene coperto (non sono riuscito a trovare una soluzione)
rampelateralipianoterra = COLOR(ORANGE)(T([3])([0.3])(rampelateralipianoterra))
rampacentralepianoterra = COLOR(ORANGE)(rampacentralepianoterra)

floor0 = T([3])([11.5])(STRUCT([fondamenta,sporgenzefrontalisxdx,sporgenzafrontalecentro,rampelateralipianoterra,rampacentralepianoterra]))

floor1 = T([3])([16.5])(STRUCT([primopiano,rampelateraliprimopiano]))

floor2 = T([3])([19.5])(STRUCT([secondopiano,tempio])) 

floors25D = STRUCT([floor0,floor1,floor2])
floors25D = R([2,3])(3*PI/2)(floors25D)
#VIEW(floors25D)