function LegionMaker(){
    //augur
    var augur = new Person("augur",-23,-73);
    scene.add(augur);   
    var farmer = new Person("farmer",21,273);
    scene.add(farmer);   
    //legatus
    var legatus = new Military("legatus",415,13);
    scene.add(legatus); 
    //tribunes
    var tribunus1 = new Military("tribunus",380,-475);
    scene.add(tribunus1);
    var tribunus2 = new Military("tribunus",380,-385);
    scene.add(tribunus2);  
    var tribunus3 = new Military("tribunus",380,-295);
    scene.add(tribunus3);  
    var tribunus4 = new Military("tribunus",380,-205);
    scene.add(tribunus4);  
    var tribunus5 = new Military("tribunus",380,-115);
    scene.add(tribunus5); 
    var tribunus6 = new Military("tribunus",380,155);
    scene.add(tribunus6);  
    var tribunus7 = new Military("tribunus",380,245);
    scene.add(tribunus7);  
    var tribunus8 = new Military("tribunus",380,335);
    scene.add(tribunus8); 
    //prefects
    var prefect1 = new Military("praefectus",380,425);
    scene.add(prefect1); 
    var prefect2 = new Military("praefectus",380,515);
    scene.add(prefect2);  
    //cavalry
    var highequite1 = new Military("highequites",-390,25);
    scene.add(highequite1);
    var equite1 = new Military("equites",-390,-65);
    scene.add(equite1);  
    var equite2 = new Military("equites",-390,-155);
    scene.add(equite2);  
    var equite3 = new Military("equites",-390,-245);
    scene.add(equite3);  
    var equite4 = new Military("equites",-390,-335);
    scene.add(equite4);
    var equite5 = new Military("equites",-390,-425);
    scene.add(equite5); 
    var highequite2 = new Military("highequites",-390,115);
    scene.add(highequite2); 
    var equite6 = new Military("equites",-390,205);
    scene.add(equite6);  
    var equite7 = new Military("equites",-390,295);
    scene.add(equite7);  
    var equite8 = new Military("equites",-390,385);
    scene.add(equite8);  
    var equite9 = new Military("equites",-390,475);
    scene.add(equite9);
    var equite10 = new Military("equites",-390,565);
    scene.add(equite10);  
    //infantry hastati
    var centurion1 = new Military("centurion",-300,25);
    scene.add(centurion1);
    var hastati1 = new Military("hastati",-300,-65);
    scene.add(hastati1);  
    var hastati2 = new Military("hastati",-300,-155);
    scene.add(hastati2);  
    var hastati3 = new Military("hastati",-300,-245);
    scene.add(hastati3);  
    var hastati4 = new Military("hastati",-300,-335);
    scene.add(hastati4);
    var hastati5 = new Military("hastati",-300,-425);
    scene.add(hastati5); 
    var optio1 = new Military("optio",-300,115);
    scene.add(optio1); 
    var signifer1 = new Military("signifer",-300,205);
    scene.add(signifer1);  
    var hastati7 = new Military("hastati",-300,295);
    scene.add(hastati7);  
    var hastati8 = new Military("hastati",-300,385);
    scene.add(hastati8);  
    var hastati9 = new Military("hastati",-300,475);
    scene.add(hastati9);
    var hastati10 = new Military("hastati",-300,565);
    scene.add(hastati10); 
    //infantry principes
    var centurion2 = new Military("centurion",-210,25);
    scene.add(centurion2);
    var principes2 = new Military("principes",-210,-155);
    scene.add(principes2);  
    var principes3 = new Military("principes",-210,-245);
    scene.add(principes3);  
    var principes4 = new Military("principes",-210,-335);
    scene.add(principes4);
    var principes5 = new Military("principes",-210,-425);
    scene.add(principes5); 
    var optio2 = new Military("optio",-210,115);
    scene.add(optio2); 
    var signifer2 = new Military("signifer",-210,205);
    scene.add(signifer2);  
    var principes7 = new Military("principes",-210,295);
    scene.add(principes7);  
    var principes8 = new Military("principes",-210,385);
    scene.add(principes8);  
    var principes9 = new Military("principes",-210,475);
    scene.add(principes9);
    var principes10 = new Military("principes",-210,565);
    scene.add(principes10); 
    //infantry triari 
    var centurion3 = new Military("centurion",-120,25);
    scene.add(centurion3);
    var triari2 = new Military("triari",-120,-155);
    scene.add(triari2);  
    var triari3 = new Military("triari",-120,-245);
    scene.add(triari3);  
    var triari4 = new Military("triari",-120,-335);
    scene.add(triari4);
    var triari5 = new Military("triari",-120,-425);
    scene.add(triari5); 
    var optio3 = new Military("optio",-120,115);
    scene.add(optio3); 
    var signifer3 = new Military("signifer",-120,205);
    scene.add(signifer3);  
    var triari7 = new Military("triari",-120,295);
    scene.add(triari7);  
    var triari8 = new Military("triari",-120,385);
    scene.add(triari8);  
    var triari9 = new Military("triari",-120,475);
    scene.add(triari9);
    var triari10 = new Military("triari",-120,565);
    scene.add(triari10); 
    //bugler
    var cornicen = new Military("cornicen",-14,105);
    scene.add(cornicen); 
    var aquilifer = new Military("aquilifer",-46,105);
    scene.add(aquilifer); 
    //velites
    var velites1 = new Military("velites",595,15);
    scene.add(velites1);  
    var velites2 = new Military("velites",685,15);
    scene.add(velites2);
    var velites3 = new Military("velites",775,15);
    scene.add(velites3); 
    //rorari
    var rorari1 = new Military("rorari",595,-75);
    scene.add(rorari1);  
    var rorari2 = new Military("rorari",685,-75);
    scene.add(rorari2);
    var rorari3 = new Military("rorari",775,-75);
    scene.add(rorari3); 
    //sagitarius
    var sagitarius1 = new Military("sagitarius",595,-165);
    scene.add(sagitarius1);  
    var sagitarius2 = new Military("sagitarius",685,-165);
    scene.add(sagitarius2);
    var sagitarius3 = new Military("sagitarius",775,-165);
    scene.add(sagitarius3); 

}