class Amphitheatre extends THREE.Group {

  init (){

    var mCity = this;

    //city mesh
    var geometry = new THREE.CylinderGeometry(this.length - 60, this.width - 60, this.height + 90, 32);

    // translate the geometry to place the pivot point at the bottom instead of the center
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) );

    var radius_half = this.length / 2;
    for (var z = 0; z < geometry.faces.length; z++) {
        var face = geometry.faces[z];
        if (face.normal.y !== 0) {
            geometry.faceVertexUvs[0][z][0].u = (geometry.vertices[face.a].x + radius_half) / this.length;
            geometry.faceVertexUvs[0][z][0].v = (geometry.vertices[face.a].z + radius_half) / this.length;
            geometry.faceVertexUvs[0][z][1].u = (geometry.vertices[face.b].x + radius_half) / this.length;
            geometry.faceVertexUvs[0][z][1].v = (geometry.vertices[face.b].z + radius_half) / this.length;
            geometry.faceVertexUvs[0][z][2].u = (geometry.vertices[face.c].x + radius_half) / this.length;
            geometry.faceVertexUvs[0][z][2].v = (geometry.vertices[face.c].z + radius_half) / this.length;
            face.materialIndex = 0;
        } else {
            face.materialIndex = 1;
        }
    }
    //var sideMaterial ="textures/roof/roof3.jpg";
    //var faceMaterial ="textures/wall/wall9.jpg";
    //var map = new THREE.TextureLoader().load( 'textures/wall/wall7.jpg' );
    //map.wrapS = map.wrapT = THREE.RepeatWrapping;
    //map.anisotropy = 16;
    var map = new THREE.TextureLoader().load( 'textures/wall/wall7.jpg' );
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 16;

    var faceMaterial = new THREE.MeshPhongMaterial( { map: map, side: THREE.DoubleSide, color: 0xff0000  } );

    //var sideMaterial =new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/wall9.jpg"), side: THREE.FrontSide, color: 0xff0000 });
    //var faceMaterial = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/roof/roof3.jpg"), side: THREE.FrontSide,color: 0xffff00 });
    //var buildingMesh = new THREE.Mesh(geometry, [faceMaterial, sideMaterial]);
    var buildingMesh = new THREE.Mesh(geometry, faceMaterial);

    /*
    var cylMaterials = [
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.leftbuild+".jpg"), side: THREE.FrontSide }), //LEFT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.rightbuild+".jpg"), side: THREE.FrontSide }), //RIGHT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/roof/roof3.jpg"), side: THREE.FrontSide }), //TOP
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/ground/ground11.jpg"), side: THREE.FrontSide }), //BOTTOM
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.frontbuild+".jpg"), side: THREE.FrontSide }), //FRONT
      new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load("textures/wall/"+this.backbuild+".jpg"), side: THREE.FrontSide }), //BACK
      ];  
    var comMaterial = new THREE.MeshFaceMaterial(cylMaterials);
    var buildingMesh = new THREE.Mesh(geometry);
    */

    /*
    var coin_sides_geo =
  new THREE.CylinderGeometry( 10.0, 10.0, 1.0, 100.0, 10.0, true );
var coin_cap_geo = new THREE.Geometry();
var r = 10.0;
for (var i=0; i<100; i++) {
  var a = i * 1/100 * Math.PI * 2;
  var z = Math.sin(a);
  var x = Math.cos(a);
  var a1 = (i+1) * 1/100 * Math.PI * 2;
  var z1 = Math.sin(a1);
  var x1 = Math.cos(a1);
  coin_cap_geo.vertices.push(
    new THREE.Vertex(new THREE.Vector3(0, 0, 0)),
    new THREE.Vertex(new THREE.Vector3(x*r, 0, z*r)),
    new THREE.Vertex(new THREE.Vector3(x1*r, 0, z1*r))
  );
  coin_cap_geo.faceVertexUvs[0].push([
    new THREE.UV(0.5, 0.5),
    new THREE.UV(x/2+0.5, z/2+0.5),
    new THREE.UV(x1/2+0.5, z1/2+0.5)
  ]);
  coin_cap_geo.faces.push(new THREE.Face3(i*3, i*3+1, i*3+2));
}
coin_cap_geo.computeCentroids();
coin_cap_geo.computeFaceNormals();

var coin_sides_texture =
  THREE.ImageUtils.loadTexture("./coin_sides.png");
var coin_cap_texture =
  THREE.ImageUtils.loadTexture("./coin_face.png");

var coin_sides_mat =
  new THREE.MeshLambertMaterial({map:coin_sides_texture});
var coin_sides =
  new THREE.Mesh( coin_sides_geo, coin_sides_mat );

var coin_cap_mat = new THREE.MeshLambertMaterial({map:coin_cap_texture});
var coin_cap_top = new THREE.Mesh( coin_cap_geo, coin_cap_mat );
var coin_cap_bottom = new THREE.Mesh( coin_cap_geo, coin_cap_mat );
coin_cap_top.position.y = 0.5;
coin_cap_bottom.position.y = -0.5;
coin_cap_top.rotation.x = Math.PI;

var coin = new THREE.Object3D();
coin.add(coin_sides);
coin.add(coin_cap_top);
coin.add(coin_cap_bottom);
    */

    //city geometry
    var cityGeometry= new THREE.Geometry();

  //no. buildings, max = 1600
  //var mxi = 1600; 40 x 40 grid
  var mxi = 1600;
  //loop
  var i = 1;
  while (i < mxi){

    //row
    var jezi = (Math.floor(i / 40)) + 1;
    //column

    var itag = i - 1;
    var tench = xtag[itag].getElementsByTagName("BUSINESS")[0].childNodes[0].nodeValue;

    if (tench ==this.type){

        // put a position
        if (tench =="theatrum"){
            buildingMesh.position.x = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            buildingMesh.position.z = (1800 - 3600) + (jezi * 90) - 30 - 45; //theatre row
        }
        else {
            buildingMesh.position.x = (1800 - 3600) + ((40 + i - (jezi * 40)) * 90) - 30; //column
            buildingMesh.position.z = (1800 - 3600) + (jezi * 90) - 30; //row 
        }
      //put a rotation
      buildingMesh.rotation.y = 0.5*Math.PI*2;
      //building scale
      //buildingMesh.scale.x = this.length;
      //buildingMesh.scale.y = this.height;
      //buildingMesh.scale.z = this.width;
      // merge it with cityGeometry - very important for performance
      var geometry = buildingMesh.geometry;
      //merge
      cityGeometry.mergeMesh(buildingMesh);
    }

    //increment loop
    i ++;

  }

  
  //add to class
  //var mesh9 = new THREE.Mesh(cityGeometry, comMaterial);
  var mesh9 = new THREE.Mesh(cityGeometry);
  mCity.add(mesh9);  
  //add to collision
  collidableMeshList.push(mesh9);

}

  //constructor: building type, front texture, back texture, right texture, left texture, building height, width, length
  constructor(type,frontbuild,backbuild,rightbuild,leftbuild,height,width,length){
    super();
    this.type = type;
    this.frontbuild = frontbuild;
    this.backbuild = backbuild;
    this.rightbuild = rightbuild
    this.leftbuild = leftbuild;
    this.height = height;
    this.width = width;
    this.length = length;
    this.init();
  }

}