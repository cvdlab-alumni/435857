from pyplasm import *
from exercise1 import *

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

# Punto raccolta del vigneto

piattaforma = CUBOID([15,8,0.2])
raccolta = STRUCT([psx,pdx,pbk,fsx,facciata,tetto])
raccolta = T([1,2])([50,100])(raccolta)
piattaforma = S([1,2,3])([1.5,1.5,1.5])(T([1,2])([50,100])(piattaforma))
raccolta = S([1,2,3])([1.5,1.5,1.5])(raccolta)
raccolta = COLOR([0.95,0.4,0.4])(STRUCT([raccolta,piattaforma]))

def cerchio (p):
    u,v = p
    return v*COS(u), v*SIN(u)

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

zona_ziggurat = STRUCT([murapzazigg,stradepzmag,magazzino,murapzact,murapzmag,circ,T([1,2])([13.2,9])(ziggurat),stradepzaziggurat])
zona_ziggurat = STRUCT([T([1,2])([100,100])(zona_ziggurat),terreno,raccolta])



VIEW(zona_ziggurat)



