from larcc import *
from pyplasm import *
from scipy import *
from exercise1 import *
from exercise3 import *

terreno = PROD([Q(200),Q(200)])
terreno = COLOR([0.9,0.4,0.2])(terreno)

# Mura piazza ziggurat
murosx = PROD([Q(5),QUOTE([-5,90])])
murodx = PROD([QUOTE([-85,5]),QUOTE([-5,90])])
muroup = PROD([Q(90),QUOTE([-90,5])])

#entrata ad arco
def cerchio (p):
    u,v = p
    return v*COS(u), v*SIN(u)

domain2D = PROD([INTERVALS(PI)(32),INTERVALS(1)(3)])
semicirc = MAP(cerchio)(domain2D);
semicirc = T([1])([4])(semicirc)

#ingresso con arco
facciata = PROD([Q(8),Q(3)])
facciata = DIFFERENCE([facciata,semicirc])
facciata = PROD([facciata,Q(5)])
facciata = R([2,3])(PI/2)(facciata)
facciata = T([2,3])([5,5])(facciata)

fsx = PROD([QUOTE([3,-2,3]),Q(5)])
fsx = PROD([fsx,Q(5)])

sup = PROD([Q(8),Q(5)])
sup = PROD([sup,Q(10)])
sup = T([3])(8)(sup)

ingresso = STRUCT([sup,fsx,facciata])

#torri laterali
tls = PROD([Q(5),Q(5)])
tld = PROD([QUOTE([-85,5]),Q(5)])

tls = PROD([tls,Q(25)])
tld = PROD([tld,Q(25)])

#innalzo le mura

mfsx = PROD([QUOTE([-5,36]),Q(5)])
mfdx = PROD([QUOTE([-49,36]),Q(5)])

muroup = PROD([muroup,Q(15)])
murodx = PROD([murodx,Q(15)])
murosx = PROD([murosx,Q(15)])
mfdx = PROD([mfdx,Q(15)])
mfsx = PROD([mfsx,Q(15)])

murapzazigg = STRUCT([muroup,murodx,murosx,tls,tld,mfdx,mfsx,T([1])([41])(ingresso)])

# Strade pza centrale
stradarampacentrale = T([2])([-80])(PROD([QUOTE([-43,4]),Q(90)])) # Allungo la via in modo che arrivi anche nella piazza centrale
stradarampalateralesx = PROD([Q(4),Q(37.8)])
stradarampalateralesx = T([1,2])([10,5])(stradarampalateralesx)
stradarampalateraledx = T([1])([66])(stradarampalateralesx)
stradaprincipaleraccordo = PROD([QUOTE([-10,70]),QUOTE([-5,4])])

stradepzaziggurat = STRUCT([stradarampacentrale,stradarampalateralesx,stradarampalateraledx,stradaprincipaleraccordo])

# Mura piazza centrale 
ingressoctfront = STRUCT([mfdx,mfsx,T([1])([41])(ingresso)])
muroctsx = T([2])([5])(R([1,2])(-PI/2)(ingressoctfront))
muroctdx = T([2])([-85])(murodx)
ingressoctfront = STRUCT([mfdx,mfsx,T([1])([41])(ingresso)])
ingressoctfront = T([2])([-80])(ingressoctfront)

murapzact = STRUCT([muroctsx,muroctdx,ingressoctfront])

# Mura piazza magazzino
muropmfront = T([1])([-85])(ingressoctfront)
muropmsx = T([1])([-85])(muroctsx)
muropmup = T([1])([10])(R([1,2])(PI/2)(murosx))

murapzmag = STRUCT([muropmsx,muropmfront,muropmup])

# Strada piazza magazzino 
stradapzamag = T([1,2])([-15,-85])(R([1,2])(PI/2)(stradarampacentrale))
stradapzamag2 = PROD([Q(4),Q(50)])
stradapzamag2 = T([1,2])([-15,-65])(stradapzamag2)
stradapzamag3 = PROD([Q(55),Q(4)])
stradapzamag3 = T([1,2])([-66,-65])(stradapzamag3)
stradapzamag4 = T([1])([-55])(stradapzamag2) 
stradapzamag5 = T([2])([46])(stradapzamag3)
stradapzamag6 = PROD([Q(4),Q(18)])
stradapzamag6 = T([1,2])([-42,-80])(stradapzamag6)
stradapzamag7 = PROD([Q(18),Q(4)])
stradapzamag7 = T([1,2])([-85,-42])(stradapzamag7)

