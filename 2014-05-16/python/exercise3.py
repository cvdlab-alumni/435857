from pyplasm import *
from scipy import *
from larcc import *

'''Il ragionamento seguito e' il seguente: a seguito di un merge di un diagramma in una 
   cella n, ogni cella del nuovo diagramma viene enumerata partendo dal numero di cella massimo,
   nel master, al momento dell'inserimento. Quindi prima di fare un merge, si salva 
   il numero di cella massimo, che verra' poi utilizzato per aggiornare il toRemove
   in modo da rimuovere le celle esatte nella fase di eliminazione. Per garantire la
   corretta esecuzione dell'agoritmo, e' necessario un ordinamento decrescente preliminare 
   della lista di input secondo il valore di merge.
'''
#Prima versione: Per una singola istanza
def MergeAndRemoveBlocks(diagram,master,toRemove,toMerge) : 	
	massimo = len(master[1])-1 
	master = diagram2cell(diagram,master,toMerge)
	toRemove[0] = toRemove[0]+massimo
	master = master[0],[cell for k,cell in enumerate(master[1]) if not (k in toRemove)]  
	return master

'''
Versione definitiva: ordinamento decrescente della lista di (toMerge,toRemove,diagram)
secondo il valore di toMerge; scansione della lista di input; per ogni elemento della lista 
faccio il merge, nella cella toMerge del master, del diagram. (uso una lista di triple per sfruttare 
un unico indice durante la scansione). Dopo il merge si procede con l'aggiornamento del (o dei) valori
di toRemove, al fine di rimuovere correttamente le celle in fase di eliminazione.  
'''
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



#L'ALGORITMO RISOLVE IL TEST04 SENZA PROBLEMI. 
#Dato il master iniziale, e la rimozione preliminare di alcune celle...
master = assemblyDiagramInit([5,5,2])([[.3,3.2,.1,5,.3],[.3,4,.1,2.9,.3],[.3,2.7]])
V,CV = master
toRemove = [13,33,17,37]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]  #tolgo la cella num 13,33,17,37 da CV

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)   # E' possibile verificare la corretta esecuzione dell'algoritmo


#I dettagli vengono aggiunti dinamicamente passando alla funzione questo input:
toRemove = [[2],[4,10]]
toMerge = [29,35] #non 34. Non dico 34 a seguito del ciclo m-n-e su 29, perchè con questo algoritmo
				  #non vedo cosa fare dopo ogni loop, ma lo vedo solamento all'inizio, e all'inizio
				  #vedo che le finestre vanno nella cella 35 (inoltre l'ordinamento decrescente permette
				  #l'esecuzione immediata del ciclo su 35 piuttosto che su 29)
diagrams = [assemblyDiagramInit([3,1,2])([[2,1,2],[.3],[2.2,.5]]),
		    assemblyDiagramInit([5,1,3])([[1.5,0.9,.2,.9,1.5],[.3],[1,1.4,.3]])]
'''
Passo alla funzione una lista di triple ("in quale cella del master mergiare",
"quali celle rimuovere dal diagram aggiunto al master","il diagram da aggiungere")
'''
input_list = [[toMerge[n],toRemove[n],diagrams[n]] for n in range(len(toMerge))]

master = merging_numbering_elimination(master,input_list)

hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
VIEW(hpc)   # E' possibile verificare la corretta esecuzione dell'algoritmo

