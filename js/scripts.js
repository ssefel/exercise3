var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth/window.innerHeight, 
  0.1, 
  1000);
camera.position.z = 100;

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry(45, 75, 65);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);

var render = function () {
  requestAnimationFrame( render );

  renderer.render(scene, camera);

  cube.rotation.x += -0.01;
  cube.rotation.y += 0.01;
};

render();




//image texture doesn't work :(
var geometry2 = new THREE.BoxGeometry(45, 75, 65);
THREE.ImageUtils.crossOrigin = true;
var textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = true;
textureLoader.load('https://toritto.files.wordpress.com/2017/04/peace1.jpg', function(texture) {
  texture.wrapS = texture.wrapT =   THREE.RepeatWrapping;
    texture.repeat.set( 2, 2 );
    var material2 = new THREE.MeshLambertMaterial( {map: texture} );
 var meshIMG = new THREE.Mesh( geometry2, material2 );
  scene.add( meshIMG );
  
  render2();
});

var render2 = function () {
  requestAnimationFrame( render2 );
  mesh.rotation.x += 0.01;
  renderer.render2(scene, camera);
};


