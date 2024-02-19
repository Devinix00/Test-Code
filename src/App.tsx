import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );

        const jsonData = await response.json();
        console.log(jsonData);
      } catch (error) {
        console.log("fetchData 에러 발생:", error);
      }
    };

    fetchData();
  }, []);

  return <></>;
}

export default App;
