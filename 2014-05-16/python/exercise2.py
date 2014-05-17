from larcc import *
from exercise01 import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])

#Utilizzo il modello precedente, modificandolo leggermente per costruire la casa di fronte 
toRemove = [24]
master2 = master2[0],[cell for k,cell in enumerate(master2[1]) if not (k in toRemove)]  

toMerge = 3
diagram = assemblyDiagramInit([1,3,2])([[.1],[.4,1.2,.4],[2,.7]])
master2 = diagram2cell(diagram,master2,toMerge)

toRemove = [172]
master2 = master2[0],[cell for k,cell in enumerate(master2[1]) if not (k in toRemove)]  
#DRAW(master2)

toMerge = 34
diagram = assemblyDiagramInit([3,1,2])([[.5,1,.5],[.1],[2,.7]])
master2 = diagram2cell(diagram,master2,toMerge)

toRemove = [176]
master2 = master2[0],[cell for k,cell in enumerate(master2[1]) if not (k in toRemove)]  
#DRAW(master2)

toMerge = 53
diagram = assemblyDiagramInit([3,1,2])([[1.5,1,.5],[.1],[2,.7]])
master2 = diagram2cell(diagram,master2,toMerge)

toRemove = [180]
master2 = master2[0],[cell for k,cell in enumerate(master2[1]) if not (k in toRemove)]  
#DRAW(master2)

toMerge = 72
diagram = assemblyDiagramInit([3,1,2])([[1,1,1],[.1],[2,.7]])
master2 = diagram2cell(diagram,master2,toMerge)

toRemove = [184]
master2 = master2[0],[cell for k,cell in enumerate(master2[1]) if not (k in toRemove)]  
#DRAW(master2)

toMerge = 93
diagram = assemblyDiagramInit([3,1,2])([[1.25,1.5,1.25],[.1],[2,.7]])
master2 = diagram2cell(diagram,master2,toMerge)

toRemove = [188]
master2 = master2[0],[cell for k,cell in enumerate(master2[1]) if not (k in toRemove)]  
#DRAW(master2)

toMerge = 100
diagram = assemblyDiagramInit([1,3,3])([[.1],[1.2,.6,1.2],[1,1,.7]])
master2 = diagram2cell(diagram,master2,toMerge)

toRemove = [194]
master2 = master2[0],[cell for k,cell in enumerate(master2[1]) if not (k in toRemove)]  
#DRAW(master2)

#appartamento_sx = SKEL_1(STRUCT(MKPOLS(master2)))
#appartamento_sx = cellNumbering (master2,appartamento_sx)(range(len(master2[1])),CYAN,.5)
#VIEW(appartamento_sx)

#COLORAZIONE
master2 = MKPOLS(master2)
master2[13] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[13])
master2[32] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[32])
master2[16] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[16])
master2[34] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[34])
master2[25] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[25])
master2[22] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[22])
master2[40] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[40])
master2[51] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[51])
master2[53] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[53])
master2[70] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[70])
master2[72] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[72])
master2[78] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[78])
master2[93] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[93])
master2[91] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[91])
master2[94] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[94])
master2[95] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[95])
master2[59] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master2[59])

master2[74] = COLOR(Color4f([(1),(0.45),(0)]))(master2[74])
master2[66] = COLOR(Color4f([(1),(0.45),(0)]))(master2[66])
master2[55] = COLOR(Color4f([(1),(0.45),(0)]))(master2[55])
master2[47] = COLOR(Color4f([(1),(0.45),(0)]))(master2[47])
master2[36] = COLOR(Color4f([(1),(0.45),(0)]))(master2[36])
master2[28] = COLOR(Color4f([(1),(0.45),(0)]))(master2[28])
master2[18] = COLOR(Color4f([(1),(0.45),(0)]))(master2[18])
master2[75] = COLOR(Color4f([(1),(0.45),(0)]))(master2[75])
master2[56] = COLOR(Color4f([(1),(0.45),(0)]))(master2[56])
master2[37] = COLOR(Color4f([(1),(0.45),(0)]))(master2[37])
master2[19] = COLOR(Color4f([(1),(0.45),(0)]))(master2[19])
master2[10] = COLOR(Color4f([(1),(0.45),(0)]))(master2[10])
master2[9] = COLOR(Color4f([(1),(0.45),(0)]))(master2[9])
master2[29] = COLOR(Color4f([(1),(0.45),(0)]))(master2[29])
master2[48] = COLOR(Color4f([(1),(0.45),(0)]))(master2[48])
master2[67] = COLOR(Color4f([(1),(0.45),(0)]))(master2[67])

