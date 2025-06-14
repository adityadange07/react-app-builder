export const CardComponent = ({ title }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{title || "Card Title"}</h3>
    </div>
  );
};