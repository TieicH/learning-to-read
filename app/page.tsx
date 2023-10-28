"use client";
import "./style.css";

export default function App() {
  return (
    <div className="homeContainer">
      <h1 className="title">ABECEDARIO</h1>
      <div className="modalOptions">
        <div className="itemsContainer">
          <a href="/vowels">Vocales</a>
          <a href="/word">Leer</a>
          <a href="/consonants">Consonantes</a>
        </div>
      </div>
    </div>
  );
}
