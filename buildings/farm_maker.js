function FarmMaker(farmtype,xVil,zVil){
    //x5,z5
if (farmtype=="villa_rustica"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    //fallow
    fieldMaker("wheat",xVil+90,zVil-90);
    fieldMaker("olive",xVil+90,zVil);
    //fallow

    fieldMaker("forest",xVil,zVil-270);
    fieldMaker("goat",xVil,zVil-180);
    fieldMaker("grape",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("horse",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("vegetables",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("pig",xVil-180,zVil-180);
    fieldMaker("cow",xVil-180,zVil-90);
    //fallow
    //fallow

}
//x5,z10
else if (farmtype=="latifundia"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);
    fieldMaker("horse",xVil+180,zVil+180);
    fieldMaker("sheep",xVil+180,zVil+270);
    fieldMaker("sheep",xVil+180,zVil+360);
    fieldMaker("forest",xVil+180,zVil+450);
    fieldMaker("forest",xVil+180,zVil+540);

    fieldMaker("grape",xVil+90,zVil-270);
    fieldMaker("grape",xVil+90,zVil-180);
    fieldMaker("grape",xVil+90,zVil-90);
    //villa occupied
    //villa occupied
    houseMaker("barn",xVil+90,zVil+180);
    fieldMaker("sheep",xVil+90,zVil+270);
    fieldMaker("sheep",xVil+90,zVil+360);
    fieldMaker("forest",xVil+90,zVil+450);
    fieldMaker("forest",xVil+90,zVil+540);

    fieldMaker("grape",xVil,zVil-270);
    fieldMaker("grape",xVil,zVil-180);
    fieldMaker("grape",xVil,zVil-90);
    houseMaker("villa",xVil,zVil); //center
    //villa occupied
    houseMaker("barn",xVil,zVil+180);
    fieldMaker("cow",xVil,zVil+270);
    fieldMaker("cow",xVil,zVil+360);
    fieldMaker("forest",xVil,zVil+450);
    fieldMaker("forest",xVil,zVil+540);

    //fallow
    fieldMaker("wheat",xVil-90,zVil-180);
    fieldMaker("wheat",xVil-90,zVil-90);
    houseMaker("barn2",xVil-90,zVil);
    fieldMaker("olive",xVil-90,zVil+90);
    fieldMaker("horse",xVil-90,zVil+180);
    fieldMaker("cow",xVil-90,zVil+270);
    fieldMaker("cow",xVil-90,zVil+360);
    fieldMaker("forest",xVil-90,zVil+450);
    fieldMaker("forest",xVil-90,zVil+540);

    //fallow
    fieldMaker("wheat",xVil-180,zVil-180);
    fieldMaker("wheat",xVil-180,zVil-90);
    //fallow
    fieldMaker("olive",xVil-180,zVil+90);
    fieldMaker("forest",xVil-180,zVil+180);
    fieldMaker("forest",xVil-180,zVil+270);
    fieldMaker("forest",xVil-180,zVil+360);
    fieldMaker("forest",xVil-180,zVil+450);
    fieldMaker("forest",xVil-180,zVil+540);

}
//x5,z5
else if (farmtype=="forest"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    fieldMaker("forest",xVil+90,zVil-180);
    fieldMaker("forest",xVil+90,zVil-90);
    fieldMaker("forest",xVil+90,zVil);
    fieldMaker("forest",xVil+90,zVil+90);

    fieldMaker("forest",xVil,zVil-270);
    fieldMaker("forest",xVil,zVil-180);
    fieldMaker("forest",xVil,zVil-90);
    fieldMaker("forest",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("forest",xVil-90,zVil-180);
    fieldMaker("forest",xVil-90,zVil-90);
    fieldMaker("forest",xVil-90,zVil);
    fieldMaker("forest",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("forest",xVil-180,zVil-180);
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);
}
//x5,z5
else if (farmtype=="civitas"){
    
    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    houseMaker("villagehouse",xVil+90,zVil-270);
    houseMaker("potterer",xVil+90,zVil-180);
    houseMaker("villagehouse",xVil+90,zVil-90);
    houseMaker("carpenter",xVil+90,zVil);
    fieldMaker("forest",xVil+90,zVil+90);
    
    houseMaker("smithy",xVil,zVil-270);
    houseMaker("fora",xVil,zVil-180);
    houseMaker("temple",xVil,zVil-90);
    houseMaker("villagehouse2",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);
    
    houseMaker("barn2",xVil-90,zVil-270);
    houseMaker("tavern",xVil-90,zVil-180);
    houseMaker("villagehouse",xVil-90,zVil-90);
    fieldMaker("grape",xVil-90,zVil);
    fieldMaker("forest",xVil-90,zVil+90);
    
    fieldMaker("sheep",xVil-180,zVil-270);
    fieldMaker("olive",xVil-180,zVil-180);
    fieldMaker("vegetables",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);

    }
}