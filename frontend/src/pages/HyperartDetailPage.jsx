import { useParams, Link } from "react-router-dom";
import HyperartMetadata from "../components/HyperartMetadata";

/*
  Mock detail data.
  This will later be replaced by:
  GET /hyperart/{id}
*/
const hyperartDetailData = {
  1: {
    id: 1,
    title: "Unused Staircase",
    latitude: 35.6895,
    longitude: 139.6917,
    uploadedBy: "akasegawa",
    dateLastCatalogued: "2024-10-12",
    description:
      "This staircase leads nowhere and appears to have been part of a demolished building.\n\nI discovered it while walking through a quiet residential neighborhood. The steps are worn, suggesting years of use before the surrounding structure vanished.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Stairs_example.jpg/640px-Stairs_example.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Staircase_detail.jpg/640px-Staircase_detail.jpg",
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
      "A doorway sealed with brick but still bearing its original frame.\n\nIt faces a busy street, ignored by passersby. Likely a remnant of a previous building configuration.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Door_example.jpg/640px-Door_example.jpg",
    ],
  },
};

function HyperartDetailPage() {
  const { id } = useParams();
  const hyperart = hyperartDetailData[id];

  if (!hyperart) {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h2>Entry not found</h2>
        <Link to="/">← Back to map</Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Shared metadata */}
      <HyperartMetadata
        title={hyperart.title}
        uploadedBy={hyperart.uploadedBy}
        latitude={hyperart.latitude}
        longitude={hyperart.longitude}
        dateLastCatalogued={hyperart.dateLastCatalogued}
      />

      {/* Description */}
      {hyperart.description && (
        <div style={{ marginTop: "20px", marginBottom: "24px" }}>
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
      {hyperart.photos && hyperart.photos.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {hyperart.photos.map((url, index) => (
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
      ) : (
        <p style={{ color: "#666", marginBottom: "20px" }}>
          No photos uploaded.
        </p>
      )}

      {/* Navigation */}
      <Link to="/">← Back to map</Link>
    </div>
  );
}

export default HyperartDetailPage;
