import { useParams } from "react-router-dom";

function HyperartDetailPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Hyperart Entry</h1>
      <p>Entry ID: {id}</p>

      <p>
        This page will eventually show the full Thomasson entry:
        photos, description, comments, and metadata.
      </p>

      <a href="/">← Back to map</a>
    </div>
  );
}

export default HyperartDetailPage;

