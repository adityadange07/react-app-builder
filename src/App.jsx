import { useState } from 'react';
import { ComponentPalette } from './editor/ComponentPalette';
import { Canvas } from './editor/Canvas';
import { PropertyEditor } from './editor/PropertyEditor';
import { LivePreview } from './editor/LivePreview';

function App() {
const [components, setComponents] = useState([]);
const [selectedId, setSelectedId] = useState(null);
const [isPreview, setIsPreview] = useState(false);

const selectedComponent = components.find((c) => c.id === selectedId);

const updateComponent = (updated) => {
setComponents((prev) =>
prev.map((c) => (c.id === updated.id ? updated : c))
);
};

return (
<div
style={{
width: '98vw',
height: '97vh',
overflow: 'hidden',
fontFamily: 'sans-serif',
}}
>
{isPreview ? (
<LivePreview components={components} />
) : (
<div
style={{
display: 'flex',
width: '100%',
height: '100%',
overflow: 'hidden',
}}
>
{/* Palette Panel */}
<div
style={{
width: '180px',
background: '#f0f0f0',
padding: '12px',
boxSizing: 'border-box',
borderRight: '1px solid #ccc',
overflow: 'hidden',
}}
>
<ComponentPalette />
</div>

      {/* Canvas Panel */}
      <div
        style={{
          flex: 1,
          background: '#eaeaea',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            padding: '16px',
            boxSizing: 'border-box',
          }}
        >
          <Canvas
            components={components}
            setComponents={setComponents}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
            isPreview={isPreview}
          />
        </div>
      </div>

      {/* Property Editor Panel */}
      <div
        style={{
          width: '280px',
          background: '#f9f9f9',
          padding: '12px',
          boxSizing: 'border-box',
          borderLeft: '1px solid #ccc',
          overflow: 'hidden',
        }}
      >
        <PropertyEditor
          component={selectedComponent}
          onUpdate={updateComponent}
        />
      </div>
    </div>
  )}

  {/* Toggle Button */}
  <button
    onClick={() => setIsPreview((prev) => !prev)}
    style={{
      position: 'fixed',
      top: 20,
      right: 20,
      zIndex: 1000,
      padding: '10px 16px',
      background: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      cursor: 'pointer',
    }}
  >
    {isPreview ? 'Back to Editor' : 'Live Preview'}
  </button>
</div>
);
}

export default App;