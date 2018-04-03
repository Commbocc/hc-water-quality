<template>
	<div id="HcWaterQuality">

    <div is="WaterQuality"></div>

	</div>
</template>

<script>
import WaterQuality from '@/components/WaterQuality'

export default {
	name: 'HcWaterQuality',
  components: {
    WaterQuality
  }
}
</script>

<style>
@import url('https://js.arcgis.com/4.3/esri/css/main.css');
</style>
