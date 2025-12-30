function HyperartMetadata({
  title,
  uploadedBy,
  latitude,
  longitude,
  dateLastCatalogued,
  compact = false,
}) {
  const hasCoords =
    typeof latitude === "number" && typeof longitude === "number";

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Title */}
      {title && (
        <div
          style={{
            fontWeight: "bold",
            fontSize: compact ? "14px" : "24px",
            marginBottom: compact ? "2px" : "6px",
          }}
        >
          {title}
        </div>
      )}

      {/* Uploaded by */}
      {uploadedBy && (
        <div
          style={{
            fontSize: compact ? "11px" : "14px",
            color: "#777",
            marginBottom: compact ? "2px" : "4px",
          }}
        >
          Uploaded by {uploadedBy}
        </div>
      )}

      {/* Coordinates */}
      {hasCoords && (
        <div
          style={{
            fontSize: compact ? "11px" : "14px",
            color: "#555",
            marginBottom: compact ? "2px" : "4px",
          }}
        >
          {latitude.toFixed(4)}, {longitude.toFixed(4)}
        </div>
      )}

      {/* Date last catalogued (detail page only) */}
      {!compact && dateLastCatalogued && (
        <div style={{ fontSize: "14px", color: "#555" }}>
          Date last catalogued: {dateLastCatalogued}
        </div>
      )}
    </div>
  );
}

export default HyperartMetadata;