stradepzmag = STRUCT([stradapzamag,stradapzamag2,stradapzamag3,stradapzamag4,stradapzamag5,stradapzamag6,stradapzamag7])

# Magazzino
bs = PROD([Q(40),Q(10)])
up = PROD([Q(40),QUOTE([-20,10])])

inm = PROD([QUOTE([5,-5,5,-5,5,-5,5]),QUOTE([-10,10])])

magazzino = T([1,2])([-60,-55])(PROD([STRUCT([bs,up,inm]),Q(10)]))

# Piazzetta
domain2D = PROD([INTERVALS(2*PI)(32),INTERVALS(20)(3)])
circ = MAP(cerchio)(domain2D);
circ = T([1,2])([45,-40])(circ)

#coloro elementi

murapzazigg = COLOR([0.5,0.4,0.2])(murapzazigg)
magazzino = COLOR([0.95,0.4,0.4])(magazzino)
murapzact = COLOR([0.5,0.4,0.2])(murapzact)
murapzmag = COLOR([0.5,0.4,0.2])(murapzmag)

stradepzaziggurat = COLOR([0.9,0.95,0.3])(stradepzaziggurat)
stradepzmag = COLOR([0.9,0.95,0.3])(stradepzmag)
circ = COLOR([0.9,0.95,0.3])(circ)

#ziggurat_plan = STRUCT([murapzazigg,stradepzmag,magazzino,murapzact,murapzmag,circ,T([1,2])([13.2,9])(ziggurat),stradepzaziggurat,raccolta])
#ziggurat_plan = STRUCT([T([1,2])([100,100])(ziggurat_plan),terreno])

#VIEW(ziggurat_plan)

zona_ziggurat = STRUCT([murapzazigg,stradepzmag,magazzino,murapzact,murapzmag,circ,T([1,2])([13.2,9])(ziggurat),stradepzaziggurat])
zona_ziggurat = STRUCT([T([1,2])([100,100])(zona_ziggurat),terreno])


# COMPONENTI DI ARRICCHIMENTO, ESERCIZIO 4

#FUNZIONI UTILI

def cerchio (p):
    u,v = p
    return v*COS(u), v*SIN(u)

def distanzaorigine(x,y) : return sqrt(x**2 + y**2)

def pic():
	i=0
	y=[]
	while i<50:
		x=[random.uniform(-15,15),random.uniform(-15,15)]
		if distanzaorigine(x[0],x[1]) <= 15 : 
			y.append(x) 
			i+=1
	return y    

# Piazzetta
domain2D = PROD([INTERVALS(2*PI)(32),INTERVALS(20)(3)])
circ = MAP(cerchio)(domain2D);
circ = T([1,2])([45,-40])(circ)

# Erba Aiuola
domain22D = PROD([INTERVALS(2*PI)(32),INTERVALS(16)(3)])
circ2 = COLOR([0,0.3,0])(MAP(cerchio)(domain22D))
circ2 = T([1,2,3])([45,-40,0.5])(circ2)

# Recinto Aiuola
recintol = larPizza([0.5, 16])([8,48])
recintol = STRUCT(MKPOLS(recintol))
recintos = larPizza([0.5, 15])([8,48])
recintos = STRUCT(MKPOLS(recintos))
recinto = DIFFERENCE([recintol,recintos])
recinto = COLOR(GRAY)(T([1,2,3])([45,-40,0.5])(recinto))
circ = COLOR([0.9,0.95,0.3])(circ)

aiuola = STRUCT([circ,circ2,recinto])


#VIEW(STRUCT([zonaziggurat,T([1,2])([100,100])(aiuola)]))

