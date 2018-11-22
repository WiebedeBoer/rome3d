function OasisMaker(xpos,zpos){

var oasis = new Dock("oasis","oasis_door","oasis_window","oasis_wall","oasis_wall","oasis_roof",3,3,3, xpos -halfsize,0, zpos -halfsize,0);
scene.add(oasis); //town

var palmtree = new Palm(xpos-halfsize,6+zpos-halfsize);
scene.add(palmtree); //palm tree

}

