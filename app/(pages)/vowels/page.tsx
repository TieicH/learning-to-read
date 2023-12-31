'use client';

import React from 'react';
import { VOWELS } from '../../(helpers)/helper';
import { SynthesizeProps, useSynthesize } from '../../(service)/useSynthesize';
import './style.css';

export default function Vowels() {
  const { mutate } = useSynthesize();
  const synthesizeText = (params: SynthesizeProps) =>
    mutate(params, {
      onSuccess(response) {
        if (response.status === 200) {
          const audioContent = response.data.audioContent;
          const audioSrc = `data:audio/mp3;base64,${audioContent}`;
          const audioElement = new Audio(audioSrc);
          audioElement.play();
        } else {
          throw Error(response.statusText);
        }
      }
    });

  return (
    <div className="homeContainer">
      <a className="homeLink" href={'/'}>
        INICIO
      </a>
      <div className="modalOptions">
        <div className="itemsContainer">
          {VOWELS.map((vowel, index) => {
            return (
              <div key={index}>
                <button onClick={() => synthesizeText({ query: vowel.letter, type: vowel.type, queryId: vowel.letter })}>
                  {vowel.letter} - {vowel.letter.toLowerCase()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
