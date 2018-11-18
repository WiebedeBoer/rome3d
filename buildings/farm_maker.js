function FarmMaker(farmtype,xVil,zVil){
if (farmtype=="villa_rustica"){

//fieldMaker("wheat",xVil+90,zVil-270);
//fieldMaker("cow",xVil+90,zVil-180);
fieldMaker("wheat",xVil+90,zVil-90);
fieldMaker("olive",xVil+90,zVil);

//fieldMaker("pig",xVil,zVil-270);
fieldMaker("goat",xVil,zVil-180);
fieldMaker("wheat",xVil,zVil-90);
houseMaker("farmhouse",xVil,zVil); //center

//fieldMaker("wheat",xVil-90,zVil-270);
fieldMaker("horse",xVil-90,zVil-180);
houseMaker("barn",xVil-90,zVil-90);
fieldMaker("vegetables",xVil-90,zVil);

//fieldMaker("fallow",xVil-180,zVil-270);
fieldMaker("pig",xVil-180,zVil-180);
fieldMaker("cow",xVil-180,zVil-90);
//fieldMaker("olive",xVil-180,zVil);
}
else if (farmtype=="civitas"){
    
    houseMaker("farmhouse",xVil+90,zVil-270);
    houseMaker("farmhouse2",xVil+90,zVil-180);
    houseMaker("farmhouse",xVil+90,zVil-90);
    houseMaker("farmhouse2",xVil+90,zVil);
    
    houseMaker("smithy",xVil,zVil-270);
    houseMaker("fora",xVil,zVil-180);
    houseMaker("temple",xVil,zVil-90);
    houseMaker("farmhouse2",xVil,zVil); //center
    
    houseMaker("barn2",xVil-90,zVil-270);
    houseMaker("farmhouse",xVil-90,zVil-180);
    houseMaker("farmhouse",xVil-90,zVil-90);
    //houseMaker("barn2",xVil-90,zVil);
    
    fieldMaker("sheep",xVil-180,zVil-270);
    fieldMaker("olive",xVil-180,zVil-180);
    fieldMaker("vegetables",xVil-180,zVil-90);
    //fieldMaker("vegetables",xVil-180,zVil);
    }
}