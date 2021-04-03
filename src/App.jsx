import { useEffect, useState } from "react";

const API_BASE = "https://randomuser.me/api";

export function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  function getUser() {
    fetch(API_BASE)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => getUser()}>Get User</button>

      {data.length === 0 ? (
        <p>Loading</p>
      ) : (
        <pre>{JSON.stringify(data[0]?.name, null, 2)}</pre>
      )}
    </>
  );
}
