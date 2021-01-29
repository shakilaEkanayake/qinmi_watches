<template>
    <div id="container">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
    name: "SmartWatch",
    data() {
        return {
            camera: null,
            scene: null,
            renderer: null,
            mesh: null,
            model: null,
            clock: null,
            raycaster: null,
            stacy_txt: null,
        };
    },
    methods: {
        init() {
            // const MODEL_PATH = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb";
            const MODEL_PATH = "assets/models/apple-watch-v2/scene.gltf";
            // const TEXTURE_PATH = "assets/models/apple-watch/textures/material_baseColor.jpeg";
            // const TEXTURE_PATH = "assets/models/apple-watch-v3/textures/";
            // const TEXTURE_PATH = "./apple-watch-v2/textures";

            let container = document.getElementById("container");
            let canvas = document.getElementById("canvas");

            this.clock = new Three.Clock(); // Used for anims, which run to a clock instead of frame rate
            this.currentlyAnimating = false; // Used to check whether characters neck is being used in another anim
            this.raycaster = new Three.Raycaster(); // Used to detect the click on our character

            this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10);
            this.camera.position.z = 1;

            this.scene = new Three.Scene();

            // this.stacy_txt = new Three.TextureLoader().load(TEXTURE_PATH);
            // this.stacy_txt.flipY = false; // we flip the texture so that its the right way up
            // const stacy_mtl = new Three.MeshPhongMaterial({
            //     map: this.stacy_txt,
            //     color: 0xffffff,
            //     skinning: true,
            // });

            var loader = new GLTFLoader();
            // loader.setResourcePath(TEXTURE_PATH);
            loader.load(
                MODEL_PATH,
                (gltf) => {
                    this.model = gltf.scene;
                    // let fileANimations = gltf.animations;

                    this.model.traverse((o) => {
                        if (o.isMesh) {
                            o.castShadow = true;
                            o.receiveShadow = true;
                            // o.material = this.stacy_mtl; // Add this line
                        }
                    });

                    this.model.scale.set(0.4, 0.4, 0.4);
                    // this.model.position.y = -1;

                    // console.log(this.model);
                    // gltf.animations;

                    this.scene.add(this.model);
                },
                function(xhr) {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                function(error) {
                    console.error(error);
                }
            );

            // this.model = model;
            // let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
            // let material = new Three.MeshNormalMaterial();

            // this.mesh = new Three.Mesh(geometry, material);
            // this.scene.add(this.mesh);

            // Floor
            let floorGeometry = new Three.PlaneGeometry(5000, 5000, 1, 1);
            let floorMaterial = new Three.MeshPhongMaterial({
                color: 0xeeeeee,
                shininess: 0,
            });

            let floor = new Three.Mesh(floorGeometry, floorMaterial);
            floor.rotation.x = -0.5 * Math.PI; // This is 90 degrees by the way
            floor.receiveShadow = true;
            floor.position.y = -11;
            this.scene.add(floor);

            this.renderer = new Three.WebGLRenderer({ canvas, antialias: true, alpha: true });
            this.renderer.shadowMap.enabled = true;
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(this.renderer.domElement);
        },
        animate() {
            requestAnimationFrame(this.animate);

            // this.model.rotation.x += 0.01;
            // console.log(this.model);
            if (this.model) {
                this.model.position.y = 0;
                // this.model.rotation.x += 0.01;
                this.model.rotation.y += 0.02;
            }

            // this.model.position.y = 0;
            // this.mesh.rotation.x += 0.01;
            // this.mesh.rotation.y += 0.02;
            this.renderer.render(this.scene, this.camera);
        },
    },
    mounted() {
        this.init();
        this.animate();
    },
};
</script>

<style scoped>
#container {
    height: 200px;
    /* width: 200px; */
}
/* #wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
} */
#canvas {
    width: 100%;
    height: 100%;
}
canvas {
    width: 100%;
    height: 100%;
}
</style>
