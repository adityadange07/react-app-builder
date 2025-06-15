export const ButtonComponent = ({ label }) => {
  return <button style={{ border: "1px solid #ccc", padding: "10px" }} >{label || "Click Me"}</button>;
};