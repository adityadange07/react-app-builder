import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";

export const ComponentRenderer = ({ type, props, isSelected, onClick  }) => {

  const style = {
    border: isSelected ? "2px solid blue" : "none",
    padding: "4px",
    marginBottom: "10px",
  };

  switch (type) {
    case "Button":
      return (
        <div style={style} onClick={onClick}>
          <ButtonComponent label={props.label} />
        </div>
      );
    case "Card":
      return (
        <div style={style} onClick={onClick}>
          <CardComponent title={props.title} />
        </div>
      );
    default:
      return null;
  }
};