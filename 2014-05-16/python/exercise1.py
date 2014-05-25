from larcc import *
from myfont import *

#---------------------------------------------------------------------#
						   #FUNZIONI UTILI
#---------------------------------------------------------------------#

def comparator(x,y) :
	n1,n2,n3 = x;
	m1,m2,m3 = y;
	return m1-n1;

def merging_numbering_elimination(master,toM_toR_diag_list) :
	toM_toR_diag_list.sort(comparator)
	for i in range(len(toM_toR_diag_list)) :
		V,CV = master
		massimo = len(CV)-1 #salvo il numero di cella massimo
		master = diagram2cell(toM_toR_diag_list[i][2],master,toM_toR_diag_list[i][0])
		V,CV = master 
		for j in range(len(toM_toR_diag_list[i][1])) :
			toM_toR_diag_list[i][1][j] += massimo #aggiorno i toRemove
		master = V,[cell for k,cell in enumerate(CV) if not (k in toM_toR_diag_list[i][1])]
	return master 

DRAW = COMP([VIEW,STRUCT,MKPOLS])

#---------------------------------------------------------------------#
#---------------------------------------------------------------------#

master = assemblyDiagramInit([11,8,2])([[.3,3,.1,2,.1,3,.1,3,.1,4,.3],[.3,2,.1,4,.1,2,.3,1],[.3,2.7]])
V,CV = master

#hpc = SKEL_1(STRUCT(MKPOLS(master)))
#hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,1.2)
#VIEW(hpc)


toRemove = [175,174,158,159,153,155,151,147,142,143,123,
			125,127,119,115,131,99,107,109,111,
			93,95,91,87,83,67,75,77,79,59,61,63,51,55,39,43,
			45,47,31,29,27,23,19,11,13,15]

#OTTENGO LA SUDDIVISIONE IN STANZE
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]  

#hpc = SKEL_1(STRUCT(MKPOLS(master)))
#hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,1.2)
#VIEW(hpc)

#PREPARAZIONE INPUT
toMerge = [115,89,103,66,43,20,3,27,40,63,86,110,119]
toRemove = [[4,10,16],[4,10,15,16],[2],[2],[2],[4,10,16],[4],[2],[2],[2],[2],[2],[2]]
diagrams = [assemblyDiagramInit([7,1,3])([[1,.5,.25,.5,.25,.5,1],[.3],[1,1,.7]]), #finestre salone			    
		    assemblyDiagramInit([7,1,3])([[.4,.5,.1,.5,.4,.6,.5],[.1],[1,1,.7]]), #finestre cucina
		    assemblyDiagramInit([1,3,2])([[.1],[.5,1,.5],[2,.7]]),				  #finestra salone	
		    assemblyDiagramInit([3,1,2])([[1.2,.6,1.2],[.1],[2,.7]]),			  #finestra camera singola
		    assemblyDiagramInit([3,1,2])([[.7,.6,.7],[.1],[2,.7]]),				  #finestra camera doppia
		    assemblyDiagramInit([6,1,3])([[1.3,.5,.1,.5,.1,.5],[.1],[1,1,.7]]),   #finestre camera doppia
   		    assemblyDiagramInit([1,3,3])([[.1],[1.2,.6,1.2],[1,1,.7]]),			  #finestra del bagno
		    assemblyDiagramInit([1,3,2])([[.1],[.5,1,.5],[2,.7]]),				  #porta del bagno
		    assemblyDiagramInit([3,1,2])([[.5,1,.5],[.1],[2,.7]]),				  #porta camera doppia
		    assemblyDiagramInit([3,1,2])([[1.5,1,.5],[.1],[2,.7]]),				  #porta camera singola
		    assemblyDiagramInit([3,1,2])([[1,1,1],[.1],[2,.7]]),				  #porta cucina
		    assemblyDiagramInit([3,1,2])([[1.25,1.5,1.25],[.1],[2,.7]]),		  #porta salone
			assemblyDiagramInit([1,3,2])([[.1],[.4,1.2,.4],[2,.7]])]			  #porta di ingresso

