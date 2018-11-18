class Plaza extends THREE.Group {

    init (){

    var mCityhall = this;    
    //city geometry
    var cityGeometry= new THREE.Geometry();
    //city mesh
    var hallGeometry = new THREE.CubeGeometry(1, 1, 1 );
    // translate the geometry to place the pivot point at the bottom instead of the center
    hallGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
    //material
    var hallMaterials = [
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //LEFT
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //RIGHT
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/"+this.topTex+".jpg"), side: THREE.FrontSide }), //TOP
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide }), //BOTTOM
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //FRONT
        new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/tesserae.jpg"), side: THREE.FrontSide }), //BACK
        ];
    var hallMaterial = new THREE.MeshFaceMaterial(hallMaterials);
    var meshCityhall = new THREE.Mesh(hallGeometry);
    // put a position
    meshCityhall.position.x = this.nrow;
    meshCityhall.position.y = 0;
    meshCityhall.position.z = this.ncol;
    //put a rotation
    meshCityhall.rotation.y = 0.5*Math.PI*2;
    //building scale
    meshCityhall.scale.x = 60;
    meshCityhall.scale.y = 2;
    meshCityhall.scale.z = 60;
    // merge it with cityGeometry - very important for performance
    var hallGeometry = meshCityhall.hallGeometry;
    cityGeometry.mergeMesh(meshCityhall);
    //add to class
    var mesh4 = new THREE.Mesh(cityGeometry, hallMaterial);
    mCityhall.add(mesh4);    
    }

    constructor(type,topTex,crow,ccol){
    super();
    this.type = type;
    this.topTex = topTex;
    this.nrow = crow;
    this.ncol = ccol;
    this.init();
    }


}