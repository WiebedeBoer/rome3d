//shooting
function Shot(){
    //shoot ammo check
        if (totalCoin >0){
            //less ammo
            totalArrow = totalArrow - 1;
            totalItem = totalArrow - 1;              
            
            //create ammo particle
            var ammoGeometry = new THREE.CubeGeometry(3,3,3,1,1,1);
            var ammoMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true, visible:false } );
            var ammoCube = new THREE.Mesh( ammoGeometry, ammoMaterial );

            //set particle position
            ammoCube.position.set(camera.position.x, camera.position.y - 3, camera.position.z);
            //set rotation to that of the camera (player)
            ammoCube.rotation.x = camera.rotation.x;
            ammoCube.rotation.y = camera.rotation.y;
            ammoCube.rotation.z = camera.rotation.z;
            
            //create bullet mesh
            var bulletmesh;

            bulletmesh = new Arrow(camera.position.x, camera.position.y, camera.position.z,camera.rotation.x-1.5708,camera.rotation.y+1.5708,camera.rotation.z); //shop 23,20
            //push in list
            bulletmeshes.push(bulletmesh);
            //add to scene
            scene.add(bulletmesh);               

            //add particle
            scene.add( ammoCube );
            collidableBulletMeshList.push(ammoCube); 
            bullets.push(ammoCube);

            //set timeout bullet
            ammoCube.alive = true;
            setTimeout(function(){
                let indexBullet = bullets.map(e => e.uuid).indexOf(ammoCube.uuid);                
                if(indexBullet !== -1){
                    bullets.splice(indexBullet,1);
                    scene.remove(ammoCube);                    
                }
                let indexBulletmesh = bulletmeshes.map(m => m.uuid).indexOf(bulletmesh.uuid);
                if(indexBulletmesh !== -1){
                    bulletmeshes.splice(indexBullet,1);                    
                    scene.remove(bulletmesh);
                }
            }, 3000);

        }
        else {
            totalCoin = 0;  
        }
        //update coin in HUD
        appendCoin();
        eItem ="Bow";
        appendItem();
    
} 
//move bullet cube
function BulletTravel(){
    bullets.forEach(element => {
        element.translateZ(-10);
    });
    bulletmeshes.forEach(element => {
        element.translateX(10); 
    });
}