input_list = [[toMerge[n],toRemove[n],diagrams[n]] for n in range(len(toMerge))]

#CICLO MERGE-NUMBERING-ELIMINATION
master = merging_numbering_elimination(master,input_list)

#hpc = SKEL_1(STRUCT(MKPOLS(master)))
#hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,1.2)
#VIEW(hpc)

#DISEGNO I VERTICI PER GLI UTILIZZI FUTURI
#vertex_map = AA((COLOR)(RED))([T([1,2,3])(v)(S([1,2])([.008,.008])(TEXT(str(k)))) for k,v in enumerate(master[0])])
#vertex_map = STRUCT(vertex_map)
#VIEW(STRUCT([vertex_map,hpc]))

#VERTICI PER DETTAGLIAMENTO FINESTRE
vert_dett_wind = [master[0][357],master[0][373],master[0][389],
				  master[0][485],master[0][469],master[0][709],
				  master[0][693],master[0][677]]
vert_wind_bagno = master[0][745]
#VERTICI PER DETTAGLIAMENTO PORTE BALCONE
vert_dett_door_balc = [master[0][500],master[0][554],master[0][602]]
vert_dett_door_balc_salone = master[0][439]
#VERTICI PER DETTAGLIAMENTO PORTE INGRESSO
vert_dett_door_ing = [master[0][626],master[0][578],master[0][530]]
vert_dett_door_bagn = master[0][647]
vert_dett_door_salone_dx = master[0][418]
vert_dett_door_salone_sx = master[0][424]
vert_dett_door_ing_princ = master[0][327]
vert_balcone_ang_sx=master[0][238]
vert_balcone_ct =master[0][52]
vert_balcone_ang_dx =master[0][16]
#COLORAZIONE

master = MKPOLS(master)

#PAVIMENTI
celle_pavimento = [93,102,101,100,99,98,86,77,78,79,
				   80,65,56,57,58,59,44,27,35,36,37,38,
				   24,14,17]

for x in celle_pavimento: master[x] = COLOR(Color4f([(0.35),(0.12),(0.15)]))(master[x])

#BALCONE
celle_balcone = [81,82,83,72,73,74,60,61,
				 62,51,52,53,39,40,41,30,31,32,
				 19,20,21,9,10,11]

for x in celle_balcone: master[x] = COLOR(Color4f([(1),(0.45),(0)]))(master[x])

#PARETI
taken = celle_pavimento+celle_balcone
left = [cell for cell,k in enumerate(master) if not (cell in taken)]
for x in left :
	master[x] = COLOR(Color4f([(1),(0.9),(0.80)]))(master[x])	


master = STRUCT(master)

V = [[0,0],[0.5,0],[0.5,1],[0,1],[0,0]]
CV = [[1,2,3,4]]
V1 = [[0.05,0.05],[0.225,0.05],[0.225,0.475],[0.05,0.475],[0.05,0.05]]
CV1 = [[1,2,3,4]]
V2 = [[0.275,0.05],[0.45,0.05],[0.275,0.475],[0.45,0.475],[0.275,0.05]]
CV2 = [[1,2,3,4]]

base = STRUCT(MKPOLS([V,CV]))
q1 = STRUCT(MKPOLS([V1,CV1]))
q2 = STRUCT(MKPOLS([V2,CV2]))

q3 = T([2])([0.475])(q1)
q4 = T([1])([0.225])(q3)

elem = DIFFERENCE([base,q1,q2,q3,q4])
window = PROD([STRUCT([elem]),Q(0.1)])
vetri = STRUCT(MKPOLS([[[0.05,0],[0.45,0],[0.45,0.9],[0.05,0.9],[0.05,0]],[[1,2,3,4]]]))
vetri = PROD([vetri,Q(0.01)])

