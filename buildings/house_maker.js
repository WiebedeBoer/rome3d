function houseMaker(type,xPos,zPos){
var househigh = 21.0;

if (type =="farmhouse"){
var farmhouse = new Villa(xPos+28,househigh,zPos+30,0);
scene.add( farmhouse ); 
var farmer = new Person("farmer",xPos+45,zPos);
scene.add(farmer);   
}
else if (type =="villagehouse"){
var farmhouse = new Villa(xPos+28,househigh,zPos+30,0);
scene.add( farmhouse ); 
var pleb = new Person("pleb",xPos+45,zPos);
scene.add(pleb);   
}
else if (type =="villagehouse2"){
var farmhouse = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
scene.add( farmhouse );
}
else if (type=="villa"){
var hacienda = new Latifundia(xPos-20,27.00,zPos-25,Math.PI/2);
scene.add( hacienda );
var patrician = new Person("patrician",xPos,zPos-45);
scene.add(patrician);  
}
else if (type =="tavern"){
var tavern = new Villa(xPos+28,househigh,zPos+30,0);
scene.add( tavern );
var wineLoaf = new Jug(xPos+35,0,zPos+2,0,0,0); 
scene.add(wineLoaf);
var wineLoafCol = new propCollect(xPos+35,6,zPos+2,"wine"); 
scene.add(wineLoafCol);
}
else if (type =="potterer"){
    if (pottery=="pottery"){
        var potterer = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
        scene.add( potterer );
        var stool = new Amphora(xPos-5,3,zPos-33,0,0,0);
        scene.add( stool ); 
        var jugLoafCol = new propCollect(xPos-5,3,zPos-33,"pottery"); 
        scene.add(jugLoafCol);
    }
}
else if (type =="carpenter"){
    if(timber =="cedar" || timber =="oak" || timber =="pine"){
        var carpenter = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
        scene.add( carpenter );
        var stool = new Stool(xPos-5,3,zPos-33,0,0,0);
        scene.add( stool ); 
    }
}
else if(type =="barn"){
    var stables = new Barn(xPos+13,0,zPos);
    scene.add( stables ); 
    var oilLoaf = new Jug(xPos,0,zPos+20,0,0,0); 
    scene.add(oilLoaf);
    var oilLoafCol = new propCollect(xPos,6,zPos+20,"oil"); 
    scene.add(oilLoafCol);
}
else if(type =="barn2"){
    var stables = new Barn(xPos+13,0,zPos);
    scene.add( stables ); 
    var donkey1 = new Donkey(xPos+45,0,zPos+15); 
    scene.add(donkey1);
    if (glass =="glass"){
        var glass1 = new Vase(xPos+25,zPos+15);
        scene.add( glass1 ); 
        var donkey2 = new Donkey(xPos+45,0,zPos-15); 
        scene.add(donkey2);
    }
    if (carving =="amber" || fabrics =="hides" || scent =="roses" || scent =="spikenard"){
        var donkey3 = new Donkey(xPos+45,0,zPos-45); 
        scene.add(donkey3);  
    }
}
else if(type =="temple"){
    if(climate =="desert"){
        var temple1 = new Temple(xPos,0,zPos);
        scene.add( temple1 ); 
    }
    else if(climate =="mediterranean"){
        var temple1 = new Temple2(xPos,0,zPos);
        scene.add( temple1 ); 
    }
    else if(climate =="northern"){
        var temple1 = new Temple3(xPos,0,zPos);
        scene.add( temple1 ); 
    }
    var templeCol = new propCollect(xPos,8,zPos-45,"templum"); 
    scene.add(templeCol);
    var augur = new Person("augur",xPos,zPos-45);
    scene.add(augur);  
}
else if(type =="fora"){
var fora1 = new Plaza("venalia","mosaic6",xPos,zPos);
scene.add( fora1 ); 
if (fish =="fish"){
    var tablestand = new Table(xPos,2,zPos-15,0,0,0); 
    scene.add(tablestand); 
    var fishLoaf = new Trout(xPos,8,zPos-15,0,0,0); 
    scene.add(fishLoaf);
    var fishLoafCol = new propCollect(xPos,8,zPos-15,"sauce"); 
    scene.add(fishLoafCol);
}
if (paper =="papyrus"){
    var tablestand3 = new Table(xPos+15,2,zPos+15,0,0,0); 
    scene.add(tablestand3); 
    var scroll1 = new Scroll(xPos+15,8.1,zPos+15,3.14159 / 2,0,0);
    scene.add( scroll1 ); 
}
//dyes
if (dye =="purple"){
    var purplejug = new TyrianDye(xPos,2,zPos+15,0,0,0); 
    scene.add(purplejug);
}
else if (dye =="kermes"){
    var kermesjug = new KermesDye(xPos,2,zPos+15,0,0,0); 
    scene.add(kermesjug);
}
else if (dye =="saffron"){
    var saffronjug = new SaffronDye(xPos,2,zPos+15,0,0,0); 
    scene.add(saffronjug);
}
else if (dye =="woad"){
    var woadjug = new WoadDye(xPos,2,zPos+15,0,0,0); 
    scene.add(woadjug);
}
else if (dye =="madder"){
    var madderjug = new MadderDye(xPos,2,zPos+15,0,0,0); 
    scene.add(madderjug);
}
//luxuries
if (fabrics =="silk" || scent =="incense"){
    var dromedary1 = new Camel(xPos-20,zPos-45);
    scene.add( dromedary1 ); 
}
if (seasoning =="spices" || seasoning =="salt"){
    var dromedary2 = new Camel(xPos+10,zPos-45);
    scene.add( dromedary2 ); 
}
if (carving =="ivory"){
    var dromedary3 = new Camel(xPos+40,zPos-45);
    scene.add( dromedary3 ); 
}
var tablestand2 = new Table(xPos+15,2,zPos-15,0,0,0); 
scene.add(tablestand2); 
var breadLoaf = new Bread(xPos+15,8,zPos-15,0,0,0); 
scene.add(breadLoaf);
var breadLoafCol = new propCollect(xPos+15,8,zPos-15,"bread"); 
scene.add(breadLoafCol);
}
else if(type =="smithy"){
var smith = new Smithy(xPos-30,househigh,zPos+25,-Math.PI/2);
scene.add( smith ); 
var quiverbow = new Quiver(xPos+10, 2.5,zPos+33, 0,0,0);
scene.add( quiverbow ); 
var arrowbow = new Arrow(xPos+11.5, 7.5,zPos+32.9, -3.14159 / 2,0,0);
scene.add( arrowbow );
var arrowLoafCol = new propCollect(xPos+10, 6, zPos+33, "bow"); 
scene.add(arrowLoafCol);
}

}