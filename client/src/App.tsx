import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="teqt-4xl m-10 flex items-center justify-center bg-slate-600 p-7 font-mono text-green-900">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-red-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
