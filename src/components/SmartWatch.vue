<template>
    <div id="container">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

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
        };
    },
    methods: {
        init() {
            const MODEL_PATH = "assets/models/apple-watch-v2/scene.gltf";
            // const TEXTURE_PATH = "assets/models/apple-watch-v2/textures";

            let container = document.getElementById("container");
            let canvas = document.getElementById("canvas");

            this.clock = new Three.Clock();
            this.currentlyAnimating = false;
            this.raycaster = new Three.Raycaster();

            this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10);
            this.camera.position.z = 1;

            this.scene = new Three.Scene();

            var loader = new GLTFLoader();

            // const dracoLoader = new DRACOLoader();
            // dracoLoader.setDecoderPath("/examples/js/libs/draco/");
            // loader.setDRACOLoader(dracoLoader);

            // loader.setResourcePath(TEXTURE_PATH);
            loader.load(
                MODEL_PATH,
                (gltf) => {
                    this.model = gltf.scene;

                    this.model.traverse((o) => {
                        if (o.isMesh) {
                            o.castShadow = true;
                            o.receiveShadow = true;
                        }
                    });

                    this.model.scale.set(0.4, 0.4, 0.4);

                    this.scene.add(this.model);
                },
                function(xhr) {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                function(error) {
                    console.error(error);
                }
            );

            this.renderer = new Three.WebGLRenderer({ canvas, antialias: true, alpha: true });
            this.renderer.shadowMap.enabled = true;
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(this.renderer.domElement);
        },
        animate() {
            requestAnimationFrame(this.animate);

            if (this.model) {
                this.model.position.y = 0;
                this.model.rotation.y += 0.02;
            }

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
