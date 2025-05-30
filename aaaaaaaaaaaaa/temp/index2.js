import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js"
import { TeapotGeometry } from "three/addons/geometries/TeapotGeometry.js";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w, h)
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 2;

const scene = new THREE.Scene();

// const geo = new TeapotGeometry(50, 18);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
})
const geo = new TeapotGeometry( 50, 18 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const teapot = new THREE.Mesh( geo, mat );
scene.add( teapot );


const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.01;

// const mesh = new THREE.Mesh(geo, mat)
// scene.add(mesh)

// const wireMat = new THREE.MeshBasicMaterial({
//     color: 0xffffff,
//     wireframe: true
// })
// const wireMesh = new THREE.Mesh(geo, wireMat)
// wireMesh.scale.setScalar(1.001);
// mesh.add(wireMesh)

const hemiLight = new THREE.HemisphereLight(0xf4cccc, 0xcfe2f3)
scene.add(hemiLight)
function animate(t=0){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    controls.update();
}
animate()