from pyplasm import *
from scipy import *
from Esercizio1 import *

#Costruisco il modello 3D della struttura

base = PROD([fondamenta,Q(11.5)])
frontalisxdx = PROD([sporgenzefrontalisxdx,Q(6)])
primolivello = PROD([primopiano,Q(16.5)])
secondolivello = PROD([secondopiano,Q(19.5)])
rampeprimolivello = PROD([rampelateraliprimopiano,Q(13.5)])

#ziqq = STRUCT([base,frontalecentro,frontalisxdx,primolivello,rampeprimolivello,secondolivello])
#VIEW(ziqq)

#Accesso al punto di incrocio tra le scalinate
colonnaprinc = PROD([QUOTE([-28.8,6]),QUOTE([-15,6])])
colonne = PROD([QUOTE([-28.8,1,-4,1]),QUOTE([-15,1,-4,1])])
colonnaprinc = PROD([colonnaprinc,Q(11.5)])
colonne = PROD([colonne,QUOTE([-11.5,5])])
chiusacolonna = PROD([QUOTE([-28.8,6]),QUOTE([-15,6])])
chiusacolonna = PROD([chiusacolonna,QUOTE([-15.5,1])])
frontalecentro = STRUCT([colonnaprinc,colonne,chiusacolonna])

#Scale: rampe di 100 gradini
scalacentrale = [T([1])([(i*0.28)-0.28])(CUBOID([0.28,4,i*0.115])) for i in range(1,101)]
scala1 = STRUCT(scalacentrale)
scala1 = T([1,2])([0.8,16])(scala1)

scala2 = R([1,2])(PI)(scala1)
scala2 = T([1,2])([63.4,36])(scala2)

scala3 = R([1,2])(PI/2)(scala1)
scala3 = T([1,2])([50,0])(scala3)

#Scale: rampe laterali al primo piano
scalalateraleprimopiano = [T([1])([(i*0.2)-0.2])(CUBOID([0.2,4,i*0.133])) for i in range(1,16)]
scalalt1 = STRUCT(scalalateraleprimopiano)
scalalt1 = T([1,2,3])([17,20,11.5])(scalalt1)

scalalt2 = R([1,2])(PI)(scalalt1)
scalalt2 = T([1,2])([63.8,44])(scalalt2)

#Scale: rampe di accesso ai livelli superiori
scalaaccessosup1 = [T([1])([(i*0.2)-0.2])(CUBOID([0.2,4,i*0.238])) for i in range(1,21)] 
scalaaccessosecondolvl = STRUCT(scalaaccessosup1)
scalaaccessosecondolvl = R([1,2])(PI/2)(scalaaccessosecondolvl)
scalaaccessosecondolvl = T([1,2,3])([33.8,20,11.5])(scalaaccessosecondolvl)

scalaaccessosup2 = [T([1])([(i*0.2)-0.2])(CUBOID([0.2,4,i*0.3])) for i in range(1,11)]
scalaaccessoterzolvl = STRUCT(scalaaccessosup2)
scalaaccessoterzolvl = R([1,2])(PI/2)(scalaaccessoterzolvl)
scalaaccessoterzolvl = T([1,2,3])([33.8,26,16.5])(scalaaccessoterzolvl)

#Costruisco le pareti della ziggurat

#Parete lati piano terra
paretelatipt = PROD([QUOTE([3.03,-4]*6),Q(12)])
cimaparetelatipt = PROD([Q(38.2),QUOTE([-10,2])])

paretelatipt = STRUCT([paretelatipt,cimaparetelatipt])
paretelatipt = PROD([paretelatipt,Q(3)])
paretelatipt = R([2,3])(PI/2)(paretelatipt)
paretelatipt = R([1,2])(PI/2)(paretelatipt)

paretesxpt = R([3,1])(PI/25)(paretelatipt)
paretesxpt = T([1,2,3])([0.6,20,0.3])(paretesxpt)

paretedxpt = R([1,3])(PI/25)(paretelatipt)
paretedxpt = T([1,2])([60,20])(paretedxpt)

#VIEW(STRUCT([ziqq,paretesxpt,paretedxpt]))

#Parete retro piano terra
pareteretropt = PROD([QUOTE([3.7,-4]*8),Q(12)])
cimapareteretropt = PROD([Q(57.6),QUOTE([-10,2])])

pareteretropt = STRUCT([pareteretropt,cimapareteretropt])
pareteretropt = PROD([pareteretropt,Q(3)])
pareteretropt = R([2,3])(PI/2)(pareteretropt)
pareteretropt = R([2,3])(PI/25)(pareteretropt)
pareteretropt = T([1,2,3])([3,60,0.35])(pareteretropt)

#VIEW(pareteretropt)

#Parete lati primo piano
paretelatiprimopiano = PROD([QUOTE([2.53,-3]*6),Q(16.5)])
cimaparetelatiprimopiano = PROD([Q(30.2),QUOTE([-14.5,2])])

paretelatiprimopiano = STRUCT([paretelatiprimopiano,cimaparetelatiprimopiano])
paretelatiprimopiano = PROD([paretelatiprimopiano,Q(2)])
paretelatiprimopiano = R([2,3])(PI/2)(paretelatiprimopiano)
paretelatiprimopiano = R([1,2])(PI/2)(paretelatiprimopiano)

