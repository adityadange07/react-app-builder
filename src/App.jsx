import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { ComponentPalette } from './editor/ComponentPalette';
import { Canvas } from './editor/Canvas';
import { PropertyEditor } from './editor/PropertyEditor';

function App() {

  const [components, setComponents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const selectedComponent = components.find((c) => c.id === selectedId);

  const updateComponent = (updated) => {
    setComponents((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
  };

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ComponentPalette />
      <Canvas
        components={components}
        setComponents={setComponents}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
      />
      <PropertyEditor component={selectedComponent} onUpdate={updateComponent} />
    </div>
  );
}

export default App
