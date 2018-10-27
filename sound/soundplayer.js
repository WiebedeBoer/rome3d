//music player
function playSound(soundtype){
        
        if (soundtype =="shoot"){
                document.getElementById("soundscape").src = "sfx/combat/ranged_fire02.mp3";
        }
        else if (soundtype =="march"){
            document.getElementById("soundscape").src = "sfx/combat/march01.mp3";
        }
        else if (soundtype =="grab"){
            document.getElementById("soundscape").src = "sfx/miscellaneous/hoe.mp3";
        }
       
        document.getElementById("soundpar").load();
}