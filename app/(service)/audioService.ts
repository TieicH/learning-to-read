export const audioService = () => {
  type SynthesizeProps = {
    query: string;
    language?: string;
    voice?: string;
    volumen?: number;
    speakingSpeed?: number;
    pitch?: number;
    encoding?: string;
  };

  const synthesize = ({ query }: SynthesizeProps) => {};
};
