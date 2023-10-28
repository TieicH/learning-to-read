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
  { type: "letter", pronunciation: null, letter: "A", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "E", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "I", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "O", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "U", speakingSpeed: null },
];
export const CONSONANTS = [
  { type: "letter", pronunciation: null, letter: "A", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "B", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "C", speakingSpeed: 0.7 },
  { type: "letter", pronunciation: null, letter: "CH", speakingSpeed: 0.5 },
  { type: "letter", pronunciation: null, letter: "D", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "E", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "F", speakingSpeed: 0.75 },
  { type: "letter", pronunciation: null, letter: "G", speakingSpeed: 0.75 },
  { type: "letter", pronunciation: null, letter: "H", speakingSpeed: 0.7 },
  { type: "letter", pronunciation: null, letter: "I", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "J", speakingSpeed: 0.8 },
  { type: "letter", pronunciation: null, letter: "K", speakingSpeed: 0.7 },
  { type: "letter", pronunciation: null, letter: "L", speakingSpeed: 0.7 },
  { type: "letter", pronunciation: null, letter: "LL", speakingSpeed: 0.7 },
  { type: "letter", pronunciation: null, letter: "M", speakingSpeed: 0.7 },
  { type: "letter", pronunciation: null, letter: "N", speakingSpeed: 0.7 },
  { type: "letter", pronunciation: null, letter: "Ñ", speakingSpeed: 0.7 },
  { type: "letter", pronunciation: null, letter: "O", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "P", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "Q", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "R", speakingSpeed: 0.7 },
  { type: "letter", pronunciation: null, letter: "S", speakingSpeed: 0.8 },
  { type: "letter", pronunciation: null, letter: "T", speakingSpeed: 0.55 },
  { type: "letter", pronunciation: null, letter: "U", speakingSpeed: null },
  { type: "letter", pronunciation: "uve", letter: "V", speakingSpeed: 0.85 },
  { type: "letter", pronunciation: "bdoble", letter: "W", speakingSpeed: 0.9 },
  { type: "letter", pronunciation: null, letter: "X", speakingSpeed: 0.8 },
  { type: "letter", pronunciation: "ye", letter: "Y", speakingSpeed: null },
  { type: "letter", pronunciation: null, letter: "Z", speakingSpeed: 0.9 },
];
