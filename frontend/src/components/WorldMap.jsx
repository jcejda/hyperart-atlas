import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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

      <Marker position={[35.6895, 139.6917]}>
        <Popup>
          <strong>Tokyo</strong>
          <br />
          Example Hyperart Thomasson
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default WorldMap;

