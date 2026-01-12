import logo from "./logo.svg";
import { useEffect, useState } from "react";
import data from "./data.json";
import "./App.css";

function App() {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      padding: "72px",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      width: "300px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    imgContainer: {
      width: "100%",
      height: "300px",
      overflow: "hidden",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <main className="App">
      <div style={styles.container}>
        {data.map((item, index) => {
          return (
            <div style={styles.card} key={index}>
              <div style={styles.imgContainer}>
                <img src={item.url} alt={item.title} style={styles.img} />
              </div>
              <span style={styles.title}>{item.title}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
