class Lares extends THREE.Group {

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
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/lares_wood.jpg"), side: THREE.FrontSide }), //LEFT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/lares_front.jpg"), side: THREE.FrontSide }), //RIGHT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/lares_wood.jpg"), side: THREE.FrontSide }), //TOP
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/lares_wood.jpg"), side: THREE.FrontSide }), //BOTTOM
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/lares_wood.jpg"), side: THREE.FrontSide }), //FRONT
            new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/lares_wood.jpg"), side: THREE.FrontSide }), //BACK
        ];
        var hallMaterial = new THREE.MeshFaceMaterial(hallMaterials);
        var meshCityhall = new THREE.Mesh(hallGeometry);
        // put a position
        meshCityhall.position.x = this.xPos;
        meshCityhall.position.z = this.zPos;
        //put a rotation
        meshCityhall.rotation.y = 0.5*Math.PI*2;
        //building scale
        meshCityhall.scale.x = this.width;
        meshCityhall.scale.y = this.height;
        meshCityhall.scale.z = this.width;
        // merge it with cityGeometry - very important for performance
        var hallGeometry = meshCityhall.hallGeometry;
        cityGeometry.mergeMesh(meshCityhall);
        //add to class
        var mesh4 = new THREE.Mesh(cityGeometry, hallMaterial);
        mCityhall.add(mesh4);     
        //candle material              
        var g = new THREE.BoxGeometry(1,1,1);
        var m = new THREE.MeshBasicMaterial({color: 0xf8eabb});
        //candle light
        addPointLight(mCityhall,0xf8eabb, this.xPos+5.8,11,this.zPos+1.6, 0.7, 45); 
        mCityhall._cLight = new THREE.Mesh(g, m);
        mCityhall._cLight.position.set(this.xPos+5.8,10,this.zPos+1.6);
        mCityhall._cLight.visible = false;
        mCityhall.add(mCityhall._cLight); 
        //candle light
        addPointLight(mCityhall,0xf8eabb, this.xPos+5.8,11,this.zPos-1.8, 0.7, 45); 
        mCityhall._cLight = new THREE.Mesh(g, m);
        mCityhall._cLight.position.set(this.xPos+5.8,10,this.zPos-1.8);
        mCityhall._cLight.visible = false;
        mCityhall.add(mCityhall._cLight);
        //candle light
        addPointLight(mCityhall,0xf8eabb, this.xPos+5.8,10.4,this.zPos-0.1, 0.8, 45); 
        mCityhall._cLight = new THREE.Mesh(g, m);
        mCityhall._cLight.position.set(this.xPos+5.8,9.4,this.zPos-0.1);
        mCityhall._cLight.visible = false;
        mCityhall.add(mCityhall._cLight); 
        
    }

    constructor(bHeight,bWidth,xPos,zPos){
        super();  
        this.xPos = xPos;
        this.zPos = zPos;    
        this.height = bHeight;
        this.width = bWidth;
        this.init();
    }
}