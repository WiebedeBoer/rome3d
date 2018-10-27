//music player
function changeImperium(){
        var rand = Math.floor((Math.random() * 4) + 1);
        if (rand ==1){
                document.getElementById("parade").src = "music/rome_imperium.mp3";
        }
        else if(rand ==2){
                document.getElementById("parade").src = "music/ancient_egyptian_cleopatra.mp3";
        }
        else if(rand ==3){
                document.getElementById("parade").src = "music/parade_of_charioteers.mp3";
        }
        else if(rand ==4){
                document.getElementById("parade").src = "music/celtic_king_of_the_fairies.mp3";
        }        
        document.getElementById("imperia").load();
}
var aud = document.getElementById("imperia"); 
function pauseImperium(){        
        aud.pause(); 
}
function playImperium(){        
        aud.play(); 
}