window_a = MAP([S1,S3,S2])(window)
vetri_a = MAP([S1,S3,S2])(vetri)
vetri_a = T([2])([0.05])(vetri_a)
window_a = COLOR(Color4f([0.52,0.25,0.05]))(window_a)
vetri_a = MATERIAL([1,1,1,0.1,0,0,0.8,0.5,1,1,1,0.1,1,1,1,0.2,100])(vetri_a)
window_a = STRUCT([window_a,T([3])([0.05])(vetri_a)])
for v in vert_dett_wind : 
	master = STRUCT([master,T([1,2,3])(v)(window_a)])


window_b = MAP([S3,S1,S2])(window)
vetri_b = MAP([S3,S1,S2])(vetri)
window_b = COLOR(Color4f([0.52,0.25,0.05]))(window_b)
vetri_b = MATERIAL([1,1,1,0.1,0,0,0.8,0.5,1,1,1,0.1,1,1,1,0.2,100])(vetri_b)
window_b = STRUCT([window_b,T([1,3])([0.02,0.05])(vetri_b)])
window_b = T([1])([-0.1])(S([2])(0.8)(window_b))
master = STRUCT([master,T([1,2,3])(vert_wind_bagno)(window_b)])

#PORTE
V = [[0,0],[0.6,0],[0.6,2],[0,2],[0,0]]
CV = [[1,2,3,4]]
V1 = [[0.1,0.1],[0.5,0.1],[0.1,0.9],[0.5,0.9],[0.1,0.1]]
CV1 = [[1,2,3,4]]

base = STRUCT(MKPOLS([V,CV]))
q1 = STRUCT(MKPOLS([V1,CV1]))
q2 = T([2])([1])(q1)

elem = DIFFERENCE([base,q1,q2])
door = PROD([STRUCT([elem]),Q(0.1)])
vetri_d = STRUCT(MKPOLS([[[0.01,0],[0.5,0],[0.5,1.9],[0.01,1.9],[0.01,0]],[[1,2,3,4]]]))
vetri_d = PROD([vetri_d,Q(0.01)])
pomello = larBall(0.03)()
pomello = STRUCT(MKPOLS(pomello))
pomello = COLOR(Color4f([1,1,0]))(pomello)

door_a = MAP([S1,S3,S2])(door)
vetri_d_a = MAP([S1,S3,S2])(vetri_d)
vetri_d_a = T([2])([0.05])(vetri_d_a)
door_a = COLOR(Color4f([0.52,0.25,0.05]))(door_a)
vetri_d_a = MATERIAL([1,1,1,0.1,0,0,0.8,0.5,1,1,1,0.1,1,1,1,0.2,100])(vetri_d_a)
pomello_out = T([1,2,3])([0.05,-0.015,1])(pomello)
door_a = STRUCT([door_a,pomello_out,vetri_d_a])
for v in vert_dett_door_balc : 
	master = STRUCT([master,T([1,2,3])(v)(door_a)])

door_b = MAP([S3,S1,S2])(door)
vetri_d_b = MAP([S3,S1,S2])(vetri_d)
vetri_d_b = T([1])([0.05])(vetri_d_b)
door_b = COLOR(Color4f([0.52,0.25,0.05]))(door_b)
vetri_d_b = MATERIAL([1,1,1,0.1,0,0,0.8,0.5,1,1,1,0.1,1,1,1,0.2,100])(vetri_d_b)
pomello_out = T([1,2,3])([0.115,0.05,1])(pomello)
door_b = STRUCT([door_b,pomello_out,vetri_d_b])
door_b = S([2])([1.66])(door_b)
master = STRUCT([master,T([1,2,3])(vert_dett_door_balc_salone)(door_b)])

#===============================#

V = [[0,0],[1,0],[1,2],[0,2],[0,0]]
CV = [[1,2,3,4]]
V1 = [[0.1,0.1],[0.9,0.1],[0.1,0.9],[0.9,0.9],[0.1,0.1]]
CV1 = [[1,2,3,4]]

