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

export const NORMAL_SPEAKING_SPEED = 0.9;

export const VOWELS = [
  { pronunciation: null, letter: "A", speakingSpeed: null },
  { pronunciation: null, letter: "E", speakingSpeed: null },
  { pronunciation: null, letter: "I", speakingSpeed: null },
  { pronunciation: null, letter: "O", speakingSpeed: null },
  { pronunciation: null, letter: "U", speakingSpeed: null },
];
export const CONSONANTS = [
  { pronunciation: null, letter: "A", speakingSpeed: null },
  { pronunciation: null, letter: "B", speakingSpeed: null },
  { pronunciation: null, letter: "C", speakingSpeed: 0.7 },
  { pronunciation: null, letter: "CH", speakingSpeed: 0.5 },
  { pronunciation: null, letter: "D", speakingSpeed: null },
  { pronunciation: null, letter: "E", speakingSpeed: null },
  { pronunciation: null, letter: "F", speakingSpeed: 0.75 },
  { pronunciation: null, letter: "G", speakingSpeed: 0.75 },
  { pronunciation: null, letter: "H", speakingSpeed: 0.7 },
  { pronunciation: null, letter: "I", speakingSpeed: null },
  { pronunciation: null, letter: "J", speakingSpeed: 0.8 },
  { pronunciation: null, letter: "K", speakingSpeed: 0.7 },
  { pronunciation: null, letter: "L", speakingSpeed: 0.7 },
  { pronunciation: null, letter: "LL", speakingSpeed: 0.7 },
  { pronunciation: null, letter: "M", speakingSpeed: 0.7 },
  { pronunciation: null, letter: "N", speakingSpeed: 0.7 },
  { pronunciation: null, letter: "Ñ", speakingSpeed: 0.7 },
  { pronunciation: null, letter: "O", speakingSpeed: null },
  { pronunciation: null, letter: "P", speakingSpeed: null },
  { pronunciation: null, letter: "Q", speakingSpeed: null },
  { pronunciation: null, letter: "R", speakingSpeed: 0.7 },
  { pronunciation: null, letter: "S", speakingSpeed: 0.8 },
  { pronunciation: null, letter: "T", speakingSpeed: 0.55 },
  { pronunciation: null, letter: "U", speakingSpeed: null },
  { pronunciation: "uve", letter: "V", speakingSpeed: 0.85 },
  { pronunciation: "bdoble", letter: "W", speakingSpeed: 0.9 },
  { pronunciation: null, letter: "X", speakingSpeed: 0.8 },
  { pronunciation: "ye", letter: "Y", speakingSpeed: null },
  { pronunciation: null, letter: "Z", speakingSpeed: 0.9 },
];
