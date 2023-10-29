'use client';

import React from 'react';
import { CONSONANTS, VOWELS } from '../../(helpers)/helper';
import { SynthesizeProps, useSynthesize } from '../../(service)/useSynthesize';
import { useRouter, usePathname } from 'next/navigation';
import './style.css';

export default function Consonants() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="homeContainer">
      <a className="homeLink" href={'/'}>
        INICIO
      </a>
      <div className="modalOptions">
        <div className="itemsContainer">
          {CONSONANTS.map((consonant, index) => {
            const synthesizeBody: SynthesizeProps = {
              query: consonant.pronunciation ?? consonant.letter,
              type: consonant.type,
              queryId: consonant.letter
            };
            if (consonant.speakingSpeed) synthesizeBody.speakingSpeed = consonant.speakingSpeed;
            return (
              <div className="buttonContainer" key={index}>
                <button
                  onClick={() => {
                    router.push(`${pathname}/${consonant.urlLetter ?? consonant.letter}`);
                  }}>
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