paretesxprimopiano = R([3,1])(PI/25)(paretelatiprimopiano)
paretesxprimopiano = T([1,2,3])([8,24,0.3])(paretesxprimopiano)

paretedxprimopiano = R([1,3])(PI/25)(paretelatiprimopiano)
paretedxprimopiano = T([1,2])([54,24])(paretedxprimopiano)

#VIEW(STRUCT([ziqq,paretesxpt,paretedxpt,pareteretropt,paretedxprimopiano,paretesxprimopiano]))

#Parete retro primo piano
pareteretroprimopiano = PROD([QUOTE([2.575,-3]*8),Q(16.5)])
cimapareteretroprimopiano = PROD([Q(41.6),QUOTE([-14.5,2])])

pareteretroprimopiano = STRUCT([pareteretroprimopiano,cimapareteretroprimopiano])
pareteretroprimopiano = PROD([pareteretroprimopiano,Q(2)])
pareteretroprimopiano = R([2,3])(PI/2)(pareteretroprimopiano)
pareteretroprimopiano = R([2,3])(PI/25)(pareteretroprimopiano)
pareteretroprimopiano = T([1,2,3])([11.2,57,0.35])(pareteretroprimopiano)

#VIEW(STRUCT([ziqq,paretesxpt,paretedxpt,pareteretropt,paretedxprimopiano,paretesxprimopiano,pareteretroprimopiano]))

#Parete lati secondo piano
paretelatisecondopiano = PROD([QUOTE([2.03,-2]*6),Q(19.5)])
cimaparetelatisecondopiano = PROD([Q(22.2),QUOTE([-18.5,1])])

paretelatisecondopiano = STRUCT([paretelatisecondopiano,cimaparetelatisecondopiano])
paretelatisecondopiano = PROD([paretelatisecondopiano,Q(2)])
paretelatisecondopiano = R([2,3])(PI/2)(paretelatisecondopiano)
paretelatisecondopiano = R([1,2])(PI/2)(paretelatisecondopiano)

paretesxsecondopiano = R([3,1])(PI/25)(paretelatisecondopiano)
paretesxsecondopiano = T([1,2,3])([16,28,0.3])(paretesxsecondopiano)

paretedxsecondopiano = R([1,3])(PI/25)(paretelatisecondopiano)
paretedxsecondopiano = T([1,2])([46,28])(paretedxsecondopiano)

#Parete retro secondo piano
pareteretrosecondopiano = PROD([QUOTE([1.45,-2]*8),Q(19.5)])
cimapareteretrosecondopiano = PROD([Q(25.6),QUOTE([-18.5,1])])

pareteretrosecondopiano = STRUCT([pareteretrosecondopiano,cimapareteretrosecondopiano])
pareteretrosecondopiano = PROD([pareteretrosecondopiano,Q(2)])
pareteretrosecondopiano = R([2,3])(PI/2)(pareteretrosecondopiano)
pareteretrosecondopiano = R([2,3])(PI/25)(pareteretrosecondopiano)
pareteretrosecondopiano = T([1,2,3])([19.2,53.5,0.35])(pareteretrosecondopiano)

#Aggiungo il tempio in cima

#entrata ad arco
def cerchio (p):
    u,v = p
    return v*COS(u), v*SIN(u)

domain2D = PROD([INTERVALS(PI)(32),INTERVALS(1)(3)])
semicirc = MAP(cerchio)(domain2D);
semicirc = T([1])([4])(semicirc)

#facciata con arco
facciata = PROD([Q(8),Q(3)])
facciata = DIFFERENCE([facciata,semicirc])
facciata = PROD([facciata,Q(1)])

#pareti
psx = PROD([Q(1),QUOTE([-1,7])])
pdx = PROD([QUOTE([-7,1]),QUOTE([-1,7])])
pbk = PROD([QUOTE([-1,6]),QUOTE([-7,1])])
fsx = PROD([QUOTE([3,-2,3]),Q(1)])

psx = PROD([psx,Q(7)])
pdx = PROD([pdx,Q(7)])
pbk = PROD([pbk,Q(7)])
fsx = PROD([fsx,Q(5)])

facciata = R([2,3])(PI/2)(facciata)
facciata = T([2,3])([1,5])(facciata)

tetto = PROD([Q(8),QUOTE([-1,7])])
tetto = PROD([tetto,Q(1)])
tetto = T([3])([7])(tetto)

tempio = STRUCT([psx,pdx,pbk,fsx,facciata,tetto])
tempio = S(3)(0.8)(tempio)
tempio = T([1,2,3])([28,49,19.5])(tempio)

#Assemblo i pezzi e visualizzo

ziqq = STRUCT([base,frontalecentro,frontalisxdx,primolivello,rampeprimolivello,secondolivello,scala1,scala2,scalalt1,scalalt2,scalaaccessosecondolvl,scalaaccessoterzolvl])
ziggurat=STRUCT([ziqq,paretesxpt,paretedxpt,pareteretropt,paretedxprimopiano,paretesxprimopiano,pareteretroprimopiano,paretesxsecondopiano,paretedxsecondopiano,pareteretrosecondopiano])
#Errore nel posizionamento della struttura.Ho considerato male le misure della scala, quindi
#prima di aggiungere questa ho traslato sulle Y tutta la struttura
ziggurat = T([2])([13.8])(ziggurat)
ziggurat = STRUCT([ziggurat,scala3,tempio])

VIEW(ziggurat)
