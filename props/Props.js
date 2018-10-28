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
            var oilLoaf = new Amphora(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(oilLoaf);
            var oilLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(oilLoafCol);
        }
        else if (businesses =="winery"){
            // put a position amphora
            var propPositionX = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            var propPositionZ = (1800 - 3600) + (jezi * 90) - 75; //row
            var wineLoaf = new Amphora(propPositionX,6,propPositionZ,0,0,0); 
            scene.add(wineLoaf);
            var wineLoafCol = new breadCollect(propPositionX,6,propPositionZ); 
            scene.add(wineLoafCol);
        }

    //increment loop
    i ++;

  }

}