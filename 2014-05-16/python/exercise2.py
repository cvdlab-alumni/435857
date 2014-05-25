from larcc import *
from exercise1 import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])

master2 = S(1)(-1)(master)

base = PROD([QUOTE([-16,8]),Q(8.8)])
base = PROD([base,Q(0.3)])

apertura = PROD([QUOTE([-17.5,5]),QUOTE([-7,1.5])])

base = DIFFERENCE([base,PROD([apertura,Q(0.3)])])

#aggiungo corrimano alla base
p_c = [[0,0],[0.5,0],[0.5,0.1],[0,0.1]]
c_c = [[1,2,3,4]];
pil = T([1])([0.2])(CUBOID([0.1,1.6,0.1]))
corrim = MKPOL([p_c,c_c,None])
corrim = T([2])([1.6])(PROD([corrim,Q(0.1)]))
corrimano = STRUCT([corrim,pil])
corrimano_p = STRUCT(NN(10)([corrimano,T([1])([0.5])]))
corrimano_p = MAP([S1,S3,S2])(corrimano_p)
corrimano_p = T([1,2])([17.5,6.8])(corrimano_p)
base = STRUCT([corrimano_p,base])

#aggiungo parete centrale alla base, e vi inserisco una finestra

parete = assemblyDiagramInit([3,1,3])([[2,2,4],[0.3],[1.9,.6,.2]])

toMerge = 4
diagram = assemblyDiagramInit([3,4,3])([[.1,1.8,.1],[0.05,0.1,0.05,0.1],[.1,.4,.1]])
parete = diagram2cell(diagram,parete,toMerge)

toRemove = [41,42,43,17,18,19,29,30,31,27,21]
parete = parete[0],[cell for k,cell in enumerate(parete[1]) if not (k in toRemove)]  

parete = MKPOLS(parete) #parete portone

parete[20] = MATERIAL([1,1,1,0.1,0,0,0.8,0.5,1,1,1,0.1,1,1,1,0.2,100])(parete[20])	
for x in [0,1,2,3,4,5,6,7] :
	parete[x] = COLOR(Color4f([(1),(0.9),(0.80)]))(parete[x])
left = [cell for cell,k in enumerate(parete) if not (cell in [0,1,2,3,4,5,6,7,20])]
for x in left :
	parete[x] = COLOR(Color4f([0.52,0.25,0.05]))(parete[x])	

parete = STRUCT(parete)
parete = T([1,2,3])([16,8.5,0.3])(parete)

#aggiungo finestra sulla parete


#aggiungo parete lato ascensore
parete_l_a = assemblyDiagramInit([3,1,2])([[3.7,.6,3.7],[0.3],[1.8,.9]])
toRemove = [2]
parete_l_a = parete_l_a[0],[cell for k,cell in enumerate(parete_l_a[1]) if not (k in toRemove)]  
parete_l_a = STRUCT(MKPOLS(parete_l_a))
parete_l_a = T([1,3])([16,0.3])(parete_l_a)
base = STRUCT([base,parete_l_a])

#Colorazione Base
base = COLOR(Color4f([(1),(0.9),(0.80)]))(base)
base = STRUCT([base,parete])
piano = STRUCT([master,base,T([1])(40)(master2)])

piani = STRUCT(NN(5)([piano,T([3])([3])]))

#SCALE
pedata = 0.5 # pedata 
alzata = 0.3 # alzata  
p = [[0,0],[pedata,0.3],[pedata,0.3+alzata],[0,0.3+alzata]];
c = [[1,2,3,4]];
scalino = MKPOL([p,c,None]);
scalinoEstruso = PROD([scalino,Q(1.5)]);
#aggiungo corrimano 
p_c = [[0,0],[pedata,0.3],[pedata,0.4],[0,0.1]]
c_c = [[1,2,3,4]];
pil = T([1])([0.2])(CUBOID([0.1,1.2,0.1]))
corrim = MKPOL([p_c,c_c,None])
corrim = T([2])([1])(PROD([corrim,Q(0.1)]))
corrimano = STRUCT([corrim,pil])
corrimano = T([2,3])([0.3+alzata,0.1])(corrimano)
scalinoEstruso = STRUCT([scalinoEstruso,corrimano])
scalini = STRUCT(NN(10)([scalinoEstruso,T([1,2])([pedata,0.3])]));
#scambio assi
scalinir = MAP([S1,S3,S2])(scalini);
stairs1 = T([1,2])([17.5,7])(scalinir);
scale = STRUCT(NN(4)([stairs1,T([3])([3])]))
scale = COLOR(Color4f([(1),(0.9),(0.80)]))(scale)
piani = STRUCT([piani,scale])

