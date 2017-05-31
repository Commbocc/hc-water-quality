<template>
	<div>

		<div class="embed-responsive embed-responsive-16by9 thumbnail">
			<div id="mapDiv" class="embed-responsive-item">
				<p class="h3 text-center caption">
					The application was unable to load...
					<br>
					<small>Try refreshing the page. If you're using Internet Explorer, consider using a <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">different browser</a>.</small>
				</p>
			</div>
		</div>

		<form @submit.prevent="findAddress()">
			<!-- <label for="address_input">Find Your Water System</label> -->
			<div class="input-group form-group">
				<input v-model="address_input" id="address_input" class="form-control" placeholder="Your Address..." autocomplete="off" required="">
				<span class="input-group-btn">
					<button class="btn btn-info" type="submit">Find</button>
				</span>
			</div>
		</form>

		<alert v-for="alert in alerts" :item="alert" :key="alert.id"></alert>

		<p v-if="sublayer" class="text-center lead">
			This address is in the
			<strong class="text-info">
				<em>
					<a :href="sublayer.pdfLink" target="_blank" title="View the Water Quality Report">
						{{ sublayer.areaName }}
					</a>
				</em>
			</strong>
			Water System
		</p>

		<hr>

	</div>
</template>

<script>
import * as esriLoader from 'esri-loader'
import Alert from '@/components/Alert';

export default {
	name: 'address-form',
	data () {
		return {
			alerts: [],

			webmap: null,
			mapview: null,
			map_layer: null,

			address_input: null,
			address_geo: null,

			service_area: null,
			sublayer: null,

			areas_checked: 0
		}
	},
	components: {
		'alert': Alert
	},
	watch: {
		'areas_checked': function() {
			if (this.areas_checked === window.wqSublayers.length && !this.sublayer) {
				this.alerts.push({
					class: 'alert-warning',
					title: 'No Water Information for this Address',
					text: 'Perhaps you are not a Hillsborough County Water customer.',
					footer_txt: 'If you feel this is incorrect, please contact <a href="http://hillsboroughcounty.org/en/government/departments/public-utilities">Public Utilities</a> (813) 272-5977.'
				})
			}
		}
	},
	methods: {
		initMap () {
			esriLoader.dojoRequire([
				"esri/WebMap",
				"esri/views/MapView",
				"esri/layers/MapImageLayer",
				"dojo/domReady!"
			], (WebMap, MapView, MapImageLayer) => {
				this.webmap = new WebMap({
					portalItem: {
						id: "b51fb4e76e154e1b93b630eac3ea94ae"
					}
				});

				this.mapview = new MapView({
					container: "mapDiv",
					map: this.webmap
				})

				var subLayerArr = window.wqSublayers.map( (subLayer) => {
					subLayer.opacity = 0.65
					subLayer.popupTemplate = {
						// title: "{Potable_Water_System}",
						title: subLayer.areaName,
						content: '<a href="'+subLayer.pdfLink+'" target="_blank">Water Quality Report</a>'
					}
					return subLayer
				})

				this.map_layer = new MapImageLayer({
					url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/CoinMap/CountyWebsiteRedesign_PW_ServiceAreas_20160909/MapServer",
					sublayers: subLayerArr
				})

				this.webmap.add(this.map_layer)
			})
		},
		findAddress () {
			// console.log('searching')
			this.alerts = []
			this.service_area = null
			this.sublayer = null
			this.areas_checked = 0

			esriLoader.dojoRequire([
				"esri/tasks/Locator"
			], (Locator) => {
				var hcLocator = new Locator({
					url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/DBO_composite_address_locator/GeocodeServer"
				})

				hcLocator.addressToLocations({
					address: { SingleLine: this.address_input },
					maxLocations: 1
				}).then( (response) => {
					this.address_input = response[0].address
					this.address_geo = response[0].location
					this.findServiceArea()
				}).otherwise( (err) => {
					// console.log('error finding address')
					this.alerts.push({
						class: 'alert-warning',
						title: 'Address Not Found',
						text: 'Please confirm the address and search again.',
						footer_txt: 'If you feel this is an error, please contact the <a href="http://hcflgov.net/government/departments/customer">Customer Service Center</a>.'
					})
				})
			})
		},
		findServiceArea () {
			esriLoader.dojoRequire([
				"esri/tasks/QueryTask",
				"esri/tasks/support/Query"
			], (QueryTask, Query) => {
				var query = new Query()
				// query.returnGeometry = true
				query.outFields = ["*"]
				query.geometry = this.address_geo

				this.map_layer.sublayers.map( (sublayer) => {
					sublayer.queryFeatures(query).then( (response) => {
						if (response.features.length) {
							this.service_area = response.features[0]
							this.sublayer = sublayer
						}
						this.areas_checked++
					})
					return sublayer
				})

			})
		}
	},
	mounted () {
		if (!esriLoader.isLoaded()) {
			esriLoader.bootstrap((err) => {
				if (err) { console.error(err) }
				this.initMap()
			}, {
				url: 'https://js.arcgis.com/4.3'
			})
		}
	}
}
</script>
