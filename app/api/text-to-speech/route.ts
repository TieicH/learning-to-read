import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req, res: NextApiResponse) {
  const { searchParams } = new URL(req.url);
  const param = searchParams.get("text");
  const request = {
    input: { text: param },
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" as const },
    audioConfig: { audioEncoding: "MP3" as const },
  };

  const data = await fetch(
    `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify(request),
    }
  );
  const response = await data.json();
  return Response.json({ ...response });
}

export async function POST(req, res: NextApiResponse) {
  const {
    query,
    pitch = -5,
    speakingSpeed = 0.5,
    volumen = 5,
  } = await req.json();

  const request1 = {
    audioConfig: {
      audioEncoding: "OGG_OPUS",
      pitch: pitch,
      speakingRate: speakingSpeed ?? 0.5,
      volumeGainDb: volumen,
    },
    voice: {
      languageCode: "es-US",
      name: "es-US-Neural2-C",
    },
    input: { text: query },
  };

  const data = await fetch(
    `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify(request1),
    }
  );
  const response = await data.json();
  return Response.json({ ...response });
}
