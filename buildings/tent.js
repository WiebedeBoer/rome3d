
class Tent extends THREE.Group {

    init (){

        var dChurch = this;        

        // instantiate a loader
        var loader = new THREE.OBJLoader();

        var amphiMaterial = new THREE.MeshPhongMaterial( { color: 0xa1736c } );

        // load a resource
        loader.load('models/contubernium/tent.obj',	function ( object ) {

        object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {             
                child.material = amphiMaterial;
            }
        } );
   
        dChurch.add(object);
	    },
	    // called when loading is in progresses
	    function () {
		    console.log(  '100% loaded' );
	    },
	    // called when loading has errors
	    function () {
		    console.log( 'An error happened' );
	    }
);

dChurch.scale.x = 10;
dChurch.scale.y = 10;
dChurch.scale.z = 10;
dChurch.rotation.y = Math.PI;
dChurch.position.x = ((1800 - 3600) + (this.pX * 90) - 30) + 0.1; 
dChurch.position.y = 0;
dChurch.position.z = ((1800 - 3600) + (this.pZ * 90) - 30) + 15.1; 

    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;        
        this.pZ = pZ;        
        this.init();
    }
}



