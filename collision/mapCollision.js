var locurl;
var indexProp;
var townInd;
var soundProp;
var pnid;
function Collide (){
  
//origin point
var originPoint = MovingCube.position.clone();
var propHit = 0;

collisionX = 0; //No collision in any direction
collisionZ = 0; //No collision in any direction

//collision
for (var vertexIndex = 0; vertexIndex < MovingCube.geometry.vertices.length; vertexIndex++)
{
    var localVertex = MovingCube.geometry.vertices[vertexIndex].clone();
    var globalVertex = localVertex.applyMatrix4( MovingCube.matrix );
    var directionVector = globalVertex.sub( MovingCube.position );

    var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
    var collisionResults = ray.intersectObjects( collidableMeshList );
        //check collision props
        if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
            propHit = 1;
            indexProp = collidableMeshList.map(e => e.uuid).indexOf(collisionResults[0]['object']['uuid']);
            soundProp = indexProp -1; //good
            townInd = townTypes[soundProp];
            
            pnid =townNames[soundProp];   //good         
            console.log(townTypes);
            console.log(townNames);
        }
}

        //check particle hit
        if (propHit >0){                 
            if(pnid !="Rome"){                
                locurl = "villa.html?villa="+townInd; 
                //pnid = xprov[soundprop].getElementsByTagName("province")[0].childNodes[0].nodeValue;        
                clearText();
                appendText(" Vicinity of province "+pnid+" "+locurl);                  
                //newDoc(locurl);        
            }
            else {                
                locurl ="index.html";        
                clearText();
                appendText(" Vicinity of Rome ");
                //newDoc(locurl);               
            }
            

        }
        else {
            //msg
            clearText();
            appendText(camera.position.x +"x,"+camera.position.z+"z");
        } 
    
            //street name
            var x_street = Math.floor((camera.position.x + 1024) / 51.2);
            var z_street = Math.floor((camera.position.z + 1024) / 51.2);
            //map blacking
            var cb = document.getElementById("myCanvas");
            var ctxb = cb.getContext("2d");
            ctxb.fillStyle = "black";
            ctxb.fillRect(1, 1, 40, 40);
            //map coord
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.fillStyle = "red";
            ctx.fillRect(x_street, z_street, 1, 1);

} 


    function newDoc(locurl) {
        window.location.assign(locurl); 
    }        


