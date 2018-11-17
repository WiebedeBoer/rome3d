function barrackProps(){
    //bow and arrow at armamentarium
    var quiverbow = new Quiver(11, 2.5, 136, 0,0,0);
    scene.add( quiverbow ); 
    var arrowbow = new Arrow(11 +1.5, 7.5, 136 -0.1, -3.14159 / 2,0,0);
    scene.add( arrowbow );
    var arrowLoafCol = new propCollect(11, 6, 136, "bow"); 
    scene.add(arrowLoafCol);
    //bread at venalia
    var tablestand = new Table(-128,2,-21,0,0,0); 
    scene.add(tablestand); 
    var breadLoaf = new Bread(-128,8,-21,0,0,0); 
    scene.add(breadLoaf);
    var vegeLoaf = new Cabbage(-128,7,-17,0,0,0); 
    scene.add(vegeLoaf);
    var breadLoafCol = new propCollect(-128,8,-21,"bread"); 
    scene.add(breadLoafCol);
    //fish at venalia
    var tablestand = new Table(-124,2,-47,0,0,0); 
    scene.add(tablestand); 
    var fishLoaf = new Trout(-124,8,-47,0,0,0); 
    scene.add(fishLoaf);
    var fishLoafCol = new propCollect(-124,8,-47,"sauce"); 
    scene.add(fishLoafCol);
    //cheese at venalia
    var tablestand = new Table(-102,2,-38,0,0,0); 
    scene.add(tablestand); 
    var cheeseLoaf = new Cheese(-102,7.8,-38,0,0,0); 
    scene.add(cheeseLoaf);
    var cheeseLoafCol = new propCollect(-102,8,-38,"cheese"); 
    scene.add(cheeseLoafCol);
    //wine at horrea
    var wineLoaf = new Jug(12,0,206,0,0,0); 
    scene.add(wineLoaf);
    var wineLoafCol = new propCollect(12,6,206,"wine"); 
    scene.add(wineLoafCol);
    var oilLoaf = new Jug(12,0,246,0,0,0); 
    scene.add(oilLoaf);
    var oilLoafCol = new propCollect(12,6,246,"oil"); 
    scene.add(oilLoafCol);
    //horse at veterinarium
    var horse = new Horse(-556,0,-16,0,0,0); 
    scene.add(horse); 
    var horse2 = new Horse(-572,0,-7,0,0,0); 
    scene.add(horse2); 
    //donkey train at carnarea
    var donkey = new Donkey(14,0,308,0,0,0); 
    scene.add(donkey);  
    var donkey2 = new Donkey(18,0,334,0,0,0); 
    scene.add(donkey2);  
    //pottery at fabrica
    var jugLoaf = new Amphora(-457,3,25,0,0,0); 
    scene.add(jugLoaf);
    var jugLoafCol = new propCollect(-457,3,25,"pottery"); 
    scene.add(jugLoafCol);
    //coin at quaestorium
    var tablestand = new Table(487,0,24,0,-3.14159 / 2,0); 
    scene.add(tablestand);
    var coinLoaf = new Coin(487,5.6,24,0,0,0); 
    scene.add(coinLoaf);
    var coinLoaf = new Coin(487 + 2,5.6,24 + 2,0,0,0); 
    scene.add(coinLoaf);
    var coinLoafCol = new propCollect(487,5.6,24,"coin"); 
    scene.add(coinLoafCol);
    //stools at statores
    var stool = new Stool(307,4,22,0,0,0);
    scene.add( stool );
    var stool2 = new Stool(340,4,22,0,0,0);
    scene.add( stool2 ); 
}