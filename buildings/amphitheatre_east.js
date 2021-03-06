class AmphitheatreEast extends THREE.Group {

    init (){

        var dChurch = this;

        // instantiate a loader
var loader = new THREE.OBJLoader();

var amphiMaterial = new THREE.MeshPhongMaterial( { color: 0xb18868 } );

// load a resource
loader.load(
	// resource URL
	'models/amphi/SM_Coliseum.obj',
	// called when resource is loaded
	function ( object ) {

        object.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {                 
                 child.material = amphiMaterial;
                }
            } );

        dChurch.add(object);
	},
	// called when loading is in progresses
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);

dChurch.scale.x = 5.2;
dChurch.scale.y = 3.5;
dChurch.scale.z = 5.2;
dChurch.rotation.y = 0.41;
dChurch.position.x = (1800 - 3600) + (this.pX * 90) - 30;
dChurch.position.y = 13.0;
dChurch.position.z = (1800 - 3600) + (this.pZ * 90) - 30;

    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;        
        this.pZ = pZ;        
        this.init();
    }
}