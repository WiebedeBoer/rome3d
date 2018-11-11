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
        //pleb
        if (businesses =="bakery"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="pleb";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="tavern"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="womanlow";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        //patrician
        else if (businesses =="bank"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="patrician";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="jeweler"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="womanhigh";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        //public
        else if (businesses =="templum" || businesses =="regia"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="pontif";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="atriumvestae"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="vestalvirgin";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="senatum" || businesses =="basilica" || businesses =="graecostacium" || businesses =="tabularium" || businesses =="atriumlibertatis"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="senator";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="castrum"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 160; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 160; //row
            citizen ="principes";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="amphitheatrum"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 160; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 160; //row
            citizen ="gladiator";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="thermae"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 160; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 160; //row
            citizen ="womanbath";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="aerarium"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="lictor";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="villapublica"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="imperator";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }
        else if (businesses =="diribitorium"){ 
            var personPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var personPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            citizen ="plebtribune";         
            var people = new Person(citizen,personPositionX,personPositionZ);
            scene.add(people);            
        }

        //increment loop
        i ++;
    }

}


