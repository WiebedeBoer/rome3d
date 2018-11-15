function basilicaLighter(LightHeight){
//lighting
var hemilight = new THREE.HemisphereLight( 0xfffff0, 0x101020, 0.07 );
hemilight.position.set( 0, LightHeight, 0 );
scene.add( hemilight );

}