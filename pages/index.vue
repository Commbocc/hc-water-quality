<script setup lang="ts">
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

const featureLayer = new FeatureLayer({
  url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/CSC_Viewer/Utilities_Service_Areas/MapServer/3",
  opacity: 0.5,
  displayField: "Potable_Water_System",

  renderer: {
    // @ts-ignore
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [0, 0, 255, 0.5],
      outline: {
        color: [0, 0, 0, 1],
        width: "3px",
      },
    },
  },

  popupTemplate: {
    title: "{Potable_Water_System}",

    content(feature: __esri.Feature) {
      // pdf links are not attributes of the feature
      const system: PotableWaterSystem =
        feature.graphic.attributes.Potable_Water_System;
      const url = lookupReportUrl(system);

      if (!url) return `Unable to determine Potable Water System`;

      return `<a href="${url}" target="_blank">Water Quality Report</a>`;
    },
  },
});

function lookupReportUrl(key: PotableWaterSystem) {
  switch (key) {
    case "City Of Plant City":
      return `https://www.plantcitygov.com/util-operations/page/annual-drinking-water-quality-reports`;
    case "City Of Tampa":
      return `https://www.tampagov.net/water/info/water-quality`;
    case "City Of Temple Terrace":
      return `https://www.templeterrace.gov/190/Water-Sewer`;
    case "Cypress Cove":
      return `https://hcfl.gov/assets/bltdc989db216b2eaa2/file`;
    case "Eastlake":
      return `https://hcfl.gov/assets/blt054f0df7f6ccc31e/file`;
    case "Fairview MHP":
      return `https://hcfl.gov/assets/bltfd2965e553a3b5a7/file`;
    case "Hershel Heights":
      return `https://hcfl.gov/assets/bltd3d11989d1118f56/file`;
    case "Northwest":
      return `https://hcfl.gov/assets/bltc0b4205a15c30b0f/file`;
    case "Oakview Estates":
      return `https://hcfl.gov/assets/blt7eba2d206c479062/file`;
    case "Pebble Creek":
      return `https://hcfl.gov/assets/blt9b2ad1e2709e73b4/file`;
    case "San Remo":
      return `https://hcfl.gov/assets/blt889d1f32714fe394/file`;
    case "Seaboard":
      return `https://hcfl.gov/assets/bltd18b4019aa3cde87/file`;
    case "South-Central":
      return `https://hcfl.gov/assets/blt57f9322bed97a650/file`;

    default:
      return undefined;
  }
}

function mapReady(map: __esri.WebMap) {
  map.add(featureLayer);
}

async function searchResult(
  event: __esri.SearchSelectResultEvent,
  mapview: __esri.MapView
) {
  const result = await featureLayer.queryFeatures({
    outFields: ["*"],
    geometry: event.result.extent,
  });

  if (!result.features.length) return;

  mapview.openPopup({
    location: event.result.feature.geometry,
    features: result.features,
  });
}
</script>

<template>
  <PortalMap
    portal-id="b51fb4e76e154e1b93b630eac3ea94ae"
    @map-ready="mapReady"
    search
    @search-result="searchResult"
  />
</template>
