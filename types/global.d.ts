/**
 * disitinct values
 * https://maps.hillsboroughcounty.org/arcgis/rest/services/CSC_Viewer/Utilities_Service_Areas/MapServer/3/query?where=1%3D1&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=Potable_Water_System&returnGeometry=false&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=true&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson
 */
type PotableWaterSystem =
  | "City Of Plant City"
  | "City Of Tampa"
  | "City Of Temple Terrace"
  | "Cypress Cove"
  | "Eastlake"
  | "Fairview MHP"
  | "Hershel Heights"
  | "Northwest"
  | "Oakview Estates"
  | "Pebble Creek"
  | "San Remo"
  | "Seaboard"
  | "South-Central";
