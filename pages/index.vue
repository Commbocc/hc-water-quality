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

function lookupReportUrl(key: PotableWaterSystem): string {
  return {
    "City Of Plant City":
      "https://www.plantcitygov.com/util-operations/page/annual-drinking-water-quality-reports",
    "City Of Tampa": `https://www.tampagov.net/water/info/water-quality`,
    "City Of Temple Terrace": `https://www.templeterrace.gov/190/Water-Sewer`,
    "Cypress Cove": `https://hcfl.gov/assets/bltdc989db216b2eaa2/file`,
    "East Lake": `https://hcfl.gov/assets/blt054f0df7f6ccc31e/file`,
    "Fairview MHP": `https://hcfl.gov/assets/bltfd2965e553a3b5a7/file`,
    "Hershel Heights": `https://hcfl.gov/assets/bltd3d11989d1118f56/file`,
    Northwest: `https://hcfl.gov/assets/bltc0b4205a15c30b0f/file`,
    "Oakview Estates": `https://hcfl.gov/assets/blt7eba2d206c479062/file`,
    "Pebble Creek": `https://hcfl.gov/assets/blt9b2ad1e2709e73b4/file`,
    "San Remo": `https://hcfl.gov/assets/blt889d1f32714fe394/file`,
    Seaboard: `https://hcfl.gov/assets/bltd18b4019aa3cde87/file`,
    "South-Central": `https://hcfl.gov/assets/blt57f9322bed97a650/file`,
    Windemere: `https://hcfl.gov/assets/blt1a2450a881d17e07/file`,
  }[key];
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
