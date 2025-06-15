export const ComponentPalette = () => {
  const components = [
    { type: "Button", name: "Button", label: "Button" },
    { type: "Card", name: "Card", title: "Card" },
    {
      type: "Select Option",
      name: "Select Option",
      title: "Select Option",
      props: {
        options: [{
          "Option 1": 
          {
            label: "Option 1",
            value: "option1",
          }, 
          "Option 2":
          {
            label: "Option 2",
            value: "option2",
          },
          "Option 3":
          {
            label: "Option 3",
            value: "option3",
          }
        }]
      }
    }
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