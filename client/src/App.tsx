import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <div className="teqt-4xl m-10 flex items-center justify-center bg-slate-600 p-7 font-mono text-green-900">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="m-8 p-2 text-xl text-red-900">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
