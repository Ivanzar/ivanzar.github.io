var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

var havePointerLock = checkForPointerLock();

function checkForPointerLock() {
  return 'pointerLockElement' in document || 
         'mozPointerLockElement' in document || 
         'webkitPointerLockElement' in document;
}

function initPointerLock() {
  var element = document.body;

  if (havePointerLock) {
    var pointerlockchange = function (event) {
      if (document.pointerLockElement === element ||
          document.mozPointerLockElement === element ||
          document.webkitPointerLockElement === element) {
        controlsEnabled = true;
        controls.enabled = true;
      } else {
        controlsEnabled = false;
        controls.enabled = false;
      }
    };

    var pointerlockerror = function (event) {
      element.innerHTML = 'PointerLock Error';
    };

    document.addEventListener('pointerlockchange', pointerlockchange, false);
    document.addEventListener('mozpointerlockchange', pointerlockchange, false);
    document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

    document.addEventListener('pointerlockerror', pointerlockerror, false);
    document.addEventListener('mozpointerlockerror', pointerlockerror, false);
    document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

    var requestPointerLock = function(event) {
      element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
      element.requestPointerLock();
    };
    element.addEventListener('click', requestPointerLock, false);
  } else {
    element.innerHTML = 'Bad browser; No pointer lock';
  }
}

function init()
{
    renderer.setSize(window.innerWidth, window.innerHeight);
    $("body").append(renderer.domElement);
    
    scene.add(light);
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    
    var control = new THREE.PointerLockControls(camera);
    scene.add(control.getObject());
    
    initPointerLock();
    
     var controls = new THREE.PointerLockControls(camera);
  scene.add(controls.getObject());
    
    renderer.render(scene, camera);
}

var cameraRender = function()
{
    requestAnimationFrame(cameraRender);
    
    camera.position.x = Camera.position.x;
    camera.position.y = Camera.position.y;
    camera.position.z = Camera.position.z;
    renderer.render(scene, camera);
};

init();
cameraRender();