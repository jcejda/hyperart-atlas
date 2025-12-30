function HyperartPopupCard({ hyperart }) {
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

      {/* Title */}
      {title && (
        <div style={{ fontWeight: "bold", marginBottom: "2px" }}>
          {title}
        </div>
      )}

      {/* Uploaded by */}
      {uploadedBy && (
        <div
          style={{
            fontSize: "12px",
            color: "#777",
            marginBottom: "4px",
          }}
        >
          Uploaded by {uploadedBy}
        </div>
      )}

      {/* Coordinates */}
      <div style={{ fontSize: "12px", color: "#555", marginBottom: "6px" }}>
        {latitude.toFixed(4)}, {longitude.toFixed(4)}
      </div>

      {/* Link */}
      <a
        href={`/hyperart/${id}`}
        style={{
          fontSize: "12px",
          color: "#1d4ed8",
          textDecoration: "none",
        }}
      >
        View full entry →
      </a>
    </div>
  );
}

export default HyperartPopupCard;
