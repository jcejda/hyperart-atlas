import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import HyperartPopupCard from "./HyperartPopupCard";

const exampleHyperart = {
  id: 1,
  title: "Unused Staircase",
  latitude: 35.6895,
  longitude: 139.6917,
  thumbnailUrl:
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/%E3%83%88%E3%83%9E%E3%82%BD%E3%83%B3%E9%9A%8E%E6%AE%B5_%285104257679%29.jpg",
  uploadedBy: "agenpei"
};

function WorldMap() {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[exampleHyperart.latitude, exampleHyperart.longitude]}>
        <Popup>
          <HyperartPopupCard hyperart={exampleHyperart} />
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default WorldMap;
