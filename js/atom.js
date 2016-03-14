// *** scene and camera ***
// Create a three.js scene
var scene = new THREE.Scene();

// Add a camera so that we can see our 3D objects.
// By moving our camera's z positioning, we can increase or decrease zoom.
var aspectRatio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
camera.position.z = 350;
scene.add(camera);

// LIGHTS

directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 2).normalize();
scene.add(directionalLight);

//    pointLight = new THREE.PointLight( 0xffffff, 3, 1000 );
//    scene.add( pointLight );

// *** objects ***
// Nucleus
//                                  radius
//                                    | width segments
//                                    |    | height segments
//                                    |    |   |
//                                    v    v   v
var shape = new THREE.SphereGeometry(75, 20, 20);

var texture1 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('img/black_bg.png')});

var nucleus = new THREE.Mesh(shape, texture1);
scene.add(nucleus);

// Electron 1
var electronShape = new THREE.SphereGeometry(30, 20, 20);
var electron1 = new THREE.Mesh(electronShape, texture1);
scene.add(electron1);
// When we add our electron geometry to the nucleus, we can statically position objects.
// If the objects are dynamically moving, this has no effect.
//                        x, y, z
electron1.position.set(-150, 150, 0);

// Electron 2
var electron2 = new THREE.Mesh(electronShape, texture1);
scene.add(electron2);
electron2.position.set(150, 150, 0);

// Electron 3
var electron3 = new THREE.Mesh(electronShape, texture1);
scene.add(electron3);
electron3.position.set(0, 0, 150);

// *** renderer ***
// A canvas renderer will generate the image, drawing our models on the screen.
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(window.innerWidth * 0.30, window.innerHeight * 0.30);

// This places the CanvasRenderer onto the body element in our HTML.
document.querySelector(".atom").appendChild(renderer.domElement);

// *** animation ***
// Animate motion using a clock timer.
var clock = new THREE.Clock();

// This function will handle animation of our atom
function animate() {
    requestAnimationFrame(animate);

    // This gives us a running timer for our orbiting electrons.
    var t = clock.getElapsedTime();

    // Display what the camera sees onto the browser screen.
    renderer.render(scene, camera);

    // orbit from bottom right to top left
    //
    //                            movement speed
    //                               |
    //                               |  orbit distance
    //                               |      |
    //                               v      v
    electron1.position.x = Math.sin(2 * t) * -150;
    electron1.position.y = Math.sin(2 * t) * 150;
    electron1.position.z = Math.cos(2 * t) * 150;

    // orbit from top right to bottom left
    electron2.position.x = Math.cos(2 * t) * 150;
    electron2.position.y = Math.cos(2 * t) * 150;
    electron2.position.z = Math.sin(2 * t) * 150;

    // Offset from our timer so the electrons don't smash into each other.
    var tOffset = 1.5 + clock.getElapsedTime();

    // orbit from the bottom to the top
    electron3.position.x = Math.sin(2 * tOffset) * 0;
    electron3.position.y = Math.sin(2 * tOffset) * 150;
    electron3.position.z = Math.cos(2 * tOffset) * 150;
}

// Run the animation.
animate();