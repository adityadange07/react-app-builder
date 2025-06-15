import { useEffect, useRef } from "react";
import * as Babel from "@babel/standalone";

export const LivePreview = ({ components }) => {
  const iframeRef = useRef();

  const generateJSX = () => {
    return components
      .map((comp) => {
        if (comp.type === "Button") {
          return `<button style={{ padding: "10px 20px", fontSize: "16px", margin: "10px"}}>
            ${comp.props.label}
          </button>`;
        }
        if (comp.type === "Card") {
          return `<div style={{ border: '1px solid #ccc', padding: '10px', margin: "10px"}}>
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
          <div style={{
            width: "95vw",
            height: "90vh",
            padding: "20px",
            fontFamily: "sans-serif",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            background: "#fff",
            overflow: "auto",
            margin: "10px"
          }}>
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
      <html>
        <head>
          <style>
            body {
              margin: 0;
              padding: 0;
              background: #f0f0f0;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              height: 100vh;
            }
          </style>
        </head>
        <body>
          <div id="root"></div>
          <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script>
            ${generateCode()}
          </script>
        </body>
      </html>
    `);
    document.close();
  }, [components]);

  return (
    <iframe
      ref={iframeRef}
      title="Live Preview"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
        background: "#f0f0f0"
      }}
    />
  );
};
