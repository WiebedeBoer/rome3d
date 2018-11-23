function WorldBuilder(){

/*
1 amphitheatre
34 temple
167 villa
102 oppidum
19 theatre
145 dock
47 oasis
7 baths
522 towns
*/

//type, path, height,width,depth, x position,y position,z position,rotation y axis

/*
var barrack = new Urbis("officer","contubernium",1,1,1, -halfsize,0, -halfsize,0);
scene.add(barrack); //
*/

//amphitheatre towns
var town1 = new Urbis("amphi_full","amphi",0.2,0.2,0.2,693-halfsize,0.75,1076-halfsize,0);
scene.add(town1); //Rome

//pyramid
var pyramid = new Place("CHAHIN_PYRAMID","pyramid",1,1,1, 1248 -halfsize,0, 1623 -halfsize,0);
scene.add(pyramid); //pyramid

//hanging gardens
var palmtree1 = new TreeMaker("tree_palm", 1648 -halfsize, 1512 -halfsize);
scene.add(palmtree1);
var palmtree2 = new TreeMaker("tree_palm", 1648 -halfsize, 1515 -halfsize);
scene.add(palmtree2);
var palmtree3 = new TreeMaker("tree_palm", 1648 -halfsize, 1518 -halfsize);
scene.add(palmtree3);

//cedar woods
var cedartree1 = new TreeMaker("cedar", 1368 -halfsize, 1309 -halfsize);
scene.add(cedartree1);
var cedartree2 = new TreeMaker("cedar", 1409 -halfsize, 1447 -halfsize);
scene.add(cedartree2);
var cedartree3 = new TreeMaker("cedar", 1430 -halfsize, 1407 -halfsize);
scene.add(cedartree3);
var cedartree4 = new TreeMaker("cedar", 1272 -halfsize, 1313 -halfsize);
scene.add(cedartree4);
var cedartree5 = new TreeMaker("cedar", 1396 -halfsize, 1454 -halfsize);
scene.add(cedartree5);

//1 = yellow, 2 = brown orange, 3 = dark blue, 4 = dark red, 5 = light grey

//temple towns
var temple1 = new Place("3d-model","templum5",0.005,0.005,0.005, 1363 -halfsize,0, 1316 -halfsize,0);
scene.add(temple1); //Tarsus
var temple2 = new Place("3d-model","templum5",0.005,0.005,0.005, 1302 -halfsize,0, 1172 -halfsize,0);
scene.add(temple2); //Ancyra
var temple3 = new Place("3d-model","templum",0.005,0.005,0.005, 1404 -halfsize,0, 1470 -halfsize,0);
scene.add(temple3); //Damascus
var temple4 = new Place("3d-model","templum",0.005,0.005,0.005, 1465 -halfsize,0, 1423 -halfsize,0);
scene.add(temple4); //Palmyra
var temple5 = new Place("3d-model","templum",0.005,0.005,0.005, 1372 -halfsize,0, 1547 -halfsize,0);
scene.add(temple5); //Hierosolyma
var temple6 = new Place("3d-model","templum",0.005,0.005,0.005, 1394 -halfsize,0, 1540 -halfsize,0);
scene.add(temple6); //Philadelphia
var temple7 = new Place("3d-model","templum4",0.005,0.005,0.005, 989 -halfsize,0, 1240 -halfsize,0);
scene.add(temple7); //Delphi, oracle
var temple8 = new Place("3d-model","templum4",0.005,0.005,0.005, 975 -halfsize,0, 1303 -halfsize,0);
scene.add(temple8); //Messenia, oracle
var temple9 = new Place("3d-model","templum3",0.005,0.005,0.005, 1214 -halfsize,0, 1572 -halfsize,0);
scene.add(temple9); //Alexandria, great library
var temple10 = new Place("3d-model","templum3",0.005,0.005,0.005, 966 -halfsize,0, 1281 -halfsize,0);
scene.add(temple10); //Olympia, statue of zeus
var temple11 = new Place("3d-model","templum3",0.005,0.005,0.005, 1137 -halfsize,0, 1268 -halfsize,0);
scene.add(temple11); //Ephesus, temple of artemis
var temple12 = new Place("3d-model","templum5",0.005,0.005,0.005, 1029 -halfsize,0, 1265 -halfsize,0);
scene.add(temple12); //Athenae
var temple13 = new Place("3d-model","templum5",0.005,0.005,0.005, 383 -halfsize,0, 1101 -halfsize,0);
scene.add(temple13); //Barcino
var temple14 = new Place("3d-model","templum5",0.005,0.005,0.005, 592 -halfsize,0, 1393 -halfsize,0);
scene.add(temple14); //Sufetula
var temple15 = new Place("3d-model","templum5",0.005,0.005,0.005, 595 -halfsize,0, 1338 -halfsize,0);
scene.add(temple15); //Thugga
var temple16 = new Place("3d-model","templum5",0.005,0.005,0.005, 1000 -halfsize,0, 889 -halfsize,0);
scene.add(temple16); //Sarmizegetusa
var temple17 = new Place("3d-model","templum5",0.005,0.005,0.005, 982 -halfsize,0, 891 -halfsize,0);
scene.add(temple17); //Tibiscum
var temple18 = new Place("3d-model","templum5",0.005,0.005,0.005, 1024 -halfsize,0, 858 -halfsize,0);
scene.add(temple18); //Apulum
var temple19 = new Place("3d-model","templum5",0.005,0.005,0.005, 1011 -halfsize,0, 799 -halfsize,0);
scene.add(temple19); //Porolissum
var temple20 = new Place("3d-model","templum5",0.005,0.005,0.005, 733 -halfsize,0, 924 -halfsize,0);
scene.add(temple20); //Pola
var temple21 = new Place("3d-model","templum5",0.005,0.005,0.005, 82 -halfsize,0, 1238 -halfsize,0);
scene.add(temple21); //Ebora
var temple22 = new Place("3d-model","templum5",0.005,0.005,0.005, 176 -halfsize,0, 1270 -halfsize,0);
scene.add(temple22); //Corduba
var temple23 = new Place("3d-model","templum5",0.005,0.005,0.005, 776 -halfsize,0, 851 -halfsize,0);
scene.add(temple23); //Celeia
var temple24 = new Place("3d-model","templum5",0.005,0.005,0.005, 129 -halfsize,0, 1220 -halfsize,0);
scene.add(temple24); //Emerita
var temple25 = new Place("3d-model","templum2",0.005,0.005,0.005, 624 -halfsize,0, 887 -halfsize,0);
scene.add(temple25); //Brixia
var temple26 = new Place("3d-model","templum2",0.005,0.005,0.005, 465 -halfsize,0, 891 -halfsize,0);
scene.add(temple26); //Vienne
var temple27 = new Place("3d-model","templum2",0.005,0.005,0.005, 346 -halfsize,0, 529 -halfsize,0);
scene.add(temple27); //Camulodunum
var temple28 = new Place("3d-model","templum2",0.005,0.005,0.005, 315 -halfsize,0, 551 -halfsize,0);
scene.add(temple28); //Londinium
var temple29 = new Place("3d-model","templum2",0.005,0.005,0.005, 249 -halfsize,0, 560 -halfsize,0);
scene.add(temple29); //Aquae Sulis
var temple30 = new Place("3d-model","templum2",0.005,0.005,0.005, 447 -halfsize,0, 811 -halfsize,0);
scene.add(temple30); //Augustodunum
var temple31 = new Place("3d-model","templum2",0.005,0.005,0.005, 341 -halfsize,0, 907 -halfsize,0);
scene.add(temple31); //Vesunna
var temple32 = new Place("3d-model","templum2",0.005,0.005,0.005, 288 -halfsize,0, 983 -halfsize,0);
scene.add(temple32); //Aquensium
var temple33 = new Place("3d-model","templum2",0.005,0.005,0.005, 449 -halfsize,0, 977 -halfsize,0);
scene.add(temple33); //Nemausus
var temple34 = new Place("3d-model","templum2",0.005,0.005,0.005, 497 -halfsize,0, 878 -halfsize,0);
scene.add(temple34); //Aquae Gratianae

//villa towns
var villa1 = new Place("villa","house",5,5,5, 1152 -halfsize+villa_offset,1.1, 1273 -halfsize-villa_offset,0);
scene.add(villa1); //Tralles
var villa2 = new Place("villa","house",5,5,5, 358 -halfsize+villa_offset,1.1, 1387 -halfsize-villa_offset,0);
scene.add(villa2); //Tingarta
var villa3 = new Place("villa","house",5,5,5, 1401 -halfsize+villa_offset,1.1, 1349 -halfsize-villa_offset,0);
scene.add(villa3); //Antiochia
var villa = new Place("villa","house",5,5,5, 981 -halfsize+villa_offset,1.1, 1293 -halfsize-villa_offset,0);
scene.add(villa); //Megalopolis
var villa5 = new Place("villa","house",5,5,5, 1254 -halfsize+villa_offset,1.1, 1630 -halfsize-villa_offset,0);
scene.add(villa5); //Memphis
var villa6 = new Place("villa","house",5,5,5, 659 -halfsize+villa_offset,1.1, 836 -halfsize-villa_offset,0);
scene.add(villa6); //Bauzanum
var villa7 = new Place("villa","house",5,5,5, 279 -halfsize+villa_offset,1.1, 1408 -halfsize-villa_offset,0);
scene.add(villa7); //Pomaria
var villa8 = new Place("villa","house",5,5,5, 794 -halfsize+villa_offset,1.1, 1155 -halfsize-villa_offset,0);
scene.add(villa8); //Grumentum
var villa9 = new Place("villa","house",5,5,5, 690 -halfsize+villa_offset,1.1, 1014 -halfsize-villa_offset,0);
scene.add(villa9); //Perusia
var villa10 = new Place("villa","house",5,5,5, 674 -halfsize+villa_offset,1.1, 997 -halfsize-villa_offset,0);
scene.add(villa10); //Arretium
var villa11 = new Place("villa","house",5,5,5,699 -halfsize+villa_offset,1.1,1087 -halfsize-villa_offset,0);
scene.add(villa11); //Lanuvium
var villa12 = new Place("villa","house",5,5,5,744 -halfsize+villa_offset,1.1,1114 -halfsize-villa_offset,0);
scene.add(villa12); //Capua
var villa13 = new Place("villa","house",5,5,5, 674 -halfsize+villa_offset,1.1, 895 -halfsize-villa_offset,0);
scene.add(villa13); //Patavium
var villa14 = new Place("villa","house",5,5,5, 805 -halfsize+villa_offset,1.1, 1203 -halfsize-villa_offset,0);
scene.add(villa14); //Consentia
var villa15 = new Place("villa","house",5,5,5, 792 -halfsize+villa_offset,1.1, 1137 -halfsize-villa_offset,0);
scene.add(villa15); //Potentia
var villa16 = new Place("villa","house",5,5,5, 761 -halfsize+villa_offset,1.1, 1113 -halfsize-villa_offset,0);
scene.add(villa16); //Beneventum
var villa17 = new Place("villa","house",5,5,5, 140 -halfsize+villa_offset,1.1, 1293 -halfsize-villa_offset,0);
scene.add(villa17); //Hispalis
var villa18 = new Place("villa","house",5,5,5, 361 -halfsize+villa_offset,1.1, 988 -halfsize-villa_offset,0);
scene.add(villa18); //Tolosa
var villa19 = new Place("villa","house",5,5,5, 1302 -halfsize+villa_offset,1.1, 1871 -halfsize-villa_offset,0);
scene.add(villa19); //Syene
var villa20 = new Place("villa","house",5,5,5, 152 -halfsize+villa_offset,1.1, 1289 -halfsize-villa_offset,0);
scene.add(villa20); //Carmona
var villa21 = new Place("villa","house",5,5,5, 168 -halfsize+villa_offset,1.1, 1287 -halfsize-villa_offset,0);
scene.add(villa21); //Astigi
var villa22 = new Place("villa","house",5,5,5, 153 -halfsize+villa_offset,1.1, 1449 -halfsize-villa_offset,0);
scene.add(villa22); //Volubilis
var villa23 = new Place("villa","house",5,5,5, 481 -halfsize+villa_offset,1.1, 1348 -halfsize-villa_offset,0);
scene.add(villa23); //Sitifis
var villa24 = new Place("villa","house",5,5,5, 518 -halfsize+villa_offset,1.1, 1339 -halfsize-villa_offset,0);
scene.add(villa24); //Cirta
var villa25 = new Place("villa","house",5,5,5, 542 -halfsize+villa_offset,1.1, 1337 -halfsize-villa_offset,0);
scene.add(villa25); //Calama
var villa26 = new Place("villa","house",5,5,5, 558 -halfsize+villa_offset,1.1, 1346 -halfsize-villa_offset,0);
scene.add(villa26); //Thagaste
var villa27 = new Place("villa","house",5,5,5, 582 -halfsize+villa_offset,1.1, 1335 -halfsize-villa_offset,0);
scene.add(villa27); //Bulla Regia
var villa28 = new Place("villa","house",5,5,5, 582 -halfsize+villa_offset,1.1, 1429 -halfsize-villa_offset,0);
scene.add(villa28); //Capsa
var villa29 = new Place("villa","house",5,5,5, 576 -halfsize+villa_offset,1.1, 1405 -halfsize-villa_offset,0);
scene.add(villa29); //Thelepte
var villa30 = new Place("villa","house",5,5,5, 562 -halfsize+villa_offset,1.1, 1384 -halfsize-villa_offset,0);
scene.add(villa30); //Theveste
var villa31 = new Place("villa","house",5,5,5, 913 -halfsize+villa_offset,1.1, 976 -halfsize-villa_offset,0);
scene.add(villa31); //Capedunum
var villa32 = new Place("villa","house",5,5,5, 516 -halfsize+villa_offset,1.1, 1382 -halfsize-villa_offset,0);
scene.add(villa32); //Thamugadi
var villa33 = new Place("villa","house",5,5,5, 508 -halfsize+villa_offset,1.1, 1379 -halfsize-villa_offset,0);
scene.add(villa33); //Lambaesis
var villa34 = new Place("villa","house",5,5,5, 967 -halfsize+villa_offset,1.1, 1238 -halfsize-villa_offset,0);
scene.add(villa34); //Thermum
var villa35 = new Place("villa","house",5,5,5, 800 -halfsize+villa_offset,1.1, 1110 -halfsize-villa_offset,0);
scene.add(villa35); //Canusium
var villa36 = new Place("villa","house",5,5,5, 767 -halfsize+villa_offset,1.1, 1080 -halfsize-villa_offset,0);
scene.add(villa36); //Larinum
var villa37 = new Place("villa","house",5,5,5, 733 -halfsize+villa_offset,1.1, 1096 -halfsize-villa_offset,0);
scene.add(villa37); //Casinum
var villa38 = new Place("villa","house",5,5,5, 726 -halfsize+villa_offset,1.1, 1071 -halfsize-villa_offset,0);
scene.add(villa38); //Marruvium
var villa39 = new Place("villa","house",5,5,5, 704 -halfsize+villa_offset,1.1, 1050 -halfsize-villa_offset,0);
scene.add(villa39); //Reate
var villa40 = new Place("villa","house",5,5,5, 700 -halfsize+villa_offset,1.1, 1033 -halfsize-villa_offset,0);
scene.add(villa40); //Spoletum
var villa41 = new Place("villa","house",5,5,5, 725 -halfsize+villa_offset,1.1, 1027 -halfsize-villa_offset,0);
scene.add(villa41); //Asculum
var villa42 = new Place("villa","house",5,5,5, 652 -halfsize+villa_offset,1.1, 1030 -halfsize-villa_offset,0);
scene.add(villa42); //Rusellae
var villa43 = new Place("villa","house",5,5,5, 658 -halfsize+villa_offset,1.1, 1004 -halfsize-villa_offset,0);
scene.add(villa43); //Siena
var villa44 = new Place("villa","house",5,5,5, 655 -halfsize+villa_offset,1.1, 982 -halfsize-villa_offset,0);
scene.add(villa44); //Florentia
var villa45 = new Place("villa","house",5,5,5, 658 -halfsize+villa_offset,1.1, 943 -halfsize-villa_offset,0);
scene.add(villa45); //Bononia
var villa46 = new Place("villa","house",5,5,5, 646 -halfsize+villa_offset,1.1, 935 -halfsize-villa_offset,0);
scene.add(villa46); //Mutina
var villa47 = new Place("villa","house",5,5,5, 628 -halfsize+villa_offset,1.1, 927 -halfsize-villa_offset,0);
scene.add(villa47); //Parma
var villa48 = new Place("villa","house",5,5,5, 642 -halfsize+villa_offset,1.1, 909 -halfsize-villa_offset,0);
scene.add(villa48); //Mantua
var villa49 = new Place("villa","house",5,5,5, 647 -halfsize+villa_offset,1.1, 894 -halfsize-villa_offset,0);
scene.add(villa49); //Verona
var villa50 = new Place("villa","house",5,5,5, 676 -halfsize+villa_offset,1.1, 874 -halfsize-villa_offset,0);
scene.add(villa50); //Acelum
var villa51 = new Place("villa","house",5,5,5, 609 -halfsize+villa_offset,1.1, 914 -halfsize-villa_offset,0);
scene.add(villa51); //Placentia
var villa52 = new Place("villa","house",5,5,5, 584 -halfsize+villa_offset,1.1, 921 -halfsize-villa_offset,0);
scene.add(villa52); //Dertona
var villa53 = new Place("villa","house",5,5,5, 593 -halfsize+villa_offset,1.1, 907 -halfsize-villa_offset,0);
scene.add(villa53); //Ticinum
var villa54 = new Place("villa","house",5,5,5, 594 -halfsize+villa_offset,1.1, 892 -halfsize-villa_offset,0);
scene.add(villa54); //Mediolanum
var villa55 = new Place("villa","house",5,5,5, 549 -halfsize+villa_offset,1.1, 913 -halfsize-villa_offset,0);
scene.add(villa55); //Taurinorum
var villa56 = new Place("villa","house",5,5,5, 457 -halfsize+villa_offset,1.1, 985 -halfsize-villa_offset,0);
scene.add(villa56); //Arelate
var villa57 = new Place("villa","house",5,5,5, 462 -halfsize+villa_offset,1.1, 962 -halfsize-villa_offset,0);
scene.add(villa57); //Arausio
var villa58 = new Place("villa","house",5,5,5, 465 -halfsize+villa_offset,1.1, 920 -halfsize-villa_offset,0);
scene.add(villa58); //Valentia
var villa59 = new Place("villa","house",5,5,5, 896 -halfsize+villa_offset,1.1, 1049 -halfsize-villa_offset,0);
scene.add(villa59); //Doclea
var villa60 = new Place("villa","house",5,5,5, 835 -halfsize+villa_offset,1.1, 983 -halfsize-villa_offset,0);
scene.add(villa60); //Delminium
var villa61 = new Place("villa","house",5,5,5, 776 -halfsize+villa_offset,1.1, 893 -halfsize-villa_offset,0);
scene.add(villa61); //Metulum
var villa62 = new Place("villa","house",5,5,5, 809 -halfsize+villa_offset,1.1, 891 -halfsize-villa_offset,0);
scene.add(villa62); //Siscia
var villa63 = new Place("villa","house",5,5,5, 1174 -halfsize+villa_offset,1.5, 905 -halfsize-villa_offset,0);
scene.add(villa63); //Noviodunum
var villa64 = new Place("villa","house",5,5,5, 1134 -halfsize+villa_offset,1.5, 963 -halfsize-villa_offset,0);
scene.add(villa64); //Durostorum
var villa65 = new Place("villa","house",5,5,5, 907 -halfsize+villa_offset,1.1, 917 -halfsize-villa_offset,0);
scene.add(villa65); //Sirmium
var villa66 = new Place("villa","house",5,5,5, 953 -halfsize+villa_offset,1.1, 931 -halfsize-villa_offset,0);
scene.add(villa66); //Viminacium
var villa67 = new Place("villa","house",5,5,5, 858 -halfsize+villa_offset,1.1, 908 -halfsize-villa_offset,0);
scene.add(villa67); //Marsonia
var villa68 = new Place("villa","house",5,5,5, 997 -halfsize+villa_offset,1.1, 936 -halfsize-villa_offset,0);
scene.add(villa68); //Drobeta
var villa69 = new Place("villa","house",5,5,5, 1049 -halfsize+villa_offset,1.1, 960 -halfsize-villa_offset,0);
scene.add(villa69); //Malva
var villa70 = new Place("villa","house",5,5,5, 1051 -halfsize+villa_offset,1.1, 983 -halfsize-villa_offset,0);
scene.add(villa70); //Oescus
var villa71 = new Place("villa","house",5,5,5, 974 -halfsize+villa_offset,1.1, 1003 -halfsize-villa_offset,0);
scene.add(villa71); //Naissus
var villa72 = new Place("villa","house",5,5,5, 1017 -halfsize+villa_offset,1.1, 1035 -halfsize-villa_offset,0);
scene.add(villa72); //Serdica
var villa73 = new Place("villa","house",5,5,5, 1060 -halfsize+villa_offset,1.1, 1063 -halfsize-villa_offset,0);
scene.add(villa73); //Philippopolis
var villa74 = new Place("villa","house",5,5,5, 1114 -halfsize+villa_offset,1.1, 1086 -halfsize-villa_offset,0);
scene.add(villa74); //Hadrianopolis
var villa75 = new Place("villa","house",5,5,5, 993 -halfsize+villa_offset,1.1, 1132 -halfsize-villa_offset,0);
scene.add(villa75); //Pella
var villa76 = new Place("villa","house",5,5,5, 996 -halfsize+villa_offset,1.1, 1098 -halfsize-villa_offset,0);
scene.add(villa76); //Tiveriopolis
var villa77 = new Place("villa","house",5,5,5, 983 -halfsize+villa_offset,1.1, 1098 -halfsize-villa_offset,0);
scene.add(villa77); //Stobi
var villa78 = new Place("villa","house",5,5,5, 960 -halfsize+villa_offset,1.1, 1070 -halfsize-villa_offset,0);
scene.add(villa78); //Scupi
var villa79 = new Place("villa","house",5,5,5, 985 -halfsize+villa_offset,1.1, 974 -halfsize-villa_offset,0);
scene.add(villa79); //Felix Romulania
var villa80 = new Place("villa","house",5,5,5, 338 -halfsize+villa_offset,1.1, 1089 -halfsize-villa_offset,0);
scene.add(villa80); //Ilerda
var villa81 = new Place("villa","house",5,5,5, 292 -halfsize+villa_offset,1.1, 1087 -halfsize-villa_offset,0);
scene.add(villa81); //Salduie
var villa82 = new Place("villa","house",5,5,5, 1141 -halfsize+villa_offset,1.1, 1234 -halfsize-villa_offset,0);
scene.add(villa82); //Magnesia
var villa83 = new Place("villa","house",5,5,5, 1152 -halfsize+villa_offset,1.1, 1220 -halfsize-villa_offset,0);
scene.add(villa83); //Thyatira
var villa84 = new Place("villa","house",5,5,5, 1177 -halfsize+villa_offset,1.1, 1163 -halfsize-villa_offset,0);
scene.add(villa84); //Dascylium
var villa85 = new Place("villa","house",5,5,5, 1189 -halfsize+villa_offset,1.1, 1159 -halfsize-villa_offset,0);
scene.add(villa85); //Prusa
var villa86 = new Place("villa","house",5,5,5, 1209 -halfsize+villa_offset,1.1, 1148 -halfsize-villa_offset,0);
scene.add(villa86); //Nicaea
var villa87 = new Place("villa","house",5,5,5, 1221 -halfsize+villa_offset,1.1, 1261 -halfsize-villa_offset,0);
scene.add(villa87); //Apamea
var villa88 = new Place("villa","house",5,5,5, 1233 -halfsize+villa_offset,1.1, 1239 -halfsize-villa_offset,0);
scene.add(villa88); //Synnada
var villa89 = new Place("villa","house",5,5,5, 1216 -halfsize+villa_offset,1.1, 1197 -halfsize-villa_offset,0);
scene.add(villa89); //Cotyaeum
var villa90 = new Place("villa","house",5,5,5, 1232 -halfsize+villa_offset,1.1, 1181 -halfsize-villa_offset,0);
scene.add(villa90); //Dorylaeum
var villa91 = new Place("villa","house",5,5,5, 1263 -halfsize+villa_offset,1.1, 1202 -halfsize-villa_offset,0);
scene.add(villa91); //Pessinus
var villa92 = new Place("villa","house",5,5,5, 1276 -halfsize+villa_offset,1.1, 1186 -halfsize-villa_offset,0);
scene.add(villa92); //Gordium
var villa93 = new Place("villa","house",5,5,5, 1284 -halfsize+villa_offset,1.1, 1303 -halfsize-villa_offset,0);
scene.add(villa93); //Isaura
var villa94 = new Place("villa","house",5,5,5, 1291 -halfsize+villa_offset,1.1, 1270 -halfsize-villa_offset,0);
scene.add(villa94); //Iconium
var villa95 = new Place("villa","house",5,5,5, 1313 -halfsize+villa_offset,1.1, 1303 -halfsize-villa_offset,0);
scene.add(villa95); //Laranda
var villa96 = new Place("villa","house",5,5,5, 1353 -halfsize+villa_offset,1.1, 1176 -halfsize-villa_offset,0);
scene.add(villa96); //Tavium
var villa97 = new Place("villa","house",5,5,5, 1391 -halfsize+villa_offset,1.1, 1137 -halfsize-villa_offset,0);
scene.add(villa97); //Amasea
var villa98 = new Place("villa","house",5,5,5, 1427 -halfsize+villa_offset,1.1, 1181 -halfsize-villa_offset,0);
scene.add(villa98); //Sebasteia
var villa99 = new Place("villa","house",5,5,5, 1451 -halfsize+villa_offset,1.1, 1154 -halfsize-villa_offset,0);
scene.add(villa99); //Nicopolis
var villa100 = new Place("villa","house",5,5,5, 1353 -halfsize+villa_offset,1.1, 1220 -halfsize-villa_offset,0);
scene.add(villa100); //Doara
var villa101 = new Place("villa","house",5,5,5, 1337 -halfsize+villa_offset,1.1, 1247 -halfsize-villa_offset,0);
scene.add(villa101); //Garsaura
var villa102 = new Place("villa","house",5,5,5, 1380 -halfsize+villa_offset,1.1, 1230 -halfsize-villa_offset,0);
scene.add(villa102); //Mazaca
var villa103 = new Place("villa","house",5,5,5, 1353 -halfsize+villa_offset,1.1, 1273 -halfsize-villa_offset,0);
scene.add(villa103); //Tyana
var villa104 = new Place("villa","house",5,5,5, 1406 -halfsize+villa_offset,1.1, 1249 -halfsize-villa_offset,0);
scene.add(villa104); //Comana
var villa105 = new Place("villa","house",5,5,5, 1273 -halfsize+villa_offset,1.1, 1583 -halfsize-villa_offset,0);
scene.add(villa105); //Tanis
var villa106 = new Place("villa","house",5,5,5, 1240 -halfsize+villa_offset,1.1, 1581 -halfsize-villa_offset,0);
scene.add(villa106); //Sais
var villa107 = new Place("villa","house",5,5,5, 1256 -halfsize+villa_offset,1.1, 1595 -halfsize-villa_offset,0);
scene.add(villa107); //Leontopolis
var villa108 = new Place("villa","house",5,5,5, 1245 -halfsize+villa_offset,1.1, 1663 -halfsize-villa_offset,0);
scene.add(villa108); //Heracleapolis
var villa109 = new Place("villa","house",5,5,5, 1238  -halfsize+villa_offset,1.1, 1706 -halfsize-villa_offset,0);
scene.add(villa109); //Hermopolis
var villa110 = new Place("villa","house",5,5,5, 1271 -halfsize+villa_offset,1.1, 1778 -halfsize-villa_offset,0);
scene.add(villa110); //Ptolemais
var villa111 = new Place("villa","house",5,5,5, 1296 -halfsize+villa_offset,1.1, 1806 -halfsize-villa_offset,0);
scene.add(villa111); //Thebae
var villa112 = new Place("villa","house",5,5,5, 1418 -halfsize+villa_offset,1.1, 1416 -halfsize-villa_offset,0);
scene.add(villa112); //Emesa
var villa113 = new Place("villa","house",5,5,5, 1419 -halfsize+villa_offset,1.1, 1397 -halfsize-villa_offset,0);
scene.add(villa113); //Epiphaneia
var villa114 = new Place("villa","house",5,5,5, 1429 -halfsize+villa_offset,1.1, 1349 -halfsize-villa_offset,0);
scene.add(villa114); //Beroea
var villa115 = new Place("villa","house",5,5,5, 1424 -halfsize+villa_offset,1.1, 1285 -halfsize-villa_offset,0);
scene.add(villa115); //Caesarea Germanicia
var villa116 = new Place("villa","house",5,5,5, 1465 -halfsize+villa_offset,1.1, 1248 -halfsize-villa_offset,0);
scene.add(villa116); //Melitene
var villa117 = new Place("villa","house",5,5,5, 1503 -halfsize+villa_offset,1.1, 1232 -halfsize-villa_offset,0);
scene.add(villa117); //Arsamosata
var villa118 = new Place("villa","house",5,5,5, 1521 -halfsize+villa_offset,1.1, 1267 -halfsize-villa_offset,0);
scene.add(villa118); //Amida
var villa119 = new Place("villa","house",5,5,5, 1470 -halfsize+villa_offset,1.1, 1285 -halfsize-villa_offset,0);
scene.add(villa119); //Samosata
var villa120 = new Place("villa","house",5,5,5, 1372 -halfsize+villa_offset,1.1, 1525 -halfsize-villa_offset,0);
scene.add(villa120); //Samaria
var villa121 = new Place("villa","house",5,5,5, 1375 -halfsize+villa_offset,1.1, 1506 -halfsize-villa_offset,0);
scene.add(villa121); //Nazareth
var villa122 = new Place("villa","house",5,5,5, 1370 -halfsize+villa_offset,1.1, 1559 -halfsize-villa_offset,0);
scene.add(villa122); //Hebron
var villa123 = new Place("villa","house",5,5,5, 1480 -halfsize+villa_offset,1.1, 1303 -halfsize-villa_offset,0);
scene.add(villa123); //Edessa
var villa124 = new Place("villa","house",5,5,5, 1487 -halfsize+villa_offset,1.1, 1319 -halfsize-villa_offset,0);
scene.add(villa124); //Carrhae
var villa125 = new Place("villa","house",5,5,5, 1456 -halfsize+villa_offset,1.1, 1332 -halfsize-villa_offset,0);
scene.add(villa125); //Hierapolis
var villa126 = new Place("villa","house",5,5,5, 1486 -halfsize+villa_offset,1.1, 1360 -halfsize-villa_offset,0);
scene.add(villa126); //Callinicum
var villa127 = new Place("villa","house",5,5,5, 1529 -halfsize+villa_offset,1.1, 1397 -halfsize-villa_offset,0);
scene.add(villa127); //Circesium
var villa128 = new Place("villa","house",5,5,5, 1538 -halfsize+villa_offset,1.1, 1415 -halfsize-villa_offset,0);
scene.add(villa128); //Dura Europos
var villa129 = new Place("villa","house",5,5,5, 1573 -halfsize+villa_offset,1.1, 1429 -halfsize-villa_offset,0);
scene.add(villa129); //Anah
var villa130 = new Place("villa","house",5,5,5, 1613 -halfsize+villa_offset,1.1, 1383 -halfsize-villa_offset,0);
scene.add(villa130); //Assur
var villa131 = new Place("villa","house",5,5,5, 1634 -halfsize+villa_offset,1.1, 1443 -halfsize-villa_offset,0);
scene.add(villa131); //Samarra
var villa132 = new Place("villa","house",5,5,5, 1649 -halfsize+villa_offset,1.1, 1487 -halfsize-villa_offset,0);
scene.add(villa132); //Seleucia
var villa133 = new Place("villa","house",5,5,5, 1690 -halfsize+villa_offset,1.1, 1515 -halfsize-villa_offset,0);
scene.add(villa133); //Apameia
var villa134 = new Place("villa","house",5,5,5, 1675 -halfsize+villa_offset,1.1, 1531 -halfsize-villa_offset,0);
scene.add(villa134); //Nippur
var villa135 = new Place("villa","house",5,5,5, 1686 -halfsize+villa_offset,1.1, 1568 -halfsize-villa_offset,0);
scene.add(villa135); //Uruk
var villa136 = new Place("villa","house",5,5,5, 1738 -halfsize+villa_offset,1.1, 1581 -halfsize-villa_offset,0);
scene.add(villa136); //Charax
var villa137 = new Place("villa","house",5,5,5, 1749 -halfsize+villa_offset,1.1, 1603 -halfsize-villa_offset,0);
scene.add(villa137); //Kharba
var villa138 = new Place("villa","house",5,5,5, 1647 -halfsize+villa_offset,1.1, 1382 -halfsize-villa_offset,0);
scene.add(villa138); //Arrapha
var villa139 = new Place("villa","house",5,5,5, 1635 -halfsize+villa_offset,1.1, 1348 -halfsize-villa_offset,0);
scene.add(villa139); //Arbela
var villa140 = new Place("villa","house",5,5,5, 1609 -halfsize+villa_offset,1.1, 1342 -halfsize-villa_offset,0);
scene.add(villa140); //Nineveh
var villa141 = new Place("villa","house",5,5,5, 1589 -halfsize+villa_offset,1.1, 1287 -halfsize-villa_offset,0);
scene.add(villa141); //Sareisa
var villa142 = new Place("villa","house",5,5,5, 1552  -halfsize+villa_offset,1.1, 1308 -halfsize-villa_offset,0);
scene.add(villa142); //Nisibis
var villa143 = new Place("villa","house",5,5,5, 1538 -halfsize+villa_offset,1.1, 1335 -halfsize-villa_offset,0);
scene.add(villa143); //Qirdahat
var villa144 = new Place("villa","house",5,5,5, 1519 -halfsize+villa_offset,1.1, 1320 -halfsize-villa_offset,0);
scene.add(villa144); //Rhesaina
var villa145 = new Place("villa","house",5,5,5, 1500 -halfsize+villa_offset,1.1, 1181 -halfsize-villa_offset,0);
scene.add(villa145); //Acilisene
var villa146 = new Place("villa","house",5,5,5, 1554 -halfsize+villa_offset,1.1, 1173 -halfsize-villa_offset,0);
scene.add(villa146); //Karin
var villa147 = new Place("villa","house",5,5,5, 1546 -halfsize+villa_offset,1.1, 1258 -halfsize-villa_offset,0);
scene.add(villa147); //Tigranocerta
var villa148 = new Place("villa","house",5,5,5, 1592 -halfsize+villa_offset,1.1, 1210 -halfsize-villa_offset,0);
scene.add(villa148); //Manzikert
var villa149 = new Place("villa","house",5,5,5, 1616 -halfsize+villa_offset,1.1, 1239 -halfsize-villa_offset,0);
scene.add(villa149); //Thospia
var villa150 = new Place("villa","house",5,5,5, 1664 -halfsize+villa_offset,1.1, 1238 -halfsize-villa_offset,0);
scene.add(villa150); //Her
var villa151 = new Place("villa","house",5,5,5, 1703 -halfsize+villa_offset,1.1, 1260 -halfsize-villa_offset,0);
scene.add(villa151); //Tauris
var villa152 = new Place("villa","house",5,5,5, 1668 -halfsize+villa_offset,1.1, 1286 -halfsize-villa_offset,0);
scene.add(villa152); //Gilzan
var villa153 = new Place("villa","house",5,5,5, 1700 -halfsize+villa_offset,1.1, 1313 -halfsize-villa_offset,0);
scene.add(villa153); //Ganzak
var villa154 = new Place("villa","house",5,5,5, 1764 -halfsize+villa_offset,1.1, 1252 -halfsize-villa_offset,0);
scene.add(villa154); //Ardabil
var villa155 = new Place("villa","house",5,5,5, 1678 -halfsize+villa_offset,1.1, 1207 -halfsize-villa_offset,0);
scene.add(villa155); //Naxuana
var villa156 = new Place("villa","house",5,5,5, 1652 -halfsize+villa_offset,1.1, 1172 -halfsize-villa_offset,0);
scene.add(villa156); //Artaxata
var villa157 = new Place("villa","house",5,5,5, 1637 -halfsize+villa_offset,1.1, 1162 -halfsize-villa_offset,0);
scene.add(villa157); //Armavir
var villa158 = new Place("villa","house",5,5,5, 1596 -halfsize+villa_offset,1.1, 1114 -halfsize-villa_offset,0);
scene.add(villa158); //Ardahan
var villa159 = new Place("villa","house",5,5,5, 1707 -halfsize+villa_offset,1.1, 1136 -halfsize-villa_offset,0);
scene.add(villa159); //Gardman
var villa160 = new Place("villa","house",5,5,5, 1751 -halfsize+villa_offset,1.1, 1120 -halfsize-villa_offset,0);
scene.add(villa160); //Gabala
var villa161 = new Place("villa","house",5,5,5, 1656 -halfsize+villa_offset,1.1, 1078 -halfsize-villa_offset,0);
scene.add(villa161); //Armazi
var villa162 = new Place("villa","house",5,5,5, 389 -halfsize+villa_offset,1.1, 1009 -halfsize-villa_offset,0);
scene.add(villa162); //Carcasum
var villa163 = new Place("villa","house",5,5,5, 1885 -halfsize+villa_offset,1.1, 1336 -halfsize-villa_offset,0);
scene.add(villa163); //Amol
var villa164 = new Place("villa","house",5,5,5, 1948 -halfsize+villa_offset,1.1, 1319 -halfsize-villa_offset,0);
scene.add(villa164); //Gorgan
var villa165 = new Place("villa","house",5,5,5, 1056 -halfsize+villa_offset,1.1, 999 -halfsize-villa_offset,0);
scene.add(villa165); //Storgasia
var villa166 = new Place("villa","house",5,5,5, 931 -halfsize+villa_offset,1.1, 927 -halfsize-villa_offset,0);
scene.add(villa166); //Singidunum
var villa167 = new Place("villa","house",5,5,5, 963 -halfsize+villa_offset,1.1, 912 -halfsize-villa_offset,0);
scene.add(villa167); //Argidava

//towns oppidum
var oppidum1 = new Place("house3","house",5,5,5, 514 -halfsize+villa_offset,1.5, 939 -halfsize+villa_offset,0);
scene.add(oppidum1); //Ebrodunum
var oppidum2 = new Place("house3","house",5,5,5, 463 -halfsize+villa_offset,1.5, 876 -halfsize+villa_offset,0);
scene.add(oppidum2); //Lugdunum
var oppidum3 = new Place("house3","house",5,5,5, 396 -halfsize+villa_offset,1.5, 951 -halfsize+villa_offset,0);
scene.add(oppidum3); //Segodunum
var oppidum4 = new Place("house3","house",5,5,5, 337 -halfsize+villa_offset,1.5, 958 -halfsize+villa_offset,0);
scene.add(oppidum4); //Aginnum
var oppidum5 = new Place("house3","house",5,5,5, 411 -halfsize+villa_offset,1.5, 875 -halfsize+villa_offset,0);
scene.add(oppidum5); //Gergovia
var oppidum6 = new Place("house3","house",5,5,5, 356 -halfsize+villa_offset,1.5, 872 -halfsize+villa_offset,0);
scene.add(oppidum6); //Augustoritum
var oppidum7 = new Place("house3","house",5,5,5, 329 -halfsize+villa_offset,1.5, 832 -halfsize+villa_offset,0);
scene.add(oppidum7); //Limonum
var oppidum8 = new Place("house3","house",5,5,5, 339 -halfsize+villa_offset,1.5, 786 -halfsize+villa_offset,0);
scene.add(oppidum8); //Turonum
var oppidum9 = new Place("house3","house",5,5,5, 391 -halfsize+villa_offset,1.5, 804 -halfsize+villa_offset,0);
scene.add(oppidum9); //Avaricum
var oppidum10 = new Place("house3","house",5,5,5, 376 -halfsize+villa_offset,1.5, 760 -halfsize+villa_offset,0);
scene.add(oppidum10); //Cenabum
var oppidum11 = new Place("house3","house",5,5,5, 417 -halfsize+villa_offset,1.5, 743 -halfsize+villa_offset,0);
scene.add(oppidum11); //Agedincum
var oppidum12 = new Place("house3","house",5,5,5, 389 -halfsize+villa_offset,1.5, 706 -halfsize+villa_offset,0);
scene.add(oppidum12); //Lutetia
var oppidum13 = new Place("house3","house",5,5,5, 352 -halfsize+villa_offset,1.5, 673 -halfsize+villa_offset,0);
scene.add(oppidum13); //Rotomagus
var oppidum14 = new Place("house3","house",5,5,5, 454 -halfsize+villa_offset,1.5, 780 -halfsize+villa_offset,0);
scene.add(oppidum14); //Alesia
var oppidum15 = new Place("house3","house",5,5,5, 921 -halfsize+villa_offset,1.5, 850 -halfsize+villa_offset,0);
scene.add(oppidum15); //Partiscum
var oppidum16 = new Place("house3","house",5,5,5, 500 -halfsize+villa_offset,1.5, 796 -halfsize+villa_offset,0);
scene.add(oppidum16); //Vesontio
var oppidum17 = new Place("house3","house",5,5,5, 479 -halfsize+villa_offset,1.5, 761 -halfsize+villa_offset,0);
scene.add(oppidum17); //Andematunnum
var oppidum18 = new Place("house3","house",5,5,5, 551 -halfsize+villa_offset,1.5, 722 -halfsize+villa_offset,0);
scene.add(oppidum18); //Divodurum
var oppidum19 = new Place("house3","house",5,5,5, 503 -halfsize+villa_offset,1.5, 692 -halfsize+villa_offset,0);
scene.add(oppidum19); //Argentoratum
var oppidum20 = new Place("house3","house",5,5,5, 440 -halfsize+villa_offset,1.5, 683 -halfsize+villa_offset,0);
scene.add(oppidum20); //Durocorturum
var oppidum21 = new Place("house3","house",5,5,5, 433 -halfsize+villa_offset,1.5, 624 -halfsize+villa_offset,0);
scene.add(oppidum21); //Bagacum
var oppidum22 = new Place("house3","house",5,5,5, 402 -halfsize+villa_offset,1.5, 623 -halfsize+villa_offset,0);
scene.add(oppidum22); //Nemetacum
var oppidum23 = new Place("house3","house",5,5,5, 127 -halfsize+villa_offset,1.5, 1244 -halfsize+villa_offset,0);
scene.add(oppidum23); //Segida
var oppidum24 = new Place("house3","house",5,5,5, 211 -halfsize+villa_offset,1.5, 1263 -halfsize+villa_offset,0);
scene.add(oppidum24); //Castulo
var oppidum25 = new Place("house3","house",5,5,5, 194 -halfsize+villa_offset,1.5, 1231 -halfsize+villa_offset,0);
scene.add(oppidum25); //Sisapo
var oppidum26 = new Place("house3","house",5,5,5, 249 -halfsize+villa_offset,1.5, 1219 -halfsize+villa_offset,0);
scene.add(oppidum26); //Libisosanorum
var oppidum27 = new Place("house3","house",5,5,5, 255 -halfsize+villa_offset,1.5, 1178 -halfsize+villa_offset,0);
scene.add(oppidum27); //Valeria
var oppidum28 = new Place("house3","house",5,5,5, 235 -halfsize+villa_offset,1.5, 1173 -halfsize+villa_offset,0);
scene.add(oppidum28); //Segobriga
var oppidum29 = new Place("house3","house",5,5,5, 199 -halfsize+villa_offset,1.5, 1175 -halfsize+villa_offset,0);
scene.add(oppidum29); //Toletum
var oppidum30 = new Place("house3","house",5,5,5, 241 -halfsize+villa_offset,1.5, 1147 -halfsize+villa_offset,0);
scene.add(oppidum30); //Ercavica
var oppidum31 = new Place("house3","house",5,5,5, 68 -halfsize+villa_offset,1.5, 1159 -halfsize+villa_offset,0);
scene.add(oppidum31); //Aeminium
var oppidum32 = new Place("house3","house",5,5,5, 67 -halfsize+villa_offset,1.5, 1092 -halfsize+villa_offset,0);
scene.add(oppidum32); //Bracara
var oppidum33 = new Place("house3","house",5,5,5, 1080 -halfsize+villa_offset,1.5, 887 -halfsize+villa_offset,0);
scene.add(oppidum33); //Cumidava
var oppidum34 = new Place("house3","house",5,5,5, 138 -halfsize+villa_offset,1.5, 1162 -halfsize+villa_offset,0);
scene.add(oppidum34); //Caparra
var oppidum35 = new Place("house3","house",5,5,5, 149 -halfsize+villa_offset,1.5, 1122 -halfsize+villa_offset,0);
scene.add(oppidum35); //Salamanca
var oppidum36 = new Place("house3","house",5,5,5, 179 -halfsize+villa_offset,1.5, 1136 -halfsize+villa_offset,0);
scene.add(oppidum36); //Abula
var oppidum37 = new Place("house3","house",5,5,5, 196 -halfsize+villa_offset,1.5, 1122 -halfsize+villa_offset,0);
scene.add(oppidum37); //Segovia
var oppidum38 = new Place("house3","house",5,5,5, 183 -halfsize+villa_offset,1.5, 1070 -halfsize+villa_offset,0);
scene.add(oppidum38); //Pallantia
var oppidum39 = new Place("house3","house",5,5,5, 219 -halfsize+villa_offset,1.5, 1082 -halfsize+villa_offset,0);
scene.add(oppidum39); //Clunia Sulpicia
var oppidum40 = new Place("house3","house",5,5,5, 260 -halfsize+villa_offset,1.5, 1055 -halfsize+villa_offset,0);
scene.add(oppidum40); //Calagurris
var oppidum41 = new Place("house3","house",5,5,5, 270 -halfsize+villa_offset,1.5, 1029 -halfsize+villa_offset,0);
scene.add(oppidum41); //Pompaelo
var oppidum42 = new Place("house3","house",5,5,5, 93 -halfsize+villa_offset,1.5, 1019 -halfsize+villa_offset,0);
scene.add(oppidum42); //Lucus
var oppidum43 = new Place("house3","house",5,5,5, 138 -halfsize+villa_offset,1.5, 1048 -halfsize+villa_offset,0);
scene.add(oppidum43); //Asturica
var oppidum44 = new Place("house3","house",5,5,5, 261 -halfsize+villa_offset,1.5, 541 -halfsize+villa_offset,0);
scene.add(oppidum44); //Corinium
var oppidum45 = new Place("house3","house",5,5,5, 308 -halfsize+villa_offset,1.5, 538 -halfsize+villa_offset,0);
scene.add(oppidum45); //Verulamium
var oppidum46 = new Place("house3","house",5,5,5, 358 -halfsize+villa_offset,1.5, 487 -halfsize+villa_offset,0);
scene.add(oppidum46); //Icenorum
var oppidum47 = new Place("house3","house",5,5,5, 285 -halfsize+villa_offset,1.5, 484 -halfsize+villa_offset,0);
scene.add(oppidum47); //Ratae Coritanorum
var oppidum48 = new Place("house3","house",5,5,5, 240 -halfsize+villa_offset,1.5, 483 -halfsize+villa_offset,0);
scene.add(oppidum48); //Viroconium
var oppidum49 = new Place("house3","house",5,5,5, 303 -halfsize+villa_offset,1.5, 447 -halfsize+villa_offset,0);
scene.add(oppidum49); //Lindum
var oppidum50 = new Place("house3","house",5,5,5, 232 -halfsize+villa_offset,1.5, 449 -halfsize+villa_offset,0);
scene.add(oppidum50); //Deva
var oppidum51 = new Place("house3","house",5,5,5, 244 -halfsize+villa_offset,1.5, 411 -halfsize+villa_offset,0);
scene.add(oppidum51); //Bremetennacum
var oppidum52 = new Place("house3","house",5,5,5, 286 -halfsize+villa_offset,1.5, 401 -halfsize+villa_offset,0);
scene.add(oppidum52); //Eboracum
var oppidum53 = new Place("house3","house",5,5,5, 231 -halfsize+villa_offset,1.5, 342 -halfsize+villa_offset,0);
scene.add(oppidum53); //Luguvalium
var oppidum54 = new Place("house3","house",5,5,5, 254 -halfsize+villa_offset,1.5, 324 -halfsize+villa_offset,0);
scene.add(oppidum54); //Habitancum
var oppidum55 = new Place("house3","house",5,5,5, 239 -halfsize+villa_offset,1.5, 295 -halfsize+villa_offset,0);
scene.add(oppidum55); //Trimontium
var oppidum56 = new Place("house3","house",5,5,5, 238 -halfsize+villa_offset,1.5, 1235 -halfsize+villa_offset,0);
scene.add(oppidum56); //Mentesa
var oppidum57 = new Place("house3","house",5,5,5, 383 -halfsize+villa_offset,1.5, 973 -halfsize+villa_offset,0);
scene.add(oppidum57); //Albigensium
var oppidum58 = new Place("house3","house",5,5,5, 392 -halfsize+villa_offset,1.5, 919 -halfsize+villa_offset,0);
scene.add(oppidum58); //Aureliacum
var oppidum59 = new Place("house3","house",5,5,5, 490 -halfsize+villa_offset,1.5, 906 -halfsize+villa_offset,0);
scene.add(oppidum59); //Cularo
var oppidum60 = new Place("house3","house",5,5,5, 530 -halfsize+villa_offset,1.5, 857 -halfsize+villa_offset,0);
scene.add(oppidum60); //Octodurum
var oppidum61 = new Place("house3","house",5,5,5, 269 -halfsize+villa_offset,1.5, 748 -halfsize+villa_offset,0);
scene.add(oppidum61); //Condate
var oppidum62 = new Place("house3","house",5,5,5, 325 -halfsize+villa_offset,1.5, 753 -halfsize+villa_offset,0);
scene.add(oppidum62); //Vindinium
var oppidum63 = new Place("house3","house",5,5,5, 388 -halfsize+villa_offset,1.5, 647 -halfsize+villa_offset,0);
scene.add(oppidum63); //Samarobriva
var oppidum64 = new Place("house3","house",5,5,5, 611 -halfsize+villa_offset,1.5, 782 -halfsize+villa_offset,0);
scene.add(oppidum64); //Brigantium
var oppidum65 = new Place("house3","house",5,5,5, 604 -halfsize+villa_offset,1.5, 818 -halfsize+villa_offset,0);
scene.add(oppidum65); //Curia Raetorum
var oppidum66 = new Place("house3","house",5,5,5, 575 -halfsize+villa_offset,1.5, 789 -halfsize+villa_offset,0);
scene.add(oppidum66); //Turicum
var oppidum67 = new Place("house3","house",5,5,5, 550 -halfsize+villa_offset,1.5, 780 -halfsize+villa_offset,0);
scene.add(oppidum67); //Rauracorum
var oppidum68 = new Place("house3","house",5,5,5, 542 -halfsize+villa_offset,1.5, 812 -halfsize+villa_offset,0);
scene.add(oppidum68); //Brenodurum
var oppidum69 = new Place("house3","house",5,5,5, 784 -halfsize+villa_offset,1.5, 821 -halfsize+villa_offset,0);
scene.add(oppidum69); //Flavia Solva
var oppidum70 = new Place("house3","house",5,5,5, 752 -halfsize+villa_offset,1.5, 861 -halfsize+villa_offset,0);
scene.add(oppidum70); //Emona
var oppidum71 = new Place("house3","house",5,5,5, 749 -halfsize+villa_offset,1.5, 825 -halfsize+villa_offset,0);
scene.add(oppidum71); //Virunum
var oppidum72 = new Place("house3","house",5,5,5, 869 -halfsize+villa_offset,1.5, 805 -halfsize+villa_offset,0);
scene.add(oppidum72); //Gorsium
var oppidum73 = new Place("house3","house",5,5,5, 888 -halfsize+villa_offset,1.5, 782 -halfsize+villa_offset,0);
scene.add(oppidum73); //Aquincum
var oppidum74 = new Place("house3","house",5,5,5, 824 -halfsize+villa_offset,1.5, 749 -halfsize+villa_offset,0);
scene.add(oppidum74); //Carnuntum
var oppidum75 = new Place("house3","house",5,5,5, 786 -halfsize+villa_offset,1.5, 744 -halfsize+villa_offset,0);
scene.add(oppidum75); //Cetium
var oppidum76 = new Place("house3","house",5,5,5, 752 -halfsize+villa_offset,1.5, 743 -halfsize+villa_offset,0);
scene.add(oppidum76); //Lauriacum
var oppidum77 = new Place("house3","house",5,5,5, 710 -halfsize+villa_offset,1.5, 764 -halfsize+villa_offset,0);
scene.add(oppidum77); //Iuvavum
var oppidum78 = new Place("house3","house",5,5,5, 645 -halfsize+villa_offset,1.5, 733 -halfsize+villa_offset,0);
scene.add(oppidum78); //Vindelicorum
var oppidum79 = new Place("house3","house",5,5,5, 517 -halfsize+villa_offset,1.5, 656 -halfsize+villa_offset,0);
scene.add(oppidum79); //Treverorum
var oppidum80 = new Place("house3","house",5,5,5, 527 -halfsize+villa_offset,1.5, 586 -halfsize+villa_offset,0);
scene.add(oppidum80); //Ubiorum
var oppidum81 = new Place("house3","house",5,5,5, 494 -halfsize+villa_offset,1.5, 534 -halfsize+villa_offset,0);
scene.add(oppidum81); //Noviomagus
var oppidum82 = new Place("house3","house",5,5,5, 649 -halfsize+villa_offset,1.5, 635 -halfsize+villa_offset,0);
scene.add(oppidum82); //Menosgada
var oppidum83 = new Place("house3","house",5,5,5, 636 -halfsize+villa_offset,1.5, 617 -halfsize+villa_offset,0);
scene.add(oppidum83); //Bicurgium
var oppidum84 = new Place("house3","house",5,5,5, 566 -halfsize+villa_offset,1.5, 642 -halfsize+villa_offset,0);
scene.add(oppidum84); //Mogontiacum
var oppidum85 = new Place("house3","house",5,5,5, 663 -halfsize+villa_offset,1.5, 714 -halfsize+villa_offset,0);
scene.add(oppidum85); //Vallatum
var oppidum86 = new Place("house3","house",5,5,5, 674 -halfsize+villa_offset,1.5, 703 -halfsize+villa_offset,0);
scene.add(oppidum86); //Alcimoennis
var oppidum87 = new Place("house3","house",5,5,5, 602 -halfsize+villa_offset,1.5, 724 -halfsize+villa_offset,0);
scene.add(oppidum87); //Riusiava
var oppidum88 = new Place("house3","house",5,5,5, 751 -halfsize+villa_offset,1.5, 637 -halfsize+villa_offset,0);
scene.add(oppidum88); //Casurgis
var oppidum89 = new Place("house3","house",5,5,5, 814 -halfsize+villa_offset,1.5, 687 -halfsize+villa_offset,0);
scene.add(oppidum89); //Bruna
var oppidum90 = new Place("house3","house",5,5,5, 546 -halfsize+villa_offset,1.5, 620 -halfsize+villa_offset,0);
scene.add(oppidum90); //Confluentes
var oppidum91 = new Place("house3","house",5,5,5, 482 -halfsize+villa_offset,1.5, 596 -halfsize+villa_offset,0);
scene.add(oppidum91); //Tungrorum
var oppidum92 = new Place("house3","house",5,5,5, 498 -halfsize+villa_offset,1.5, 589 -halfsize+villa_offset,0);
scene.add(oppidum92); //Coriovallum
var oppidum93 = new Place("house3","house",5,5,5, 534 -halfsize+villa_offset,1.5, 538 -halfsize+villa_offset,0);
scene.add(oppidum93); //Aliso
var oppidum94 = new Place("house3","house",5,5,5, 576 -halfsize+villa_offset,1.5, 538 -halfsize+villa_offset,0);
scene.add(oppidum94); //Arbalo
var oppidum95 = new Place("house3","house",5,5,5, 598 -halfsize+villa_offset,1.5, 569 -halfsize+villa_offset,0);
scene.add(oppidum95); //Mattium
var oppidum96 = new Place("house3","house",5,5,5, 647 -halfsize+villa_offset,1.5, 696 -halfsize+villa_offset,0);
scene.add(oppidum96); //Biriciana
var oppidum97 = new Place("house3","house",5,5,5, 794 -halfsize+villa_offset,1.5, 841 -halfsize+villa_offset,0);
scene.add(oppidum97); //Poetovio
var oppidum98 = new Place("house3","house",5,5,5, 864 -halfsize+villa_offset,1.5, 860 -halfsize+villa_offset,0);
scene.add(oppidum98); //Sopianae
var oppidum99 = new Place("house3","house",5,5,5, 1003 -halfsize+villa_offset,1.5, 867 -halfsize+villa_offset,0);
scene.add(oppidum99); //Micia
var oppidum100 = new Place("house3","house",5,5,5, 1026 -halfsize+villa_offset,1.5, 871 -halfsize+villa_offset,0);
scene.add(oppidum100); //Napoca
var oppidum101 = new Place("house3","house",5,5,5, 1125 -halfsize+villa_offset,1.5, 790 -halfsize+villa_offset,0);
scene.add(oppidum101); //Cotnari
var oppidum102 = new Place("house3","house",5,5,5, 1108 -halfsize+villa_offset,1.5, 812 -halfsize+villa_offset,0);
scene.add(oppidum102); //Petrodava


//theatre towns
var theatre1 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1003 -halfsize,0.75, 1243 -halfsize,0);
scene.add(theatre1); //Mideia
var theatre2 = new Urbis("theatre","amphi",0.2,0.2,0.2, 999 -halfsize,0.75, 1283 -halfsize,0);
scene.add(theatre2); //Argos
var theatre3 = new Urbis("theatre","amphi",0.2,0.2,0.2, 947 -halfsize,0.75, 1209 -halfsize,0);
scene.add(theatre3); //Ambracia
var theatre4 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1016 -halfsize,0.75, 1249 -halfsize,0);
scene.add(theatre4); //Thebes
var theatre5 = new Urbis("theatre","amphi",0.2,0.2,0.2, 989 -halfsize,0.75, 1186 -halfsize,0);
scene.add(theatre5); //Larissa
var theatre6 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1023 -halfsize,0.75, 1115 -halfsize,0);
scene.add(theatre6); //Amphipolis
var theatre7 = new Urbis("theatre","amphi",0.2,0.2,0.2, 990 -halfsize,0.75, 1308 -halfsize,0);
scene.add(theatre7); //Sparta
var theatre8 = new Urbis("theatre","amphi",0.2,0.2,0.2, 776 -halfsize,0.75, 1308 -halfsize,0);
scene.add(theatre8); //Syracusae
var theatre9 = new Urbis("theatre","amphi",0.2,0.2,0.2, 770 -halfsize,0.75, 1287 -halfsize,0);
scene.add(theatre9); //Catania
var theatre10 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1259 -halfsize,0.75, 1321 -halfsize,0);
scene.add(theatre10); //Side
var theatre11 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1178 -halfsize,0.75, 1279 -halfsize,0);
scene.add(theatre11); //Aphrodisias
var theatre12 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1132 -halfsize,0.75, 1211 -halfsize,0);
scene.add(theatre12); //Pergamum
var theatre13 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1158 -halfsize,0.75, 1241 -halfsize,0);
scene.add(theatre13); //Sardes
var theatre14 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1150 -halfsize,0.75, 1297 -halfsize,0);
scene.add(theatre14); //Miletus
var theatre15 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1333 -halfsize,0.75, 1397 -halfsize,0);
scene.add(theatre15); //Salamus
var theatre16 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1289 -halfsize,0.75, 1414 -halfsize,0);
scene.add(theatre16); //Paphus
var theatre17 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1190 -halfsize,0.75, 1272 -halfsize,0);
scene.add(theatre17); //Laodicea Lycum
var theatre18 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1110 -halfsize,0.75, 1162 -halfsize,0);
scene.add(theatre18); //Troas
var theatre19 = new Urbis("theatre","amphi",0.2,0.2,0.2, 1082 -halfsize,0.75, 1124 -halfsize,0);
scene.add(theatre19); //Maroneia

