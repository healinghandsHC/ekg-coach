export interface QuizQuestion {
  id: number;
  rhythmId: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    rhythmId: "normal-sinus",
    correctAnswer: "Normal Sinus Rhythm",
    options: ["Normal Sinus Rhythm", "Sinus Bradycardia", "Junctional Rhythm", "First Degree Heart Block"],
    explanation: "Regular rhythm 60–100 bpm, upright P before every QRS, normal PR (0.12–0.20 s), and normal QRS. All criteria for Normal Sinus Rhythm are met.",
  },
  {
    id: 2,
    rhythmId: "atrial-fibrillation",
    correctAnswer: "Atrial Fibrillation",
    options: ["Atrial Fibrillation", "Atrial Flutter", "Multifocal Atrial Tachycardia", "Junctional Tachycardia"],
    explanation: "Hallmark: irregularly irregular R-R intervals with no identifiable P waves and a chaotic/wavy baseline. The key is 'irregularly irregular' — no two R-R intervals are the same.",
  },
  {
    id: 3,
    rhythmId: "ventricular-tachycardia",
    correctAnswer: "Ventricular Tachycardia (VT)",
    options: ["Ventricular Tachycardia (VT)", "Ventricular Fibrillation (VFib)", "SVT with aberrancy", "Torsades de Pointes"],
    explanation: "VT shows regular wide QRS complexes (> 0.12 s) at rate > 100 bpm. AV dissociation or fusion/capture beats confirm VT. Key rule: wide + fast + regular = VT until proven otherwise.",
  },
  {
    id: 4,
    rhythmId: "ventricular-fibrillation",
    correctAnswer: "Ventricular Fibrillation (VFib)",
    options: ["Ventricular Fibrillation (VFib)", "Torsades de Pointes", "Atrial Fibrillation", "Asystole"],
    explanation: "VFib shows chaotic, irregular deflections of varying amplitude with no identifiable waveforms. Unlike Torsades, there's no organized sinusoidal twisting pattern. Immediate defibrillation is required.",
  },
  {
    id: 5,
    rhythmId: "sinus-bradycardia",
    correctAnswer: "Sinus Bradycardia",
    options: ["Sinus Bradycardia", "Junctional Rhythm", "Third Degree Heart Block", "Second Degree Type II"],
    explanation: "Sinus Bradycardia looks exactly like NSR except rate < 60 bpm. All waveforms and intervals are normal — it's still coming from the SA node, just slowly. Unlike Junctional Rhythm, P waves are upright and precede each QRS.",
  },
  {
    id: 6,
    rhythmId: "sinus-tachycardia",
    correctAnswer: "Sinus Tachycardia",
    options: ["Sinus Tachycardia", "SVT / AVNRT", "Atrial Flutter (2:1)", "Junctional Tachycardia"],
    explanation: "Sinus Tachycardia has visible upright P waves before each QRS (key distinguishing feature), normal morphology, and rate > 100 bpm. SVT has no visible P waves. Flutter at 2:1 produces exactly 150 bpm.",
  },
  {
    id: 7,
    rhythmId: "atrial-flutter",
    correctAnswer: "Atrial Flutter",
    options: ["Atrial Flutter", "Atrial Fibrillation", "SVT / AVNRT", "Sinus Tachycardia"],
    explanation: "Atrial Flutter: sawtooth flutter waves at ~300/min, best seen in inferior leads. Ventricular rate often exactly 150 bpm (2:1 block). A rate of exactly 150 bpm should always make you think of flutter first.",
  },
  {
    id: 8,
    rhythmId: "first-degree-block",
    correctAnswer: "First Degree Heart Block",
    options: ["First Degree Heart Block", "Normal Sinus Rhythm", "Second Degree Type I (Wenckebach)", "WPW (short PR)"],
    explanation: "First Degree Block: PR interval consistently > 0.20 s (> 1 large box) but constant beat-to-beat. Every P conducts — no dropped beats. Easy to miss — count the boxes in the PR interval!",
  },
  {
    id: 9,
    rhythmId: "second-degree-type-1",
    correctAnswer: "2nd Degree AV Block — Type I (Wenckebach)",
    options: ["2nd Degree AV Block — Type I (Wenckebach)", "2nd Degree AV Block — Type II (Mobitz)", "3rd Degree (Complete) Heart Block", "First Degree Heart Block"],
    explanation: "Wenckebach: PR interval gets progressively longer until a QRS is dropped, then the cycle resets. The grouped beating pattern is the visual clue. Remember: PR 'gets longer, longer, longer, then drops' — Wenckebach.",
  },
  {
    id: 10,
    rhythmId: "second-degree-type-2",
    correctAnswer: "2nd Degree AV Block — Type II (Mobitz)",
    options: ["2nd Degree AV Block — Type II (Mobitz)", "2nd Degree AV Block — Type I (Wenckebach)", "3rd Degree (Complete) Heart Block", "First Degree Heart Block"],
    explanation: "Mobitz II: sudden dropped QRS without any prior PR prolongation. PR intervals are constant for conducted beats. Often has a wide QRS. More dangerous than Type I — can progress suddenly to complete block.",
  },
  {
    id: 11,
    rhythmId: "third-degree-block",
    correctAnswer: "3rd Degree (Complete) Heart Block",
    options: ["3rd Degree (Complete) Heart Block", "2nd Degree AV Block — Type II (Mobitz)", "Junctional Rhythm", "Idioventricular Rhythm (Ventricular Escape)"],
    explanation: "Complete Heart Block: P waves and QRS complexes are completely independent with no relationship. Regular P-P and regular R-R but at different rates. The atrial rate is always faster than the ventricular rate.",
  },
  {
    id: 12,
    rhythmId: "st-elevation",
    correctAnswer: "ST Elevation (STEMI Pattern)",
    options: ["ST Elevation (STEMI Pattern)", "Normal Sinus Rhythm", "Left Bundle Branch Block (LBBB)", "Pericarditis"],
    explanation: "STEMI: ST segment elevated > 1 mm in ≥ 2 contiguous leads, typically convex (tombstone) morphology, with reciprocal depression in opposite leads. New LBBB with symptoms is also treated as STEMI-equivalent.",
  },
  {
    id: 13,
    rhythmId: "asystole",
    correctAnswer: "Asystole",
    options: ["Asystole", "Ventricular Fibrillation (VFib)", "Pulseless Electrical Activity (PEA)", "Fine VFib"],
    explanation: "Asystole is the flatline — complete absence of organized electrical activity. Unlike fine VFib (which has low-amplitude chaotic deflections), asystole is flat. Defibrillation is NOT indicated — there's no electrical activity to shock.",
  },
  {
    id: 14,
    rhythmId: "torsades",
    correctAnswer: "Torsades de Pointes",
    options: ["Torsades de Pointes", "Ventricular Fibrillation (VFib)", "Ventricular Tachycardia (VT)", "Ventricular Bigeminy"],
    explanation: "Torsades: polymorphic VT where wide QRS complexes twist around the baseline in a characteristic sinusoidal pattern, with amplitude waxing and waning. Occurs with prolonged QTc. First-line: magnesium 2 g IV.",
  },
  {
    id: 15,
    rhythmId: "pulseless-electrical-activity",
    correctAnswer: "Pulseless Electrical Activity (PEA)",
    options: ["Pulseless Electrical Activity (PEA)", "Normal Sinus Rhythm", "Asystole", "Junctional Rhythm"],
    explanation: "PEA is a clinical diagnosis — the monitor shows organized electrical activity but the patient has NO pulse. You cannot diagnose PEA from the EKG alone. Always check for a pulse with any 'rhythm.' Treat with CPR + hunt for H's and T's.",
  },
  {
    id: 16,
    rhythmId: "pvc",
    correctAnswer: "Premature Ventricular Contractions (PVC)",
    options: ["Premature Ventricular Contractions (PVC)", "Premature Atrial Contractions (PAC)", "Ventricular Bigeminy", "Aberrantly conducted PAC"],
    explanation: "PVC: early wide bizarre QRS (> 0.12 s) with no preceding P wave, discordant T wave, followed by a full compensatory pause. Key distinction from PAC: PVCs are wide and bizarre with a compensatory (full) pause; PACs are narrow with a non-compensatory pause.",
  },
  {
    id: 17,
    rhythmId: "bigeminy",
    correctAnswer: "Ventricular Bigeminy",
    options: ["Ventricular Bigeminy", "Premature Ventricular Contractions (PVC)", "Atrial Fibrillation", "2nd Degree AV Block — Type I (Wenckebach)"],
    explanation: "Bigeminy: every other beat is a wide bizarre PVC — a 1:1 alternating pattern of sinus beat + PVC. The regular alternating pattern with compensatory pauses creates a characteristic grouped appearance.",
  },
  {
    id: 18,
    rhythmId: "junctional-rhythm",
    correctAnswer: "Junctional Rhythm",
    options: ["Junctional Rhythm", "Sinus Bradycardia", "Third Degree Heart Block", "Accelerated Junctional Rhythm"],
    explanation: "Junctional Rhythm: slow 40–60 bpm, absent or retrograde P waves, narrow QRS. The SA node has failed — the AV junction takes over as escape pacemaker. Key: no upright P before QRS + slow rate + narrow QRS = junctional.",
  },
  {
    id: 19,
    rhythmId: "accelerated-junctional",
    correctAnswer: "Accelerated Junctional Rhythm",
    options: ["Accelerated Junctional Rhythm", "Normal Sinus Rhythm", "Junctional Rhythm", "Junctional Tachycardia"],
    explanation: "Accelerated Junctional Rhythm: AV node firing at 60–100 bpm with absent/retrograde P waves. Rate differentiates from Junctional Escape (40–60) and Junctional Tachycardia (>100). Strongly associated with digoxin toxicity.",
  },
  {
    id: 20,
    rhythmId: "svt",
    correctAnswer: "Supraventricular Tachycardia (SVT / AVNRT)",
    options: ["Supraventricular Tachycardia (SVT / AVNRT)", "Sinus Tachycardia", "Junctional Tachycardia", "Atrial Flutter (2:1)"],
    explanation: "SVT: regular narrow complex tachycardia 150–250 bpm with no visible P waves (buried in QRS or retrograde immediately after). Abrupt onset/offset is characteristic. First-line: vagal maneuvers → adenosine 6 mg IV.",
  },
  {
    id: 21,
    rhythmId: "mat",
    correctAnswer: "Multifocal Atrial Tachycardia (MAT)",
    options: ["Multifocal Atrial Tachycardia (MAT)", "Atrial Fibrillation", "Atrial Flutter with variable block", "Sinus Tachycardia with PACs"],
    explanation: "MAT requires ≥ 3 distinct P wave morphologies in one lead, irregular rhythm, and rate > 100 bpm. Often mistaken for AFib — key difference is that MAT has identifiable P waves (just varying morphologies). Strongly suggests COPD.",
  },
  {
    id: 22,
    rhythmId: "pac",
    correctAnswer: "Premature Atrial Contractions (PAC)",
    options: ["Premature Atrial Contractions (PAC)", "Premature Ventricular Contractions (PVC)", "2nd Degree AV Block — Type I (Wenckebach)", "Normal Sinus Rhythm"],
    explanation: "PAC: an early beat with a different-looking P' wave (premature, abnormal morphology), narrow QRS (same as sinus), followed by a non-compensatory pause. The non-compensatory pause and narrow QRS distinguish it from PVCs.",
  },
  {
    id: 23,
    rhythmId: "lbbb",
    correctAnswer: "Left Bundle Branch Block (LBBB)",
    options: ["Left Bundle Branch Block (LBBB)", "Right Bundle Branch Block (RBBB)", "Ventricular Tachycardia (VT)", "WPW Syndrome"],
    explanation: "LBBB: wide QRS (> 0.12 s) with broad slurred R in lateral leads (I, V5–V6), QS in V1. Remember 'WiLLiaM' — Wide (W pattern in V1, tall wide R in V5-V6 = 'M') for LBBB. New LBBB with chest pain = STEMI equivalent.",
  },
  {
    id: 24,
    rhythmId: "rbbb",
    correctAnswer: "Right Bundle Branch Block (RBBB)",
    options: ["Right Bundle Branch Block (RBBB)", "Left Bundle Branch Block (LBBB)", "Wolff-Parkinson-White Syndrome (WPW)", "Ventricular Tachycardia (VT)"],
    explanation: "RBBB: wide QRS (> 0.12 s) with RSR' ('rabbit ears') in V1 and slurred S wave in lateral leads. Remember 'MaRRoW' — M pattern in V1 and W pattern in V6 for RBBB. May be a normal variant.",
  },
  {
    id: 25,
    rhythmId: "wpw",
    correctAnswer: "Wolff-Parkinson-White Syndrome (WPW)",
    options: ["Wolff-Parkinson-White Syndrome (WPW)", "Left Bundle Branch Block (LBBB)", "First Degree Heart Block", "Accelerated Junctional Rhythm"],
    explanation: "WPW: short PR (< 0.12 s) + delta wave (slurred QRS upstroke) + wide QRS = the classic triad of ventricular pre-excitation. AFib in WPW is life-threatening — AVOID adenosine, digoxin, and verapamil as they can cause VFib.",
  },
  {
    id: 26,
    rhythmId: "idioventricular",
    correctAnswer: "Idioventricular Rhythm (Ventricular Escape)",
    options: ["Idioventricular Rhythm (Ventricular Escape)", "Junctional Rhythm", "3rd Degree (Complete) Heart Block", "Sinus Bradycardia"],
    explanation: "Idioventricular Rhythm: very slow (20–40 bpm) wide QRS escape rhythm from the ventricles. Rate distinguishes it from VT (>100). It fires because all higher pacemakers (SA node, AV junction) have failed — a last resort escape rhythm.",
  },
  {
    id: 27,
    rhythmId: "junctional-tachycardia",
    correctAnswer: "Junctional Tachycardia",
    options: ["Junctional Tachycardia", "SVT / AVNRT", "Sinus Tachycardia", "Accelerated Junctional Rhythm"],
    explanation: "Junctional Tachycardia: narrow complex tachycardia > 100 bpm with retrograde or absent P waves, originating from the AV junction. Clinical context and subtle differences help distinguish from AVNRT. Associated with digoxin toxicity.",
  },
];

export function getShuffledQuestions(): QuizQuestion[] {
  const shuffled = [...quizQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.map((q) => ({
    ...q,
    options: shuffleArray([...q.options]),
  }));
}

function shuffleArray<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
