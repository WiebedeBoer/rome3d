function tavernProps(){
var corner =new BarCorner(37,13,23,0,0,0); 
scene.add( corner ); 
var tablestand = new LargeTable(20,0,-20,0,0,0); 
scene.add(tablestand);
var tablestand2 = new LargeTable(-20,0,-20,0,0,0); 
scene.add(tablestand2);
var bartab = new BarTable(-5,6.5,20,0,0,0);
scene.add( bartab );
var barstool = new BarStool(22,5,12,0,0,0);
scene.add( barstool ); 
var barstool2 = new BarStool(22,5,21,0,0,0);
scene.add( barstool2 );
var stool = new Stool(11,4,-24,0,0,0);
scene.add( stool );
var stool2 = new Stool(11,4,-16,0,0,0);
scene.add( stool2 ); 
var stool3 = new Stool(29,4,-24,0,0,0);
scene.add( stool3 );
var stool4 = new Stool(29,4,-16,0,0,0);
scene.add( stool4 ); 
var stool5 = new Stool(-12,4,-24,0,0,0);
scene.add( stool5 );
var stool6 = new Stool(-12,4,-16,0,0,0);
scene.add( stool6 ); 
var stool7 = new Stool(-27,4,-24,0,0,0);
scene.add( stool7 );
var stool8 = new Stool(-27,4,-16,0,0,0);
scene.add( stool8 ); 
var breadLoaf = new Bread(20,8,-20,0,0,0); 
scene.add(breadLoaf);
var breadLoafCol = new propCollect(20,8,-20,"bread"); 
scene.add(breadLoafCol);
var wineLoaf = new Jug(30,0,-4,0,0,0); 
scene.add(wineLoaf);
var wineLoafCol = new propCollect(30,6,-4,"wine"); 
scene.add(wineLoafCol);
var vegeLoaf = new Cabbage(20,7,-16,0,0,0); 
scene.add(vegeLoaf);
var jugLoaf = new Amphora(-20,9.9,-20,0,0,0); 
scene.add(jugLoaf);
var cheeseLoafCol = new propCollect(26,6,16,"cheese"); 
scene.add(cheeseLoafCol);
}