#Aggiungo gli alberi
tronco = larRod([.25,3])([32,1])
tronco = COLOR([0.55,0.25,0.1])(STRUCT(MKPOLS(tronco)))

chioma1 = larBall(1)([18,36])
chioma1 = STRUCT(MKPOLS(chioma1))
chioma1 = T([3])([3])(chioma1)

chioma2 = larBall(0.75)([18,36])
chioma2 = STRUCT(MKPOLS(chioma2))
chioma2 = T([3])([4.2])(chioma2)

chioma3 = larBall(0.5)([18,36])
chioma3 = STRUCT(MKPOLS(chioma3))
chioma3 = T([3])([5.2])(chioma3)

chioma = STRUCT([chioma1,chioma2,chioma3])
albero = STRUCT([tronco,COLOR([0.2,0.55,0])(chioma)])

#VIEW(albero)

#Dispongo qualche albero nella aiuola

# randomizzo la disposizione: 

ptitree = pic();

alberi = T([1,2])([-14,-5])(albero)
for x in ptitree :
	temp = T([1,2])([x[0],x[1]])(albero)
	alberi = STRUCT([alberi,temp])

alberi = T([1,2,3])([45,-40,0.5])(alberi)

aiuola = STRUCT([aiuola,alberi])


#Vigneto

foglie = COLOR([0.2,0.55,0])(CUBOID([50,1,2]))
tronchi = STRUCT(NN(11)([STRUCT(MKPOLS(larRod([.25,1])([32,1]))),T([1])(5)]))

foglie = T([2,3])([-0.5,1])(foglie)

vigna = STRUCT([foglie,COLOR([0.55,0.25,0.1])(tronchi)])

vigneto = STRUCT(NN(25)([vigna,T([2])([3])]))
vigneto = T([1,2])([20,115])(vigneto)

piattaforma = CUBOID([15,8,0.2])
raccolta = STRUCT([psx,pdx,pbk,fsx,facciata,tetto])
raccolta = T([1,2])([50,100])(raccolta)
piattaforma = S([1,2,3])([1.5,1.5,1.5])(T([1,2])([50,100])(piattaforma))
raccolta = S([1,2,3])([1.5,1.5,1.5])(raccolta)
raccolta = STRUCT([raccolta,piattaforma])

vigneto = STRUCT([vigneto,COLOR([0.95,0.4,0.4])(raccolta)])

#VIEW(vigneto)

#Vasi e panchine

#Per i vasi faccio un solido di rotazione con riferimento agli esempi offerti dalla cartella pyplasm

n1 = 64  
n2 = 64  

def dom(n): 
    return INTERVALS(1)(n)

def ROTATIONALSOLID (args):
    section = args
    def map_fn(point):
	u, v, w = point
	x, y, z = section([u, v])
	ret = [x*math.cos(w), x*math.sin(w), z]
	return ret
    return map_fn
  
c0 = BEZIER(S1)([[0, 0, 0], [0, 0, 3]])
c1 = BEZIER(S1)([[2, 0, 0], [4, 0, 1], [0, 0, 2], [1, 0, 3]])
dom1D = dom(n1)
profile0 = MAP(c0)(dom1D)
profile1 = MAP(c1)(dom1D)
profiles = STRUCT([profile0, profile1])

section = BEZIER(S2)([c1, c0])
dom2D = PROD(AA(dom)([n2, 1]))

domain = PROD([dom2D, S(1)(2*PI)(dom1D)])
vaso = COLOR([0.85,0.45,0.1])(MAP(ROTATIONALSOLID(section))(domain))

#vaso su centro di raccolta
vasocracc = T([1,2])([92,156])(vaso)

#vasi nel magazzino
vasomag1 = T([1,2])([40,88])(vaso)
vasimag = NN(4)([vasomag1,T([1])([13])])

vasi = STRUCT([vasocracc,STRUCT(vasimag)])

#composizione elementi e stampa

urban_fittings = STRUCT([small_area_plan,T([1,2])([100,100])(aiuola),vigneto,vasi])

VIEW(urban_fittings)
