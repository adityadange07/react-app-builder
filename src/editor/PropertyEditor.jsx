export const PropertyEditor = ({ component, onUpdate }) => {
  if (!component) return null;

  const handleChange = (e) => {
    onUpdate({
      ...component,
      props: {
        ...component.props,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>Edit {component.type}</h4>
      {component.type === "Button" && (
        <input
          type="text"
          name="label"
          value={component.props.label}
          onChange={handleChange}
          placeholder="Button Label"
        />
      )}
      {component.type === "Card" && (
        <input
          type="text"
          name="title"
          value={component.props.title}
          onChange={handleChange}
          placeholder="Card Title"
        />
      )}
      {component.type === "Select Option" && (
        <input
          type="text"
          name="title"
          value={component.props.title}
          onChange={handleChange}
          placeholder="Select Option Title"
        />
      )}
    </div>
  );
};