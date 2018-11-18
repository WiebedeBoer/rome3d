function houseMaker(type,xPos,zPos){

if (type =="farmhouse"){
var farmhouse = new Villa(xPos+20,16,zPos+30,0);
scene.add( farmhouse );
}
else if (type =="farmhouse2"){
var farmhouse = new Villa(xPos+20,16,zPos-15,Math.PI/2);
scene.add( farmhouse );
}
else if(type =="barn"){
var stables = new Barn(xPos+12,0,zPos);
scene.add( stables ); 
}
else if(type =="temple"){
var temple1 = new Temple(xPos,0,zPos);
scene.add( temple1 ); 
}
else if(type =="fora"){
var fora1 = new Plaza("venalia","mosaic6",xPos,zPos);
scene.add( fora1 ); 
}


}