#Base piano terra

#pareti piano terra
parete_1 = assemblyDiagramInit([1,1,1])([[.3],[8.8],[2.7]])
parete_2 = assemblyDiagramInit([3,1,2])([[19.7,.6,19.7],[0.3],[1.8,.9]])
toRemove = [2]
parete_2 = parete_2[0],[cell for k,cell in enumerate(parete_2[1]) if not (k in toRemove)]  
parete_4 = assemblyDiagramInit([1,1,1])([[40],[0.3],[2.7]])

parete_1 = STRUCT(MKPOLS(parete_1)) #parete retro
parete_2 = STRUCT(MKPOLS(parete_2)) #parete ascensore
parete_4 = STRUCT(MKPOLS(parete_4)) #parete fronte

parete_1 = T([1])([39.7])(parete_1)
parete_4 = T([2])([8.5])(parete_4)

pareti_base = STRUCT([parete_1,parete_2,parete_4])
pareti_base = COLOR(Color4f([(1),(0.9),(0.80)]))(pareti_base)

#costruisco la parete lato portone a parte
parete_3 = assemblyDiagramInit([1,3,2])([[.3],[3.4,2,3.4],[2,.7]])
toMerge = 2
diagram = assemblyDiagramInit([4,6,3])([[0.05,0.1,0.05,0.1],[0.2,0.6,0.2,0.2,0.6,0.2],[0.2,1.6,0.2]])
parete_3 = diagram2cell(diagram,parete_3,toMerge)

toRemove = [22,19,16,13,10,7,21,18,15,12,9,6,20,17,14,11,8,5,27,63,36,72]
parete_3 = parete_3[0],[cell for k,cell in enumerate(parete_3[1]) if not (k in toRemove)]  

parete_3 = MKPOLS(parete_3) #parete portone
parete_3[34] = MATERIAL([1,1,1,0.1,0,0,0.8,0.5,1,1,1,0.1,1,1,1,0.2,100])(parete_3[34])	
parete_3[25] = MATERIAL([1,1,1,0.1,0,0,0.8,0.5,1,1,1,0.1,1,1,1,0.2,100])(parete_3[25])	

left = [cell for cell,k in enumerate(parete_3) if not (cell in [34,25,0,1,2,3,4])]
for x in left :
	parete_3[x] = COLOR(Color4f([0.52,0.25,0.05]))(parete_3[x])	
for x in [0,1,2,3,4] :
	parete_3[x] = COLOR(Color4f([(1),(0.9),(0.80)]))(parete_3[x])

pomello_sx = T([1,2,3])([.02,4.5,1])(pomello)
pomello_dx = T([1,2,3])([.02,4.3,1])(pomello)

parete_3 = STRUCT(parete_3)
parete_3 = STRUCT([parete_3,pomello_sx,pomello_dx])

pareti_base = STRUCT([pareti_base,parete_3])

pareti_base = T([1,2,3])([3,3,.9])(pareti_base)
#fine pareti base

#piano terra

piano_terra_1 = PROD([Q(46),Q(14.8)])
piano_terra_1 = PROD([piano_terra_1,Q(0.3)])
piano_terra_2 = PROD([Q(44),Q(12.8)])
piano_terra_2 = PROD([piano_terra_2,Q(0.3)])
piano_terra_2 = T([1,2,3])([1,1,.3])(piano_terra_2)
piano_terra_3 = PROD([Q(42),Q(10.8)])
piano_terra_3 = PROD([piano_terra_3,Q(0.3)])
piano_terra_3 = T([1,2,3])([2,2,.6])(piano_terra_3)

piano_base_ascensore = PROD([Q(2.2),Q(1)])
piano_base_ascensore = T([1,2,3])([21.9,1,.6])(PROD([piano_base_ascensore,Q(0.3)]))
piano_base_ascensore = COLOR(Color4f([(1),(0.9),(0.80)]))(piano_base_ascensore)
piano_terra = STRUCT([piano_terra_1,piano_terra_2,piano_terra_3,piano_base_ascensore])

