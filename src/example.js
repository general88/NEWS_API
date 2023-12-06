import { json } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);
  // console.log(data);

  const getInfo = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((preV) => preV + 1)}>count</button>
      {data.map((items) => (
        <h3 key={items.id}>{items.title}</h3>
      ))}
    </>
  );
}

export default App;
