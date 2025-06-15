import { ButtonComponent } from "../components/ButtonComponent";
import { CardComponent } from "../components/CardComponent";
import { SelectOptionComponent } from "../components/SelectOptionComponent";


export const ComponentRenderer = ({ type, props, isSelected, onClick, isPreview }) => {
  const style = {
    border: !isPreview && isSelected ? "2px solid blue" : "none",
    padding: "4px",
    marginBottom: "10px",
  };

  const Wrapper = ({ children }) =>
    isPreview ? <>{children}</> : <div style={style} onClick={onClick}>{children}</div>;

  switch (type) {
    case "Button":
      return <Wrapper><ButtonComponent {...props} /></Wrapper>;
    case "Card":
      return <Wrapper><CardComponent {...props} /></Wrapper>;
    case "Select Option":
      return <Wrapper><SelectOptionComponent {...props} /></Wrapper>;
    default:
      return null;
  }
};
