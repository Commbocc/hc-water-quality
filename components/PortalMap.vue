<script setup lang="ts">
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import Search from "@arcgis/core/widgets/Search.js";
// import Home from "@arcgis/core/widgets/Home.js";

const props = defineProps<{
  portalId: string;
  search?: boolean;
}>();

const emit = defineEmits<{
  (e: "mapReady", view: WebMap): void;
  (
    e: "searchResult",
    event: __esri.SearchSelectResultEvent,
    map: MapView
  ): void;
}>();

const mapEl = ref<HTMLDivElement>();

const webmap = new WebMap({
  portalItem: {
    id: props.portalId,
  },
});

onMounted(() => {
  const mapview = new MapView({
    container: mapEl.value,
    map: webmap,
  });

  mapview.when(() => {
    emit("mapReady", webmap);
  });

  if (props.search) {
    const searchWidget = new Search({
      view: mapview,
      includeDefaultSources: false,
      sources: [
        {
          // @ts-ignore
          name: "Hillsborough County",
          url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_Overall/GeocodeServer",
          singleLineFieldName: "SingleLine",
          placeholder: "Your Address",
          popupEnabled: false,
        },
      ],
    });

    mapview.ui.add(searchWidget, {
      position: "top-left",
      index: 0,
    });

    searchWidget.on("select-result", (event) => {
      emit("searchResult", event, mapview);
    });
  }
});
</script>

<template>
  <div ref="mapEl" class="aspect-[4/3]"></div>
</template>
