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
  {
    id: 16,
    rhythmId: "pac",
    correctAnswer: "Premature Atrial Contractions (PAC)",
    options: ["Premature Atrial Contractions (PAC)", "Premature Ventricular Contractions (PVC)", "Second Degree Type I (Wenckebach)", "Normal Sinus Rhythm"],
    explanation: "A PAC is an early beat with a different-looking P prime wave, a narrow QRS just like the sinus beats, and a non-compensatory (incomplete) pause. The narrow QRS and incomplete pause separate PACs from PVCs.",
  },
  {
    id: 17,
    rhythmId: "svt",
    correctAnswer: "Supraventricular Tachycardia (SVT)",
    options: ["Supraventricular Tachycardia (SVT)", "Sinus Tachycardia", "Junctional Tachycardia", "Atrial Flutter"],
    explanation: "SVT is a regular narrow complex tachycardia at 150-250 bpm with no visible P waves (buried in the QRS or retrograde just after it) and abrupt onset and offset. Vagal maneuvers first, then adenosine 6mg IV.",
  },
  {
    id: 18,
    rhythmId: "mat",
    correctAnswer: "Multifocal Atrial Tachycardia (MAT)",
    options: ["Multifocal Atrial Tachycardia (MAT)", "Atrial Fibrillation", "Atrial Flutter", "Sinus Tachycardia"],
    explanation: "MAT requires 3 or more distinct P wave shapes in one lead, an irregular rhythm, and a rate above 100 bpm. Unlike AFib, MAT has identifiable P waves -- just varying shapes. Strongly suggests COPD.",
  },
  {
    id: 19,
    rhythmId: "junctional-rhythm",
    correctAnswer: "Junctional Rhythm",
    options: ["Junctional Rhythm", "Sinus Bradycardia", "Third Degree Heart Block", "Accelerated Junctional Rhythm"],
    explanation: "Junctional Rhythm is slow (40-60 bpm) with absent or retrograde P waves and a narrow QRS. The SA node has failed, so the AV junction takes over as the escape pacemaker. No upright P before the QRS plus a slow rate plus narrow QRS means junctional.",
  },
  {
    id: 20,
    rhythmId: "accelerated-junctional",
    correctAnswer: "Accelerated Junctional Rhythm",
    options: ["Accelerated Junctional Rhythm", "Normal Sinus Rhythm", "Junctional Rhythm", "Junctional Tachycardia"],
    explanation: "Accelerated Junctional Rhythm is the AV node firing at 60-100 bpm with absent or retrograde P waves. The rate separates it from junctional escape (40-60) and junctional tachycardia (above 100). Strongly associated with digoxin toxicity.",
  },
  {
    id: 21,
    rhythmId: "junctional-tachycardia",
    correctAnswer: "Junctional Tachycardia",
    options: ["Junctional Tachycardia", "Supraventricular Tachycardia (SVT)", "Sinus Tachycardia", "Accelerated Junctional Rhythm"],
    explanation: "Junctional Tachycardia is a narrow complex tachycardia above 100 bpm with retrograde or absent P waves, coming from the AV junction. Clinical context helps separate it from AVNRT. Associated with digoxin toxicity.",
  },
  {
    id: 22,
    rhythmId: "pvc",
    correctAnswer: "Premature Ventricular Contractions (PVC)",
    options: ["Premature Ventricular Contractions (PVC)", "Premature Atrial Contractions (PAC)", "Ventricular Tachycardia", "Aberrantly Conducted PAC"],
    explanation: "A PVC is an early wide bizarre QRS (above 0.12 seconds) with no P wave before it, a discordant T wave, and a full compensatory pause. PVCs are wide with a full pause; PACs are narrow with an incomplete pause.",
  },
  {
    id: 23,
    rhythmId: "idioventricular",
    correctAnswer: "Idioventricular Rhythm",
    options: ["Idioventricular Rhythm", "Junctional Rhythm", "Third Degree Heart Block", "Sinus Bradycardia"],
    explanation: "Idioventricular Rhythm is a very slow (20-40 bpm) wide QRS escape rhythm from the ventricles. The rate separates it from VT (above 100). It fires because all higher pacemakers have failed -- a last-resort escape rhythm needing emergent pacing.",
  },
  {
    id: 24,
    rhythmId: "lbbb",
    correctAnswer: "Left Bundle Branch Block (LBBB)",
    options: ["Left Bundle Branch Block (LBBB)", "Right Bundle Branch Block (RBBB)", "Ventricular Tachycardia", "Wolff-Parkinson-White Syndrome (WPW)"],
    explanation: "LBBB shows a wide QRS (above 0.12 seconds) with a broad slurred R wave in lateral leads (I, V5-V6) and a QS pattern in V1. New LBBB with chest pain is treated as a STEMI equivalent.",
  },
  {
    id: 25,
    rhythmId: "rbbb",
    correctAnswer: "Right Bundle Branch Block (RBBB)",
    options: ["Right Bundle Branch Block (RBBB)", "Left Bundle Branch Block (LBBB)", "Wolff-Parkinson-White Syndrome (WPW)", "Ventricular Tachycardia"],
    explanation: "RBBB shows a wide QRS (above 0.12 seconds) with an RSR pattern (rabbit ears) in V1 and a slurred S wave in the lateral leads. It may be a normal variant.",
  },
  {
    id: 26,
    rhythmId: "wpw",
    correctAnswer: "Wolff-Parkinson-White Syndrome (WPW)",
    options: ["Wolff-Parkinson-White Syndrome (WPW)", "Left Bundle Branch Block (LBBB)", "First Degree Heart Block", "Accelerated Junctional Rhythm"],
    explanation: "WPW is the triad of a short PR interval (below 0.12 seconds), a delta wave (slurred QRS upstroke), and a wide QRS from ventricular pre-excitation. AFib in WPW is life-threatening -- avoid adenosine, digoxin, and verapamil.",
  },
  {
    id: 27,
    rhythmId: "asystole",
    correctAnswer: "Asystole",
    options: ["Asystole", "Ventricular Fibrillation", "Pulseless Electrical Activity", "Fine Ventricular Fibrillation"],
    explanation: "Asystole is the flatline -- complete absence of organized electrical activity. Unlike fine VFib, which has low-amplitude chaotic deflections, asystole is flat. Defibrillation is NOT indicated because there is no electrical activity to shock.",
  },
  {
    id: 28,
    rhythmId: "torsades",
    correctAnswer: "Torsades de Pointes",
    options: ["Torsades de Pointes", "Ventricular Fibrillation", "Ventricular Tachycardia", "Asystole"],
    explanation: "Torsades is polymorphic VT where wide QRS complexes twist around the baseline with amplitude waxing and waning. It occurs with a prolonged QT interval. First-line treatment: magnesium sulfate 2g IV.",
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