base = STRUCT(MKPOLS([V,CV]))
q1 = STRUCT(MKPOLS([V1,CV1]))
q2 = T([2])([1])(q1)

elem = DIFFERENCE([base,q1,q2])
door = PROD([STRUCT([elem]),Q(0.1)])
pannello = STRUCT(MKPOLS([[[0.1,0.1],[0.9,0.1],[0.9,1.9],[0.1,1.9],[0.1,0.1]],[[1,2,3,4]]]))
pannello = PROD([pannello,Q(0.05)])
elem = DIFFERENCE([base,q1,q2])
door = PROD([STRUCT([elem]),Q(0.1)])

door_a = MAP([S1,S3,S2])(door)
pannello_a = MAP([S1,S3,S2])(pannello)
pannello_a = T([2])([0.025])(pannello_a)
pomello_in = T([1,2,3])([0.05,-0.015,1])(pomello)
pomello_out = T([1,2,3])([0.05,0.115,1])(pomello)
pomello_in_out = STRUCT([pomello_in,pomello_out])
pannello_a = COLOR(Color4f([0.52,0.25,0.05]))(pannello_a)
door_a = COLOR(Color4f([0.52,0.25,0.05]))(door_a)
door_a = STRUCT([door_a,pomello_in_out,pannello_a])
for v in vert_dett_door_ing : 
	master = STRUCT([master,T([1,2,3])(v)(door_a)])

door_b = MAP([S3,S1,S2])(door)
pannello_b = MAP([S3,S1,S2])(pannello)
pannello_b = T([1])([0.025])(pannello_b)
pomello_in = T([1,2,3])([-0.015,0.05,1])(pomello)
pomello_out = T([1,2,3])([0.115,0.05,1])(pomello)
pomello_in_out = STRUCT([pomello_in,pomello_out])
pannello_b = COLOR(Color4f([0.52,0.25,0.05]))(pannello_b)
door_b = COLOR(Color4f([0.52,0.25,0.05]))(door_b)
door_b = STRUCT([door_b,pomello_in_out,pannello_b])
master = STRUCT([master,T([1,2,3])(vert_dett_door_bagn)(door_b)])

#porta salone
V = [[0,0],[0.75,0],[0.75,2],[0,2],[0,0]]
CV = [[1,2,3,4]]
V1 = [[0.1,0.1],[0.65,0.1],[0.1,0.9],[0.65,0.9],[0.1,0.1]]
CV1 = [[1,2,3,4]]

base = STRUCT(MKPOLS([V,CV]))
q1 = STRUCT(MKPOLS([V1,CV1]))
q2 = T([2])([1])(q1)
elem = DIFFERENCE([base,q1,q2])
door = PROD([STRUCT([elem]),Q(0.1)])

pannello = STRUCT(MKPOLS([[[0.1,0.1],[0.65,0.1],[0.65,1.9],[0.1,1.9],[0.1,0.1]],[[1,2,3,4]]]))
pannello = PROD([pannello,Q(0.05)])
pannello = T([2])([0.025])(pannello)

door = MAP([S1,S3,S2])(door)
pannello = MAP([S1,S3,S2])(pannello)
pomello_in = T([1,2,3])([0.05,-0.015,1])(pomello)
pomello_out = T([1,2,3])([0.05,0.115,1])(pomello)
pomello_in_out = STRUCT([pomello_in,pomello_out])
pannello = COLOR(Color4f([0.52,0.25,0.05]))(pannello)
door = COLOR(Color4f([0.52,0.25,0.05]))(door)
door_sx = T([1])([-0.75])(STRUCT([door,pomello_in_out,pannello]))
master = STRUCT([master,T([1,2,3])(vert_dett_door_salone_sx)(door_sx)])
door_dx = T([1])([0.75])(S(1)(-1)(STRUCT([door,pomello_in_out,pannello])))
master = STRUCT([master,T([1,2,3])(vert_dett_door_salone_dx)(door_dx)])

