export const ComponentPalette = () => {
  const components = [
    { type: "Button", name: "Button" },
    { type: "Card", name: "Card" },
  ];

  return (
    <div>
      <h3>Palette</h3>
      {components.map((comp) => (
        <div
          key={comp.type}
          draggable
          onDragStart={(e) => e.dataTransfer.setData("component", JSON.stringify(comp))}
          style={{ padding: "8px", border: "1px dashed gray", margin: "4px" }}
        >
          {comp.name}
        </div>
      ))}
    </div>
  );
};