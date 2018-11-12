function tavernLighter(LightHeight){
//lighting
var light = new THREE.HemisphereLight( 0xfffff0, 0x101020, 0.04 );
light.position.set( 0, LightHeight, 0 );
scene.add( light );
//directional
var directionalLight = new THREE.DirectionalLight( 0xfffff0, 0.07 );
directionalLight.position.set(-25, 30, -49);
directionalLight.castShadow = true;
directionalLight.shadowMapWidth = 100;
directionalLight.shadowMapHeight = 100;
directionalLight.shadowCameraNear = 5;
directionalLight.shadowCameraFar = 90;
directionalLight.shadowCameraLeft = -10;
directionalLight.shadowCameraRight = 10;
directionalLight.shadowCameraTop = 30;
directionalLight.shadowCameraBottom = -10;
scene.add(directionalLight);
//point
var light = new THREE.PointLight(0xfffff0, 0.7, 50);
light.position.set(-29.5,23,-49);
scene.add(light);
}