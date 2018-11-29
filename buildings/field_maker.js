function fieldMaker(type,xPos,zPos){

//wheat field
if (type =="wheat"){
    if(grain =="wheat"){
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
    }
    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);
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
    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);
}
//olive grove
else if (type=="olive"){
    if (seasoning =="olive_tree"){
        var Olive1 = new OliveTree(xPos-15,5,zPos+15); 
        scene.add(Olive1);
        var Olive2 = new OliveTree(xPos-15,5,zPos-15); 
        scene.add(Olive2);
        var Olive3 = new OliveTree(xPos+15,5,zPos+15); 
        scene.add(Olive3);
        var Olive4 = new OliveTree(xPos+15,5,zPos-15); 
        scene.add(Olive4);
    }
    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);
}
//fruit trees
else if (type=="fruit"){
    if (fruit =="fig"){
        var fruit1 = new FigTree(xPos-15,5,zPos+15); 
        scene.add(fruit1);
        var fruit2 = new FigTree(xPos-15,5,zPos-15); 
        scene.add(fruit2);
        var fruit3 = new FigTree(xPos+15,5,zPos+15); 
        scene.add(fruit3);
        var fruit4 = new FigTree(xPos+15,5,zPos-15); 
        scene.add(fruit4);
    }
    else if (fruit =="pomegranate"){
        var fruit1 = new PomegranateTree(xPos-15,5,zPos+15); 
        scene.add(fruit1);
        var fruit2 = new PomegranateTree(xPos-15,5,zPos-15); 
        scene.add(fruit2);
        var fruit3 = new PomegranateTree(xPos+15,5,zPos+15); 
        scene.add(fruit3);
        var fruit4 = new PomegranateTree(xPos+15,5,zPos-15); 
        scene.add(fruit4);
    }
    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);
}
//grapevine
else if (type=="grape"){
    if(vine =="grapevine"){
        var grape1 = new GrapeVine(xPos+15,0,zPos-15);
        scene.add( grape1 );
        var grape2 = new GrapeVine(xPos+15,0,zPos);
        scene.add( grape2 );
        var grape3 = new GrapeVine(xPos+15,0,zPos+15);
        scene.add( grape3 );
        var grape4 = new GrapeVine(xPos,0,zPos-15);
        scene.add( grape4 );
        var grape5 = new GrapeVine(xPos,0,zPos); 
        scene.add( grape5 );
        var grape6 = new GrapeVine(xPos,0,zPos+15);
        scene.add( grape6 );
        var grape7 = new GrapeVine(xPos-15,0,zPos-15);
        scene.add( grape7 );
        var grape8 = new GrapeVine(xPos-15,0,zPos);
        scene.add( grape8 );
        var grape9 = new GrapeVine(xPos-15,0,zPos+15);
        scene.add( grape9 );
    }
    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);
}
//beekeeping
else if(type=="honey"){

    if (climate =="desert"){        
        var tree1 = new Forest(xPos,45,zPos+15,"tree_palm"); 
        scene.add(tree1);
    }
    else {
        if (timber =="cedar"){
            var tree1 = new Forest(xPos,45,zPos+15,"cedar"); 
            scene.add(tree1);
        }
        else if (timber =="pine"){
            var tree1 = new Forest(xPos,45,zPos+15,"tree_pine"); 
            scene.add(tree1);
        }
        else {
            var tree1 = new Forest(xPos,45,zPos+15,"tree_transparent"); 
            scene.add(tree1);
        }        
    } 
    if (honey =="honey"){
        var beehive1 = new Beehive(xPos,zPos-15); 
        scene.add(beehive1);
    }
    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);
}
//forest
else if(type=="forest"){

    if (climate =="desert"){        
        var tree1 = new Forest(xPos,45,zPos,"tree_palm"); 
        scene.add(tree1);
    }
    else {
        if (timber =="cedar"){
            var tree1 = new Forest(xPos,45,zPos,"cedar"); 
            scene.add(tree1);
        }
        else if (timber =="pine"){
            var tree1 = new Forest(xPos,45,zPos,"tree_pine"); 
            scene.add(tree1);
        }
        else {
            var tree1 = new Forest(xPos,45,zPos,"tree_transparent"); 
            scene.add(tree1);
        }        
    } 
    var birdCol = new propCollect(xPos,8,zPos-45,"bird"); 
    scene.add(birdCol);
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
//sheep pasture
else if(type =="sheep"){
    if (sheep =="sheep"){
        var Sheep1 = new Sheep(xPos-15,5,zPos+15); 
        scene.add(Sheep1);
        var Sheep2 = new Sheep(xPos-15,5,zPos-15); 
        scene.add(Sheep2);
        var Sheep3 = new Sheep(xPos+15,5,zPos+15); 
        scene.add(Sheep3);
        var Sheep4 = new Sheep(xPos+15,5,zPos-15); 
        scene.add(Sheep4);
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
//pig pasture
else if(type =="pig"){
    if (pig =="pigs"){
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
}
//chicken pen
else if(type =="chicken"){
        var chicken1 = new Chicken(xPos-15,5,zPos+15); 
        scene.add(chicken1);
        var chicken2 = new Chicken(xPos-15,5,zPos-15); 
        scene.add(chicken2);
        var chicken3 = new Chicken(xPos+15,5,zPos+15); 
        scene.add(chicken3);
        var rooster4 = new Rooster(xPos+15,5,zPos-15); 
        scene.add(rooster4);
        var chicken5 = new Chicken(xPos,5,zPos-15); 
        scene.add(chicken5);
        var chicken6 = new Chicken(xPos,5,zPos+15); 
        scene.add(chicken6);
        var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
        scene.add(fenceL2);
        var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
        scene.add(fenceR2);
        var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
        scene.add(fenceF2);
        var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
        scene.add(fenceB2);    
}
//duck
else if(type =="duck"){
    
    var duck1 = new Duck(xPos-15,zPos+15); 
    scene.add(duck1);
    var duck2 = new Duck(xPos-15,zPos-15); 
    scene.add(duck2);
    var duck3 = new Duck(xPos+15,zPos+15); 
    scene.add(duck3);
    var duck4 = new Duck(xPos+15,zPos-15); 
    scene.add(duck4);
    var duck5 = new Duck(xPos,zPos-15); 
    scene.add(duck5);
    var duck6 = new Duck(xPos,zPos+15); 
    scene.add(duck6);
    
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2); 

}
//pheasant field
else if(type =="pheasant"){
    var pheasant1 = new Pheasant(xPos-15,5,zPos+15); 
    scene.add(pheasant1);
    var pheasant2 = new Pheasant(xPos,5,zPos+15); 
    scene.add(pheasant2);
    var pheasant3 = new Pheasant(xPos+15,5,zPos+15); 
    scene.add(pheasant3);   
    if (climate =="desert"){        
        var tree2 = new Forest(xPos,45,zPos-15,"tree_palm"); 
        scene.add(tree2);
    }
    else {
        if (timber =="cedar"){
            var tree2 = new Forest(xPos,45,zPos-15,"cedar"); 
            scene.add(tree2);
        }
        else if (timber =="pine"){
            var tree2 = new Forest(xPos,45,zPos-15,"tree_pine"); 
            scene.add(tree2);
        }
        else {
            var tree2 = new Forest(xPos,45,zPos-15,"tree_transparent"); 
            scene.add(tree2);
        }        
    }  
}
//cow pasture
else if(type =="cow"){
    if(cattle =="cattle"){
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
}
//horse pasture
else if(type =="horse"){
    if (horse =="horse"){
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
    else if (horse =="donkey"){
        var donkey5 = new Donkey(xPos-15,5,zPos); 
        scene.add(donkey5);
        var donkey6 = new Donkey(xPos,5,zPos); 
        scene.add(donkey6);
        var donkey7 = new Donkey(xPos+15,5,zPos); 
        scene.add(donkey7);
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

}