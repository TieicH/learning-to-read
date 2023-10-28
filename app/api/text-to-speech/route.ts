import { NextApiRequest, NextApiResponse } from "next";
import { redisClient } from "../../(helpers)/redisClient";

// export async function GET(req, res: NextApiResponse) {
//   const { searchParams } = new URL(req.url);
//   const param = searchParams.get("text");
//   const request = {
//     input: { text: param },
//     voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" as const },
//     audioConfig: { audioEncoding: "MP3" as const },
//   };

//   const data = await fetch(
//     `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
//     {
//       method: "POST",
//       body: JSON.stringify(request),
//     }
//   );
//   const response = await data.json();
//   return Response.json({ ...response });
// }

export async function POST(req, res: NextApiResponse) {
  const {
    query,
    pitch = -5,
    speakingSpeed = 0.5,
    volumen = 5,
    type,
  } = await req.json();

  if (type === "letter") {
    const redisResponse = await redisClient.json.get(`letter:${query}`);
    if (!!redisResponse) return Response.json({ ...redisResponse });
  }

  const synthesizeRequest = {
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
      body: JSON.stringify(synthesizeRequest),
    }
  );

  const response = await data.json();

  if (type === "letter") {
    await redisClient.json.set(`letter:${query}`, "$", {
      audioContent: response.audioContent ?? "",
    });
  }

  return Response.json({ ...response });
}
