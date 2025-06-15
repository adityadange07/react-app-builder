import { v4 as uuidv4 } from "uuid";
import { ComponentRenderer } from "./ComponentRenderer";

export const Canvas = ({
  components,
  setComponents,
  selectedId,
  setSelectedId,
  isPreview,
}) => {
  const handleDrop = (e) => {
    if (isPreview) return;
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("component"));
    setComponents((prev) => [
      ...prev,
      {
        id: uuidv4(),
        type: data.type,
        props: {
          label: "Click Me",
          title: "Card Title",
        },
      },
    ]);
  };

  const screenStyle = {
    width: "100vw",
    height: "100vh",
    background: isPreview ? "#f8f9fa" : "#ffffff",
    border: "2px dashed #ccc",
    borderRadius: "16px",
    padding: "20px",
    overflowY: "auto",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#f0f0f0",
      }}
    >
      <div
        style={screenStyle}
        onDragOver={(e) => !isPreview && e.preventDefault()}
        onDrop={handleDrop}
      >
        {components.map((comp) => (
          <ComponentRenderer
            key={comp.id}
            type={comp.type}
            props={comp.props}
            isSelected={!isPreview && selectedId === comp.id}
            onClick={!isPreview ? () => setSelectedId(comp.id) : undefined}
            isPreview={isPreview}
          />
        ))}
      </div>
    </div>
  );
};
