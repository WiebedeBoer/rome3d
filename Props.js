function Props(){

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
        
        if (businesses =="bakery"){
            // put a position bread
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var breadLoaf = new Bread(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(breadLoaf);
            var breadLoafCol = new propCollect(propPositionX,6,propPositionZ,"bread"); 
            scene.add(breadLoafCol);
        }
        else if (businesses =="fletcher"){
            // put a position arrow
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var arrowLoaf = new Arrow(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(arrowLoaf);
            var arrowLoafCol = new propCollect(propPositionX,6,propPositionZ,"bow"); 
            scene.add(arrowLoafCol);
        }
        else if (businesses =="bank"){
            // put a position coins
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var coinLoaf = new Coin(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(coinLoaf);
            var coinLoaf = new Coin(propPositionX + 2,6,propPositionZ + 2,0,0,0); 
            scene.add(coinLoaf);
            var coinLoafCol = new propCollect(propPositionX,6,propPositionZ,"coin"); 
            scene.add(coinLoafCol);
        }
        else if (businesses =="sauce"){
            // put a position fish
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var fishLoaf = new Trout(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(fishLoaf);
            var fishLoafCol = new propCollect(propPositionX,6,propPositionZ,"sauce"); 
            scene.add(fishLoafCol);
        }
        else if (businesses =="oil"){
            // put a position amphora
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 70; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var oilLoaf = new Jug(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(oilLoaf);
            var oilLoafCol = new propCollect(propPositionX,6,propPositionZ,"oil"); 
            scene.add(oilLoafCol);
        }
        else if (businesses =="winery"){
            // put a position amphora
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            var wineLoaf = new Jug(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(wineLoaf);
            var wineLoafCol = new propCollect(propPositionX,6,propPositionZ,"wine"); 
            scene.add(wineLoafCol);
        }
        else if (businesses =="pottery"){
            // put a position amphora
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            var jugLoaf = new Amphora(propPositionX,3,propPositionZ,0,0,0); 
            scene.add(jugLoaf);
            var jugLoafCol = new propCollect(propPositionX,3,propPositionZ,"pottery"); 
            scene.add(jugLoafCol);
        }
        else if (businesses =="cheesemaker"){
            // put a position cheese
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 70; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var cheeseLoaf = new Cheese(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(cheeseLoaf);
            var cheeseLoafCol = new propCollect(propPositionX,6,propPositionZ,"cheese"); 
            scene.add(cheeseLoafCol);
        }
        else if (businesses =="horreum" || businesses =="emporium"){
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 160; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var donkey = new Donkey(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(donkey);  //donkey train at granary and dock 
        }
        else if (businesses =="venalium"){
            var animals = xtag[itag].getElementsByTagName("SOUND")[0].childNodes[0].nodeValue;
            var ppX = xtag[itag].getElementsByTagName("XCO")[0].childNodes[0].nodeValue;
            var ppZ = xtag[itag].getElementsByTagName("YCO")[0].childNodes[0].nodeValue;
            var propPositionX = (1800 - 3600) + (ppX * 90) - 30;//column
            var propPositionZ = (1800 - 3600) + (ppZ * 90) - 30; //row            
            var propPositionZa = (1800 - 3600) + (ppZ * 90) - 15; //row a            
            var propPositionZb = (1800 - 3600) + (ppZ * 90) - 45; //row b 
            var fenceNorth = (1800 - 3600) + (ppX * 90) - 60;
            var fenceSouth = (1800 - 3600) + (ppX * 90);
            var fenceWest = (1800 - 3600) + (ppZ * 90) - 60;
            var fenceEast = (1800 - 3600) + (ppZ * 90);      

            //forum suarium
            if(animals =="pig"){
                var pig = new Pig(propPositionX,5,propPositionZa,0,0,0); 
                scene.add(pig);  
                var pig2 = new Pig(propPositionX,5,propPositionZb,0,0,0); 
                scene.add(pig2);  
                var fenceL = new Fence(propPositionX,0,fenceWest,0,0,0); 
                scene.add(fenceL);
                var fenceR = new Fence(propPositionX,0,fenceEast,0,0,0); 
                scene.add(fenceR);
                var fenceF = new Fence(fenceNorth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceF);
                var fenceB = new Fence(fenceSouth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceB);       
            }
            //forum boarium
            else if(animals =="cattle"){
                var cow = new Cow(propPositionX,0,propPositionZa,0,0,0); 
                scene.add(cow);  
                var cow2 = new Cow(propPositionX,0,propPositionZb,0,0,0); 
                scene.add(cow2); 
                var fenceL = new Fence(propPositionX,0,fenceWest,0,0,0); 
                scene.add(fenceL);
                var fenceR = new Fence(propPositionX,0,fenceEast,0,0,0); 
                scene.add(fenceR); 
                var fenceF = new Fence(fenceNorth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceF);
                var fenceB = new Fence(fenceSouth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceB);       
            }
            //forum boarium
            else if(animals =="sheep"){
                var sheep = new Sheep(propPositionX,0,propPositionZa,0,0,0); 
                scene.add(sheep); 
                var sheep2 = new Sheep(propPositionX,0,propPositionZb,0,0,0); 
                scene.add(sheep2); 
                var fenceL = new Fence(propPositionX,0,fenceWest,0,0,0); 
                scene.add(fenceL);
                var fenceR = new Fence(propPositionX,0,fenceEast,0,0,0); 
                scene.add(fenceR); 
                var fenceF = new Fence(fenceNorth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceF);
                var fenceB = new Fence(fenceSouth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceB);  
            }
            //forum boarium 
            else if(animals =="goat"){
                var goat = new Goat(propPositionX,0,propPositionZa,0,0,0); 
                scene.add(goat); 
                var goat2 = new Goat(propPositionX,0,propPositionZb,0,0,0); 
                scene.add(goat2); 
                var fenceL = new Fence(propPositionX,0,fenceWest,0,0,0); 
                scene.add(fenceL);
                var fenceR = new Fence(propPositionX,0,fenceEast,0,0,0); 
                scene.add(fenceR); 
                var fenceF = new Fence(fenceNorth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceF);
                var fenceB = new Fence(fenceSouth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceB);  
            }
            //stabula campus martius
            else if(animals =="horse"){
                var horse = new Horse(propPositionX,0,propPositionZa,0,0,0); 
                scene.add(horse); 
                var horse2 = new Horse(propPositionX,0,propPositionZb,0,0,0); 
                scene.add(horse2); 
                var fenceL = new Fence(propPositionX,0,fenceWest,0,0,0); 
                scene.add(fenceL);
                var fenceR = new Fence(propPositionX,0,fenceEast,0,0,0); 
                scene.add(fenceR);  
                var fenceF = new Fence(fenceNorth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceF);
                var fenceB = new Fence(fenceSouth,0,propPositionZ,0,1.5707963,0); 
                scene.add(fenceB);  
            }
            //forum piscarium 
            else if(animals =="fish"){
                var tablestand = new Table(propPositionX,0,propPositionZa,0,0,0); 
                scene.add(tablestand); 
                var fishLoaf = new Trout(propPositionX,6,propPositionZa,0,0,0); 
                scene.add(fishLoaf);
                var fishLoafCol = new propCollect(propPositionX,6,propPositionZa,"sauce"); 
                scene.add(fishLoafCol);
                var tablestand2 = new Table(propPositionX,0,propPositionZb,0,0,0); 
                scene.add(tablestand2); 
                var fishLoaf2 = new Trout(propPositionX,6,propPositionZb,0,0,0); 
                scene.add(fishLoaf2);
                var fishLoafCol2 = new propCollect(propPositionX,6,propPositionZb,"sauce"); 
                scene.add(fishLoafCol2);
            }
            //forum pistorium 
            else if (animals =="bread"){                
                var tablestand = new Table(propPositionX,0,propPositionZa,0,0,0); 
                scene.add(tablestand); 
                var breadLoaf = new Bread(propPositionX,6,propPositionZa,0,0,0); 
                scene.add(breadLoaf);
                var breadLoafCol = new propCollect(propPositionX,6,propPositionZa,"bread"); 
                scene.add(breadLoafCol);
                var tablestand2 = new Table(propPositionX,0,propPositionZb,0,0,0); 
                scene.add(tablestand2); 
                var breadLoaf2 = new Bread(propPositionX,6,propPositionZb,0,0,0); 
                scene.add(breadLoaf2);
                var breadLoafCol2 = new propCollect(propPositionX,6,propPositionZb,"bread"); 
                scene.add(breadLoafCol2);
            }
            //forum vinarium 
            else if (animals =="wine"){                
                var wineLoaf = new Jug(propPositionX,0,propPositionZa,0,0,0); 
                scene.add(wineLoaf); 
                var wineLoafCol = new propCollect(propPositionX,6,propPositionZa,"wine"); 
                scene.add(wineLoafCol);
                var wineLoaf2 = new Jug(propPositionX,0,propPositionZb,0,0,0); 
                scene.add(wineLoaf2); 
                var wineLoafCol2 = new propCollect(propPositionX,6,propPositionZb,"wine"); 
                scene.add(wineLoafCol2);
            }
            //forum holitorium 
            else if (animals =="vegetables"){                
                var tablestand = new Table(propPositionX,0,propPositionZa,0,0,0); 
                scene.add(tablestand); 
                var vegeLoaf = new Cabbage(propPositionX,5,propPositionZa,0,0,0); 
                scene.add(vegeLoaf);
                var tablestand2 = new Table(propPositionX,0,propPositionZb,0,0,0); 
                scene.add(tablestand2);
                var vegeLoaf2 = new Cabbage(propPositionX,5,propPositionZb,0,0,0); 
                scene.add(vegeLoaf2);
            }
            //forum cuppedinis 
            else if (animals =="cheese"){                
                var tablestand = new Table(propPositionX,0,propPositionZa,0,0,0); 
                scene.add(tablestand); 
                var cheeseLoaf = new Cheese(propPositionX,6,propPositionZa,0,0,0); 
                scene.add(cheeseLoaf);
                var cheeseLoafCol = new propCollect(propPositionX,6,propPositionZa,"cheese"); 
                scene.add(cheeseLoafCol);
                var tablestand2 = new Table(propPositionX,0,propPositionZb,0,0,0); 
                scene.add(tablestand2); 
                var cheeseLoaf2 = new Cheese(propPositionX,6,propPositionZb,0,0,0); 
                scene.add(cheeseLoaf2);
                var cheeseLoafCol2 = new propCollect(propPositionX,6,propPositionZb,"cheese"); 
                scene.add(cheeseLoafCol2);
            }
            
        }
        
        

    //increment loop
    i ++;

  }

}