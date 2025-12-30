import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import HyperartPopupCard from "./HyperartPopupCard";

const hyperartEntries = [
  {
    id: 1,
    title: "Genesis of Hyperart",
    latitude: 35.6895,
    longitude: 139.6917,
    thumbnailUrl:
      "https://static.wixstatic.com/media/3864b1_2272d7f629504323bad460219d3efd8a~mv2.png/v1/fill/w_756,h_551,al_c,q_90,enc_avif,quality_auto/3864b1_2272d7f629504323bad460219d3efd8a~mv2.png",
    uploadedBy: "agenpei",
  },
  {
    id: 2,
    title: "Blocked Doorway",
    latitude: 51.5074,
    longitude: -0.1278,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/%E3%83%88%E3%83%9E%E3%82%BD%E3%83%B3%E9%9A%8E%E6%AE%B5_%285104257679%29.jpg",
    uploadedBy: "londonwalker",
  },
  {
    id: 3,
    title: null, // intentionally unnamed
    latitude: 40.7128,
    longitude: -74.006,
    thumbnailUrl: null,
    uploadedBy: "anonymous",
  },
];


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

      {hyperartEntries.map((entry) => (
        <Marker
          key={entry.id}
          position={[entry.latitude, entry.longitude]}
        >
          <Popup>
            <HyperartPopupCard hyperart={entry} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default WorldMap;
