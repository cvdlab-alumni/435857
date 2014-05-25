def diagram2cell(diagram,master,cell):
   mat = diagram2cellMatrix(diagram)(master,cell)
   diagram =larApply(mat)(diagram)  
   (V1,CV1),(V2,CV2) = master,diagram
   n1,n2 = len(V1), len(V2)
   
   # identification of common vertices
   V, CV1, CV2, n12 = vertexSieve(master,diagram)
   commonRange = range(n1-n12, n1)
   newRange = range(n1,n1-n12+n2)
   
   # addition of incident vertices into the adjacents of theCell
   def checkInclusion(V,theCell,newRange):
      theVerts = [V[v] for v in theCell]
      theMin, theMax = min(theVerts), max(theVerts)
      theCell += [v for v in newRange if (
         theMin[0] <= V[v][0] and theMin[1] <= V[v][1] and theMin[2] <= V[v][2] 
         and 
         V[v][0] <= theMax[0] and V[v][1] <= theMax[1] and V[v][2] <= theMax[2] 
         )]
      return theCell
   
   # addition of new vertices into the adjacents of cell c
   CV1 = [checkInclusion(V,c,newRange) 
         if set(c).intersection(commonRange) != set() else c
          for c in CV1]
   
   # masterBoundaryFaces = boundaryOfChain(CV,FV)([cell])
   # diagramBoundaryFaces = lar2boundaryFaces(CV,FV)
   CV = [c for k,c in enumerate(CV1) if k != cell] + CV2
   
   master = V, CV
   return master