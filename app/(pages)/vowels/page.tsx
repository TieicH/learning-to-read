"use client";

import React from "react";
import { VOWELS } from "../../(helpers)/helper";
import { SynthesizeProps, useSynthesize } from "../../(service)/useSynthesize";
import "./style.css";

export default function Vowels() {
  const { mutate } = useSynthesize();
  const synthesizeText = ({ query }: SynthesizeProps) =>
    mutate(
      { query },
      {
        onSuccess(response) {
          if (response.status === 200) {
            const audioContent = response.data.audioContent;
            const audioSrc = `data:audio/mp3;base64,${audioContent}`;
            const audioElement = new Audio(audioSrc);
            audioElement.play();
          } else {
            throw Error(response.statusText);
          }
        },
      }
    );

  return (
    <div className="homeContainer">
      <a href={"/"}>INICIO</a>
      <div className="modalOptions">
        {VOWELS.map((vowel, index) => {
          return (
            <div key={index}>
              <button onClick={() => synthesizeText({ query: vowel.letter })}>
                {vowel.letter} - {vowel.letter.toLowerCase()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
