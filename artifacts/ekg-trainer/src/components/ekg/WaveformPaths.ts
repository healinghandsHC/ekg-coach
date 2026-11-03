const singleBeatPaths: Record<string, { path: string; width: number }> = {
  "normal-sinus": {
    path: "M0,50 L15,50 Q20,50 22,42 Q25,34 28,42 Q30,50 35,50 L40,50 L42,52 L44,10 L48,80 L50,45 L52,50 L60,50 Q65,50 68,38 Q70,30 72,38 Q75,50 80,50 L100,50",
    width: 100,
  },
  "sinus-bradycardia": {
    path: "M0,50 L25,50 Q30,50 32,42 Q35,34 38,42 Q40,50 45,50 L55,50 L57,52 L59,10 L63,80 L65,45 L67,50 L80,50 Q85,50 88,38 Q90,30 92,38 Q95,50 100,50 L140,50",
    width: 140,
  },
  "sinus-tachycardia": {
    path: "M0,50 L8,50 Q11,50 13,43 Q15,36 17,43 Q19,50 22,50 L25,50 L27,52 L29,12 L32,78 L34,46 L36,50 L42,50 Q45,50 47,40 Q49,33 51,40 Q53,50 55,50 L65,50",
    width: 65,
  },
  "atrial-fibrillation": {
    path: "M0,50 L5,48 L8,52 L11,47 L14,53 L17,49 L20,51 L23,48 L26,52 L30,50 L32,52 L34,10 L38,80 L40,45 L42,50 L48,49 L51,52 L54,47 L57,53 L60,48 L63,52 L66,50 L68,52 L70,12 L74,78 L76,46 L78,50 L82,51 L85,48 L88,53 L90,50",
    width: 90,
  },
  "atrial-flutter": {
    path: "M0,50 L5,50 L8,42 L12,55 L15,42 L19,55 L22,42 L25,55 L28,50 L30,52 L32,10 L36,80 L38,45 L40,50 L43,42 L47,55 L50,42 L54,55 L57,42 L60,55 L63,50 L65,52 L67,12 L71,78 L73,46 L75,50 L78,42 L82,55 L85,42 L88,55 L90,50",
    width: 90,
  },
  "ventricular-tachycardia": {
    path: "M0,50 L5,50 L8,55 L12,5 L18,90 L24,8 L28,85 L32,15 L35,50 L40,50 L43,55 L47,5 L53,90 L59,8 L63,85 L67,15 L70,50 L80,50",
    width: 80,
  },
  "ventricular-fibrillation": {
    path: "M0,50 L3,30 L6,65 L9,25 L12,70 L15,35 L18,60 L21,20 L24,75 L27,30 L30,55 L33,40 L36,68 L39,22 L42,72 L45,28 L48,62 L51,35 L54,58 L57,42 L60,65 L63,25 L66,70 L69,32 L72,60 L75,38 L78,55 L81,45 L84,62 L87,30 L90,50",
    width: 90,
  },
  "first-degree-block": {
    path: "M0,50 L10,50 Q13,50 15,42 Q17,34 19,42 Q21,50 24,50 L38,50 L40,52 L42,10 L46,80 L48,45 L50,50 L58,50 Q61,50 63,38 Q65,30 67,38 Q69,50 72,50 L100,50",
    width: 100,
  },
  "second-degree-type-1": {
    path: "M0,50 L8,50 Q11,50 13,43 Q15,36 17,43 Q19,50 22,50 L28,50 L30,52 L32,10 L36,80 L38,45 L40,50 L48,50 Q51,50 53,43 Q55,36 57,43 Q59,50 62,50 L72,50 L74,52 L76,12 L80,78 L82,46 L84,50 L92,50 Q95,50 97,43 Q99,36 101,43 Q103,50 106,50 L120,50 L128,50 Q131,50 133,43 Q135,36 137,43 Q139,50 142,50 L148,50 L150,52 L152,10 L156,80 L158,45 L160,50 L175,50",
    width: 175,
  },
  "second-degree-type-2": {
    path: "M0,50 L10,50 Q13,50 15,43 Q17,36 19,43 Q21,50 24,50 L30,50 L32,52 L34,10 L38,80 L40,45 L42,50 L52,50 Q55,50 57,43 Q59,36 61,43 Q63,50 66,50 L72,50 L74,52 L76,12 L80,78 L82,46 L84,50 L94,50 Q97,50 99,43 Q101,36 103,43 Q105,50 108,50 L130,50 L140,50 Q143,50 145,43 Q147,36 149,43 Q151,50 154,50 L160,50 L162,52 L164,10 L168,80 L170,45 L172,50 L185,50",
    width: 185,
  },
  "third-degree-block": {
    path: "M0,50 Q3,50 5,43 Q7,36 9,43 Q11,50 14,50 L25,50 L27,52 L29,10 L33,80 L35,45 L37,50 L42,50 Q45,50 47,43 Q49,36 51,43 Q53,50 56,50 L72,50 L74,52 L76,12 L80,78 L82,46 L84,50 L88,50 Q91,50 93,43 Q95,36 97,43 Q99,50 102,50 L120,50 L122,52 L124,10 L128,80 L130,45 L132,50 L136,50 Q139,50 141,43 Q143,36 145,43 Q147,50 150,50 L165,50",
    width: 165,
  },
  "pac": {
    path: "M0,50 L15,50 Q20,50 22,42 Q25,34 28,42 Q30,50 35,50 L40,50 L42,52 L44,10 L48,80 L50,45 L52,50 L60,50 Q65,50 68,38 Q70,30 72,38 Q75,50 80,50 L95,50 Q98,50 100,44 Q102,38 104,44 Q106,50 108,50 L112,50 L114,52 L116,10 L120,80 L122,45 L124,50 L150,50",
    width: 150,
  },
  "svt": {
    path: "M0,50 L8,50 L10,52 L12,10 L16,80 L18,45 L20,50 L28,50 L30,52 L32,12 L36,78 L38,46 L40,50 L48,50 L50,52 L52,10 L56,80 L58,45 L60,50 L65,50",
    width: 65,
  },
  "mat": {
    path: "M0,50 L10,50 Q13,50 15,42 Q17,34 19,42 Q21,50 24,50 L28,50 L30,52 L32,10 L36,80 L38,45 L40,50 L50,50 Q53,50 55,40 Q57,30 59,40 Q61,50 64,50 L68,50 L70,52 L72,12 L76,78 L78,46 L80,50 L88,50 Q90,50 92,46 Q94,44 96,46 Q98,50 100,50 L106,50 L108,52 L110,10 L114,80 L116,45 L118,50 L130,50 Q133,50 135,38 Q137,30 139,38 Q141,50 144,50 L150,50",
    width: 150,
  },
  "junctional-rhythm": {
    path: "M0,50 L25,50 L27,52 L29,10 L33,80 L35,45 L37,50 Q40,50 42,56 Q44,62 46,56 Q48,50 50,50 L80,50 L82,52 L84,10 L88,80 L90,45 L92,50 Q95,50 97,56 Q99,62 101,56 Q103,50 105,50 L140,50",
    width: 140,
  },
  "accelerated-junctional": {
    path: "M0,50 L15,50 L17,52 L19,10 L23,80 L25,45 L27,50 Q30,50 32,56 Q34,62 36,56 Q38,50 40,50 L60,50 L62,52 L64,10 L68,80 L70,45 L72,50 Q75,50 77,56 Q79,62 81,56 Q83,50 85,50 L100,50",
    width: 100,
  },
  "junctional-tachycardia": {
    path: "M0,50 L8,50 L10,52 L12,10 L16,80 L18,45 L20,50 Q23,50 25,56 Q27,61 29,56 Q31,50 33,50 L38,50 L40,52 L42,12 L46,78 L48,46 L50,50 Q53,50 55,56 Q57,61 59,56 Q61,50 63,50 L65,50",
    width: 65,
  },
  "pvc": {
    path: "M0,50 L15,50 Q20,50 22,42 Q25,34 28,42 Q30,50 35,50 L40,50 L42,52 L44,10 L48,80 L50,45 L52,50 L60,50 Q65,50 68,38 Q70,30 72,38 Q75,50 80,50 L85,50 L88,55 L92,5 L100,95 L106,20 L110,50 L115,50 Q118,50 120,60 Q122,68 124,60 Q126,50 128,50 L160,50",
    width: 160,
  },
  "idioventricular": {
    path: "M0,50 L20,50 L24,55 L30,8 L40,92 L48,15 L54,50 L70,50 L80,50 L84,55 L90,8 L100,92 L108,15 L114,50 L160,50",
    width: 160,
  },
  "lbbb": {
    path: "M0,50 L15,50 Q20,50 22,42 Q25,34 28,42 Q30,50 35,50 L40,50 L42,52 L44,14 L47,18 L50,12 L54,80 L56,45 L58,50 L66,50 Q69,50 71,40 Q73,34 75,40 Q77,50 80,50 L100,50",
    width: 100,
  },
  "rbbb": {
    path: "M0,50 L15,50 Q20,50 22,42 Q25,34 28,42 Q30,50 35,50 L40,50 L42,52 L44,12 L47,45 L49,18 L51,12 L55,80 L57,45 L59,50 L67,50 Q70,50 72,40 Q74,34 76,40 Q78,50 81,50 L100,50",
    width: 100,
  },
  "wpw": {
    path: "M0,50 L15,50 Q18,50 20,42 Q22,34 24,42 Q26,50 28,50 L30,50 Q32,50 34,40 Q36,28 38,18 L40,12 L44,80 L46,45 L48,50 L56,50 Q59,50 61,40 Q63,34 65,40 Q67,50 70,50 L100,50",
    width: 100,
  },
  "asystole": {
    path: "M0,50 L20,50 L25,49 L30,51 L40,50 L60,50 L65,51 L70,49 L80,50 L100,50",
    width: 100,
  },
  "torsades": {
    path: "M0,50 L5,50 L8,30 L12,70 L16,20 L20,80 L24,35 L28,65 L32,45 L36,55 L40,50 L45,40 L50,62 L55,25 L60,75 L65,30 L70,70 L75,42 L80,58 L85,48 L90,52 L95,35 L100,65 L105,40 L110,60 L115,48 L120,52 L130,50 L140,50",
    width: 140,
  },
  "st-elevation": {
    path: "M0,50 L15,50 Q20,50 22,42 Q25,34 28,42 Q30,50 35,50 L40,50 L42,52 L44,10 L48,70 L50,30 L54,28 L58,30 Q62,35 66,32 Q70,30 72,35 Q75,42 80,50 L100,50",
    width: 100,
  },
};