#porta ingresso
V = [[0,0],[1.2,0],[1.2,2],[0,2],[0,0]]
CV = [[1,2,3,4]]
V1 = [[0.1,0.1],[1.1,0.1],[0.1,1.9],[1.1,1.9],[0.1,0.1]]
CV1 = [[1,2,3,4]]

base = STRUCT(MKPOLS([V,CV]))
q1 = STRUCT(MKPOLS([V1,CV1]))
elem = DIFFERENCE([base,q1])
door = PROD([STRUCT([elem]),Q(0.2)])

pannello = STRUCT(MKPOLS([[[0.1,0.1],[1.1,0.1],[1.1,1.9],[0.1,1.9],[0.1,0.1]],[[1,2,3,4]]]))
pannello = PROD([pannello,Q(0.1)])

door = MAP([S3,S1,S2])(door)
pannello = MAP([S3,S1,S2])(pannello)
pannello = T([1])([0.05])(pannello)
pomello_in = T([1,2,3])([-0.015,0.05,1])(pomello)
pomello_out = T([1,2,3])([0.215,0.05,1])(pomello)
pomello_in_out = STRUCT([pomello_in,pomello_out])
pannello = COLOR(Color4f([0.52,0.25,0.05]))(pannello)
door = COLOR(Color4f([0.52,0.25,0.05]))(door)
door = STRUCT([door,pomello_in_out,pannello])
master = STRUCT([master,T([1,2,3])(vert_dett_door_ing_princ)(door)])

#Balcone
davanzale = PROD([Q(11.2),Q(.2)])
davanzale = PROD([davanzale,Q(.2)])
colonnine = PROD([Q(.2),Q(.1)])
colonnine = PROD([colonnine,Q(1)])
colonnine = T([2])([0.05])(STRUCT(NN(28)([colonnine,T([1])(0.4)])))
davanzale = STRUCT([colonnine,T([3])([1])(davanzale)])
davanzale = COLOR(Color4f([(1),(0.6),(0)]))(davanzale)
davanzale = T([1,2,3])(vert_balcone_ct)(davanzale)
davanzale = T([2])([-0.3])(davanzale)

davanzale_ang = PROD([Q(.2),Q(3.2)])
davanzale_ang = PROD([davanzale_ang,Q(.2)])
colonnine_ang = PROD([Q(.1),Q(.2)])
colonnine_ang = PROD([colonnine_ang,Q(1)])
colonnine_ang_set = T([1])([0.05])(STRUCT(NN(8)([colonnine_ang,T([2])(0.4)])))
davanzale_ang = STRUCT([colonnine_ang_set,T([3])([1])(davanzale_ang)])
davanzale_ang = COLOR(Color4f([(1),(0.6),(0)]))(davanzale_ang)
davanzale_ang = T([1,2,3])(vert_balcone_ang_dx)(davanzale_ang)
davanzale_ang = T([1])([0.1])(davanzale_ang)

davanzale_ang_sx = PROD([Q(.2),Q(0.9)])
davanzale_ang_sx = PROD([davanzale_ang_sx,Q(.2)])
colonnine_ang_sx = PROD([Q(.1),Q(.15)])
colonnine_ang_sx = PROD([colonnine_ang_sx,Q(1)])
colonnine_ang_set_sx = T([1])([0.05])(STRUCT(NN(3)([colonnine_ang_sx,T([2])(0.3)])))
davanzale_ang_sx = STRUCT([colonnine_ang_set_sx,T([3])([1])(davanzale_ang_sx)])
davanzale_ang_sx = COLOR(Color4f([(1),(0.6),(0)]))(davanzale_ang_sx)
davanzale_ang_sx = T([1,2,3])(vert_balcone_ang_sx)(davanzale_ang_sx)
davanzale_ang_sx = T([1])([-0.2])(davanzale_ang_sx)

master = STRUCT([master,davanzale,davanzale_ang,davanzale_ang_sx])
appartamento = master

VIEW(appartamento)


