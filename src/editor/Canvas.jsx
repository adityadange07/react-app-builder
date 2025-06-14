import { v4 as uuidv4 } from "uuid";
import { ComponentRenderer } from "./ComponentRenderer";

export const Canvas = ({ components, setComponents, selectedId, setSelectedId }) => {

  const handleDrop = (e) => {
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

  return (
    <div
      style={{ width: "600px", minHeight: "300px", border: "2px dashed #999", padding: "10px" }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {components.map((comp) => (
        <ComponentRenderer
          key={comp.id}
          type={comp.type}
          props={comp.props}
          isSelected={selectedId === comp.id}
          onClick={() => setSelectedId(comp.id)}
        />
      ))}
    </div>
  );
};