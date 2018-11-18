function fieldMaker(type,xPos,zPos){

//wheat field
if (type =="wheat"){
    var field1 = new Wheat(xPos+15,0,zPos-15);
    scene.add( field1 );
    var field2 = new Wheat(xPos+15,0,zPos);
    scene.add( field2 );
    var field3 = new Wheat(xPos+15,0,zPos+15);
    scene.add( field3 );
    var field4 = new Wheat(xPos,0,zPos-15);
    scene.add( field4 );
    var field5 = new Wheat(xPos,0,zPos); 
    scene.add( field5 );
    var field6 = new Wheat(xPos,0,zPos+15);
    scene.add( field6 );
    var field7 = new Wheat(xPos-15,0,zPos-15);
    scene.add( field7 );
    var field8 = new Wheat(xPos-15,0,zPos);
    scene.add( field8 );
    var field9 = new Wheat(xPos-15,0,zPos+15);
    scene.add( field9 );
    var fenceL1 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL1);
    var fenceR1 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR1);
    var fenceF1 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF1);
    var fenceB1 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB1); 
}
else if (type =="vegetables"){
    var field1 = new Cabbage(xPos+15,0,zPos-15,0,0,0);
    scene.add( field1 );
    var field2 = new Cabbage(xPos+15,0,zPos,0,0,0);
    scene.add( field2 );
    var field3 = new Cabbage(xPos+15,0,zPos+15,0,0,0);
    scene.add( field3 );
    var field4 = new Cabbage(xPos,0,zPos-15,0,0,0);
    scene.add( field4 );
    var field5 = new Cabbage(xPos,0,zPos,0,0,0); 
    scene.add( field5 );
    var field6 = new Cabbage(xPos,0,zPos+15,0,0,0);
    scene.add( field6 );
    var field7 = new Cabbage(xPos-15,0,zPos-15,0,0,0);
    scene.add( field7 );
    var field8 = new Cabbage(xPos-15,0,zPos,0,0,0);
    scene.add( field8 );
    var field9 = new Cabbage(xPos-15,0,zPos+15,0,0,0);
    scene.add( field9 );
    var fenceL1 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL1);
    var fenceR1 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR1);
    var fenceF1 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF1);
    var fenceB1 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB1); 
}
//olive grove
else if (type=="olive"){
    var Olive1 = new OliveTree(xPos-15,5,zPos+15); 
    scene.add(Olive1);
    var Olive2 = new OliveTree(xPos-15,5,zPos-15); 
    scene.add(Olive2);
    var Olive3 = new OliveTree(xPos+15,5,zPos+15); 
    scene.add(Olive3);
    var Olive4 = new OliveTree(xPos+15,5,zPos-15); 
    scene.add(Olive4);
}
//fallow land
else if(type =="fallow"){
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}
//goat pasture
else if(type =="goat"){
    var Goat1 = new Goat(xPos-15,5,zPos+15); 
    scene.add(Goat1);
    var Goat2 = new Goat(xPos-15,5,zPos-15); 
    scene.add(Goat2);
    var Goat3 = new Goat(xPos+15,5,zPos+15); 
    scene.add(Goat3);
    var Goat4 = new Goat(xPos+15,5,zPos-15); 
    scene.add(Goat4);
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}
//pig pasture
else if(type =="pig"){
    var Pig1 = new Pig(xPos-15,5,zPos+15); 
    scene.add(Pig1);
    var Pig2 = new Pig(xPos-15,5,zPos-15); 
    scene.add(Pig2);
    var Pig3 = new Pig(xPos+15,5,zPos+15); 
    scene.add(Pig3);
    var Pig4 = new Pig(xPos+15,5,zPos-15); 
    scene.add(Pig4);
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}
//cow pasture
else if(type =="cow"){
    var Cow1 = new Cow(xPos-15,5,zPos); 
    scene.add(Cow1);
    var Cow2 = new Cow(xPos+15,5,zPos); 
    scene.add(Cow2);
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}
//horse pasture
else if(type =="horse"){
    var Horse1 = new Horse(xPos-15,5,zPos); 
    scene.add(Horse1);
    var Horse2 = new Horse(xPos+15,5,zPos); 
    scene.add(Horse2);
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2);   
}

}