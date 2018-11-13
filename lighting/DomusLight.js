function domusLighter(LightHeight){
//lighting
var light = new THREE.HemisphereLight( 0xfffff0, 0x101020, 0.07 );
light.position.set( 0, LightHeight, 0 );
scene.add( light );
//directional
var directionalLight = new THREE.DirectionalLight( 0xfffff0, 0.09 );
directionalLight.position.set(-49, 30, 25);
//directionalLight.target(26, 12, 21);
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
var vestibulumlight = new THREE.PointLight(0xfffff0, 0.7, 50);
vestibulumlight.position.set(-49,23,29.5);
scene.add(vestibulumlight);
var atriumlight = new THREE.PointLight(0xfffff0, 1.5, 75);
atriumlight.position.set(100,36,0);
scene.add(atriumlight);
var peristyliumlight = new THREE.PointLight(0xfffff0, 1.5, 75);
peristyliumlight.position.set(300,36,0);
scene.add(peristyliumlight);

}