class Pig extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("animals/pig/","Mesh_Pig.obj","animals/pig/","Mesh_Pig.mtl", (mesh) => {
            mesh.scale.x = 0.08;
            mesh.scale.y = 0.08;
            mesh.scale.z = 0.08;
            dChurch.position.x = (1800 - 3600) + (this.pX * 90) - 30;
            dChurch.position.y = this.pY;
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