import { useState } from "react";

function App() {
  const [count] = useState<number>(0);

  return (
    <>
      <p data-testid="count">{count}</p>
      <button data-testid="minus-button">-</button>
      <button data-testid="plus-button">+</button>
    </>
  );
}

export default App;
