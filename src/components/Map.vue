<script setup>
import { ref, onMounted } from 'vue'
import * as Cesium from 'cesium'

const viewer = ref(null)

const viewerSet = () => {
  viewer.value = new Cesium.Viewer('mapContainer', {
    animation: false,
    baseLayerPicker: false,
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
  viewer.value.scene.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(114, 30, 8000000)
  });
}

onMounted(() => {
  Cesium.Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ACCESS_TOKEN
  viewerSet()
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