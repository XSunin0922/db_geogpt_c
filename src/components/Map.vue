<script setup>
import { ref, onMounted } from 'vue'
import * as Cesium from 'cesium'

const viewer = ref(null)

const viewerInitial = () => {
  viewer.value = new Cesium.Viewer('mapContainer', {
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    timeline: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    scene3DOnly: true,
    requestRenderMode: true,
  });
  viewer.value._cesiumWidget._creditContainer.style.display = "none";
  // 相机限制
  viewer.value.scene.camera.setView({
    destination: Cesium.Rectangle.fromDegrees(73.66, 3.86, 135.05, 53.55),
  });
  viewer.value.scene.screenSpaceCameraController.minimumZoomDistance = 100000;
  viewer.value.scene.screenSpaceCameraController.maximumZoomDistance = 5000000;
  viewer.value.scene.screenSpaceCameraController.enableTilt = false;
  viewer.value.scene.screenSpaceCameraController.enableLook = false;
  // 节约渲染资源
  viewer.value.scene.skyBox.show = false;
  viewer.value.scene.skyAtmosphere.show = false;
  viewer.value.scene.sun.show = false;
  viewer.value.scene.moon.show = false;
  viewer.value.scene.fog.enabled = false;
  viewer.value.scene.globe.showGroundAtmosphere = false;
  viewer.value.resolutionScale = 0.9;
}

onMounted(() => {
  Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ACCESS_TOKEN
  viewerInitial()
})
</script>

<template>
  <div id="mapContainer"></div>
</template>

<style scoped>
#mapContainer {
  height: 100%;
  position: relative;
}
</style>
