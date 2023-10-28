"use client";

import React, { useEffect } from "react";
import "./style.css";

export function Home() {
  return (
    <div className="homeContainer">
      <h1>ABECEDARIO</h1>
      <div className="modalOptions">
        <a href="/vowels">Vocales</a>
        <a href="/word">Leer</a>
        <a href="/consonants">Consonantes</a>
      </div>
    </div>
  );
}