ground_floor = STRUCT([piano_terra,pareti_base])

#colonne portanti edificio

model = larRod(.5,2.7)([32,1])
model = STRUCT(MKPOLS(model))

colonna_ingresso_1 = T([1,2,3])([4,10.8,.9])(model)
colonna_ingresso_2 = T([1,2,3])([4,4,.9])(model)
colonna_ingresso_3 = T([1,2,3])([42,10.8,.9])(model)
colonna_ingresso_4 = T([1,2,3])([42,4,.9])(model)
colonna_ingresso_5 = T([1,2,3])([13.5,10.8,.9])(model)
colonna_ingresso_6 = T([1,2,3])([13.5,4,.9])(model)
colonna_ingresso_7 = T([1,2,3])([32.5,10.8,.9])(model)
colonna_ingresso_8 = T([1,2,3])([32.5,4,.9])(model)

ground_floor = STRUCT([ground_floor,colonna_ingresso_1,colonna_ingresso_2,colonna_ingresso_3,
					   colonna_ingresso_4,colonna_ingresso_5,colonna_ingresso_6,colonna_ingresso_7,
					   colonna_ingresso_8])
ground_floor = COLOR(Color4f([0.48,0.5,0.55]))(ground_floor)
#scala piano terra
scala_pt = T([1,2,3])([20.5,10,.6])(scalinir)
scala_pt = COLOR(Color4f([(1),(0.9),(0.80)]))(scala_pt)
ground_floor = STRUCT([ground_floor,scala_pt])

#ASCENSORE

diagram = assemblyDiagramInit([7,4,4])([[.3,.1,.4,.6,.4,.1,.3],[.3,.1,1.5,.1],[.1,1.7,1.1,.1]])

#tromba con ascensore
toRemove = [45,61,77,41,57,73,42,58,74]
diagram1 = diagram[0],[cell for k,cell in enumerate(diagram[1]) if not (k in toRemove)]  
diagram1 = MKPOLS(diagram1)
celle_ascensore = [40,53,66,24,79,25,80,37,50,63,
				   81,26,38,51,64,41,54,67]

for x in celle_ascensore: diagram1[x] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(diagram1[x])
left = [cell for cell,k in enumerate(diagram1) if not (cell in celle_ascensore)]

for x in left :
	diagram1[x] = COLOR(Color4f([(1),(0.9),(0.80)]))(diagram1[x])	
asc_base = STRUCT(diagram1)

#tromba senza ascensore
toRemove = [27,43,59,75,91,23,39,55,71,87,90,21,20,
			74,58,42,26,25,41,57,73,89,24,40,56,84,
			72,88,44,60,76,28,92,93,29,45,61,77,22,
			36,52,68,37,53,69,38,54,60,70,85,86]
diagram2 = diagram[0],[cell for k,cell in enumerate(diagram[1]) if not (k in toRemove)]  
diagram2 = MKPOLS(diagram2)
for x in range(len(diagram2)): diagram2[x] = COLOR(Color4f([(1),(0.9),(0.80)]))(diagram2[x])
asc_mid = STRUCT(diagram2)

#tromba senza ascensore cima
toRemove = [90,21,20,
			74,58,42,26,25,41,57,73,89,24,40,56,84,
			72,88,44,60,76,28,92,93,29,45,61,77,22,
			36,52,68,37,53,69,38,54,60,70,85,86]
diagram3 = diagram[0],[cell for k,cell in enumerate(diagram[1]) if not (k in toRemove)]  
diagram3 = MKPOLS(diagram3)
for x in range(len(diagram3)): diagram3[x] = COLOR(Color4f([(1),(0.9),(0.80)]))(diagram3[x])
asc_top = STRUCT(diagram3)

asc_base = T([1,2,3])([21.9,1,.9])(asc_base)
asc_mid = T([1,2,3])([21.9,1,3.9])(asc_mid)
asc_mid = STRUCT(NN(4)([asc_mid,T([3])([3])]))
asc_top = T([1,2,3])([21.9,1,15.9])(asc_top)
ascensore = STRUCT([asc_top,asc_mid,asc_base])
ground_floor = STRUCT([ground_floor,ascensore])


#Arricchimento piano terra: cassette della posta e vasi
diagram = assemblyDiagramInit([3,3,3])([[.02,.16,.02],[.02,.16,.02],[.02,.16,.02]])

