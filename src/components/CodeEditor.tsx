
import React from 'react';

const CodeEditor = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-2xl glass overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-medium">Vite App Builder</h3>
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      <div className="flex-grow overflow-hidden flex">
        <div className="w-1/2 border-r border-border overflow-y-auto p-4 bg-slate-950">
          <pre className="text-xs text-slate-300">
            <code>{`import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Vyoma-generated Vite App</h1>
        <div className="card">
          <button 
            onClick={() => setCount(count => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </>
  )
}

export default App`}</code>
          </pre>
        </div>
        
        <div className="w-1/2 p-6 flex items-center justify-center bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4">Vyoma-generated Vite App</h1>
            <div className="p-4 border border-slate-200 rounded-md">
              <button className="px-4 py-2 bg-vyoma text-white rounded-md mb-4">
                count is 0
              </button>
              <p className="text-sm">
                Edit <code className="bg-slate-100 px-1 py-0.5 rounded">src/App.jsx</code> and save to test HMR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
