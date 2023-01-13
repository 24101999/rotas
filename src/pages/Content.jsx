import styles from "./Content.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Content() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      console.log(res.data);
      setDados(res.data);
    });
  }, []);

  return (
    <div className={styles.content}>
      <h1>Content</h1>
      <h2>lista de dados</h2>
      {dados.map((d, i) => {
        return <p key={i}>{d.name}</p>;
      })}
    </div>
  );
}

export default Content;
