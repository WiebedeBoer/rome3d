function PeopleMaker() {
    var citizen;  
    //no. buildings, max = 1600
    //var mxi = 1600; 40 x 40 grid
    var mxi = 1600;
    //loop
    var i = 1;
    while (i < mxi){
        //row
        var jezi = (Math.floor(i / 40)) + 1;
        //column
        var itag = i - 1;
        var businesses = xtag[itag].getElementsByTagName("BUSINESS")[0].childNodes[0].nodeValue; 
        
        var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
        var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
        
        //pleb
        if (businesses =="bakery" || businesses =="butcher" || businesses =="tavern" || businesses =="oil" || businesses =="winery"){   
            citizen ="pleb";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);
            console.log("pleb"+itag);
        }

        //increment loop
        i ++;
    }

}


