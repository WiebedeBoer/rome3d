class Deposit extends THREE.Group {

  init (){

    var mCity = this;

    //city mesh
    var geometry = new THREE.CubeGeometry(1, 1, 1 );

    // translate the geometry to place the pivot point at the bottom instead of the center
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );
    
    var comMaterials = [
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //LEFT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //RIGHT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //TOP
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //BOTTOM
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //FRONT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/deposits/"+this.build+".jpg"), side: THREE.FrontSide }), //BACK
      ];  
    var comMaterial = new THREE.MeshFaceMaterial(comMaterials);
    var buildingMesh = new THREE.Mesh(geometry);

    //city geometry
    var cityGeometry= new THREE.Geometry();

    console.log(this.type);
  
  //loop
  var i = 1;
  while (i < this.mxi){

    var tench = xtag[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;

    if (tench ==this.type){

      var xc = xtag[i].getElementsByTagName("xco")[0].childNodes[0].nodeValue;
      var yc = xtag[i].getElementsByTagName("yco")[0].childNodes[0].nodeValue;

      // put a position
      buildingMesh.position.x = xc -halfsize; 
      buildingMesh.position.y = 0;
      buildingMesh.position.z = yc -halfsize; 
      //put a rotation
      buildingMesh.rotation.y = 0.5*Math.PI*2;
      //building scale
      buildingMesh.scale.x = this.width;
      buildingMesh.scale.y = this.height;
      buildingMesh.scale.z = this.length;
      // merge it with cityGeometry - very important for performance
      var geometry = buildingMesh.geometry;
      //merge
      cityGeometry.mergeMesh(buildingMesh);
    }

    //increment loop
    i ++;

  }
  
  //add to class
  var mesh8 = new THREE.Mesh(cityGeometry, comMaterial);
  mCity.add(mesh8);  
  //add to collision
  collidableMeshList.push(mesh8);

}

  //constructor: building type, front texture, back texture, right texture, left texture, building height
  constructor(type,build,width,height,length,maxi){
    super();
    this.type = type;
    this.build = build;
    this.width = width;
    this.height = height;
    this.length = length;
    this.mxi = maxi;
    this.init();
  }

}