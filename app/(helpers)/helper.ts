export const getAudio = (query: string) => {
  fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      const audioContent = json.audioContent;
      const audioSrc = `data:audio/mp3;base64,${audioContent}`;
      const audioElement = new Audio(audioSrc);
      audioElement.play();
    });
};

export const VOWELS = [
  { letter: "A", speakingSpeed: null },
  { letter: "E", speakingSpeed: null },
  { letter: "I", speakingSpeed: null },
  { letter: "O", speakingSpeed: null },
  { letter: "U", speakingSpeed: null },
];
export const CONSONANTS = [
  { letter: "A", speakingSpeed: null },
  { letter: "B", speakingSpeed: null },
  { letter: "C", speakingSpeed: 0.7 },
  { letter: "CH", speakingSpeed: 0.5 },
  { letter: "D", speakingSpeed: null },
  { letter: "E", speakingSpeed: null },
  { letter: "F", speakingSpeed: 0.75 },
  { letter: "G", speakingSpeed: 0.75 },
  { letter: "H", speakingSpeed: 0.7 },
  { letter: "I", speakingSpeed: null },
  { letter: "J", speakingSpeed: 0.8 },
  { letter: "K", speakingSpeed: 0.7 },
  { letter: "L", speakingSpeed: 0.7 },
  { letter: "LL", speakingSpeed: 0.7 },
  { letter: "M", speakingSpeed: 0.7 },
  { letter: "N", speakingSpeed: 0.7 },
  { letter: "Ñ", speakingSpeed: 0.7 },
  { letter: "O", speakingSpeed: null },
  { letter: "P", speakingSpeed: null },
  { letter: "Q", speakingSpeed: null },
  { letter: "R", speakingSpeed: 0.7 },
  { letter: "S", speakingSpeed: 0.8 },
  { letter: "T", speakingSpeed: 0.55 },
  { letter: "U", speakingSpeed: null },
  { letter: "V", speakingSpeed: 0.75 },
  { letter: "W", speakingSpeed: 0.9 },
  { letter: "X", speakingSpeed: 0.8 },
  { letter: "Y", speakingSpeed: null },
  { letter: "Z", speakingSpeed: 0.9 },
];