toRemove = [16,13]
diagram = diagram[0],[cell for k,cell in enumerate(diagram[1]) if not (k in toRemove)]  

hpc = STRUCT(MKPOLS(diagram))

riga_posta = STRUCT(NN(10)([hpc,T([1])(.2)]))
riga_posta = STRUCT(NN(6)([riga_posta,T([3])(.2)]))

posta = T([1,2,3])([7.5,3.3,1.9])(riga_posta)

posta = COLOR(Color4f([0.6,0.33,0.2]))(posta)

ground_floor =  STRUCT([ground_floor,posta])

# Vasi

n1 = 25  
n2 = 25 

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
  
c1 = BEZIER(S1)([[0, 0, 0], [.8, 0, .5], [0, 0, .6], [.5, 0, .7]])
c2 = BEZIER(S1)([[.4, 0, 0], [.9, 0, .5], [.5, 0, .6], [.6, 0, .7]])

dom1D = dom(n1)
profile1 = MAP(c1)(dom1D)
profile2 = MAP(c2)(dom1D)
profiles = STRUCT([profile1,profile2])
section = BEZIER(S2)([c1, c2])
dom2D = PROD(AA(dom)([n2, 1]))
domain = PROD([dom2D, S(1)(2*PI)(dom1D)])
out = MAP(ROTATIONALSOLID(section))(domain)

vaso1 = T([1,2,3])([6.5,4,.9])(out)
vaso2 = T([1,2,3])([10.5,4,.9])(out)

vasi = STRUCT([vaso1,vaso2])

vasi = COLOR(Color4f([0.22,0.55,0.33]))(vasi)

ground_floor = STRUCT([ground_floor,vasi])

complesso = STRUCT([ground_floor,T([1,2,3])([3,3,3.6])(piani)])


#Aggiungo il tetto dell'edificio
#tetto 
V = [[0,2.1],[42,2.1],[42,12.8],[0,12.8],[0,2.1]]
CV = [[1,2,3,4]]
V1 = [[19.5,2.1],[19.5,0],[22.5,0],[22.5,2.1],[19.5,2.1]]
CV1 = [[1,2,3,4]]
V2 = [[11.7,12.9],[11.7,12.7],[30.3,12.7],[30.3,12.9],[11.7,12.9]]
CV2 = [[1,2,3,4]]
t1 = STRUCT(MKPOLS([V,CV]))
t2 = STRUCT(MKPOLS([V1,CV1]))
t3 = STRUCT(MKPOLS([V2,CV2]))
t1 = DIFFERENCE([t1,t3])

tetto = STRUCT([t1,t2])
tetto = PROD([tetto,Q(0.6)])
tetto = T([1,2,3])([2,0.5,18.6])(tetto)

tetto_b = S([1,2])([.8,.6])(tetto)
tetto_b = T([1,2,3])([4.6,3,0.6])(tetto_b)

tetto = STRUCT([tetto,tetto_b])
tetto = COLOR(Color4f([(0.50),(0.12),(0.15)]))(tetto)


complesso = STRUCT([complesso,tetto])

#Aggiungo alla fine il prato, un recinto, ed una statua con il simbolo di batman!

prato = PROD([Q(50),Q(40)])

prato = TEXTURE('435857/2014-05-16/python/texture/prato.jpg')(prato)

#staccionata 
V = [[0,0],[0.1,0],[0.1,0.8],[0.05,1],[0,0.8],[0.0]]
CV = [[1,2,3,4,5]]

palo = T([1])([0.2])(STRUCT(MKPOLS([V,CV])))

tramezzi = PROD([Q(0.5),QUOTE([-0.2,0.1,-0.2,0.1])])

porzione = PROD([STRUCT([tramezzi,palo]),Q(0.05)])

porzione = MAP([S3,S1,S2])(porzione)
porzione = COLOR(Color4f([0.52,0.25,0.05]))(porzione)

staccionata = STRUCT(NN(40)([porzione,T([2])([.5])]))

staccionata_a = T([1,2])([23.5,20])(staccionata) 
staccionata_b = T([1,2])([26.5,20])(staccionata) 

prato = STRUCT([prato,staccionata_a,staccionata_b])

#stradina
stradina = PROD([QUOTE([-23.5,3]),QUOTE([-20,20])])
stradina = COLOR(Color4f([(0.52),(0.52),(0.52)]))(stradina)
prato = STRUCT([prato,stradina])

