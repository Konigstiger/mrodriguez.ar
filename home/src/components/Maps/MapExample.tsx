import React from "react";

let map: google.maps.Map;
const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8
  });
}

export function MapExample() {
  initMap();
  const mapRef = React.useRef(map);
  
  return (
    <>
      <div className="relative w-full rounded h-600-px">
        <div className="rounded h-full">{mapRef}</div>
      </div>
    </>
  );
}

export default MapExample;