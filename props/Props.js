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
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 75; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var breadLoaf = new Bread(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(breadLoaf);
            var breadLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(breadLoafCol);

        }
        else if (businesses =="fletcher"){
            // put a position arrow
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 75; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var arrowLoaf = new Arrow(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(arrowLoaf);
            var arrowLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(arrowLoafCol);
        }
        else if (businesses =="bank"){
            // put a position coins
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 75; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var coinLoaf = new Coin(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(coinLoaf);
            var coinLoaf = new Coin(propPositionX + 2,6,propPositionZ + 2,0,0,0); 
            scene.add(coinLoaf);
            var coinLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(coinLoafCol);
        }
        else if (businesses =="sauce"){
            // put a position fish
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 75; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var fishLoaf = new Trout(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(fishLoaf);
            var fishLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(fishLoafCol);
        }
        else if (businesses =="oil"){
            // put a position amphora
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 75; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 30; //row
            var oilLoaf = new Jug(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(oilLoaf);
            var oilLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(oilLoafCol);
        }
        else if (businesses =="winery"){
            // put a position amphora
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 75; //row
            var wineLoaf = new Jug(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(wineLoaf);
            var wineLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(wineLoafCol);
        }
        else if (businesses =="pottery"){
            // put a position amphora
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 75; //row
            var jugLoaf = new Amphora(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(jugLoaf);
            var jugLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(jugLoafCol);
        }
        else if (businesses =="cheesemaker"){
            // put a position cheese
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 75; //row
            var tablestand = new Table(propPositionX,0,propPositionZ,0,0,0); 
            scene.add(tablestand);
            var cheeseLoaf = new Cheese(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(cheeseLoaf);
            var cheeseLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(cheeseLoafCol);
        }
        else if (businesses =="unknown"){
            var animals = xtag[itag].getElementsByTagName("SOUND")[0].childNodes[0].nodeValue;
            var propPositionX = xtag[itag].getElementsByTagName("XCO")[0].childNodes[0].nodeValue;
            var propPositionZ = xtag[itag].getElementsByTagName("YCO")[0].childNodes[0].nodeValue;
            if (animals =="donkey"){
                var donkey = new Donkey(propPositionX,0,propPositionZ,0,0,0); 
                scene.add(donkey);
                console.log("donkey,"+propPositionX+","+propPositionZ);
            }
            else if(animals =="pig"){
                var pig = new Pig(propPositionX,5,propPositionZ,0,0,0); 
                scene.add(pig);
                console.log("pig,"+propPositionX+","+propPositionZ);
            }
            else if(animals =="cattle"){
                var cow = new Cow(propPositionX,0,propPositionZ,0,0,0); 
                scene.add(cow);
                console.log("cow,"+propPositionX+","+propPositionZ);
            }
            else if(animals =="sheep"){
                var sheep = new Sheep(propPositionX,0,propPositionZ,0,0,0); 
                scene.add(sheep);
            }
            else if(animals =="goat"){
                var goat = new Goat(propPositionX,0,propPositionZ,0,0,0); 
                scene.add(goat);
            }
            else if(animals =="horse"){
                var horse = new Horse(propPositionX,0,propPositionZ,0,0,0); 
                scene.add(horse);
            }
        }

    //increment loop
    i ++;

  }

}