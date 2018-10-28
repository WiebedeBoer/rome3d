function Collide (){

//origin point
var originPoint = MovingCube.position.clone();
var collisionCheck = false;

clearText();

//collision
for (var vertexIndex = 0; vertexIndex < MovingCube.geometry.vertices.length; vertexIndex++)
{
var localVertex = MovingCube.geometry.vertices[vertexIndex].clone();
var globalVertex = localVertex.applyMatrix4( MovingCube.matrix );
var directionVector = globalVertex.sub( MovingCube.position );

var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
var collisionResults = ray.intersectObjects( collidableMeshList );
if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
        collisionCheck = true;
}

}

if (!collisionCheck){
        if ( keyboard.pressed("d") || keyboard.pressed("s") ){
        controls.movementSpeed = 80;}
        else if ( keyboard.pressed("a") || keyboard.pressed("w") ){
        controls.movementSpeed = 80;}
        //street name
        var x_street = Math.floor((camera.position.x + 1800) / 90);
        var z_street = Math.floor((camera.position.z + 1800) / 90);
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
        //msg
        clearText();
        appendText(x_street +"th W-E street,"+z_street+"th N-S street");
}
else {
        controls.movementSpeed -= controls.movementSpeed + controls.movementSpeed;  
        clearText();     
        appendText(" boing, ");
}

}