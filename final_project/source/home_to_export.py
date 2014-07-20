from larcc import *

def extractFacets(master, emptyChain=[]):
    solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
    exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
    exteriorCV += exteriorCells(master)
    CV = solidCV + exteriorCV
    V = master[0]
    FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
    BF = boundaryCells(solidCV,FV)
    boundaryFaces = [FV[face] for face in BF]
    B_Rep = V,boundaryFaces
    return B_Rep

def extractTriaFacets(master, emptyChain=[]):
    master = extractFacets(master,emptyChain)
    master = quads2tria(master)
    return master

def objExporter((V,FV), filePath):
    out_file = open(filePath,"w")
    out_file.write("# List of Vertices:\n")
    for v in V:
        out_file.write("v")
        for c in v:
            out_file.write(" " + str(c))
        out_file.write("\n")
    out_file.write("# Face Definitions:\n")
    for f in FV:
        out_file.write("f")
        for v in f:
            out_file.write(" " + str(v+1))
        out_file.write("\n")
    out_file.close()

DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([11,13,2])([[.3,1.3,.1,3.94,.1,.86,.1,1.14,.3,1.66,.3],
                                       [.3,2.8,.1,1.1,.1,2.8,.1,3.2,.1,2.2,.3,1.35,.3],
                                       [.3,2.7]])

diagram_porta_ingresso = assemblyDiagramInit([2,1,2])([[1,.66],[.3],[2.1,.6]])
master = diagram2cell(diagram_porta_ingresso,master,255)

diagram_porta_salone = assemblyDiagramInit([1,3,2])([[.1],[.3,1.6,.3],[2.1,.6]])
master = diagram2cell(diagram_porta_salone,master,175)

diagram_porta_cucina = assemblyDiagramInit([1,3,2])([[.1],[1.2,.8,1.2],[2.1,.6]])
master = diagram2cell(diagram_porta_cucina,master,171)

diagram_porta_cameretta = assemblyDiagramInit([1,3,2])([[.1],[1,.8,1],[2.1,.6]])
master = diagram2cell(diagram_porta_cameretta,master,167)

diagram_porta_camera = assemblyDiagramInit([1,3,2])([[.1],[.15,.8,.15],[2.1,.6]])
master = diagram2cell(diagram_porta_camera,master,163)

diagram_porta_bagno = assemblyDiagramInit([3,1,2])([[.17,.8,.17],[.1],[2.1,.6]])
master = diagram2cell(diagram_porta_bagno,master,183)

diagram_porta_b_salone = assemblyDiagramInit([3,1,2])([[.35,.6,.35],[.1],[2.1,.6]])
master = diagram2cell(diagram_porta_b_salone,master,43)

diagram_porta_b_cucina = assemblyDiagramInit([1,5,3])([[.1],[.7,1,.2,.6,.7],[.9,1.2,.6]])
master = diagram2cell(diagram_porta_b_cucina,master,66)

diagram_porta_b_cameretta = assemblyDiagramInit([1,3,2])([[.1],[1.1,.6,1.1],[2.1,.6]])
master = diagram2cell(diagram_porta_b_cameretta,master,62)

diagram_porta_b_camera = assemblyDiagramInit([1,3,2])([[.1],[.25,.6,.25],[2.1,.6]])
master = diagram2cell(diagram_porta_b_camera,master,58)

diagram_finestra_camera = assemblyDiagramInit([1,3,3])([[.1],[.65,1.5,.65],[.9,1.2,.6]])
master = diagram2cell(diagram_finestra_camera,master,54)

diagram_finestra_salone = assemblyDiagramInit([1,2,3])([[.3],[.7,1.5],[.9,1.2,.6]])
master = diagram2cell(diagram_finestra_salone,master,19)

diagram_finestra_bagno = assemblyDiagramInit([2,1,3])([[.6,.54],[.3],[.9,1.2,.6]])
master = diagram2cell(diagram_finestra_bagno,master,173)

emptyChain = [193,192,194,195,218,219,220,221,243,244,245,246,269,270,271,272,273,241,
              215,279,117,143,119,145,121,147,91,93,95,65,67,69,43,45,47,309,353,187,
              185,285,139,113,87,322,323,317,237,262,189,261,183,181,291,135,109,83,330,235,260,
              233,258,257,232,177,179,131,297,303,105,75,77,79,127,153,174,356,336,344,230,
              231,255,256,228,229,253,254,226,236,234,259,227,251,252,224,225,249,250,222,223,247,
              248,14,15,39,40,12,13,37,38,10,11,35,36,8,9,33,34,6,7,31,32,4,5,29,30,2,3,27,28,0,1,25,26]

master_facets_tria = extractTriaFacets(master, emptyChain)
objExporter(master_facets_tria, "home.obj")
