import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import HyperartPopupCard from "./HyperartPopupCard";

// Mock map data (later replaced by GET /hyperart)
const hyperartEntries = [
  {
    id: 1,
    title: "Unused Staircase",
    latitude: 35.6895,
    longitude: 139.6917,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Stairs_example.jpg/320px-Stairs_example.jpg",
    uploadedBy: "akasegawa",
  },
  {
    id: 2,
    title: "Blocked Doorway",
    latitude: 51.5074,
    longitude: -0.1278,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Door_example.jpg/320px-Door_example.jpg",
    uploadedBy: "londonwalker",
  },
  {
    id: 3,
    title: null, // unnamed entry to test optional title
    latitude: 40.7128,
    longitude: -74.006,
    thumbnailUrl: null, // no photo to test optional thumbnail
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
        <Marker key={entry.id} position={[entry.latitude, entry.longitude]}>
          <Popup>
            <HyperartPopupCard hyperart={entry} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default WorldMap;
