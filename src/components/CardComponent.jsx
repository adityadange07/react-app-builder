export const CardComponent = ( props ) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>{props.title || "Card Title"}</h3>
    </div>
  );
};