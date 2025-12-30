import { Link } from "react-router-dom";
import HyperartMetadata from "./HyperartMetadata";

function HyperartPopupCard({ hyperart }) {
  // Defensive guard — prevents crashes if data is missing
  if (!hyperart) return null;

  const {
    id,
    title,
    latitude,
    longitude,
    thumbnailUrl,
    uploadedBy,
  } = hyperart;

  return (
    <div style={{ width: "200px", fontFamily: "sans-serif" }}>
      {/* Thumbnail */}
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={title || "Hyperart Thomasson"}
          style={{
            width: "100%",
            height: "120px",
            objectFit: "cover",
            borderRadius: "4px",
            marginBottom: "6px",
          }}
        />
      )}

      {/* Shared metadata (compact mode) */}
      <HyperartMetadata
        title={title}
        uploadedBy={uploadedBy}
        latitude={latitude}
        longitude={longitude}
        compact
      />

      {/* Link to detail page */}
      <Link
        to={`/hyperart/${id}`}
        style={{
          fontSize: "12px",
          color: "#1d4ed8",
          textDecoration: "none",
        }}
      >
        View full entry →
      </Link>
    </div>
  );
}

export default HyperartPopupCard;
