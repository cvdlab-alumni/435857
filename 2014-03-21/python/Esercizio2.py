from pyplasm import *

#Definisco la faccia nord della ziggurat  X,Z

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
frontefondamenta = COLOR(RED)(frontefondamenta)
fronteprimopiano = COLOR(GREEN)(fronteprimopiano)
frontesecondopiano = COLOR(YELLOW)(frontesecondopiano)
rampasx = COLOR(ORANGE)(rampasx)
rampadx = COLOR(ORANGE)(rampadx)
rampact = COLOR(ORANGE)(T([3])([0.5])(rampact))
sporgenzacentrale = COLOR(BLACK)(T([3])([0.3])(sporgenzacentrale))
sporgenzelaterali = COLOR(BLUE)(T([3])([0.3])(sporgenzelaterali)) 
tempio = COLOR(BLACK)(tempio)

#INVERTIRE GLI ASSI PER OTTENERE X-Z
nord = STRUCT([frontefondamenta,fronteprimopiano,frontesecondopiano,rampact,rampadx,rampasx,sporgenzacentrale,sporgenzelaterali,tempio])
#VIEW(nord)

#Definisco la faccia sud della ziggurat  X,Z
frontefondamenta = PROD([Q(57.6),Q(11.5)])
fronteprimopiano = PROD([QUOTE([-8,41.6]),QUOTE([-11.5,5])])
frontesecondopiano = PROD([QUOTE([-16,25.6]),QUOTE([-16.5,3])])
tempio = PROD([QUOTE([-25.8,6]),QUOTE([-19.5,6])])

frontefondamenta = COLOR(RED)(frontefondamenta)
fronteprimopiano = COLOR(GREEN)(fronteprimopiano)
frontesecondopiano = COLOR(YELLOW)(frontesecondopiano)
tempio = COLOR(BLACK)(tempio)

sud = STRUCT([frontefondamenta,fronteprimopiano,frontesecondopiano,tempio])
#VIEW(sud)


#Definisco la faccia ovest della ziggurat  X,Z
frontefondamenta = PROD([Q(38.2),Q(11.5)])
fronteprimopiano = PROD([QUOTE([-4,30.2]),QUOTE([-11.5,5])])
frontesecondopiano = PROD([QUOTE([-8,22.2]),QUOTE([-16.5,3])])
tempio = PROD([QUOTE([-16.1,6]),QUOTE([-19.5,6])])

scalelaterali = PROD([QUOTE([-38.2,4]),QUOTE([11.5])])
scalafrontale = MKPOL([[[42.2,0],[42.2,11.5],[57.2,0]],[[1,2,3]],[[None]]])
sporgenzafrontale = PROD([QUOTE([-42.2,6]),Q(6)])
sporgenzacentrale = PROD([QUOTE([-37.2,6]),Q(16.5)])

frontefondamenta = COLOR(RED)(T([3])([0.2])(frontefondamenta))
fronteprimopiano = COLOR(GREEN)(fronteprimopiano)
frontesecondopiano = COLOR(YELLOW)(frontesecondopiano)
tempio = COLOR(BLACK)(tempio)
scalelaterali = COLOR(ORANGE)(scalelaterali)
scalafrontale = COLOR(ORANGE)(scalafrontale)
sporgenzafrontale = COLOR(BLUE)(sporgenzafrontale)
sporgenzacentrale = COLOR(BLACK)(sporgenzacentrale)

ovest = STRUCT([frontefondamenta,fronteprimopiano,frontesecondopiano,tempio,scalafrontale,sporgenzacentrale,sporgenzafrontale,scalelaterali])
#VIEW(ovest)

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
frontefondamenta = COLOR(RED)(T([3])([0.2])(frontefondamenta))
fronteprimopiano = COLOR(GREEN)(fronteprimopiano)
frontesecondopiano = COLOR(YELLOW)(frontesecondopiano)
tempio = COLOR(BLACK)(tempio)
scalelaterali = COLOR(ORANGE)(scalelaterali)
scalafrontale = COLOR(ORANGE)(scalafrontale)
sporgenzafrontale = COLOR(BLUE)(sporgenzafrontale)
sporgenzacentrale = COLOR(BLACK)(sporgenzacentrale)

est = STRUCT([frontefondamenta,fronteprimopiano,frontesecondopiano,tempio,scalafrontale,sporgenzacentrale,sporgenzafrontale,scalelaterali])
#VIEW(est)

# Aggrego le facciate in un unica struttura 2.5D

est = R([1,3])(3*PI/2)(est)
aggregato = STRUCT([T([3])(58.2)(nord),sud,T([1,3])([57.6,58.2])(est),R([1,3])(PI/2)(ovest)])

VIEW(aggregato)
