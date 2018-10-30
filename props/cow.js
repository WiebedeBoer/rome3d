class Cow extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("animals/cow/","Cow.obj","animals/cow/","Cow.mtl", (mesh) => {
            mesh.scale.x = 1.3;
            mesh.scale.y = 1.3;
            mesh.scale.z = 1.3;
            dChurch.position.x = (1800 - 3600) + (this.pX * 90) - 30;
            dChurch.position.y = 0;
            dChurch.position.z = (1800 - 3600) + (this.pZ * 90) - 30;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(pX,pY,pZ){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.init();
    }
}