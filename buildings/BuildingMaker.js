function BuildingMaker(){

//1600 buildings to scene
//private buildings: building type, front texture, back texture, right texture, left texture, building height

//scene 1, domus
var nDomus = new Commercial("tenement","wall9","wall9","wall2","wall2",60);
scene.add(nDomus);

//scene 2, latifundia
var nFarm = new Commercial("industrial","wall9","wall9","wall4","wall4",60);
scene.add(nFarm);

//scene 3, insulae
//mill
//bakery
var Bakery = new Commercial("gunsmith","wall9","wall9","wall4","wall4",80);
scene.add(Bakery);
//butcher
//tannery
//pottery
//weavery
//dyer
//clothier
//shoemaker
//sawmill
//charcoalmaker
//cheesemaker
//jeweler
//wine workshop
//oil workshop
//sauce workshop
//smelter
//fletcher
//smithy
//armorer
//poleturner
//tavern
var Tavern = new Commercial("commercial","taberna","taberna","wall6","wall6",80);
scene.add(Tavern);
//moneylender





//public buildings, multiple: front texture, back texture, right texture, left texture, building height, row, col

//scene 4, fora

//scene 5, basilica


//scene 6, odeum

//scene 7, theatres

//scene 8, amphitheatres

//scene 9, circus

//scene 10, baths

//scene 11, temples

//scene 12, horreum

//scene 13, emporium

//public buildings, single: front texture, back texture, right texture, left texture, building height, row, col

//scene 14, tabularium, records
var Tabularium = new PublicBuilding("forum_temple","forum_temple","wall7","wall7",80,22,22);
scene.add(Tabularium);

//scene 15, aerarium, treasury
var Aerarium = new PublicBuilding("forum_temple","forum_temple","wall7","wall7",80,22,21);
scene.add(Aerarium);

//scene 16, carcer, prison

//scene 17, senate,

//scene 18,graecostacium, diplomatic

//scene 19, atrium vestae, vestal

//scene 20, atrium libertatis, censor

//scene 21, diribitorium, election

//scene 22, villa publica, state headquarters

//scene 23, regia, pontifex

//scene 24, rostra, speaker

//scene 25, umbilicus, column

//scene 26, castrum, barracks



}