taken = [74,66,55,47,36,28,18,75,56,37,19,10,
		 9,29,48,67,13,32,16,34,25,22,40,51,53, 
		 70,72,78,93,91,94,95,59]


left = [cell for cell,k in enumerate(master2) if not (cell in taken)]

for x in left :
	master2[x] = COLOR(Color4f([(1),(0.9),(0.80)]))(master2[x])


#----------------------------------------------------------------#

#PIANO TERRA

master_hpc = STRUCT(master)
master2_hpc = STRUCT(master2)

base = PROD([Q(36),Q(9)])
base = PROD([base,Q(0.3)])

apertura = PROD([QUOTE([-17,2]),QUOTE([-2.7,5])])

base = DIFFERENCE([base,PROD([apertura,Q(0.3)])])

#Colorazione Base
base = COLOR(Color4f([(1),(0.6),(0)]))(base)

piano = STRUCT([master_hpc,base,T([1])(20)(master2_hpc)])

piani = STRUCT(NN(4)([piano,T([3])([3.5])]))
piani = T([1,3])([5,3])(piani)


#Base piano terra

dom = INTERVALS(1)(32)
b1 = BEZIER(S1)([[0,16],[0,0],[8,0],[8,16],[16,16],[16,0],[24,0],[24,16],[32,16],[32,0],[40,0],[40,16]])
b2 = BEZIER(S1)([[0,16],[0,32],[8,32],[8,16],[16,16],[16,32],[24,32],[24,16],[32,16],[32,32],[40,32],[40,16]])

b1 = MAP(b1)(dom)
b2 = MAP(b2)(dom)

base = SOLIDIFY(STRUCT([b1,b2]))
base = PROD([base,Q(.3)])

base = T([1,2])([3,-12])(base)
base = COLOR(Color4f([0.48,0.5,0.55]))(base)

ground_floor = STRUCT([piani,base])

#SCALE

pedata = 0.34 # pedata 
alzata = 3.6/20 # alzata  
p = [[0,0],[pedata,0.2],[pedata,0.2+alzata],[0,0.2+alzata]];
c = [[1,2,3,4]];
scalino = MKPOL([p,c,None]);
scalinoEstruso = PROD([scalino,Q(2)]);
scalini = STRUCT(NN(15)([scalinoEstruso,T([1,2])([pedata,0.2])]));
#scambio assi
scalinir = MAP([S3,S1,S2])(scalini);
stairs1 = T([1,2])([22,2.7])(scalinir);

pedata_2 = 0.30 # pedata 
alzata_2 = 3.6/20 # alzata  
p_2 = [[0,0],[pedata_2,0.2],[pedata_2,0.2+alzata_2],[0,0.2+alzata_2]];
c_2 = [[1,2,3,4]];
scalino_2 = MKPOL([p_2,c_2,None]);
scalinoEstruso_2 = PROD([scalino_2,Q(2)]);
scalini_2 = STRUCT(NN(18)([scalinoEstruso_2,T([1,2])([pedata_2,0.2])]));

scalinir_2 = MAP([S3,S1,S2])(scalini_2);

stairs2 = T([1,2,3])([22,2.7,3])(scalinir_2)
stairs3 = T([3])([3.5])(stairs2)
stairs4 = T([3])([3.5])(stairs3)

stairs = STRUCT([stairs1,stairs2,stairs3,stairs4])

stairs = COLOR(Color4f([1,0.8,0]))(stairs)

ground_floor = STRUCT([ground_floor,stairs])
#VIEW(STRUCT([ground_floor,stairs]))

#ASCENSORE

diagram = assemblyDiagramInit([5,3,3])([[.2,.25,.6,.25,.2],[0.2,1.5,0.2],[0.3,1.8,0.4]])

toRemove = [14,23,32,13,22,31,25]
diagram = diagram[0],[cell for k,cell in enumerate(diagram[1]) if not (k in toRemove)]  

tromba_asc = STRUCT(MKPOLS(diagram))

tromba_asc = COLOR(Color4f([0.92,0.4,0.32]))(tromba_asc)

ground_floor = STRUCT([ground_floor,T([1,2])([22.25,-1.9])(tromba_asc)])

diagram = assemblyDiagramInit([5,3,3])([[.2,.25,.6,.25,.2],[0.2,1.5,0.2],[0.3,1.8,0.9]])

toRemove = [14,23,32,13,22,31,25,21]
diagram = diagram[0],[cell for k,cell in enumerate(diagram[1]) if not (k in toRemove)]  

