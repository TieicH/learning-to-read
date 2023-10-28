"use client";

import React from "react";
import { CONSONANTS, VOWELS } from "../../(helpers)/helper";
import { SynthesizeProps, useSynthesize } from "../../(service)/useSynthesize";
import "./style.css";

export default function Consonants() {
  const { mutate } = useSynthesize();
  const synthesizeText = (params: SynthesizeProps) => {
    return mutate(params, {
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
    });
  };

  return (
    <div className="homeContainer">
      <a className="homeLink" href={"/"}>
        INICIO
      </a>
      <div className="modalOptions">
        <div className="itemsContainer">
          {CONSONANTS.map((consonant, index) => {
            const synthesizeBody: SynthesizeProps = {
              query: consonant.pronunciation ?? consonant.letter,
              type: consonant.type,
            };
            if (consonant.speakingSpeed)
              synthesizeBody.speakingSpeed = consonant.speakingSpeed;
            return (
              <div className="buttonContainer" key={index}>
                <button onClick={() => synthesizeText(synthesizeBody)}>
                  {consonant.letter} - {consonant.letter.toLowerCase()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
