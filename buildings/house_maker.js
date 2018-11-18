function houseMaker(type,xPos,zPos){

if (type =="farmhouse"){
var farmhouse = new Villa(xPos+28,19,zPos+30,0);
scene.add( farmhouse );
}
else if (type =="farmhouse2"){
var farmhouse = new Villa(xPos+20,19,zPos-28,Math.PI/2);
scene.add( farmhouse );
}
else if(type =="barn"){
var stables = new Barn(xPos+13,0,zPos);
scene.add( stables ); 
}
else if(type =="barn2"){
var stables = new Barn(xPos+13,0,zPos);
scene.add( stables ); 
var donkey1 = new Donkey(xPos+45,0,zPos+15); 
scene.add(donkey1);
}
else if(type =="temple"){
var temple1 = new Temple(xPos,0,zPos);
scene.add( temple1 ); 
}
else if(type =="fora"){
var fora1 = new Plaza("venalia","mosaic6",xPos,zPos);
scene.add( fora1 ); 
}
else if(type =="smithy"){
var smith = new Smithy(xPos-30,19.5,zPos+25,-Math.PI/2);
scene.add( smith ); 
}


}