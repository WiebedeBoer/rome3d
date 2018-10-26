function Props(){
//coin objects

var gun = new Coin(228,6,16,0,0,0); //shop 23,20
scene.add(gun);
var gun2 = new Coin(127,6,-161,0,0,0); //shop 22,18
scene.add(gun2);
var gun3 = new Coin(-457,6,-1433,0,0,0); //shop 15,4
scene.add(gun3);
var gun4 = new Coin(1150,6,-1428,0,0,0); //shop 33,4
scene.add(gun4);
var gun5 = new Coin(-919,6,822,0,0,0); //shop 10,30
scene.add(gun5);

//coin collection boxes
var guncol = new coinCollect(228,6,16); //shop 23,20
scene.add(guncol);
var guncol2 = new coinCollect(127,6,-161); //shop 22,18
scene.add(guncol2);
var guncol3 = new coinCollect(-457,6,-1433); //shop 15,4
scene.add(guncol3);
var guncol4 = new coinCollect(1150,6,-1428); //shop 33,4
scene.add(guncol4);
var guncol5 = new coinCollect(-919,6,822); //shop 10,30
scene.add(guncol5);


}