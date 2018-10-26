function BuildingMaker(){

//1600 buildings to scene
//private buildings: building type, front texture, back texture, right texture, left texture, building height

//scene 1, domus
var nDomus = new Commercial("tenement","wall9","wall9","wall2","wall2",80);
scene.add(nDomus);

//scene 2, insulae
var nInsulae = new Commercial("commercial","wall9","wall9","wall6","wall6",80);
scene.add(nInsulae);

//scene 3, latifundia
var nFarm = new Commercial("industrial","wall9","wall9","wall4","wall4",80);
scene.add(nFarm);

//scene 3, latifundia
var nTreasure = new Commercial("gunsmith","wall9","wall9","wall4","wall4",80);
scene.add(nTreasure);

//public buildings: front texture, back texture, right texture, left texture, building height, row, col

//scene 4, fora

//scene 5, basilica
var nBasilica = new PublicBuilding("wall5","wall5","wall7","wall7",100,22,21);
scene.add(nBasilica);

//scene 6, theatres

//scene 7, amphitheatres

//scene 8, circus

//scene 9, baths

//scene 10, temples



}