tromba_asc = STRUCT(MKPOLS(diagram))
tromba_asc = T([1,2,3])([22.25,-1.9,3])(tromba_asc)
tromba_asc = STRUCT(NN(4)([tromba_asc,T([3])([3.5])]))
#VIEW(STRUCT([ground_floor,tromba_asc]))

tromba_asc = COLOR(Color4f([0.92,0.4,0.32]))(tromba_asc)
ground_floor = STRUCT([ground_floor,tromba_asc])


#-----------------------------------------------------------#

#colonne portanti edificio

model = larRod(.25,3)([32,1])
model = STRUCT(MKPOLS(model))

colonna1 = T([1,2])([38,8])(model)

colonna1 = STRUCT(NN(6)([colonna1,T([1])([-6])]))
colonna2 = T([2])([-7])(colonna1)
#VIEW(STRUCT([ground_floor,colonna1,colonna2]))

ground_floor = STRUCT([ground_floor,colonna1,colonna2])


#balconi

pannello = PROD([Q(0.1),Q(2.5)])
pannello = PROD([pannello,Q(2.7)])

pannello = T([1,2,3])([25,6.5,3.3])(pannello)
pannello2 = T([3])([3.5])(pannello)
pannello3 = T([3])([3.5])(pannello2)
pannello4 = T([3])([3.5])(pannello3)

pannelli = STRUCT([pannello,pannello2,pannello3,pannello4])
pannelli = COLOR(Color4f([(1),(0.9),(0.80)]))(pannelli)

ground_floor = STRUCT([ground_floor,pannelli])

davanzale = PROD([Q(12.2),Q(.2)])
davanzale = PROD([davanzale,Q(.2)])

colonnine = PROD([Q(.2),Q(.1)])
colonnine = PROD([colonnine,Q(1)])

colonnine = T([2])([0.05])(STRUCT(NN(29)([colonnine,T([1])(0.4)])))

davanzale = STRUCT([colonnine,T([3])([1])(davanzale)])
davanzale = COLOR(Color4f([(1),(0.6),(0)]))(davanzale)

davanzale1 = T([1,2,3])([25.1,8.6,3.3])(davanzale)
davanzale2 = T([3])([3.5])(davanzale1)
davanzale3 = T([3])([3.5])(davanzale2)
davanzale4 = T([3])([3.5])(davanzale3)

davanzali_sx = STRUCT([davanzale1,davanzale2,davanzale3,davanzale4])
davanzali_dx = T([1])(-20)(davanzali_sx)

davanzale_ang = PROD([Q(.2),Q(2.3)])
davanzale_ang = PROD([davanzale_ang,Q(.2)])

colonnine_ang = PROD([Q(.1),Q(.2)])
colonnine_ang = PROD([colonnine_ang,Q(1)])

colonnine_ang = T([1])([0.05])(STRUCT(NN(6)([colonnine_ang,T([2])(0.4)])))

davanzale_ang = STRUCT([colonnine_ang,T([3])([1])(davanzale_ang)])

davanzale_ang = T([1,2,3])([5,6.5,3.3])(davanzale_ang)
davanzale_ang2 = T([3])([3.5])(davanzale_ang)
davanzale_ang3 = T([3])([3.5])(davanzale_ang2)
davanzale_ang4 = T([3])([3.5])(davanzale_ang3)

davanzale_ang = STRUCT([davanzale_ang,davanzale_ang2,davanzale_ang3,davanzale_ang4])
davanzale_ang = COLOR(Color4f([(1),(0.6),(0)]))(davanzale_ang)


ground_floor = STRUCT([ground_floor,davanzali_sx,davanzali_dx,davanzale_ang])

#Arricchimento piano terra: cassette della posta e vasi

diagram = assemblyDiagramInit([3,3,3])([[.02,.16,.02],[.02,.16,.02],[.02,.16,.02]])

toRemove = [16,13]
diagram = diagram[0],[cell for k,cell in enumerate(diagram[1]) if not (k in toRemove)]  

hpc = STRUCT(MKPOLS(diagram))

riga_posta = STRUCT(NN(10)([hpc,T([1])(.2)]))
riga_posta = STRUCT(NN(6)([riga_posta,T([3])(.2)]))

posta = T([1,2,3])([16,1,1.2])(riga_posta)

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

vaso1 = T([1,2,3])([19,1,.3])(out)
vaso2 = T([1,2,3])([15,1,.3])(out)

vasi = STRUCT([vaso1,vaso2])

vasi = COLOR(Color4f([0.22,0.55,0.33]))(vasi)

ground_floor = STRUCT([ground_floor,vasi])

VIEW(ground_floor)



