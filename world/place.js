class Place extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("models/"+this.path+"/",this.type+".obj","models/"+this.path+"/",this.type+".mtl", (mesh) => {
            mesh.scale.x = this.width;
            mesh.scale.y = this.height;
            mesh.scale.z = this.depth;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY;
            dChurch.position.z = this.pZ;
            dChurch.rotation.y = this.yR;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(type,path,height,width,depth,pX,pY,pZ,yR){
        super();
        this.type = type;
        this.path = path;
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.yR = yR;
        this.init();
       
    }
}