import { useParams } from "react-router-dom";

const hyperartDetailData = {
  1: {
    id: 1,
    title: "Unused Staircase",
    latitude: 35.6895,
    longitude: 139.6917,
    uploadedBy: "agenpei",
    dateLastCatalogued: "2024-10-12",
    description:
      "This staircase leads nowhere and appears to have been part of a demolished building. I discovered it while walking through a quiet residential neighborhood. The steps are worn, suggesting years of use before the surrounding structure vanished.",
    photos: [
      "https://static.wixstatic.com/media/3864b1_2272d7f629504323bad460219d3efd8a~mv2.png/v1/fill/w_756,h_551,al_c,q_90,enc_avif,quality_auto/3864b1_2272d7f629504323bad460219d3efd8a~mv2.png",
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Skylight%2C_chandelier_and_stairs%2C_Ashmolean_Museum%2C_Oxford.jpg",
    ],
  },
  2: {
    id: 2,
    title: "Blocked Doorway",
    latitude: 51.5074,
    longitude: -0.1278,
    uploadedBy: "londonwalker",
    dateLastCatalogued: "2023-06-03",
    description:
          "A doorway sealed with brick but still bearing its original frame. It faces a busy street, ignored by passersby. Likely a remnant of a previous building configuration.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Plaster_cast_of_folding_doors%2C_Pompeii.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/T%C3%BCr%2C_Villa_Boscoreale.jpg"
    ],
  },
};

function HyperartDetailPage() {
  const { id } = useParams();
  const hyperart = hyperartDetailData[id];

  if (!hyperart) {
    return <p style={{ padding: "20px" }}>Entry not found.</p>;
  }

  const {
    title,
    latitude,
    longitude,
    uploadedBy,
    dateLastCatalogued,
    photos,
  } = hyperart;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Title */}
      <h1 style={{ marginBottom: "4px" }}>
        {title || "Untitled Hyperart Thomasson"}
      </h1>

      {/* Metadata */}
      <div style={{ color: "#555", fontSize: "14px", marginBottom: "12px" }}>
        <div>Uploaded by: {uploadedBy || "Unknown"}</div>
        <div>
          Coordinates: {latitude.toFixed(4)}, {longitude.toFixed(4)}
        </div>
        <div>Date last catalogued: {dateLastCatalogued}</div>
      </div>

      {/* Description */}
      {hyperart.description && (
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
            Description
          </h2>
          <p
            style={{
              lineHeight: "1.6",
              whiteSpace: "pre-line",
              color: "#333",
            }}
          >
            {hyperart.description}
          </p>
        </div>
      )}

      {/* Photo gallery */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {photos.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Hyperart photo ${index + 1}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        ))}
      </div>

      <a href="/">← Back to map</a>
    </div>
  );
}

export default HyperartDetailPage;
