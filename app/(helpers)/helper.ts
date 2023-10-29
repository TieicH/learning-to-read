export const getAudio = (query: string) => {
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query
    })
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

export const rawConsonants = ['A', 'B', 'C', 'CH', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'LL', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export const VOWELS = [
  { type: 'letter', pronunciation: null, letter: 'A', speakingSpeed: null },
  { type: 'letter', pronunciation: null, letter: 'E', speakingSpeed: null },
  { type: 'letter', pronunciation: null, letter: 'I', speakingSpeed: null },
  { type: 'letter', pronunciation: null, letter: 'O', speakingSpeed: null },
  { type: 'letter', pronunciation: null, letter: 'U', speakingSpeed: null }
];

// TODO: find a way to use alphabet instead of CONSONANTS
// in that way we can get rid of VOWELS
export const CONSONANTS = [
  {
    conjugation: null,
    spec: 'vowel',
    type: 'letter',
    pronunciation: null,
    letter: 'A',
    speakingSpeed: null
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: 'VA',
        ssml: false,
        letter: 'BA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'VE',
        ssml: false,
        letter: 'BE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'BI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'BO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'BU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'B',
    speakingSpeed: null
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'CA',
        speakingSpeed: 0.8
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'CE',
        speakingSpeed: 0.7
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'CI',
        speakingSpeed: 0.7
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'CO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'QU',
        ssml: false,
        letter: 'CU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'C',
    speakingSpeed: 0.7
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'CHA',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'CHE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'CHI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'CHO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'CHU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'CH',
    speakingSpeed: 0.5
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'DA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'DE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'DI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'DO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'DU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'D',
    speakingSpeed: null
  },
  {
    conjugation: null,
    spec: 'vowel',
    type: 'letter',
    pronunciation: null,
    letter: 'E',
    speakingSpeed: null
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'FA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'FE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'FI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'FO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'FU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'F',
    speakingSpeed: 0.75
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'GA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'GE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'GI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'GO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'GU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'G',
    speakingSpeed: 0.75
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: 'A',
        ssml: false,
        letter: 'HA',
        speakingSpeed: 0.5
      },
      {
        type: 'letter',
        pronunciation: 'E',
        ssml: false,
        letter: 'HE',
        speakingSpeed: 0.5
      },
      {
        type: 'letter',
        pronunciation: 'I',
        ssml: false,
        letter: 'HI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'O',
        ssml: false,
        letter: 'HO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'U',
        ssml: false,
        letter: 'HU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'H',
    speakingSpeed: 0.7
  },
  {
    conjugation: null,
    spec: 'vowel',
    type: 'letter',
    pronunciation: null,
    letter: 'I',
    speakingSpeed: null
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'JA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'GE',
        ssml: false,
        letter: 'JE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'JI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'JO',
        speakingSpeed: null,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: 'WHO',
        ssml: false,
        letter: 'JU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'J',
    speakingSpeed: 0.8
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'KA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'KE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'KI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'KO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'KU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'K',
    speakingSpeed: 0.7
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'LA',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'LE',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'LI',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'LO',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'LU',
        speakingSpeed: 0.65
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'L',
    speakingSpeed: 0.7
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: 'YA',
        ssml: false,
        letter: 'LLA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'YE',
        ssml: false,
        letter: 'LLE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'YI',
        ssml: false,
        letter: 'LLI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'LLO',
        speakingSpeed: 0.7,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: 'YU',
        ssml: false,
        letter: 'LLU',
        speakingSpeed: 0.8
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'LL',
    speakingSpeed: 0.7
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'MA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'ME',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'MI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'MO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'MU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'M',
    speakingSpeed: 0.7
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'NA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'NE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'NI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'NO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'NU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'N',
    speakingSpeed: 0.7
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'ÑA',
        speakingSpeed: 0.8,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'ÑE',
        speakingSpeed: 0.8,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'ÑI',
        speakingSpeed: 0.7,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'ÑO',
        speakingSpeed: 0.7,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'ÑU',
        speakingSpeed: 0.8,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'Ñ',
    urlLetter: 'ENE',
    speakingSpeed: 0.7
  },
  {
    conjugation: null,
    spec: 'vowel',
    type: 'letter',
    pronunciation: null,
    letter: 'O',
    speakingSpeed: null
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'PA',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'PE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'PI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'PO',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'PU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'P',
    speakingSpeed: null
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: 'KA',
        ssml: false,
        letter: 'QA',
        speakingSpeed: 0.55
      },
      {
        type: 'letter',
        pronunciation: 'KE',
        ssml: true,
        letter: 'QE',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: 'KI',
        ssml: false,
        letter: 'QI',
        speakingSpeed: 0.6
      },
      {
        type: 'letter',
        pronunciation: 'KO',
        ssml: false,
        letter: 'QO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'KU',
        ssml: false,
        letter: 'QU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'Q',
    speakingSpeed: 0.65
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'RA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'RE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'RI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'RO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'RU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'R',
    speakingSpeed: 0.7
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'RRA',
        speakingSpeed: 0.8,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'RRE',
        speakingSpeed: 0.8,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'RRI',
        speakingSpeed: 0.8,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'RRO',
        speakingSpeed: 0.8,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'RRU',
        speakingSpeed: 0.8,
        languageCode: 'es-ES',
        name: 'es-ES-Neural2-D'
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: 'doble R',
    letter: 'RR',
    speakingSpeed: 0.8
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'SA',
        speakingSpeed: 0.6
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'SE',
        speakingSpeed: 0.7
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'SI',
        speakingSpeed: 0.7
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'SO',
        speakingSpeed: 0.7
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'SU',
        speakingSpeed: 0.7
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'S',
    speakingSpeed: 0.85
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'TA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'TE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'TI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'TO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'TU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'T',
    speakingSpeed: 0.55
  },
  {
    conjugation: null,
    spec: 'vowel',
    type: 'letter',
    pronunciation: null,
    letter: 'U',
    speakingSpeed: null
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'VA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'VE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'VI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'VO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'VU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: 'uve',
    letter: 'V',
    speakingSpeed: 0.85
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'WA',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'WE',
        speakingSpeed: 0.6
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'WI',
        speakingSpeed: 0.7
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: true,
        letter: 'WO',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'WU',
        speakingSpeed: 0.55
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: 'bdoble',
    letter: 'W',
    speakingSpeed: 0.9
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: 'ZA',
        ssml: false,
        letter: 'XA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'ZE',
        ssml: true,
        letter: 'XE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'ZI',
        ssml: true,
        letter: 'XI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'ZO',
        ssml: true,
        letter: 'XO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: 'ZU',
        ssml: true,
        letter: 'XU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'X',
    speakingSpeed: 0.9
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'YA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'YE',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'YI',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'YO',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'YU',
        speakingSpeed: null
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: 'ye',
    letter: 'Y',
    speakingSpeed: null
  },
  {
    conjugation: [
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'ZA',
        speakingSpeed: null
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'ZE',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'ZI',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'ZO',
        speakingSpeed: 0.65
      },
      {
        type: 'letter',
        pronunciation: null,
        ssml: false,
        letter: 'ZU',
        speakingSpeed: 0.65
      }
    ],
    spec: 'consonant',
    type: 'letter',
    pronunciation: null,
    letter: 'Z',
    speakingSpeed: 0.9
  }
];
