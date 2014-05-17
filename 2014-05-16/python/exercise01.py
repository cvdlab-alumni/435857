from larcc import *


DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([11,7,2])([[.3,3,.1,2,.1,3,.1,3,.1,4,.3],[.3,2,.1,4,.1,2,.3],[.3,2.7]])
V,CV = master

toRemove = [135,115,87,59,35,95,67,39,11,13,27,41,55,
			69,83,97,111,137,133,129,109,105,101,81,
			77,73,53,49,45,25,21,17]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]  #tolgo la cella num 13,33,17,37 da CV
#DRAW(master)

# AGGIUNGO FINESTRE

#Aggiungo le finestre del salone
toMerge = 107
diagram = assemblyDiagramInit([7,1,3])([[1,.5,.25,.5,.25,.5,1],[.3],[1,1,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [125,131,137]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

#Aggiungo finestre cucina
toMerge = 82
diagram = assemblyDiagramInit([7,1,3])([[.4,.5,.1,.5,.4,.6,.5],[.1],[1,1,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [142,148,153,154]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

#Aggiungo finestra camera singola
toMerge = 61
diagram = assemblyDiagramInit([3,1,2])([[1.2,.6,1.2],[.1],[2,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [156]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

#Aggiungo finestra camera doppia
toMerge = 40
diagram = assemblyDiagramInit([3,1,2])([[.7,.6,.7],[.1],[2,.7]])
master = diagram2cell(diagram,master,toMerge)

toMerge = 19
diagram = assemblyDiagramInit([4,1,3])([[1.7,.6,.1,.6],[.1],[1,1,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [159,167,173]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
master2 = master #la utilizzero nel secondo esercizio
#DRAW(master)

#Aggiungo la finestra del bagno
toMerge = 3
diagram = assemblyDiagramInit([1,3,3])([[.1],[1.2,.6,1.2],[1,1,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [175]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

# AGGIUNGO PORTE

#Aggiungo la porta del bagno
toMerge = 23
diagram = assemblyDiagramInit([1,3,2])([[.1],[.5,1,.5],[2,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [180]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

#Aggiungo la porta della camera doppia
toMerge = 34
diagram = assemblyDiagramInit([3,1,2])([[.5,1,.5],[.1],[2,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [184]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

#Aggiungo la porta della camera singola
toMerge = 53
diagram = assemblyDiagramInit([3,1,2])([[1.5,1,.5],[.1],[2,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [188]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

#Aggiungo la porta della cucina
toMerge = 72
diagram = assemblyDiagramInit([3,1,2])([[1,1,1],[.1],[2,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [192]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

#Aggiungo la porta del salone
toMerge = 93
diagram = assemblyDiagramInit([3,1,2])([[1.25,1.5,1.25],[.1],[2,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [196]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

#Aggiungo la porta di ingresso
toMerge = 100
diagram = assemblyDiagramInit([1,3,2])([[.1],[.4,1.2,.4],[2,.7]])
master = diagram2cell(diagram,master,toMerge)

toRemove = [200]
master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
#DRAW(master)

#appartamento_dx = SKEL_1(STRUCT(MKPOLS(master)))
#appartamento_dx = cellNumbering (master,appartamento_dx)(range(len(master[1])),CYAN,.5)
#VIEW(appartamento_dx)

#colorazione

master = MKPOLS(master)
master[95] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[95])
master[91] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[91])
master[70] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[70])
master[51] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[51])
master[93] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[93])
master[72] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[72])
master[53] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[53])
master[34] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[34])
master[16] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[16])
master[13] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[13])
master[32] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[32])
master[25] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[25])
master[40] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[40])
master[59] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[59])
master[78] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[78])
master[94] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[94])

master[74] = COLOR(Color4f([(1),(0.45),(0)]))(master[74])
master[75] = COLOR(Color4f([(1),(0.45),(0)]))(master[75])
master[66] = COLOR(Color4f([(1),(0.45),(0)]))(master[66])
master[67] = COLOR(Color4f([(1),(0.45),(0)]))(master[67])
master[55] = COLOR(Color4f([(1),(0.45),(0)]))(master[55])
master[56] = COLOR(Color4f([(1),(0.45),(0)]))(master[56])
master[47] = COLOR(Color4f([(1),(0.45),(0)]))(master[47])
master[48] = COLOR(Color4f([(1),(0.45),(0)]))(master[48])
master[36] = COLOR(Color4f([(1),(0.45),(0)]))(master[36])
master[37] = COLOR(Color4f([(1),(0.45),(0)]))(master[37])
master[28] = COLOR(Color4f([(1),(0.45),(0)]))(master[28])
master[29] = COLOR(Color4f([(1),(0.45),(0)]))(master[29])
master[19] = COLOR(Color4f([(1),(0.45),(0)]))(master[19])
master[18] = COLOR(Color4f([(1),(0.45),(0)]))(master[18])
master[9] = COLOR(Color4f([(1),(0.45),(0)]))(master[9])
master[10] = COLOR(Color4f([(1),(0.45),(0)]))(master[10])

taken = [74,75,66,67,55,56,47,48,36,37,28,29,
		 19,18,9,10,95,91,70,51,93,72,53,34,16, 
		 13,32,25,40,59,78,94]

left = [cell for cell,k in enumerate(master) if not (cell in taken)]

for x in left :
	master[x] = COLOR(Color4f([(1),(0.9),(0.80)]))(master[x])

VIEW(STRUCT(master))
