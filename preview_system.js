function previewObject(obj, texture, material) {
  console.log("PREPARING PERVIEW...");
  console.log("DEFINE: scene = new THREE.Scene();");
  var scene = new THREE.Scene();
        console.log("DEFINE: camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );");
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  console.log("DEFINE: renderer = new THREE.WebGLRenderer();");
  var renderer = new THREE.WebGLRenderer();
  console.log("WebGL RENDERER: SETTING SIZE...");
        renderer.setSize( window.innerWidth, window.innerHeight );
  console.log("RUN: document.body.appendChild( renderer.domElement );")
        document.body.appendChild( renderer.domElement );
  console.log("DEFINE: material = new THREE.MeshBasicMaterial( { map: textureData1 } );");
  var material = new THREE.MeshBasicMaterial( { map: textureData1 } );
  if(textureData1){

  console.log("DEFINE: object = new THREE.Mesh( bufferGeometryData1, materialData1 );");
  var object = new THREE.Mesh( bufferGeometryData1, materialData1 );

  } else {
    console.log("DEFINE: material = new THREE.MeshBasicMaterial( { color: 0x")
          console.log("DEFINE: object = new THREE.Mesh( bufferGeometryData1, material );");
};
console.log("PERVIEW PREPARED,");
}