//objects
var mxi = 199;
//loop
var i = 1;
while (i <mxi){
  var tench = xtag[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
  //theatre towns
  if (tench =="theatre"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var theatre = new Urbis("theatre","amphi",0.2,0.2,0.2, xpc -halfsize,0.75, zpc -halfsize,0);
    scene.add(theatre);
  }
  //oppidum towns
  else if (tench =="oppidum"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var oppidum = new Place("house3","house",5,5,5, xpc -halfsize+villa_offset,1.5, zpc -halfsize+villa_offset,0);
    scene.add(oppidum); //Ebrodunum
  }
  //villa towns
  else if (tench =="villa"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var villa = new Place("villa","house",5,5,5, xpc -halfsize+villa_offset,1.1, zpc -halfsize-villa_offset,0);
    scene.add(villa);
  }
      //increment loop
      i ++;
}

//thermae
var thermae = new Town("thermae","bath_front","bath_wall","bath_wall","bath_wall","concrete",4,3.5,4);
scene.add(thermae); 

//emporia
var horreum_south = new Town("horreum_south","horrea_wall","dock_wall","horrea_wall","horrea_wall","roof_wood",4,3.5,4);
scene.add(horreum_south); 
var horreum_north = new Town("horreum_north","dock_wall","horrea_wall","horrea_wall","horrea_wall","roof_wood",4,3.5,4);
scene.add(horreum_north); 
var horreum_west = new Town("horreum_west","horrea_wall","horrea_wall","horrea_wall","dock_wall","roof_wood",4,3.5,4);
scene.add(horreum_west); 
var horreum_east = new Town("horreum_east","horrea_wall","horrea_wall","dock_wall","horrea_wall","roof_wood",4,3.5,4);
scene.add(horreum_east); 

//oasis towns
var oasis_town = new Town("oasis","oasis_door","oasis_window","oasis_wall","oasis_wall","oasis_roof",3,3,3);
scene.add(oasis_town);

//oasis palm trees
var mxi = 199;
//loop
var i = 1;
while (i <mxi){
  var tench = xtag[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
  if (tench =="oasis"){
    var xpc = parseInt(xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue);
    var zpc = parseInt(xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue);
    var palmtree = new TreeMaker("tree_palm",xpc-halfsize,3+zpc-halfsize);
    scene.add(palmtree);
  }
      //increment loop
      i ++;
}

}