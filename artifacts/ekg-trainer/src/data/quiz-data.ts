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
    options: ["Normal Sinus Rhythm", "Sinus Bradycardia", "Sinus Tachycardia", "First Degree Heart Block"],
    explanation: "This strip shows a regular rhythm with a rate of 60-100 bpm, upright P waves before each QRS, normal PR interval (0.12-0.20s), and narrow QRS complexes. All criteria for Normal Sinus Rhythm are met.",
  },
  {
    id: 2,
    rhythmId: "atrial-fibrillation",
    correctAnswer: "Atrial Fibrillation",
    options: ["Atrial Fibrillation", "Atrial Flutter", "Normal Sinus Rhythm", "Sinus Tachycardia"],
    explanation: "The hallmark of Atrial Fibrillation is an irregularly irregular rhythm with no identifiable P waves. The baseline appears chaotic with fibrillatory waves between QRS complexes.",
  },
  {
    id: 3,
    rhythmId: "ventricular-tachycardia",
    correctAnswer: "Ventricular Tachycardia",
    options: ["Ventricular Tachycardia", "Ventricular Fibrillation", "Sinus Tachycardia", "Atrial Flutter"],
    explanation: "Ventricular Tachycardia shows wide QRS complexes (>0.12s) at a rate >100 bpm with a regular or nearly regular rhythm. The QRS morphology is bizarre and different from normal conduction.",
  },
  {
    id: 4,
    rhythmId: "ventricular-fibrillation",
    correctAnswer: "Ventricular Fibrillation",
    options: ["Ventricular Fibrillation", "Ventricular Tachycardia", "Atrial Fibrillation", "Third Degree Heart Block"],
    explanation: "Ventricular Fibrillation shows chaotic, irregular deflections with no identifiable P waves, QRS complexes, or T waves. This is a lethal rhythm requiring immediate defibrillation.",
  },
  {
    id: 5,
    rhythmId: "sinus-bradycardia",
    correctAnswer: "Sinus Bradycardia",
    options: ["Sinus Bradycardia", "Third Degree Heart Block", "Normal Sinus Rhythm", "Second Degree Type II"],
    explanation: "Sinus Bradycardia looks identical to Normal Sinus Rhythm except the rate is below 60 bpm. All waveforms and intervals are normal, just at a slower rate.",
  },
  {
    id: 6,
    rhythmId: "sinus-tachycardia",
    correctAnswer: "Sinus Tachycardia",
    options: ["Sinus Tachycardia", "Atrial Flutter", "Ventricular Tachycardia", "Atrial Fibrillation"],
    explanation: "Sinus Tachycardia shows a regular rhythm with normal morphology but at a rate >100 bpm. P waves are present before each QRS, distinguishing it from other tachyarrhythmias.",
  },
  {
    id: 7,
    rhythmId: "atrial-flutter",
    correctAnswer: "Atrial Flutter",
    options: ["Atrial Flutter", "Atrial Fibrillation", "Sinus Tachycardia", "Ventricular Tachycardia"],
    explanation: "Atrial Flutter is identified by its classic sawtooth pattern of flutter waves at ~300/min. The ventricular rate is often 150 bpm due to 2:1 conduction block.",
  },
  {
    id: 8,
    rhythmId: "first-degree-block",
    correctAnswer: "First Degree Heart Block",
    options: ["First Degree Heart Block", "Normal Sinus Rhythm", "Second Degree Type I", "Second Degree Type II"],
    explanation: "First Degree Heart Block shows a prolonged PR interval (>0.20s or >5 small boxes) that is constant from beat to beat. Every P wave is conducted -- no dropped beats.",
  },
  {
    id: 9,
    rhythmId: "second-degree-type-1",
    correctAnswer: "Second Degree Type I (Wenckebach)",
    options: ["Second Degree Type I (Wenckebach)", "Second Degree Type II", "First Degree Heart Block", "Third Degree Heart Block"],
    explanation: "Wenckebach (Type I) shows progressive prolongation of the PR interval until a QRS is dropped. The cycle then resets. This creates a grouped beating pattern.",
  },
  {
    id: 10,
    rhythmId: "second-degree-type-2",
    correctAnswer: "Second Degree Type II (Mobitz)",
    options: ["Second Degree Type II (Mobitz)", "Second Degree Type I (Wenckebach)", "Third Degree Heart Block", "First Degree Heart Block"],
    explanation: "Type II (Mobitz) shows sudden dropped QRS complexes WITHOUT prior PR prolongation. The conducted PR intervals remain constant. Often associated with wide QRS.",
  },
  {
    id: 11,
    rhythmId: "third-degree-block",
    correctAnswer: "Third Degree (Complete) Heart Block",
    options: ["Third Degree (Complete) Heart Block", "Second Degree Type II", "First Degree Heart Block", "Sinus Bradycardia"],
    explanation: "Complete Heart Block shows complete AV dissociation -- P waves and QRS complexes occur at independent, regular rates with no relationship between them. The atrial rate is faster than the ventricular rate.",
  },
  {
    id: 12,
    rhythmId: "st-elevation",
    correctAnswer: "ST Elevation (STEMI Pattern)",
    options: ["ST Elevation (STEMI Pattern)", "Normal Sinus Rhythm", "First Degree Heart Block", "Sinus Bradycardia"],
    explanation: "ST Elevation shows the ST segment elevated above the baseline, indicating acute myocardial ischemia/infarction. Look for convex (tombstone) elevation and reciprocal depression in opposite leads.",
  },
  {
    id: 13,
    rhythmId: "atrial-fibrillation",
    correctAnswer: "Atrial Fibrillation",
    options: ["Atrial Fibrillation", "Normal Sinus Rhythm", "Sinus Tachycardia", "Atrial Flutter"],
    explanation: "Key distinguishing feature: irregularly irregular R-R intervals with a chaotic fibrillatory baseline. No organized P waves can be identified. This differentiates it from flutter's regular sawtooth pattern.",
  },
  {
    id: 14,
    rhythmId: "ventricular-tachycardia",
    correctAnswer: "Ventricular Tachycardia",
    options: ["Ventricular Tachycardia", "Sinus Tachycardia", "Atrial Fibrillation", "Atrial Flutter"],
    explanation: "The wide, bizarre QRS complexes at a rapid rate are the hallmark of VT. Unlike sinus tachycardia (narrow QRS, P waves visible), VT originates below the AV node producing wide complexes.",
  },
  {
    id: 15,
    rhythmId: "third-degree-block",
    correctAnswer: "Third Degree (Complete) Heart Block",
    options: ["Third Degree (Complete) Heart Block", "Second Degree Type I (Wenckebach)", "Sinus Bradycardia", "Second Degree Type II (Mobitz)"],
    explanation: "In complete heart block, the P waves march at their own regular rate while the QRS complexes occur at a slower, independent regular rate. There is no consistent PR interval because there is no AV conduction.",
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
