class Coin extends THREE.Group {

    init (){

        var dGun = this;
        loadOBJModel("props/coin/","coin.obj","props/coin/","coin.mtl", (mesh) => {
            mesh.scale.set (0.00001, 0.00001, 0.00001);
            //mesh.scale.y = 10;
            //mesh.scale.z = 10;
            dGun.position.x = this.pX;
            dGun.position.y = this.pY;
            dGun.position.z = this.pZ;
            dGun.add(mesh);

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