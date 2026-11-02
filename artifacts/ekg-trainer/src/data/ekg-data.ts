export interface EkgRhythm {
  id: string;
  name: string;
  category: string;
  rateRange: string;
  rhythmRegularity: string;
  pWaveDescription: string;
  prInterval: string;
  qrsDuration: string;
  keyFeatures: string[];
  clinicalSignificance: string;
  treatment: string;
}

export const categories = [
  "Sinus Rhythms",
  "Atrial Arrhythmias",
  "Ventricular Arrhythmias",
  "Heart Blocks",
  "ST Changes",
];

export const ekgData: EkgRhythm[] = [
  {
    id: "normal-sinus",
    name: "Normal Sinus Rhythm",
    category: "Sinus Rhythms",
    rateRange: "60-100 bpm",
    rhythmRegularity: "Regular",
    pWaveDescription: "Upright, uniform, one before every QRS",
    prInterval: "0.12 - 0.20 seconds",
    qrsDuration: "< 0.12 seconds",
    keyFeatures: [
      "Heart rate between 60 and 100 bpm",
      "Regular R-R intervals",
      "P wave present before every QRS complex",
      "Normal PR interval (0.12-0.20s) and QRS duration (<0.12s)",
    ],
    clinicalSignificance:
      "Normal healthy electrical conduction of the heart. The SA node fires at a regular rate, conducting through the AV node to the ventricles.",
    treatment: "No treatment required. This is the normal baseline rhythm.",
  },
  {
    id: "sinus-bradycardia",
    name: "Sinus Bradycardia",
    category: "Sinus Rhythms",
    rateRange: "< 60 bpm",
    rhythmRegularity: "Regular",
    pWaveDescription: "Upright, uniform, one before every QRS",
    prInterval: "0.12 - 0.20 seconds",
    qrsDuration: "< 0.12 seconds",
    keyFeatures: [
      "Heart rate less than 60 bpm",
      "All waveforms and intervals are normal",
      "Rhythm is regular but slow",
      "Longer R-R intervals than NSR",
    ],
    clinicalSignificance:
      "Can be normal in well-conditioned athletes or during sleep. Pathologic causes include increased vagal tone, hypothyroidism, hypothermia, and certain medications (beta-blockers, calcium channel blockers).",
    treatment:
      "If asymptomatic, monitor. If symptomatic (dizziness, syncope, hypotension), administer atropine 0.5mg IV. Consider transcutaneous pacing if unresponsive.",
  },
  {
    id: "sinus-tachycardia",
    name: "Sinus Tachycardia",
    category: "Sinus Rhythms",
    rateRange: "> 100 bpm",
    rhythmRegularity: "Regular",
    pWaveDescription: "Upright, uniform, one before every QRS (may merge with T wave at high rates)",
    prInterval: "0.12 - 0.20 seconds",
    qrsDuration: "< 0.12 seconds",
    keyFeatures: [
      "Heart rate greater than 100 bpm",
      "All waveforms morphologically normal",
      "Regular rhythm with short R-R intervals",
      "P waves may be hidden in preceding T waves at very high rates",
    ],
    clinicalSignificance:
      "Usually a physiologic response to exercise, pain, fever, anxiety, hypovolemia, anemia, or hyperthyroidism. It is a symptom, not a primary arrhythmia -- treat the underlying cause.",
    treatment:
      "Identify and treat the underlying cause (fluids for dehydration, antipyretics for fever, anxiolytics for anxiety). Beta-blockers only if rate itself is harmful.",
  },
  {
    id: "atrial-fibrillation",
    name: "Atrial Fibrillation",
    category: "Atrial Arrhythmias",
    rateRange: "Variable (ventricular rate 60-180 bpm uncontrolled)",
    rhythmRegularity: "Irregularly irregular",
    pWaveDescription: "Absent -- replaced by chaotic fibrillatory waves",
    prInterval: "Not measurable",
    qrsDuration: "< 0.12 seconds (unless aberrant conduction)",
    keyFeatures: [
      "Irregularly irregular R-R intervals -- hallmark finding",
      "No identifiable P waves",
      "Fibrillatory (wavy) baseline between QRS complexes",
      "Narrow QRS unless bundle branch block present",
    ],
    clinicalSignificance:
      "Most common sustained arrhythmia. Loss of organized atrial contraction leads to blood stasis and increased risk of thromboembolism (stroke). Reduces cardiac output by 15-25% due to loss of atrial kick.",
    treatment:
      "Rate control (beta-blockers, calcium channel blockers, digoxin). Rhythm control (cardioversion, amiodarone, flecainide). Anticoagulation for stroke prevention (CHA2DS2-VASc score).",
  },
  {
    id: "atrial-flutter",
    name: "Atrial Flutter",
    category: "Atrial Arrhythmias",
    rateRange: "Atrial: ~300 bpm; Ventricular: 150 bpm (with 2:1 block)",
    rhythmRegularity: "Regular (if fixed conduction ratio)",
    pWaveDescription: "Sawtooth flutter waves (F waves), best seen in leads II, III, aVF, V1",
    prInterval: "Not applicable",
    qrsDuration: "< 0.12 seconds",
    keyFeatures: [
      "Classic sawtooth pattern of flutter waves at ~300/min",
      "Ventricular rate often 150 bpm (2:1 block) -- any rate of 150 should raise suspicion",
      "Regular rhythm when conduction ratio is fixed",
      "Flutter waves visible between QRS complexes",
    ],
    clinicalSignificance:
      "Organized re-entrant circuit in the atrium (usually right atrium). Similar stroke risk to atrial fibrillation. A ventricular rate of exactly 150 bpm is a red flag for flutter with 2:1 conduction.",
    treatment:
      "Rate control similar to AFib. Cardioversion is often effective. Catheter ablation of the cavotricuspid isthmus is curative. Anticoagulation as for AFib.",
  },
  {
    id: "ventricular-tachycardia",
    name: "Ventricular Tachycardia",
    category: "Ventricular Arrhythmias",
    rateRange: "100-250 bpm",
    rhythmRegularity: "Usually regular",
    pWaveDescription: "Usually not visible (AV dissociation may be present)",
    prInterval: "Not measurable",
    qrsDuration: "> 0.12 seconds (wide and bizarre)",
    keyFeatures: [
      "Wide QRS complexes (> 0.12 seconds)",
      "Regular or nearly regular rhythm at rate > 100 bpm",
      "AV dissociation -- P waves march independently if visible",
      "Fusion beats or capture beats are diagnostic",
    ],
    clinicalSignificance:
      "Life-threatening arrhythmia originating from the ventricles. Can be monomorphic (uniform QRS) or polymorphic (varying QRS). May degenerate into ventricular fibrillation and cardiac arrest.",
    treatment:
      "Stable with pulse: amiodarone 150mg IV, synchronized cardioversion. Unstable or pulseless: defibrillation per ACLS protocol. Treat underlying cause (ischemia, electrolyte imbalances).",
  },
  {
    id: "ventricular-fibrillation",
    name: "Ventricular Fibrillation",
    category: "Ventricular Arrhythmias",
    rateRange: "Not measurable (chaotic)",
    rhythmRegularity: "Chaotic -- no organized rhythm",
    pWaveDescription: "None identifiable",
    prInterval: "Not measurable",
    qrsDuration: "Not measurable",
    keyFeatures: [
      "Chaotic, irregular deflections of varying amplitude",
      "No identifiable P waves, QRS complexes, or T waves",
      "Waveform appears as erratic oscillations",
      "No effective cardiac output -- cardiac arrest",
    ],
    clinicalSignificance:
      "Lethal arrhythmia -- the heart quivers without effective contraction. No cardiac output, no pulse. Most common initial rhythm in sudden cardiac arrest. Requires immediate intervention.",
    treatment:
      "Immediate CPR and defibrillation. Follow ACLS pulseless VT/VF algorithm: defibrillate, epinephrine 1mg IV q3-5min, amiodarone 300mg IV (first dose), 150mg (second dose).",
  },
  {
    id: "first-degree-block",
    name: "First Degree Heart Block",
    category: "Heart Blocks",
    rateRange: "60-100 bpm (depends on underlying rhythm)",
    rhythmRegularity: "Regular",
    pWaveDescription: "Upright, uniform, one before every QRS",
    prInterval: "> 0.20 seconds (prolonged but constant)",
    qrsDuration: "< 0.12 seconds",
    keyFeatures: [
      "PR interval consistently > 0.20 seconds (> 5 small boxes)",
      "Every P wave is followed by a QRS -- no dropped beats",
      "PR interval is constant from beat to beat",
      "Otherwise normal waveform morphology",
    ],
    clinicalSignificance:
      "Delayed conduction through the AV node but all impulses are conducted. Usually benign. Can be caused by increased vagal tone, AV nodal blocking drugs, myocarditis, or aging.",
    treatment:
      "Usually no treatment needed. Monitor if PR interval is markedly prolonged (> 0.30s). Review medications that slow AV conduction.",
  },
  {
    id: "second-degree-type-1",
    name: "Second Degree Type I (Wenckebach)",
    category: "Heart Blocks",
    rateRange: "Variable (depends on conduction ratio)",
    rhythmRegularity: "Irregular (grouped beating pattern)",
    pWaveDescription: "More P waves than QRS complexes in a cyclical pattern",
    prInterval: "Progressively lengthens until a QRS is dropped",
    qrsDuration: "< 0.12 seconds",
    keyFeatures: [
      "Progressive prolongation of PR interval from beat to beat",
      "Eventually a P wave is not followed by a QRS (dropped beat)",
      "Cycle then resets with shortest PR interval",
      "Grouped beating pattern -- Wenckebach periodicity",
    ],
    clinicalSignificance:
      "Block occurs at the level of the AV node. Generally considered benign, especially if asymptomatic. Common in athletes, during sleep, and with medications that slow AV conduction.",
    treatment:
      "Usually observation only. If symptomatic (rare), consider atropine or temporary pacing. Discontinue AV nodal blocking agents if possible.",
  },
  {
    id: "second-degree-type-2",
    name: "Second Degree Type II (Mobitz)",
    category: "Heart Blocks",
    rateRange: "Variable (depends on conduction ratio)",
    rhythmRegularity: "Irregular (intermittent dropped beats)",
    pWaveDescription: "More P waves than QRS complexes, dropped beats without warning",
    prInterval: "Constant for conducted beats (may be normal or prolonged)",
    qrsDuration: "Often > 0.12 seconds (wide QRS suggests infranodal block)",
    keyFeatures: [
      "Fixed PR interval for all conducted beats",
      "Sudden dropped QRS without prior PR prolongation",
      "Often associated with wide QRS (bundle branch block)",
      "More dangerous than Type I -- higher risk of progression",
    ],
    clinicalSignificance:
      "Block occurs below the AV node (infranodal -- His bundle or below). More serious than Type I because it can progress unpredictably to complete heart block. Often associated with structural heart disease.",
    treatment:
      "Transcutaneous pacing standby. Often requires permanent pacemaker. Atropine is generally ineffective for infranodal block. Avoid AV nodal blocking drugs.",
  },
  {
    id: "third-degree-block",
    name: "Third Degree (Complete) Heart Block",
    category: "Heart Blocks",
    rateRange: "Ventricular escape rate: 20-60 bpm",
    rhythmRegularity: "Regular P-P and regular R-R, but independent of each other",
    pWaveDescription: "Present and regular, but completely dissociated from QRS",
    prInterval: "Variable -- no consistent relationship between P and QRS",
    qrsDuration: "Narrow if junctional escape; Wide if ventricular escape",
    keyFeatures: [
      "Complete AV dissociation -- P waves and QRS are independent",
      "Regular P-P intervals and regular R-R intervals at different rates",
      "Atrial rate faster than ventricular rate",
      "Escape rhythm determines QRS width and ventricular rate",
    ],
    clinicalSignificance:
      "No conduction from atria to ventricles. The ventricles are driven by an escape pacemaker (junctional at 40-60 bpm or ventricular at 20-40 bpm). Life-threatening due to extremely slow ventricular rates.",
    treatment:
      "Emergent transcutaneous pacing. Atropine may help if escape is junctional. Dopamine or epinephrine infusion as bridge. Permanent pacemaker is definitive treatment.",
  },
  {
    id: "st-elevation",
    name: "ST Elevation (STEMI Pattern)",
    category: "ST Changes",
    rateRange: "Variable (depends on underlying rhythm)",
    rhythmRegularity: "Usually regular sinus",
    pWaveDescription: "Normal (unless concurrent arrhythmia)",
    prInterval: "Normal",
    qrsDuration: "Normal (may widen with large infarct)",
    keyFeatures: [
      "ST segment elevated > 1mm above baseline in contiguous leads",
      "Convex (tombstone) or concave ST elevation morphology",
      "Reciprocal ST depression in opposite leads",
      "May see hyperacute T waves (early), Q waves (late)",
    ],
    clinicalSignificance:
      "Indicates acute transmural myocardial ischemia/infarction (STEMI). A medical emergency requiring immediate reperfusion therapy. Distribution of ST changes localizes the affected coronary artery territory.",
    treatment:
      "Activate cardiac catheterization lab for emergent PCI (percutaneous coronary intervention). Aspirin, heparin, P2Y12 inhibitor, nitroglycerin. Fibrinolytics if PCI unavailable within 120 minutes.",
  },
];

export function getRhythmsByCategory(category: string): EkgRhythm[] {
  return ekgData.filter((r) => r.category === category);
}

export function getRhythmById(id: string): EkgRhythm | undefined {
  return ekgData.find((r) => r.id === id);
}
