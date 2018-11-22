class Palm extends THREE.Group {

    init (){

    var mCityhall = this;
    
    //city mesh
    var hallGeometry = new THREE.CubeGeometry(1, 1, 1 );

    // translate the geometry to place the pivot point at the bottom instead of the center
    hallGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

    var params = { opacity: 0.9 };
    var opaq = { opacity: 0.0 };

    //material
    var hallMaterials = [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/tree/tree_palm.png"), side: THREE.FrontSide, opacity: params.opacity,transparent: true }), //LEFT
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/tree/tree_palm.png"), side: THREE.FrontSide, opacity: params.opacity,transparent: true  }), //RIGHT
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide, opacity: opaq.opacity,transparent: true }), //TOP
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide, opacity: opaq.opacity,transparent: true  }), //BOTTOM
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/tree/tree_palm.png"), side: THREE.FrontSide, opacity: params.opacity,transparent: true  }), //FRONT 
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/tree/tree_palm.png"), side: THREE.FrontSide, opacity: params.opacity,transparent: true  }), //BACK
        ];
    var hallMaterial = new THREE.MeshFaceMaterial(hallMaterials);
    var meshTree = new THREE.Mesh(hallGeometry,hallMaterial);

    // put a position
    meshTree.position.x = this.nrow;
    meshTree.position.y = 0;
    meshTree.position.z = this.ncol;
    //put a rotation
    meshTree.rotation.y = 0.5*Math.PI*2;
    //building scale
    meshTree.scale.x = 2.5;
    meshTree.scale.y = 5;
    meshTree.scale.z = 2.5;
    //mesh tree
    mCityhall.add(meshTree);
    //add to collision
    collidableMeshList.push(meshTree);
    
    }

    constructor(crow,ccol){
    super();    
    this.nrow = crow;
    this.ncol = ccol;
    this.init();
    }


}