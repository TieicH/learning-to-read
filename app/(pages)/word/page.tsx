'use client';

import React, { FormEvent } from 'react';
import { SynthesizeProps, useSynthesize } from '../../(service)/useSynthesize';
import './style.css';
import { NORMAL_SPEAKING_SPEED } from '../../(helpers)/helper';

export default function Word() {
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

  const submitHandler = (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    const data = new FormData(form.target as HTMLFormElement);
    const textInput = data.get('textInput');
    if (textInput) {
      synthesizeText({
        query: textInput as string,
        speakingSpeed: NORMAL_SPEAKING_SPEED,
        type: 'sentence',
        queryId: textInput as string
      });
    }
  };

  return (
    <div className="homeContainer">
      <a className="homeLink" href={'/'}>
        INICIO
      </a>
      <div className="modalOptions">
        <form className="formContainer" onSubmit={(a) => submitHandler(a)}>
          <textarea rows={10} name="textInput" placeholder="Escribe aqui para leer..."></textarea>
          <button type="submit">Leer</button>
        </form>
      </div>
    </div>
  );
}
