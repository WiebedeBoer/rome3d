class Dock extends THREE.Group {

  init (){

    var mCity = this;

    //city mesh
    var geometry = new THREE.CubeGeometry(1, 1, 1 );

    // translate the geometry to place the pivot point at the bottom instead of the center
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
    
    var comMaterials = [
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.leftbuild+".jpg"), side: THREE.FrontSide }), //LEFT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.rightbuild+".jpg"), side: THREE.FrontSide }), //RIGHT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/roof/"+this.topbuild+".jpg"), side: THREE.FrontSide }), //TOP
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground_mud.jpg"), side: THREE.FrontSide }), //BOTTOM
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.frontbuild+".jpg"), side: THREE.FrontSide }), //FRONT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.backbuild+".jpg"), side: THREE.FrontSide }), //BACK
      ];  
    var comMaterial = new THREE.MeshFaceMaterial(comMaterials);
    var buildingMesh = new THREE.Mesh(geometry,comMaterial);

    // put a position
    buildingMesh.position.x = this.pX;
    buildingMesh.position.y = this.pY;
    buildingMesh.position.z = this.pZ;
    //put a rotation
    buildingMesh.rotation.y = this.yR;
    //building scale
    buildingMesh.scale.x = this.length;
    buildingMesh.scale.y = this.height;
    buildingMesh.scale.z = this.width;
  
  //add to class
  mCity.add(buildingMesh);  
  //add to collision
  collidableMeshList.push(buildingMesh);

}

  //constructor: building type, front texture, back texture, right texture, left texture, top texture, building height, width, length, x position,y position,z position, y rotation
  constructor(type,frontbuild,backbuild,rightbuild,leftbuild,topbuild,height,width,length,pX,pY,pZ,yR){
    super();
    this.type = type;
    this.frontbuild = frontbuild;
    this.backbuild = backbuild;
    this.rightbuild = rightbuild
    this.leftbuild = leftbuild;
    this.topbuild = topbuild;
    this.height = height;
    this.width = width;
    this.length = length;
    this.pX = pX;
    this.pY = pY;
    this.pZ = pZ;
    this.yR = yR;
    this.init();
  }

}