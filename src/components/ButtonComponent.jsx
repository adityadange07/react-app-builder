export const ButtonComponent = ( props ) => {
  return <button style={{ border: "1px solid #ccc", padding: "10px" }} >{props.label || "Click Me"}</button>;
};