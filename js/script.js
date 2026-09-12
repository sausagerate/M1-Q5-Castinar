import * as THREE from "three";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);


// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.z = 10;


// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Light
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);


// BOX
const boxGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

const boxMaterial = new THREE.MeshStandardMaterial({
    color: 0xff0000
});

const box = new THREE.Mesh(boxGeometry, boxMaterial);

box.position.set(-4, 2, 0);

scene.add(box);


// CONE
const coneGeometry = new THREE.ConeGeometry(1, 2, 32);

const coneMaterial = new THREE.MeshStandardMaterial({
    color: 0x00ff00
});

const cone = new THREE.Mesh(coneGeometry, coneMaterial);

cone.position.set(0, 2, 0);

scene.add(cone);


// CYLINDER
const cylinderGeometry = new THREE.CylinderGeometry(
    0.8,
    0.8,
    2,
    32
);

const cylinderMaterial = new THREE.MeshStandardMaterial({
    color: 0x0088ff
});

const cylinder = new THREE.Mesh(
    cylinderGeometry,
    cylinderMaterial
);

cylinder.position.set(4, 2, 0);

scene.add(cylinder);


// SPHERE
const sphereGeometry = new THREE.SphereGeometry(
    1,
    32,
    32
);

const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0xffff00
});

const sphere = new THREE.Mesh(
    sphereGeometry,
    sphereMaterial
);

sphere.position.set(-2, -2, 0);

scene.add(sphere);


// TORUS
const torusGeometry = new THREE.TorusGeometry(
    1,
    0.35,
    16,
    100
);

const torusMaterial = new THREE.MeshStandardMaterial({
    color: 0xaa00ff
});

const torus = new THREE.Mesh(
    torusGeometry,
    torusMaterial
);

torus.position.set(2.5, -2, 0);

scene.add(torus);


// Animation
function animate() {

    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    cone.rotation.y += 0.02;

    cylinder.rotation.x += 0.01;

    sphere.rotation.y += 0.015;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.02;

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}

animate();


// Resize window
window.addEventListener("resize", function () {

    camera.aspect =
        window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
});