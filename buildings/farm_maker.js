function FarmMaker(farmtype,xVil,zVil){
    //x5,z5
if (farmtype=="villa_rustica"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("honey",xVil+90,zVil-270);
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
    if(climate !="desert"){
        fieldMaker("horse",xVil+180,zVil+180);
        fieldMaker("sheep",xVil+180,zVil+270);
        fieldMaker("sheep",xVil+180,zVil+360); 
    }   
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
    
    fieldMaker("olive",xVil-180,zVil-270); 
    fieldMaker("sheep",xVil-180,zVil-180);         
    fieldMaker("vegetables",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);

}
//x5,z5
else if (farmtype=="mine"){
    
    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    //deposits +90,-90
    //marble 
    if (marble =="marble"){
        var deposit1 = new Metal(xVil+70,zVil-75,"marble",4.5,1.2,4.5);
        scene.add( deposit1 );
        var deposit2 = new Metal(xVil+75,zVil-75,"marble",4.5,1.2,4.5);
        scene.add( deposit2 );
    }
    //tin 
    if (tin =="tin"){
        var deposit3 = new Metal(xVil+88,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit3 );
        var deposit4 = new Metal(xVil+90,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit4 );      
    }
    //copper 
    if (copper =="copper"){
        var deposit5 = new Metal(xVil+103,zVil-75,"copper",1.5,1.2,4.5);
        scene.add( deposit5 );
        var deposit6 = new Metal(xVil+105,zVil-75,"copper",1.5,1.2,4.5);
        scene.add( deposit6 );        
    }
    //iron 
    if (iron =="iron"){
        var deposit7 = new Metal(xVil+73,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit7 );
        var deposit8 = new Metal(xVil+75,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit8 );    
    }
    //gold
    if (gold =="gold"){
        var deposit9 = new Metal(xVil+88,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit9 );
        var deposit10 = new Metal(xVil+90,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit10 );     
    }
    //silver 
    if (silver =="silver"){
        var deposit11 = new Metal(xVil+103,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit11 );
        var deposit12 = new Metal(xVil+105,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit12 );       
    }    

    fieldMaker("forest",xVil+90,zVil+90);    
    
    fieldMaker("forest",xVil,zVil-270);
    var boulder = new Mountain(xVil,zVil-180); //boulder mountain
    scene.add( boulder );
    houseMaker("barn2",xVil,zVil-90); //barn
    houseMaker("villagehouse2",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);    
    
    fieldMaker("forest",xVil-90,zVil-270);
    //empty
    //empty
    //empty
    fieldMaker("forest",xVil-90,zVil+90);
    
    
    fieldMaker("forest",xVil-180,zVil-270); 
    fieldMaker("forest",xVil-180,zVil-180);         
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);

}

}