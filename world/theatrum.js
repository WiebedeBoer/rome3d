class Theatrum extends THREE.Group {

    init (){

        var dChurch = this;        

        // instantiate a loader
        var loader = new THREE.OBJLoader();

        if (this.type =="amphi_full"){
            var amphiMaterial = new THREE.MeshPhongMaterial( { color: 0xb18868 } );
        }
        else if (this.type =="officer"){
            var amphiMaterial = new THREE.MeshPhongMaterial( { color: 0xf3dfcb } );
        }

        // load a resource
        loader.load('models/'+this.path+'/'+this.type+'.obj',	function ( object ) {

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

dChurch.scale.x = this.width;
dChurch.scale.y = this.height;
dChurch.scale.z = this.depth;
dChurch.rotation.y = this.yR;
dChurch.position.x = this.pX; 
dChurch.position.y = this.pY; 
dChurch.position.z = this.pZ; 

    }    
            
    constructor(type,path,height,width,depth,pX,pY,pZ,yR){
        super();
        this.type = type;
        this.path = path;       
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.yR = yR;     
        this.init();
    }
}