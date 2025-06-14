import { useEffect, useRef } from "react";
import * as Babel from "@babel/standalone";

export const LivePreview = ({ components }) => {
  const iframeRef = useRef();

  const generateJSX = () => {
    return components
      .map((comp) => {
        if (comp.type === "Button") {
          return `<button>${comp.props.label}</button>`;
        }
        if (comp.type === "Card") {
          return `<div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>${comp.props.title}</h3>
          </div>`;
        }
        return "";
      })
      .join("\n");
  };

  const generateCode = () => {
    const jsxCode = `
      function App() {
        return (
          <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            ${generateJSX()}
          </div>
        );
      }
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
    `;

    return Babel.transform(jsxCode, { presets: ["react"] }).code;
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument;
    document.open();
    document.write(`
      <div id="root"></div>
      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script>
        ${generateCode()}
      </script>
    `);
    document.close();
  }, [components]);

  return (
    <iframe
      ref={iframeRef}
      title="Live Preview"
      style={{ width: "100%", height: "400px", border: "1px solid #ccc" }}
    />
  );
};