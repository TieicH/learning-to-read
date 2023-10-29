'use client';

import { useRouter } from 'next/navigation';
import { CONSONANTS } from '../../../(helpers)/helper';
import './style.css';
import { SynthesizeProps, useSynthesize } from '../../../(service)/useSynthesize';

export default function Letter({ params }: { params: { letter: string } }) {
  const router = useRouter();
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
      }
    });
  };
  const data = CONSONANTS.find((consonant) => consonant.letter === params.letter.toUpperCase() || consonant.urlLetter === params.letter.toUpperCase());

  if (!data) {
    router.back();
  }

  const synthesizeBody: SynthesizeProps = {
    query: data.pronunciation ?? data.letter,
    type: data.type
  };
  if (data.speakingSpeed) synthesizeBody.speakingSpeed = data.speakingSpeed;

  return (
    <div className="homeContainer">
      <button className="homeLink" onClick={() => router.back()}>
        REGRESAR
      </button>
      <div className="modalOptions">
        <div className="itemsContainer">
          <div>
            <button
              onClick={() => {
                synthesizeText(synthesizeBody);
              }}>
              {data.letter} - {data.letter.toLowerCase()}
            </button>
          </div>
          <div className="buttonContainer">
            {data.conjugation
              ? data.conjugation.map((conjugation, index) => {
                  const synthesizeConjugationBody: SynthesizeProps = {
                    query: conjugation.pronunciation ?? conjugation.letter,
                    type: conjugation.type,
                    ssml: conjugation.ssml
                  };
                  if (conjugation.speakingSpeed) synthesizeConjugationBody.speakingSpeed = conjugation.speakingSpeed;
                  if (conjugation.languageCode) synthesizeConjugationBody.languageCode = conjugation.languageCode;
                  if (conjugation.name) synthesizeConjugationBody.name = conjugation.name;
                  return (
                    <button
                      key={conjugation.letter}
                      onClick={() => {
                        synthesizeText(synthesizeConjugationBody);
                      }}>
                      <span className="uppercase">{conjugation.letter}</span> <span className="lowerCase">({conjugation.letter.toLowerCase()})</span>
                    </button>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
