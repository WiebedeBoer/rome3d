function WorldBuilder(){

// 522 towns: 58 thermae, 1 amphitheatrum, 16 theatrum, 16 bibliotheca, 31 templum, 122 emporium, 100 villa, 82 oppidum, 51 palace
// 25 cattle, 27 sheep, 16 pigs, 10 fish
// 30 wheat, 40 wine, 20 pottery, 18 honey, 15 glass
// 3 tin, 11 copper, 19 iron, 10 gold, 11 silver
// 15 pack animals: 10 horse, 5 donkey
// 63 poultry not seen on map, only villa: 7 pheasant, 48 chicken, 8 duck
// 23 fruit: 10 pomegranate, 13 fig
// 23 timber: 16 oak, 4 cedar, 3 pine
// 2 scent: 2 incense
// 2 paper: 1 papyrus, 1 parchment
// 29 seasonings: 4 spices, 2 salt, 23 olive oil
// 12 carving:  3 ivory, 2 amber, 7 marble
// 11 fabrics: 9 silk, 2 hides

//max towns
var mxi = 906;

//town objects
var i = 0;
while (i <mxi){

  //type, path, height,width,depth, x position,y position,z position,rotation y axis
  var tench = xtag[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
  //theatre towns
  if (tench =="theatre"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var theatre = new Urbis("theatre","amphi",0.2,0.2,0.2, xpc -halfsize,0.75, zpc -halfsize,0);
    scene.add(theatre);
  }
  //amphitheatre towns
  else if (tench =="amphitheatre"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var town = new Urbis("amphi_full","amphi",0.2,0.2,0.2,xpc-halfsize,0.75,zpc-halfsize,0);
    scene.add(town); //Rome
  }
  //oppidum towns
  else if (tench =="oppidum"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var oppidum = new Place("house3","house",5,5,5, xpc -halfsize+villa_offset,1.5, zpc -halfsize+villa_offset,0);
    scene.add(oppidum); 
  }
  //villa towns
  else if (tench =="villa"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var villa = new Place("villa","house",5,5,5, xpc -halfsize+villa_offset,1.1, zpc -halfsize-villa_offset,0);
    scene.add(villa);
  }  
  //temple towns
  else if(tench =="templum"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var temple1 = new Place("3d-model","templum",0.005,0.005,0.005, xpc -halfsize,0, zpc -halfsize,0);
    scene.add(temple1);  
  }
  else if(tench =="templum2"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var temple2 = new Place("3d-model","templum2",0.005,0.005,0.005, xpc -halfsize,0, zpc -halfsize,0);
    scene.add(temple2);  
  }
  else if(tench =="templum3"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var temple3 = new Place("3d-model","templum3",0.005,0.005,0.005, xpc -halfsize,0, zpc -halfsize,0);
    scene.add(temple3);  
  }
  else if(tench =="templum4"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var temple4 = new Place("3d-model","templum4",0.005,0.005,0.005, xpc -halfsize,0, zpc -halfsize,0);
    scene.add(temple4);  
  }
  else if(tench =="templum5"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var temple5 = new Place("3d-model","templum5",0.005,0.005,0.005, xpc -halfsize,0, zpc -halfsize,0);
    scene.add(temple5);  
  }
  //pyramid
  else if(tench =="pyramid"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var pyramid = new Place("CHAHIN_PYRAMID","pyramid",1,1,1, xpc -halfsize,0, zpc -halfsize,0);
    scene.add(pyramid); //pyramid
  }
  //library
  else if(tench =="library"){
    var lib_offset = 3;
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var library = new Place("bibliotheca","library",6,6,6, xpc -halfsize -lib_offset,1.8, zpc -halfsize,Math.PI);
    scene.add(library); //library
  }
  //fish
  else if(tench =="fish"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var fish = new Place("NOVELO_TROUT","trout",0.005,0.005,0.005, xpc -halfsize,0.5, zpc -halfsize,0);
    scene.add(fish);  
  }
  //pigs
  else if(tench =="pigs"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var pigs = new Place("Mesh_Pig","pig",0.02,0.02,0.02, xpc -halfsize,1.0, zpc -halfsize,0);
    scene.add(pigs);  
  }
  //sheep
  else if(tench =="sheep"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var sheep = new Place("Sheep","sheep",0.5,0.5,0.5, xpc -halfsize,0.2, zpc -halfsize,0);
    scene.add(sheep);  
  }
  //cattle
  else if(tench =="cattle"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var cattle = new Place("Cow","cow",0.5,0.5,0.5, xpc -halfsize,0.2, zpc -halfsize,0);
    scene.add(cattle);  
  }
  //horse
  else if(tench =="horse"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var horse = new Place("WildHorse","horse",0.3,0.3,0.3, xpc -halfsize,0.2, zpc -halfsize,0);
    scene.add(horse);  
  }
  //donkey
  else if (tench =="donkey"){
      var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
      var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
      var donkey1 = new Place("Donkey","donkey",0.3,0.3,0.3, xpc -halfsize,0.2, zpc -halfsize,0);
      scene.add(donkey1);  
  }
  //pottery
  else if(tench =="pottery"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var pottery = new Place("amphora","amphora_red",1.2,1.2,1.2, xpc -halfsize,0.8, zpc -halfsize,0);
    scene.add(pottery);  
  }
  //papyrus
  else if(tench =="papyrus" || tench =="parchment"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var pottery = new Place("scroll","closed_scroll",9.0,9.0,9.0, xpc -halfsize,0.8, zpc -halfsize,0);
    scene.add(pottery);  
  }
  //honey
  else if(tench =="honey"){
      var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
      var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
      var honey = new Place("honey_jug","honey",0.05,0.05,0.05, xpc -halfsize,0.8, zpc -halfsize,0);
      scene.add(honey);  
  }
  //wine
  else if(tench =="grapevine"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var vine1 = new TreeMaker("grapevine",xpc-halfsize,zpc-halfsize,1.5,1.5,1.5);
    scene.add(vine1);
    var vine2 = new TreeMaker("grapevine",xpc-halfsize,2+zpc-halfsize,1.5,1.5,1.5);
    scene.add(vine2);
  }
  //oasis palm trees
  else if (tench =="oasis"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var palmtree = new TreeMaker("tree_palm",xpc-halfsize,3+zpc-halfsize,2.5,5.0,2.5);
    scene.add(palmtree);
  }  
  //hanging gardens
  else if (tench =="hanging_garden"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var hanging_garden = new TreeMaker("tree_palm",xpc-halfsize,zpc-halfsize,2.5,5.0,2.5);
    scene.add(hanging_garden);
  }
  //cedar forests 
  else if (tench =="cedar"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var cedar = new TreeMaker("cedar",xpc-halfsize,zpc-halfsize,2.5,5.0,2.5);
    scene.add(cedar);
  }
  //olive oil
  else if (tench =="olive_tree"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var olive = new TreeMaker("olive_tree",xpc-halfsize,zpc-halfsize,2.5,4.0,2.5);
    scene.add(olive);
  }
  //fig
  else if (tench =="fig"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var olive = new TreeMaker("fig",xpc-halfsize,zpc-halfsize,2.5,4.0,2.5);
    scene.add(olive);
  }
  //pomegranate
  else if (tench =="pomegranate"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var olive = new TreeMaker("pomegranate",xpc-halfsize,zpc-halfsize,2.5,4.0,2.5);
    scene.add(olive);
  }
  //timber oak
  else if (tench =="tree_transparent"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var oak = new TreeMaker("tree_transparent",xpc-halfsize,zpc-halfsize,2.5,5.0,2.5);
    scene.add(oak);
  }
  //timber pine
  else if (tench =="tree_pine"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var pine = new TreeMaker("tree_pine",xpc-halfsize,zpc-halfsize,2.5,5.0,2.5);
    scene.add(pine);
  }
  //luxuries
  else if (tench =="silk" || tench =="incense" || tench =="ivory" || tench =="spices" || tench =="salt"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var luxury1 = new Place("DromedaryCamels","dromedary",0.4,0.4,0.4, xpc -halfsize,0.8, zpc -halfsize,0);
    scene.add(luxury1);  
    var luxury2 = new Place("DromedaryCamels","dromedary",0.4,0.4,0.4, xpc -halfsize,0.8, zpc -halfsize- 5.5,0);
    scene.add(luxury2);  
  }
  //luxuries
  else if (tench =="amber" || tench =="hides"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var donkey_train1 = new Place("Donkey","donkey",0.3,0.3,0.3, xpc -halfsize,0.2, zpc -halfsize,0);
    scene.add(donkey_train1);  
    var donkey_train2 = new Place("Donkey","donkey",0.3,0.3,0.3, xpc -halfsize,0.2, zpc -halfsize - 5.0,0);
    scene.add(donkey_train2); 
  }
  //luxuries
  else if (tench =="glass"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue); 
    var glass = new Place("Vase_504","glass_vase",0.025,0.025,0.025, xpc -halfsize,0.8, zpc -halfsize,0);
    scene.add(glass);  
  }

    //increment loop
    i ++;

}


//thermae
var thermae = new Town("thermae","bath_front","bath_wall","bath_wall","bath_wall","concrete",4,3.5,4,mxi);
scene.add(thermae); 

//oriental palace
var palladine = new Town("palace","apadana_front","apadana_wall","apadana_wall","apadana_wall","roof_wood",4,3.5,4,mxi);
scene.add(palladine); 

//emporia
var horreum_south = new Town("horreum_south","horrea_wall","dock_wall","horrea_wall","horrea_wall","roof_wood",4,3.5,4,mxi);
scene.add(horreum_south); 
var horreum_north = new Town("horreum_north","dock_wall","horrea_wall","horrea_wall","horrea_wall","roof_wood",4,3.5,4,mxi);
scene.add(horreum_north); 
var horreum_west = new Town("horreum_west","horrea_wall","horrea_wall","horrea_wall","dock_wall","roof_wood",4,3.5,4,mxi);
scene.add(horreum_west); 
var horreum_east = new Town("horreum_east","horrea_wall","horrea_wall","dock_wall","horrea_wall","roof_wood",4,3.5,4,mxi);
scene.add(horreum_east); 

//oasis towns
var oasis_town = new Town("oasis","oasis_door","oasis_window","oasis_wall","oasis_wall","oasis_roof",3,3,3,mxi);
scene.add(oasis_town);

//wheat fields
var wheat_field = new Town("wheat","pallisade","pallisade","pallisade","pallisade","field_wheat",7.5,0.1,7.5,mxi);
scene.add(wheat_field);

//mines and quarries
var iron = new Deposit("iron","iron",2.5,0.8,1.2,mxi);
scene.add(iron);
var tin = new Deposit("tin","tin",2.5,0.8,1.2,mxi);
scene.add(tin);
var gold = new Deposit("gold","gold",2.5,0.8,1.2,mxi);
scene.add(gold);
var silver = new Deposit("silver","silver",2.5,0.8,1.2,mxi);
scene.add(silver);
var marble = new Deposit("marble","marble",2.5,0.8,1.2,mxi);
scene.add(marble);
var copper = new Deposit("copper","copper",2.5,0.8,1.2,mxi);
scene.add(copper);

//region collider and barracks maker
var co = 0;
while (co < 68){
  var pX = xprov[co].getElementsByTagName("xco")[0].childNodes[0].nodeValue;
  var pZ = xprov[co].getElementsByTagName("yco")[0].childNodes[0].nodeValue;
  var tid = xprov[co].getElementsByTagName("id")[0].childNodes[0].nodeValue;
  var pname = xprov[co].getElementsByTagName("province")[0].childNodes[0].nodeValue;
  var collidable = new Collider(tid,pname,10,4,4,pX,pZ);
  scene.add(collidable);
  if (pname =="Castra"){
    var barrack = new Urbis("officer","contubernium",1,1,1, pX -halfsize,0, pZ -halfsize,0);
    scene.add(barrack); //Legio
  }
  co++;
}

}