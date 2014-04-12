from larcc import *
from scipy import *


#Prendo il modello del vecchio homework:

#Costruisco il modello 3D della struttura

base = INSR(PROD)([QUOTE([-3,57.6]),QUOTE([-20,38.2]),Q(11.5)])
frontalisxdx = INSR(PROD)([QUOTE([-17.8,12,-4,12]),QUOTE([-10,10]),Q(6)])
primolivello = INSR(PROD)([QUOTE([-11,41.6]),QUOTE([-24,30.2]),Q(16.5)])
secondolivello = INSR(PROD)([QUOTE([-19,25.6]),QUOTE([-28,22.2]),Q(19.5)])
rampeprimolivello = INSR(PROD)([QUOTE([-19.8,10,-4,10]),QUOTE([-20,4]),Q(13.5)])

#VIEW(ziqq)

#Accesso al punto di incrocio tra le scalinate
colonnaprinc = PROD([QUOTE([-28.8,6]),QUOTE([-15,6])])
colonne = PROD([QUOTE([-28.8,1,-4,1]),QUOTE([-15,1,-4,1])])
colonnaprinc = PROD([colonnaprinc,Q(11.5)])
colonne = PROD([colonne,QUOTE([-11.5,5])])
chiusacolonna = PROD([QUOTE([-28.8,6]),QUOTE([-15,6])])
chiusacolonna = PROD([chiusacolonna,QUOTE([-15.5,1])])
frontalecentro = STRUCT([colonnaprinc,colonne,chiusacolonna])

#Scale: rampe di 100 gradini + corrimano
scalacentrale = [T([1])([(i*0.28)-0.28])(CUBOID([0.28,4,i*0.115])) for i in range(1,101)]
scala0 = STRUCT(scalacentrale)
scala0 = T([1,2])([0.8,16])(scala0)

corrimano = MKPOLS([[[0,0],[0,0.3],[28,0],[27.72,11.8],[28,11.8],[0,0]],[[1,2,3,4,5]]])

corrimano = STRUCT(corrimano)
corrimano = PROD([corrimano,Q(1)])
corrimano = R([2,3])(PI/2)(corrimano)
corrimano1 = T([1,2])([0.8,16])(corrimano)

scala1 = STRUCT([corrimano1,scala0])

#------------------------------------//

corrimano2 = R([1,2])(PI)(corrimano)
scala2 = R([1,2])(PI)(scala0)
scala2 = T([1,2])([63.6,36])(scala2)
scala2 = STRUCT([T([1,2])([62.8,15])(corrimano2),scala2])

#------------------------------------//

corrimano3a = R([1,2])(PI/2)(corrimano)
scala3 = R([1,2])(PI/2)(scala0)
scala3 = T([1,2])([49.8,0])(scala3)
scala3 = STRUCT([scala3,T([1,2])([28.8,0.8])(corrimano3a),T([1,2])([33.8,0.8])(corrimano3a)])


#Scale: rampe laterali al primo piano
scalalateraleprimopiano = [T([1])([(i*0.2)-0.2])(CUBOID([0.2,3,i*0.133])) for i in range(1,16)]
scalalateraleprimopiano = STRUCT(scalalateraleprimopiano)

corrimanolt = MKPOLS([[[0,0],[0,0.3],[3,0],[3,1.995],[2.8,1.995],[0,0]],[[1,2,3,4,5]]])

corrimanolt = STRUCT(corrimanolt)
corrimanolt = PROD([corrimanolt,Q(1)])
corrimanolt = R([2,3])(PI/2)(corrimanolt)
corrimano1lt = T([1,2,3])([16.8,21,11.5])(corrimanolt)

scalalt1 = T([1,2,3])([16.8,21,11.5])(scalalateraleprimopiano)
scalalt1f = STRUCT([scalalt1,corrimano1lt])

#---------------------------//

scalalt2 = R([1,2])(PI)(scalalt1)
corrimano2lt = R([1,2])(PI)(corrimano1lt)
scalalt2 = T([1,2])([63.6,45])(scalalt2)
scalalt2f = STRUCT([scalalt2,T([1,2])([63.6,41])(corrimano2lt)])

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

