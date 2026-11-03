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
  "Junctional Rhythms",
  "Ventricular Arrhythmias",
  "Heart Blocks",
  "Conduction Abnormalities",
  "ST Changes",
  "Lethal Rhythms",
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
    id: "pac",
    name: "Premature Atrial Contractions (PAC)",
    category: "Atrial Arrhythmias",
    rateRange: "Underlying rate variable; the PAC itself is early",
    rhythmRegularity: "Irregular (early beat disrupts the regular rhythm)",
    pWaveDescription: "P prime wave is early and looks different from sinus P waves",
    prInterval: "May be shorter or longer than the sinus PR interval",
    qrsDuration: "< 0.12 seconds (same as sinus; aberrant conduction possible)",
    keyFeatures: [
      "Early beat with a P prime wave of different shape",
      "Non-compensatory (incomplete) pause after the PAC",
      "QRS is usually narrow, the same as the sinus beats",
      "Can occur singly or in patterns such as bigeminy or trigeminy",
    ],
    clinicalSignificance:
      "Very common and usually harmless. Triggers include caffeine, stress, alcohol, and electrolyte imbalance. Frequent PACs can trigger atrial fibrillation.",
    treatment:
      "Usually no treatment needed. Remove triggers such as caffeine and alcohol. Beta-blockers if symptoms are bothersome or PACs are triggering atrial fibrillation.",
  },
  {
    id: "svt",
    name: "Supraventricular Tachycardia (SVT)",
    category: "Atrial Arrhythmias",
    rateRange: "150-250 bpm",
    rhythmRegularity: "Regular",
    pWaveDescription: "P waves hidden in the QRS, or inverted (retrograde) just after the QRS",
    prInterval: "Not measurable (P wave buried in QRS or just after it)",
    qrsDuration: "< 0.12 seconds (narrow complex tachycardia)",
    keyFeatures: [
      "Regular, rapid narrow complex tachycardia at 150-250 bpm",
      "Abrupt onset and termination (paroxysmal)",
      "P waves hidden in or just after the QRS (retrograde P)",
      "AVNRT (re-entry within the AV node) is the most common cause",
    ],
    clinicalSignificance:
      "Usually not life-threatening but causes palpitations, dizziness, and chest discomfort. AVNRT is the most common SVT mechanism.",
    treatment:
      "Vagal maneuvers first (Valsalva, carotid sinus massage). Adenosine 6mg IV rapid push is the drug of choice. Synchronized cardioversion if hemodynamically unstable.",
  },
  {
    id: "mat",
    name: "Multifocal Atrial Tachycardia (MAT)",
    category: "Atrial Arrhythmias",
    rateRange: "> 100 bpm",
    rhythmRegularity: "Irregular",
    pWaveDescription: "3 or more distinct P wave shapes in the same lead",
    prInterval: "Variable (changes with each P wave shape)",
    qrsDuration: "< 0.12 seconds",
    keyFeatures: [
      "3 or more distinct P wave shapes in a single lead",
      "Irregular rhythm with variable P-P and R-R intervals",
      "Rate above 100 bpm (wandering pacemaker if below 100)",
      "Strongly associated with COPD and pulmonary hypertension",
    ],
    clinicalSignificance:
      "Multiple ectopic atrial sites firing chaotically. Almost always occurs with severe lung disease (COPD) or metabolic problems. Often mistaken for atrial fibrillation, but MAT has visible P waves.",
    treatment:
      "Treat the underlying disease (COPD, low oxygen). Correct potassium and magnesium. Calcium channel blockers (verapamil) for rate control. Avoid digoxin.",
  },
  {
    id: "junctional-rhythm",
    name: "Junctional Rhythm",
    category: "Junctional Rhythms",
    rateRange: "40-60 bpm",
    rhythmRegularity: "Regular",
    pWaveDescription: "Absent, inverted (before or after QRS), or hidden within the QRS",
    prInterval: "< 0.12 seconds if P before QRS; or P follows QRS (retrograde)",
    qrsDuration: "< 0.12 seconds (unless aberrant conduction)",
    keyFeatures: [
      "Escape rhythm -- the AV node takes over when the SA node fails",
      "No upright P wave before the QRS (absent, inverted, or retrograde)",
      "Narrow QRS (impulse starts above the bundle of His)",
      "Slow rate of 40-60 bpm -- a junctional escape rate",
    ],
    clinicalSignificance:
      "The AV node fires as an escape pacemaker when the SA node fails or is suppressed. Causes include increased vagal tone, inferior MI, digitalis toxicity, and post-cardiac surgery.",
    treatment:
      "If asymptomatic with an adequate rate, observe. If symptomatic: atropine. Treat the underlying cause. Pacing if the rate is inadequate.",
  },
  {
    id: "accelerated-junctional",
    name: "Accelerated Junctional Rhythm",
    category: "Junctional Rhythms",
    rateRange: "60-100 bpm",
    rhythmRegularity: "Regular",
    pWaveDescription: "Absent, inverted (retrograde), or hidden within the QRS",
    prInterval: "< 0.12 seconds or retrograde (P after QRS)",
    qrsDuration: "< 0.12 seconds",
    keyFeatures: [
      "AV node firing faster than its intrinsic rate (60-100 bpm)",
      "Competes with or overrides the SA node",
      "Absent or retrograde P waves -- same as junctional rhythm",
      "Rate separates it from junctional escape (40-60) and junctional tachycardia (>100)",
    ],
    clinicalSignificance:
      "Enhanced automaticity of the AV node. Associated with digoxin toxicity, inferior MI, myocarditis, and post-cardiac surgery. Usually harmless, but look for the underlying cause.",
    treatment:
      "Usually no treatment needed. Correct digoxin toxicity if present. Treat the underlying cause.",
  },
  {
    id: "junctional-tachycardia",
    name: "Junctional Tachycardia",
    category: "Junctional Rhythms",
    rateRange: "> 100 bpm",
    rhythmRegularity: "Regular",
    pWaveDescription: "Retrograde P waves (inverted) or absent -- may occur after the QRS",
    prInterval: "Not measurable or retrograde",
    qrsDuration: "< 0.12 seconds",
    keyFeatures: [
      "Rate above 100 bpm coming from the AV junction",
      "Narrow complex tachycardia -- must be distinguished from SVT",
      "Retrograde or absent P waves",
      "AV dissociation may occur (atria fire independently from the SA node)",
    ],
    clinicalSignificance:
      "Uncommon. Associated with digoxin toxicity, inferior MI, and excess catecholamines. The narrow complex separates it from VT. Clinical context helps distinguish it from AVNRT.",
    treatment:
      "Treat the underlying cause. Beta-blockers or calcium channel blockers for rate control. If digoxin toxicity: hold digoxin, digibind if severe.",
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
      "Life-threatening arrhythmia originating from the ventricles. Can be monomorphic (uniform QRS) or polymorphic (varying QRS). May degenerate into ventricular fibrillation and cardiac arrest. Note: PEA (pulseless electrical activity) is not a separate rhythm -- it is any organized rhythm with no pulse, so the strip can look organized or even normal while the patient has no pulse. PEA has no strip of its own, is not shockable, and is treated with CPR, epinephrine 1mg IV every 3-5 min, and finding and fixing the cause (H's and T's).",
    treatment:
      "Stable with pulse: amiodarone 150mg IV, synchronized cardioversion. Pulseless VT looks the same on the strip as VT with a pulse -- the difference is the patient has no pulse, so it is a cardiac arrest rhythm: follow the ACLS pulseless VT/VF arrest algorithm with CPR, defibrillation, epinephrine 1mg IV every 3-5 min, and amiodarone 300mg IV (first dose) then 150mg (second dose), not the stable-VT approach. Treat underlying cause (ischemia, electrolyte imbalances).",
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
    id: "pvc",
    name: "Premature Ventricular Contractions (PVC)",
    category: "Ventricular Arrhythmias",
    rateRange: "Underlying rate variable; the PVC itself is early",
    rhythmRegularity: "Irregular (early wide beat disrupts the rhythm)",
    pWaveDescription: "Absent before the PVC -- no P wave starts the beat",
    prInterval: "Not applicable for the PVC beat",
    qrsDuration: "> 0.12 seconds -- wide and bizarre shape",
    keyFeatures: [
      "Early wide QRS (> 0.12 seconds) with bizarre shape",
      "No P wave before the PVC beat",
      "T wave points opposite to the QRS (discordant)",
      "Full compensatory pause after the PVC (total cycle is twice normal)",
    ],
    clinicalSignificance:
      "Very common. Isolated PVCs in a structurally normal heart are usually harmless. Concerning after MI, with cardiomyopathy, or when PVCs are more than 10% of beats. PVCs can trigger VT or VFib. PVCs also show up in repeating patterns, which are patterns of PVCs, not separate rhythms: bigeminy is every other beat a PVC (normal, PVC, normal, PVC...), trigeminy is every third beat a PVC, and quadrigeminy is every fourth beat a PVC. The PVCs look the same as any other PVC. These patterns are often harmless, but frequent PVCs can mean the heart is irritable or point to low potassium or magnesium, low oxygen, or ischemia, so the cause should be checked.",
    treatment:
      "Isolated PVCs in a normal heart: reassurance and remove triggers. Frequent or symptomatic PVCs: beta-blockers first-line. Consider ablation if PVCs are causing cardiomyopathy.",
  },
  {
    id: "idioventricular",
    name: "Idioventricular Rhythm",
    category: "Ventricular Arrhythmias",
    rateRange: "20-40 bpm",
    rhythmRegularity: "Regular",
    pWaveDescription: "Absent or dissociated from the QRS",
    prInterval: "Not measurable",
    qrsDuration: "> 0.12 seconds -- wide and bizarre",
    keyFeatures: [
      "Very slow wide complex escape rhythm at 20-40 bpm",
      "Ventricular pacemaker cells fire when all higher pacemakers fail",
      "QRS is wide and bizarre (impulse starts in the ventricles)",
      "Life-threatening because cardiac output is often inadequate",
    ],
    clinicalSignificance:
      "Last-resort escape rhythm when the SA node, AV node, and bundle of His all fail. Seen in complete heart block, massive MI, and severe drug toxicity. Output is often too low to maintain perfusion.",
    treatment:
      "Transcutaneous or transvenous pacing emergently. Atropine is usually ineffective. Dopamine or epinephrine to increase rate. Permanent pacemaker is definitive.",
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
    id: "lbbb",
    name: "Left Bundle Branch Block (LBBB)",
    category: "Conduction Abnormalities",
    rateRange: "Variable (rate of underlying rhythm)",
    rhythmRegularity: "Regular (depends on underlying rhythm)",
    pWaveDescription: "Normal",
    prInterval: "Normal",
    qrsDuration: "> 0.12 seconds -- broad, notched, or slurred",
    keyFeatures: [
      "Wide QRS > 0.12 seconds (> 3 small boxes)",
      "Broad, slurred, or notched R wave in lateral leads (I, aVL, V5-V6)",
      "QS or rS pattern in right chest leads (V1-V2)",
      "Discordant ST changes -- ST segment and T wave point opposite to the QRS",
    ],
    clinicalSignificance:
      "New LBBB with chest pain is treated as a STEMI until proven otherwise (Sgarbossa criteria). Old LBBB makes reading ischemia very difficult. Causes include ischemia, hypertension, cardiomyopathy, and aortic stenosis.",
    treatment:
      "Treat the underlying cause. New LBBB with symptoms: emergent cardiac catheterization. CRT (resynchronization pacing) for LBBB with heart failure and EF below 35%.",
  },
  {
    id: "rbbb",
    name: "Right Bundle Branch Block (RBBB)",
    category: "Conduction Abnormalities",
    rateRange: "Variable (rate of underlying rhythm)",
    rhythmRegularity: "Regular (depends on underlying rhythm)",
    pWaveDescription: "Normal",
    prInterval: "Normal",
    qrsDuration: "> 0.12 seconds -- RSR pattern (rabbit ears) in V1",
    keyFeatures: [
      "Wide QRS > 0.12 seconds",
      "RSR pattern (rabbit ears or M-shaped QRS) in V1 -- the hallmark",
      "Slurred S wave in lateral leads (I, V5, V6)",
      "Discordant T wave inversion in V1-V2",
    ],
    clinicalSignificance:
      "May be a normal variant. New RBBB with anterior MI suggests a large infarct. Also seen with pulmonary embolism (right heart strain), myocarditis, congenital disease, and Brugada syndrome.",
    treatment:
      "If isolated and asymptomatic: no treatment. Evaluate for underlying structural heart disease. New RBBB after MI warrants close monitoring.",
  },
  {
    id: "wpw",
    name: "Wolff-Parkinson-White Syndrome (WPW)",
    category: "Conduction Abnormalities",
    rateRange: "Variable (normal rhythm; fast during SVT episodes)",
    rhythmRegularity: "Regular in sinus rhythm",
    pWaveDescription: "Normal P wave",
    prInterval: "Short -- < 0.12 seconds",
    qrsDuration: "> 0.12 seconds -- slurred delta wave at the start of the QRS",
    keyFeatures: [
      "Short PR interval (< 0.12 seconds) -- the bypass tract conducts faster than the AV node",
      "Delta wave -- slurred upstroke at the start of the QRS (pre-excitation)",
      "Wide QRS from ventricular pre-excitation through an accessory pathway",
      "Prone to SVT and atrial fibrillation -- AFib in WPW can degenerate to VFib",
    ],
    clinicalSignificance:
      "An accessory pathway (bundle of Kent) bypasses the AV node and pre-excites the ventricles. Atrial fibrillation in WPW is dangerous because impulses can conduct 1:1 at very fast rates, leading to VFib.",
    treatment:
      "Asymptomatic: may observe. Symptomatic SVT: adenosine. AVOID AV-nodal blocking drugs (adenosine, digoxin, verapamil) during AFib in WPW -- risk of VFib. Radiofrequency catheter ablation is curative.",
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
  {
    id: "asystole",
    name: "Asystole",
    category: "Lethal Rhythms",
    rateRange: "0 bpm -- no electrical activity",
    rhythmRegularity: "None",
    pWaveDescription: "Absent",
    prInterval: "Not measurable",
    qrsDuration: "Absent",
    keyFeatures: [
      "Flat or near-flat baseline -- the flatline",
      "No P waves, QRS complexes, or T waves",
      "Occasionally P-wave asystole (P waves only, no QRS)",
      "Worst prognosis of all cardiac arrest rhythms",
    ],
    clinicalSignificance:
      "Complete absence of cardiac electrical activity. Causes include severe hypoxia, hyperkalemia, hypothermia, and end-stage cardiac disease. Confirm in more than one lead and check cables before calling it.",
    treatment:
      "CPR plus epinephrine 1mg IV/IO every 3-5 minutes. Treat the reversible H's and T's. Defibrillation is NOT indicated -- there is no electrical activity to shock.",
  },
  {
    id: "torsades",
    name: "Torsades de Pointes",
    category: "Lethal Rhythms",
    rateRange: "150-300 bpm",
    rhythmRegularity: "Irregular",
    pWaveDescription: "Not identifiable",
    prInterval: "Not measurable",
    qrsDuration: "> 0.12 seconds -- wide, polymorphic",
    keyFeatures: [
      "Polymorphic VT -- QRS complexes twist around the baseline",
      "QRS size waxes and wanes in a sinusoidal pattern",
      "Occurs with a prolonged QT interval",
      "May stop on its own or degenerate into VFib",
    ],
    clinicalSignificance:
      "Twisting of the points. Polymorphic VT caused by QT prolongation. Causes include low potassium, low magnesium, QT-prolonging drugs (sotalol, amiodarone, antipsychotics), and congenital long QT syndrome.",
    treatment:
      "Magnesium sulfate 2g IV push (first-line). Correct potassium and magnesium. Overdrive pacing. Stop all QT-prolonging drugs. Defibrillate if pulseless.",
  },
];

export function getRhythmsByCategory(category: string): EkgRhythm[] {
  return ekgData.filter((r) => r.category === category);
}

export function getRhythmById(id: string): EkgRhythm | undefined {
  return ekgData.find((r) => r.id === id);
}
