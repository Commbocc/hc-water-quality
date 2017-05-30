<template>
	<div id="HcWaterQuality">
		<router-view></router-view>
	</div>
</template>

<script>
import * as esriLoader from 'esri-loader'

export default {
	name: 'HcWaterQuality',
	created () {
		if (!esriLoader.isLoaded()) {
			esriLoader.bootstrap((err) => {
				if (err) { console.error(err) }
			}, {
				url: 'https://js.arcgis.com/4.3'
			})
		}
	}
}
</script>

<style>
@import url('https://js.arcgis.com/4.3/esri/css/main.css');
</style>
