import { useState } from "react";
import "./App.css";

function App() {
  const [count] = useState<number>(0);

  return (
    <>
      <p data-testid="count">{count}</p>
    </>
  );
}

export default App;
