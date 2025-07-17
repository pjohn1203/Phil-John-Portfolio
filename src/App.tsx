import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {/* Development routes can be added here if needed */}
        <Home />
        
      </>
    </Suspense>
  );
}

export default App;
