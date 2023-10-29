import { NextApiRequest, NextApiResponse } from 'next';
import { redisClient } from '../../(helpers)/redisClient';

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
  const { query, pitch = -5, speakingSpeed = 0.5, volumen = 5, type, ssml, languageCode = 'es-US', name = 'es-US-Neural2-C', queryId } = await req.json();

  if (type === 'letter') {
    const redisResponse = await redisClient.json.get(`letter:${queryId}`);
    if (!!redisResponse) return Response.json({ ...redisResponse });
  }

  const synthesizeRequest: any = {
    audioConfig: {
      audioEncoding: 'OGG_OPUS',
      pitch: pitch,
      speakingRate: speakingSpeed,
      volumeGainDb: volumen
    },
    voice: {
      languageCode,
      name
    }
  };

  if (ssml) {
    synthesizeRequest.input = { ssml: `<speak><phoneme alphabet="ipa" ph="${(query as string).toLowerCase()}">${(query as string).toLowerCase()}</phoneme></speak>` };
  } else {
    synthesizeRequest.input = { text: query };
  }

  const data = await fetch(`https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env.GOOGLE_API_KEY}`, {
    method: 'POST',
    body: JSON.stringify(synthesizeRequest)
  });

  const response = await data.json();

  if (type === 'letter') {
    await redisClient.json.set(`letter:${queryId}`, '$', {
      audioContent: response.audioContent ?? ''
    });
  }

  return Response.json({ ...response });
}
