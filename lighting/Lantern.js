class Lantern extends THREE.Group {

    init (){

        var dLantern = this;
        loadOBJModel("props/model_obj_lantern/","model.obj","props/model_obj_lantern/","materials.mtl", (mesh) => {
            dLantern.position.x = this.pX;
            dLantern.position.y = 10;
            dLantern.position.z = this.pZ;
            mesh.scale.x = 4;
            mesh.scale.y = 30;
            mesh.scale.z = 4;
            dLantern.add(mesh);
            addPointLight(dLantern,0xf8eabb, 0, 1, 0, 4, 25); //lantern light
            var g = new THREE.BoxGeometry(1,1,1);
            var m = new THREE.MeshBasicMaterial({color: 0xffffff});
            dLantern._meshLight = new THREE.Mesh(g, m);
            dLantern._meshLight.position.set(12,15,-60);
            dLantern._meshLight.visible = false;
            dLantern.add(dLantern._meshLight);            
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