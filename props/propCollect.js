class propCollect extends THREE.Group {

    init (){

        var dGunCol = this;

            var gunGeometry = new THREE.CubeGeometry(20,20,20,1,1,1);
            var wireGunMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe:true, visible:false } );
            var gunCubeMesh = new THREE.Mesh( gunGeometry, wireGunMaterial );
            gunCubeMesh.position.set(this.pX, 12, this.pZ);
            dGunCol.add(gunCubeMesh);
            collidablePropMeshList.push(gunCubeMesh); 
            propTypes.push(this.type);       
    }    
            
    constructor(pX,pY,pZ,type){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.type = type;
        this.init();
    }
}