#cupola del tempio: utilizzo larBall con un parametro cambiato per generare la semisfera

def larSfera(radius=1):
	def larSfera0(shape=[18,36]):
		V,CV = larIntervals(shape)([PI,PI])
		V = translatePoints(V,[-PI/2,-PI])
		domain = V,CV
		x = lambda V : [radius*COS(p[0])*SIN(p[1]) for p in V]
		y = lambda V : [radius*COS(p[0])*COS(p[1]) for p in V]
		z = lambda V : [radius*SIN(p[0]) for p in V]
		return larMap([x,y,z])(domain)
	return larSfera0

def larPalla(radius=1):
	def larPalla0(shape=[18,36]):
		V,CV = checkModel(larSfera(radius)(shape))
		return V,[range(len(V))]
	return larPalla0


cupola = larPalla(3)([18,36])
cupola = T([1,2,3])([-8,4,4])(STRUCT(MKPOLS(cupola)))
cupola = R([1,3])(-PI/2)(cupola)

tempio = STRUCT([psx,pdx,pbk,fsx,facciata,tetto,cupola])
tempio = S(3)(0.8)(tempio)
tempio = T([1,2,3])([28,49,19.5])(tempio)

#Assemblo i pezzi e visualizzo

paretipianoterra = COLOR([0.9,0.95,0.3])(STRUCT([paretesxpt,paretedxpt,pareteretropt]))
paretiprimopiano = COLOR([0.95,0.4,0.4])(STRUCT([paretedxprimopiano,paretesxprimopiano,pareteretroprimopiano]))
paretisecondopiano = COLOR([0.95,0.4,0.4])(STRUCT([paretesxsecondopiano,paretedxsecondopiano,pareteretrosecondopiano]))
scalepianoterra = COLOR([0.9,0.95,0.3])(STRUCT([scala1,scala2])) 
scaleprimopiano = COLOR([0.95,0.4,0.4])(STRUCT([scalalt1f,scalalt2f,scalaaccessosecondolvl]))
scalesecondopiano = COLOR([0.95,0.4,0.4])(scalaaccessoterzolvl)
ziqq = STRUCT([COLOR([0.98,0.98,0.5])(base),COLOR([0.3,0.5,0.8])(frontalecentro),COLOR([0.98,0.98,0.5])(secondolivello),COLOR([0.98,0.98,0.5])(frontalisxdx),COLOR([0.98,0.98,0.5])(primolivello),COLOR([0.98,0.98,0.5])(rampeprimolivello)])
ziggurat=STRUCT([ziqq,scalesecondopiano,scaleprimopiano,scalepianoterra,paretisecondopiano,paretiprimopiano,paretipianoterra])
#Errore nel posizionamento della struttura.Ho considerato male le misure della scala, quindi
#prima di aggiungere questa ho traslato sulle Y tutta la struttura
ziggurat = T([2])([13.8])(ziggurat)
ziggurat = STRUCT([ziggurat,COLOR([0.9,0.95,0.3])(scala3),COLOR([0.3,0.5,0.8])(tempio)])

#VIEW(ziggurat)

# Esercizio 1

# Modello 3D dei piani della struttura
# Lascio solamente le scale di accesso ai vari piani, considero le scalinate di accesso come una porta, che quindi rappresentero nel secondo esercizio

floors = STRUCT([COLOR([0.98,0.98,0.5])(base),COLOR([0.98,0.98,0.5])(secondolivello),COLOR([0.98,0.98,0.5])(frontalisxdx),COLOR([0.98,0.98,0.5])(primolivello),COLOR([0.98,0.98,0.5])(rampeprimolivello),scalesecondopiano,scaleprimopiano])
floors = T([2])([13.8])(floors)
horizontal_partitions = STRUCT([floors,COLOR([0.3,0.5,0.8])(tempio)])

VIEW(horizontal_partitions)