export function getWaveformPath(rhythmId: string, viewWidth: number = 800): string {
  const beat = singleBeatPaths[rhythmId] || singleBeatPaths["normal-sinus"];
  const segments: string[] = [];
  let offset = 0;
  const repeats = Math.ceil(viewWidth / beat.width) + 1;

  for (let i = 0; i < repeats; i++) {
    const commands = beat.path.replace(/([ML])([^A-Za-z]*)/g, (_match, cmd: string, rest: string) => {
      const parts = rest.trim().split(/\s+/);
      const shifted = parts.map((p) => {
        const coords = p.split(",");
        if (coords.length === 2) {
          return `${parseFloat(coords[0]) + offset},${coords[1]}`;
        }
        return p;
      });
      return `${cmd}${shifted.join(" ")}`;
    }).replace(/Q([^A-Za-z]*)/g, (_match, rest: string) => {
      const parts = rest.trim().split(/\s+/);
      const shifted = parts.map((p) => {
        const coords = p.split(",");
        if (coords.length === 2) {
          return `${parseFloat(coords[0]) + offset},${coords[1]}`;
        }
        return p;
      });
      return `Q${shifted.join(" ")}`;
    });

    if (i === 0) {
      segments.push(commands);
    } else {
      segments.push(commands.replace(/^M[^LQC]*/, ""));
    }
    offset += beat.width;
  }

  return segments.join(" ");
}

export function getStaticWaveformPath(rhythmId: string): string {
  return singleBeatPaths[rhythmId]?.path || singleBeatPaths["normal-sinus"].path;
}
