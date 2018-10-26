//prop gathering: health packs, ammo packs
function propGathering(){
    
    breadGathering();
        
}

//bread gathering
function breadGathering(){
    //origin point
    var originPlayerPoint = MovingCube.position.clone();
    var propHit = 0;

    //gathering collision
    for (var vertexPropIndex = 0; vertexPropIndex < MovingCube.geometry.vertices.length; vertexPropIndex++)
    {
        var localVertex = MovingCube.geometry.vertices[vertexPropIndex].clone();
        var globalVertex = localVertex.applyMatrix4( MovingCube.matrix );
        var directionVector = globalVertex.sub( MovingCube.position );

        var rayProp = new THREE.Raycaster( originPlayerPoint, directionVector.clone().normalize() );
        var collisionResults = rayProp.intersectObjects( collidablePropMeshList );
        //check collision props
        if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
            clearText();
            appendText(" Grab ");
            propHit = 1;
        }
    }
    
        //check particle hit
        if (propHit >0){
            //gather prop    
            //amend economy 
            Gather();
        }
}

function Gather(){         
    totalCoin = totalCoin + 1; 
        if (totalCoin <25){           
            eItem ="bread";
            //update weapon in HUD
            appendCoin();
            //update ammo in HUD
            appendItem();
        }
    }  