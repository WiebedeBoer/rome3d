function BuildingMaker(){

//1600 buildings to scene
//private buildings: building type, front texture, back texture, right texture, left texture, building height

//scene 1, domus, residential, 250
var Domus = new Commercial("domus","domus_front","domus_back","gold_wall","gold_wall",60); //250
scene.add(Domus);

//scene 2, latifundia, agricultural, 353
var Farm = new Commercial("villa","villa_front","villa_back","villa_back","villa_back",60); //353
scene.add(Farm);

//scene 3, insulae, industrial, 129
//mill
var Mill = new Commercial("mill","industry_front","industry_front","industry_back","industry_back",60); //39
scene.add(Mill);
//sawmill
var Sawmill = new Commercial("sawmill","industry_front","industry_front","industry_back","industry_back",60); //33
scene.add(Sawmill);
//tannery
var Tannery = new Commercial("tannery","industry_back","industry_back","industry_front","industry_front",60); //25
scene.add(Tannery);
//smelter
var Smelter = new Commercial("smelter","industry_back","industry_back","industry_front","industry_front",60); //32
scene.add(Smelter);

//scene 3, insulae, commercial, 512
//bakery
var Bakery = new Commercial("bakery","potter_wall","potter_wall","baker","baker",80); //41
scene.add(Bakery); //table + bread
//butcher
var Butcher = new Commercial("butcher","food_wall","food_wall","butcher","butcher",80); //34
scene.add(Butcher);
//tavern
var Tavern = new Commercial("tavern","taberna","taberna","food_wall","food_wall",80); //38
scene.add(Tavern);
//sauce workshop
var Sauceworkshop = new Commercial("sauce","gold_wall","gold_wall","fisher","fisher",80); //26
scene.add(Sauceworkshop); //table + fish
//cheesemaker
var Cheesemaker = new Commercial("cheesemaker","butcher","butcher","food_wall","food_wall",80); //36
scene.add(Cheesemaker); //table + cheese
//wine workshop
var Wineworkshop = new Commercial("winery","food_wall","food_wall","vintner","vintner",80); //24
scene.add(Wineworkshop); //jug
//oil workshop
var Oilworkshop = new Commercial("oil","vintner","vintner","food_wall","food_wall",80); //39
scene.add(Oilworkshop); //jug
//weavery
var Weavery = new Commercial("weavery","cloth_front","cloth_wall","cloth_back","cloth_back",80); //25
scene.add(Weavery);
//clothier
var Clothier = new Commercial("clothier","cloth_wall","cloth_front","cloth_back","cloth_back",80); //19
scene.add(Clothier);
//shoemaker
var Shoemaker = new Commercial("shoemaker","cloth_back","cloth_back","cloth_front","cloth_wall",80); //18
scene.add(Shoemaker);
//pottery
var Pottery = new Commercial("pottery","potter_front","potter_wall","potter_back","potter_back",80); //39
scene.add(Pottery); //amphora
//furtniture workshop
var Furniture = new Commercial("carpenter","potter_wall","potter_front","potter_back","potter_back",80); //37
scene.add(Furniture);
//dyer
var Dyer = new Commercial("dyer","industry_front","industry_back","fora_wall","fora_wall",80); //25
scene.add(Dyer);
//charcoalmaker
var Charcoalmaker = new Commercial("charcoalmaker","industry_front","industry_front","industry_back","fora_wall",80); //10
scene.add(Charcoalmaker);
//fletcher
var Fletcher = new Commercial("fletcher","smithy_back","smithy_front","smithy_back","smithy_back",80); //14
scene.add(Fletcher); //table + arrow
//smithy
var Smithy = new Commercial("smithy","smithy_front","smithy_back","smithy_back","smithy_back",80); //16
scene.add(Smithy);
//armorer
var Armorer = new Commercial("armorer","smithy_back","smithy_back","smithy_front","smithy_back",80); //22
scene.add(Armorer);
//poleturner
var Poleturner = new Commercial("poleturner","smithy_back","smithy_back","smithy_back","smithy_front",80); //17
scene.add(Poleturner);
//jeweler
var Jeweler = new Commercial("jeweler","gold_wall","gold_wall","banker","banker",80); //15
scene.add(Jeweler);
//moneylender
var Bank = new Commercial("bank","banker","banker","gold_wall","gold_wall",80); //14
scene.add(Bank); //table + coin

//public buildings, multiple: front texture, back texture, right texture, left texture, building height, width, length
//scene 4, forum, 9 fora
var Forum = new Municipal("forum","fora_front","fora_front","fora_wall","fora_wall",80,60,60);
scene.add(Forum);
//scene 5, basilica, 6 basilica
var Basilica = new Municipal("basilica","basilica_front","basilica_front","fora_wall","fora_wall",80,60,60);
scene.add(Basilica);

//scene 6, templum, 29 temples
var wireCol = new wireTemples("templum",30);
scene.add(wireCol);

var Temple1 = new Temple(24,0,9); //24,9
scene.add(Temple1);
var Temple2 = new TempleR(12,0,10); //12,10
scene.add(Temple2);
var Temple3 = new Temple(15,0,11); //15,11
scene.add(Temple3);
var Temple4 = new Temple(23,0,11); //23,11
scene.add(Temple4);
var Temple5 = new TempleD(26,0,11); //26,11
scene.add(Temple5);
var Temple6 = new Temple(13,0,12); //13,12
scene.add(Temple6);
var Temple7 = new Temple(31,0,12); //31,12
scene.add(Temple7);
var Temple8 = new Temple(26,0,13); //26,13
scene.add(Temple8);
var Temple9 = new TempleD(15,0,14); //15,14
scene.add(Temple9);
var Temple10 = new TempleR(29,0,14); //29,14
scene.add(Temple10);
var Temple11 = new TempleR(18,0,16); //18,16
scene.add(Temple11);
var Temple12 = new TempleD(17,0,17); //17,17
scene.add(Temple12);
var Temple13 = new TempleP(18,0,17); //18,17
scene.add(Temple13);
var Temple14 = new TempleB(14,0,21); //14,21
scene.add(Temple14);
var Temple15 = new TempleP(34,0,21); //34,21
scene.add(Temple15);
var Temple16 = new Temple(23,0,22); //23,22
scene.add(Temple16);
var Temple17 = new Temple(25,0,22); //25,22
scene.add(Temple17);
var Temple18 = new Temple(32,0,22); //32,22
scene.add(Temple18);
var Temple19 = new TempleP(28,0,23); //28,23
scene.add(Temple19);
var Temple20 = new TempleP(12,0,28); //12,28
scene.add(Temple20);
var Temple21 = new Temple(4,0,29); //4,29
scene.add(Temple21);
var Temple22 = new TempleP(11,0,30); //11,30
scene.add(Temple22);
var Temple23 = new Temple(20,0,30); //20,30
scene.add(Temple23);
var Temple24 = new TempleP(10,0,31); //10,31
scene.add(Temple24);
var Temple25 = new TempleR(22,0,31); //22,31
scene.add(Temple25);
var Temple26 = new Temple(12,0,33); //12,33
scene.add(Temple26);
var Temple27 = new TempleP(14,0,33); //14,33
scene.add(Temple27);
var Temple28 = new Temple(30,0,37); //30,37
scene.add(Temple28);
var Temple29 = new Temple(13,0,38); //13,38
scene.add(Temple29);

//scene 7, thermae, 10 baths
var Thermae = new Municipal("thermae","bath_wall","bath_wall","bath_front","bath_wall",80,240,240);
scene.add(Thermae);
//scene 8, horreum, 3 granary
var Horreum = new Municipal("horreum","dock_wall","dock_wall","horrea_wall","horrea_wall",80,240,240);
scene.add(Horreum);
//scene 9, castrum, 4 barracks
var Castrum = new Municipal("castrum","dock_wall","fora_wall","horrea_wall","horrea_wall",80,240,240);
scene.add(Castrum);


//entertainment buildings, multiple: front texture, back texture, right texture, left texture, building height, width, length
//scene 10, odeum, 2 odeons
var wireOde = new wireTemples("odeum",30);
scene.add(wireOde);
var Odeum = new Odeon(8,14);
scene.add(Odeum);
var Odeum2 = new Odeon(31,16);
scene.add(Odeum2);

//scene 11, theatrum, 3 theatres
var wireTheatre = new wireTheatres("theatrum",30);
scene.add(wireTheatre);
var Theatrum = new AmphitheatreHalf(6,16);
scene.add(Theatrum);
var Theatrum2 = new AmphitheatreHalf(7,21);
scene.add(Theatrum2);
var Theatrum3 = new AmphitheatreHalf(11,23);
scene.add(Theatrum3);

//scene 12, amphitheatrum, 4 amphitheatres
var wireAmphitheatre = new wireAmphi("amphitheatrum",60,112,112);
scene.add(wireAmphitheatre);
var Amphitheatrum = new AmphitheatreFull(25,25);
scene.add(Amphitheatrum);
var Amphitheatrum2 = new AmphitheatreFull(8,26);
scene.add(Amphitheatrum2);
var Amphitheatrum3 = new AmphitheatreFull(36,29);
scene.add(Amphitheatrum3);
var Amphitheatrum4 = new AmphitheatreFull(8,10);
scene.add(Amphitheatrum4);

//scene 13, circus, 2 circus
var wireTrack = new wireCircus("circus",90,240,420);
scene.add(wireTrack);
var Circus1 = new Circus(12,19);
scene.add(Circus1);
var Circus2 = new Circus(19,22);
scene.add(Circus2);

//dock buildings, multiple: front texture, back texture, right texture, left texture, building height, width, length
//scene 14, emporium, 1 harbor
var Harbor = new Emporium("emporium","dock_wall","dock_wall","dock_front","dock_front",90,420,240);
scene.add(Harbor);

//public buildings, single: front texture, back texture, right texture, left texture, building height, row, col
//scene 15, tabularium, records
var Tabularium = new PublicBuilding("fora_wall","fora_wall","fora_front","fora_front",80,22,17); //22,17 tabularium
scene.add(Tabularium);

//scene 16, aerarium, treasury
var Aerarium = new PublicBuilding("aerarium","aerarium","concrete","concrete",80,22,20); //22,20 aerarium
scene.add(Aerarium);

//scene 17, carcer, prison
var Carcer = new PublicBuilding("domus_front","concrete","concrete","concrete",70,18,18); //18,18 prison
scene.add(Carcer);

//scene 18, senatum, senate
var SenateBuilding = new PublicBuilding("fora_wall","fora_wall","basilica_front","basilica_front",80,22,23); //22,23 senate
scene.add(SenateBuilding);

//scene 19,graecostacium, diplomatic
var diploBuilding = new PublicBuilding("fora_wall","fora_wall","basilica_front","basilica_front",80,16,19); //16,19
scene.add(diploBuilding);

//scene 20, atrium vestae, vestal
var vestalBuilding = new PublicBuilding("fora_wall","fora_wall","basilica_front","basilica_front",80,17,20); //17,20
scene.add(vestalBuilding);

//scene 21, atrium libertatis, censor
var censusBuilding = new PublicBuilding("fora_wall","fora_wall","basilica_front","basilica_front",80,22,25); //22,25
scene.add(censusBuilding);

//scene 22, diribitorium, election
var electBuilding = new PublicBuilding("fora_wall","fora_wall","basilica_front","basilica_front",80,26,23); //26,23
scene.add(electBuilding);

//scene 23, villa publica, state headquarters
var stateBuilding = new PublicBuilding("fora_wall","fora_wall","basilica_front","basilica_front",80,29,24); //29,24
scene.add(stateBuilding);

//scene 24, regia, pontifex
var regiaBuilding = new PublicBuilding("fora_wall","fora_wall","basilica_front","basilica_front",80,30,24); //30,24
scene.add(regiaBuilding);

//scene 25, rostra, speaker, 29,17
var Rostrum = new Pillar(29,0,17); //29,17
scene.add(Rostrum);

//scene 26, umbilicus, column, 28,18
var Umbilicus = new Pillar(28,0,18); //28,18
scene.add(Umbilicus);

//scene 27,hortus, garden, 10
Gardens();

}