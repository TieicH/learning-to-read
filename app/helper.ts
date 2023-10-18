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
