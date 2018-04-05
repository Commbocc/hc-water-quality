<template>
  <div id="HcWaterQuality">

    <div is="EsriPortalMap" @mapready="mapready"></div>

  </div>
</template>

<script>
import { loadModules } from 'esri-loader'
import EsriPortalMap from 'esri-portal-map'

export default {
  name: 'HcWaterQuality',
  components: { EsriPortalMap },
  methods: {
    mapready (map) {
      return loadModules([
        'esri/widgets/Search',
        'esri/layers/FeatureLayer',
        'esri/tasks/support/Query'
      ]).then(([Search, FeatureLayer, Query]) => {
        // set popup options
        map.mapview.popup.dockEnabled = true
        map.mapview.popup.dockOptions.buttonEnabled = false

        // add feature layer to map
        const featureLayer = new FeatureLayer({
          url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/CSC_Viewer/Utilities_Service_Areas/MapServer/3',
          opacity: 0.5,
          popupTemplate: {
            title: '{Potable_Water_System}',
            content (f) { // pdf links are not attributes of the feature
              var pdfSrc = window.potableWaterSystems[`pws_${f.graphic.attributes.OBJECTID}`].WaterQualityPDFsrc
              return `<a href="${pdfSrc}" target="_blank">Water Quality Report</a>`
            }
          }
        })
        map.webmap.add(featureLayer)

        // add search widget to map
        var searchWidget = new Search({
          view: map.mapview,
          sources: [{
            locator: {
              url: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_Overall/GeocodeServer'
            },
            singleLineFieldName: "SingleLine",
            placeholder: 'Your Address',
            popupEnabled: false
          }]
        })
        map.mapview.ui.add(searchWidget, {
          position: 'top-left',
          index: 0
        })

        // when a search result is found, query features & open popup
        searchWidget.on('select-result', e => {
          var query = new Query()
          query.outFields = ['*']
          query.geometry = e.result.extent

          featureLayer.queryFeatures(query).then(result => {
            if (result.features.length) {
              map.mapview.popup.open({
                location: e.result.extent,
                features: result.features
              })
            }
          })
        })

      })
    }
  }
}
</script>