#inserisco statua batman
def larPizza(r,R,angle=2*PI):
   assert angle <= 2*PI
   def larPizza0(shape=[24,36]):
      V,CV = checkModel(larCrown(r,R,angle)(shape))
      V += [[0,0,-r],[0,0,r]]
      return V,[range(len(V))]
   return larPizza0

def cerchio (p):
    u,v = p
    return v*COS(u), v*SIN(u)

def distanzaorigine(x,y) : return sqrt(x**2 + y**2)

domain22D = PROD([INTERVALS(2*PI)(32),INTERVALS(5)(3)])
circ = MAP(cerchio)(domain22D);

circ = PROD([circ,Q(0.5)])

recintol = larPizza(0.5,5)([8,48])
recintol = STRUCT(MKPOLS(recintol))
recintos = larPizza(0.5,4)([8,48])
recintos = STRUCT(MKPOLS(recintos))
recinto = DIFFERENCE([recintol,recintos])

recinto = COLOR(GRAY)(T([3])([0.5])(recinto))
circ = COLOR(Color4f([(1),(0.86),(0)]))(circ)

piedistallo = STRUCT([recinto,circ])
piedistallo = T([1,2])([10,30])(piedistallo)

dom1D = INTERVALS(1)(20)

b1 = BEZIER(S1)([[2.64, 2.34], [0.35, 2.95], [0.16, 5.04], [3.3, 5.58]])
b2 = BEZIER(S1)([[2.64, 2.34], [2.06, 3.2], [2.98, 3.34], [3.68, 2.84]])
b3 = BEZIER(S1)([[5.1, 2.32], [4.45, 3.28], [4.01, 3.25], [3.68, 2.84]])
b4 = BEZIER(S1)([[5.1, 2.32], [5.46, 2.96], [6.15, 3.42], [6.52, 2.85]])
b5 = BEZIER(S1)([[7.56, 2.34], [8.13, 3.04], [7.37, 3.43], [6.52, 2.85]])
b6 = BEZIER(S1)([[7.56, 2.34], [9.92, 2.99], [10, 5.04], [6.9, 5.58]])
b7 = BEZIER(S1)([[5.8, 4.72], [6.65, 4.28], [7.6, 5.11], [6.9, 5.58]])
b8 = BEZIER(S1)([[5.8, 4.72], [5.66, 5.19], [5.65, 5.43], [5.59, 5.75]])
b9 = BEZIER(S1)([[5.59, 5.75], [5.47, 5.63], [5.38, 5.53], [5.3, 5.42]])
b10 = BEZIER(S1)([[4.9, 5.43], [5.06, 5.41], [5.23, 5.41], [5.3, 5.42]])
b11 = BEZIER(S1)([[4.9, 5.43], [4.8, 5.53], [4.7, 5.65], [4.63, 5.78]])
b12 = BEZIER(S1)([[4.43, 4.73], [4.48, 5.1], [4.58, 5.4], [4.63, 5.78]])
b13 = BEZIER(S1)([[4.43, 4.73], [3.68, 4.29], [2.58, 5.06], [3.3, 5.58]])

b1 = MAP(b1)(dom1D)
b2 = MAP(b2)(dom1D)
b3 = MAP(b3)(dom1D)
b4 = MAP(b4)(dom1D)
b5 = MAP(b5)(dom1D)
b6 = MAP(b6)(dom1D)
b7 = MAP(b7)(dom1D)
b8 = MAP(b8)(dom1D)
b9 = MAP(b9)(dom1D)
b10 = MAP(b10)(dom1D)
b11 = MAP(b11)(dom1D)
b12 = MAP(b12)(dom1D)
b13 = MAP(b13)(dom1D)

batman_logo = STRUCT([b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13])
batman_logo = SOLIDIFY(batman_logo)
batman_logo = PROD([batman_logo,Q(0.2)])
batman_logo = MAP([S1,S3,S2])(batman_logo)
batman_logo = COLOR(BLACK)(batman_logo)
batman_logo = T([1,2,3])([4.9,30,-1.8])(batman_logo)

statua = STRUCT([piedistallo,batman_logo])
statua_2 = T([1])([30])(statua)

prato = STRUCT([prato,statua,statua_2])


complesso = T([1,2])([2,5.2])(complesso)


VIEW(STRUCT([prato,complesso]))

