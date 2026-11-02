import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import colors from "@/constants/colors";

const WAVEFORM_SEGMENTS: Record<string, { x: number; y: number }[]> = {
  "normal-sinus": [
    { x: 0, y: 50 }, { x: 15, y: 50 }, { x: 20, y: 43 }, { x: 23, y: 36 }, { x: 26, y: 43 }, { x: 29, y: 50 },
    { x: 33, y: 50 }, { x: 36, y: 52 }, { x: 38, y: 10 }, { x: 41, y: 78 }, { x: 44, y: 46 }, { x: 46, y: 50 },
    { x: 52, y: 50 }, { x: 56, y: 38 }, { x: 60, y: 30 }, { x: 64, y: 38 }, { x: 68, y: 50 }, { x: 80, y: 50 },
  ],
  "sinus-bradycardia": [
    { x: 0, y: 50 }, { x: 25, y: 50 }, { x: 30, y: 43 }, { x: 33, y: 36 }, { x: 36, y: 43 }, { x: 39, y: 50 },
    { x: 43, y: 50 }, { x: 46, y: 52 }, { x: 48, y: 10 }, { x: 51, y: 78 }, { x: 54, y: 46 }, { x: 56, y: 50 },
    { x: 62, y: 50 }, { x: 66, y: 38 }, { x: 70, y: 30 }, { x: 74, y: 38 }, { x: 78, y: 50 }, { x: 110, y: 50 },
  ],
  "sinus-tachycardia": [
    { x: 0, y: 50 }, { x: 6, y: 50 }, { x: 9, y: 43 }, { x: 11, y: 36 }, { x: 13, y: 43 }, { x: 15, y: 50 },
    { x: 18, y: 50 }, { x: 20, y: 52 }, { x: 22, y: 10 }, { x: 25, y: 78 }, { x: 28, y: 46 }, { x: 30, y: 50 },
    { x: 34, y: 50 }, { x: 37, y: 38 }, { x: 40, y: 30 }, { x: 43, y: 38 }, { x: 46, y: 50 }, { x: 55, y: 50 },
  ],
  "atrial-fibrillation": [
    { x: 0, y: 50 }, { x: 3, y: 46 }, { x: 6, y: 53 }, { x: 9, y: 47 }, { x: 12, y: 52 }, { x: 15, y: 48 },
    { x: 18, y: 51 }, { x: 21, y: 49 }, { x: 24, y: 53 }, { x: 27, y: 50 },
    { x: 29, y: 52 }, { x: 31, y: 10 }, { x: 34, y: 78 }, { x: 37, y: 46 }, { x: 39, y: 50 },
    { x: 42, y: 48 }, { x: 45, y: 52 }, { x: 48, y: 47 }, { x: 51, y: 53 }, { x: 54, y: 49 },
    { x: 57, y: 52 }, { x: 60, y: 50 },
    { x: 62, y: 52 }, { x: 64, y: 12 }, { x: 67, y: 76 }, { x: 70, y: 47 }, { x: 72, y: 50 },
    { x: 75, y: 51 }, { x: 78, y: 48 }, { x: 80, y: 52 }, { x: 83, y: 50 }, { x: 86, y: 47 },
  ],
  "atrial-flutter": [
    { x: 0, y: 50 }, { x: 4, y: 42 }, { x: 8, y: 54 }, { x: 12, y: 42 }, { x: 16, y: 54 }, { x: 20, y: 42 }, { x: 22, y: 50 },
    { x: 24, y: 52 }, { x: 26, y: 10 }, { x: 29, y: 78 }, { x: 32, y: 46 }, { x: 34, y: 50 },
    { x: 36, y: 42 }, { x: 40, y: 54 }, { x: 44, y: 42 }, { x: 48, y: 54 }, { x: 52, y: 42 }, { x: 54, y: 50 },
    { x: 56, y: 52 }, { x: 58, y: 12 }, { x: 61, y: 76 }, { x: 64, y: 47 }, { x: 66, y: 50 },
    { x: 68, y: 42 }, { x: 72, y: 54 }, { x: 76, y: 42 }, { x: 80, y: 54 }, { x: 84, y: 42 }, { x: 86, y: 50 },
  ],
  "ventricular-tachycardia": [
    { x: 0, y: 50 }, { x: 4, y: 50 }, { x: 7, y: 56 }, { x: 10, y: 8 }, { x: 14, y: 85 }, { x: 18, y: 10 }, { x: 21, y: 80 }, { x: 24, y: 50 },
    { x: 30, y: 50 }, { x: 33, y: 56 }, { x: 36, y: 8 }, { x: 40, y: 85 }, { x: 44, y: 10 }, { x: 47, y: 80 }, { x: 50, y: 50 },
    { x: 56, y: 50 }, { x: 59, y: 56 }, { x: 62, y: 8 }, { x: 66, y: 85 }, { x: 70, y: 10 }, { x: 73, y: 80 }, { x: 76, y: 50 },
    { x: 82, y: 50 }, { x: 85, y: 56 }, { x: 88, y: 8 }, { x: 92, y: 85 }, { x: 96, y: 50 },
  ],
  "ventricular-fibrillation": [
    { x: 0, y: 50 }, { x: 3, y: 28 }, { x: 6, y: 68 }, { x: 9, y: 22 }, { x: 12, y: 72 }, { x: 15, y: 35 },
    { x: 18, y: 62 }, { x: 21, y: 18 }, { x: 24, y: 75 }, { x: 27, y: 30 }, { x: 30, y: 55 },
    { x: 33, y: 40 }, { x: 36, y: 70 }, { x: 39, y: 20 }, { x: 42, y: 75 }, { x: 45, y: 25 },
    { x: 48, y: 60 }, { x: 51, y: 35 }, { x: 54, y: 58 }, { x: 57, y: 42 }, { x: 60, y: 65 },
    { x: 63, y: 25 }, { x: 66, y: 70 }, { x: 69, y: 32 }, { x: 72, y: 60 }, { x: 75, y: 38 },
    { x: 78, y: 55 }, { x: 81, y: 45 }, { x: 84, y: 62 }, { x: 87, y: 30 }, { x: 90, y: 50 },
  ],
  "first-degree-block": [
    { x: 0, y: 50 }, { x: 10, y: 50 }, { x: 13, y: 43 }, { x: 16, y: 36 }, { x: 19, y: 43 }, { x: 22, y: 50 },
    { x: 36, y: 50 }, { x: 39, y: 52 }, { x: 41, y: 10 }, { x: 44, y: 78 }, { x: 47, y: 46 }, { x: 49, y: 50 },
    { x: 57, y: 50 }, { x: 61, y: 38 }, { x: 65, y: 30 }, { x: 69, y: 38 }, { x: 73, y: 50 }, { x: 85, y: 50 },
  ],
  "second-degree-type-1": [
    { x: 0, y: 50 }, { x: 6, y: 50 }, { x: 8, y: 44 }, { x: 10, y: 37 }, { x: 12, y: 44 }, { x: 14, y: 50 },
    { x: 20, y: 50 }, { x: 22, y: 52 }, { x: 24, y: 10 }, { x: 27, y: 78 }, { x: 30, y: 46 }, { x: 32, y: 50 },
    { x: 40, y: 50 }, { x: 42, y: 44 }, { x: 44, y: 37 }, { x: 46, y: 44 }, { x: 48, y: 50 },
    { x: 58, y: 50 }, { x: 60, y: 52 }, { x: 62, y: 10 }, { x: 65, y: 78 }, { x: 68, y: 46 }, { x: 70, y: 50 },
    { x: 82, y: 50 }, { x: 84, y: 44 }, { x: 86, y: 37 }, { x: 88, y: 44 }, { x: 90, y: 50 },
    { x: 102, y: 50 },
  ],
  "second-degree-type-2": [
    { x: 0, y: 50 }, { x: 8, y: 50 }, { x: 10, y: 44 }, { x: 12, y: 37 }, { x: 14, y: 44 }, { x: 16, y: 50 },
    { x: 24, y: 50 }, { x: 26, y: 52 }, { x: 28, y: 10 }, { x: 31, y: 78 }, { x: 34, y: 46 }, { x: 36, y: 50 },
    { x: 46, y: 50 }, { x: 48, y: 44 }, { x: 50, y: 37 }, { x: 52, y: 44 }, { x: 54, y: 50 },
    { x: 62, y: 50 }, { x: 64, y: 52 }, { x: 66, y: 10 }, { x: 69, y: 78 }, { x: 72, y: 46 }, { x: 74, y: 50 },
    { x: 84, y: 50 }, { x: 86, y: 44 }, { x: 88, y: 37 }, { x: 90, y: 44 }, { x: 92, y: 50 },
    { x: 112, y: 50 },
  ],
  "third-degree-block": [
    { x: 0, y: 50 }, { x: 4, y: 44 }, { x: 6, y: 37 }, { x: 8, y: 44 }, { x: 10, y: 50 },
    { x: 18, y: 50 }, { x: 20, y: 52 }, { x: 22, y: 10 }, { x: 25, y: 78 }, { x: 28, y: 46 }, { x: 30, y: 50 },
    { x: 35, y: 50 }, { x: 37, y: 44 }, { x: 39, y: 37 }, { x: 41, y: 44 }, { x: 43, y: 50 },
    { x: 56, y: 50 }, { x: 58, y: 52 }, { x: 60, y: 10 }, { x: 63, y: 78 }, { x: 66, y: 46 }, { x: 68, y: 50 },
    { x: 72, y: 50 }, { x: 74, y: 44 }, { x: 76, y: 37 }, { x: 78, y: 44 }, { x: 80, y: 50 },
    { x: 94, y: 50 }, { x: 96, y: 52 }, { x: 98, y: 10 }, { x: 101, y: 78 }, { x: 104, y: 46 }, { x: 106, y: 50 },
    { x: 115, y: 50 },
  ],
  "st-elevation": [
    { x: 0, y: 50 }, { x: 15, y: 50 }, { x: 18, y: 43 }, { x: 21, y: 36 }, { x: 24, y: 43 }, { x: 27, y: 50 },
    { x: 31, y: 50 }, { x: 34, y: 52 }, { x: 36, y: 10 }, { x: 39, y: 72 }, { x: 42, y: 28 },
    { x: 46, y: 25 }, { x: 50, y: 26 }, { x: 55, y: 28 }, { x: 60, y: 33 }, { x: 65, y: 40 },
    { x: 70, y: 50 }, { x: 85, y: 50 },
  ],
  "asystole": [
    { x: 0, y: 50 }, { x: 18, y: 50 }, { x: 19, y: 49 }, { x: 20, y: 50 },
    { x: 40, y: 50 }, { x: 40.5, y: 51 }, { x: 41, y: 50 },
    { x: 60, y: 50 }, { x: 61, y: 49.5 }, { x: 62, y: 50 },
    { x: 90, y: 50 },
  ],
  "torsades": [
    { x: 0, y: 50 }, { x: 2, y: 50 },
    { x: 4, y: 56 }, { x: 6, y: 32 }, { x: 8, y: 62 }, { x: 10, y: 40 }, { x: 12, y: 50 },
    { x: 14, y: 58 }, { x: 16, y: 22 }, { x: 18, y: 68 }, { x: 20, y: 35 }, { x: 22, y: 50 },
    { x: 24, y: 60 }, { x: 26, y: 12 }, { x: 28, y: 78 }, { x: 30, y: 30 }, { x: 32, y: 50 },
    { x: 34, y: 58 }, { x: 36, y: 18 }, { x: 38, y: 72 }, { x: 40, y: 33 }, { x: 42, y: 50 },
    { x: 44, y: 55 }, { x: 46, y: 28 }, { x: 48, y: 62 }, { x: 50, y: 40 }, { x: 52, y: 50 },
    { x: 54, y: 53 }, { x: 56, y: 35 }, { x: 58, y: 58 }, { x: 60, y: 44 }, { x: 62, y: 50 },
    { x: 64, y: 52 }, { x: 66, y: 38 }, { x: 68, y: 55 }, { x: 70, y: 46 }, { x: 72, y: 50 },
    { x: 80, y: 50 },
  ],
  "pulseless-electrical-activity": [
    { x: 0, y: 50 }, { x: 20, y: 50 }, { x: 22, y: 45 }, { x: 24, y: 38 }, { x: 26, y: 45 }, { x: 28, y: 50 },
    { x: 32, y: 50 }, { x: 34, y: 54 }, { x: 37, y: 12 }, { x: 41, y: 82 }, { x: 44, y: 50 }, { x: 47, y: 50 },
    { x: 54, y: 50 }, { x: 58, y: 40 }, { x: 62, y: 32 }, { x: 66, y: 40 }, { x: 70, y: 50 },
    { x: 100, y: 50 },
  ],
  "pac": [
    { x: 0, y: 50 }, { x: 8, y: 50 }, { x: 11, y: 43 }, { x: 14, y: 36 }, { x: 17, y: 43 }, { x: 20, y: 50 },
    { x: 24, y: 50 }, { x: 26, y: 52 }, { x: 28, y: 10 }, { x: 31, y: 78 }, { x: 34, y: 46 }, { x: 36, y: 50 },
    { x: 42, y: 50 }, { x: 46, y: 38 }, { x: 50, y: 30 }, { x: 54, y: 38 }, { x: 58, y: 50 },
    { x: 62, y: 50 }, { x: 64, y: 56 }, { x: 66, y: 44 }, { x: 68, y: 50 },
    { x: 71, y: 52 }, { x: 73, y: 12 }, { x: 76, y: 76 }, { x: 79, y: 48 }, { x: 81, y: 50 },
    { x: 87, y: 50 }, { x: 91, y: 40 }, { x: 95, y: 32 }, { x: 99, y: 40 }, { x: 103, y: 50 },
    { x: 120, y: 50 },
  ],
  "svt": [
    { x: 0, y: 50 }, { x: 3, y: 50 }, { x: 5, y: 52 }, { x: 7, y: 12 }, { x: 10, y: 78 }, { x: 13, y: 48 }, { x: 15, y: 50 },
    { x: 18, y: 50 }, { x: 20, y: 52 }, { x: 22, y: 12 }, { x: 25, y: 78 }, { x: 28, y: 48 }, { x: 30, y: 50 },
    { x: 33, y: 50 }, { x: 35, y: 52 }, { x: 37, y: 12 }, { x: 40, y: 78 }, { x: 43, y: 48 }, { x: 45, y: 50 },
    { x: 48, y: 50 }, { x: 50, y: 52 }, { x: 52, y: 12 }, { x: 55, y: 78 }, { x: 58, y: 48 }, { x: 60, y: 50 },
  ],
  "mat": [
    { x: 0, y: 50 },
    { x: 5, y: 50 }, { x: 7, y: 43 }, { x: 10, y: 36 }, { x: 13, y: 43 }, { x: 16, y: 50 },
    { x: 20, y: 52 }, { x: 22, y: 10 }, { x: 25, y: 78 }, { x: 28, y: 46 }, { x: 30, y: 50 },
    { x: 34, y: 50 }, { x: 38, y: 38 }, { x: 42, y: 32 }, { x: 46, y: 38 }, { x: 50, y: 50 },
    { x: 52, y: 50 }, { x: 54, y: 57 }, { x: 56, y: 30 }, { x: 58, y: 57 }, { x: 60, y: 50 },
    { x: 63, y: 52 }, { x: 65, y: 10 }, { x: 68, y: 76 }, { x: 71, y: 47 }, { x: 73, y: 50 },
    { x: 77, y: 50 }, { x: 81, y: 40 }, { x: 85, y: 33 }, { x: 89, y: 40 }, { x: 93, y: 50 },
    { x: 95, y: 50 }, { x: 97, y: 53 }, { x: 99, y: 58 }, { x: 101, y: 53 }, { x: 103, y: 50 },
    { x: 106, y: 52 }, { x: 108, y: 12 }, { x: 111, y: 74 }, { x: 114, y: 48 }, { x: 116, y: 50 },
    { x: 120, y: 50 },
  ],
  "junctional-rhythm": [
    { x: 0, y: 50 }, { x: 22, y: 50 }, { x: 24, y: 52 }, { x: 26, y: 12 }, { x: 29, y: 78 }, { x: 32, y: 48 }, { x: 34, y: 50 },
    { x: 44, y: 50 }, { x: 46, y: 38 }, { x: 50, y: 32 }, { x: 54, y: 38 }, { x: 58, y: 50 },
    { x: 100, y: 50 },
  ],
  "accelerated-junctional": [
    { x: 0, y: 50 }, { x: 10, y: 50 }, { x: 12, y: 52 }, { x: 14, y: 12 }, { x: 17, y: 78 }, { x: 20, y: 48 }, { x: 22, y: 50 },
    { x: 30, y: 50 }, { x: 32, y: 38 }, { x: 36, y: 30 }, { x: 40, y: 38 }, { x: 44, y: 50 },
    { x: 65, y: 50 },
  ],
  "junctional-tachycardia": [
    { x: 0, y: 50 }, { x: 4, y: 50 }, { x: 6, y: 52 }, { x: 8, y: 12 }, { x: 11, y: 78 }, { x: 14, y: 48 }, { x: 16, y: 50 },
    { x: 20, y: 50 }, { x: 22, y: 38 }, { x: 25, y: 30 }, { x: 28, y: 38 }, { x: 31, y: 50 },
    { x: 35, y: 50 }, { x: 37, y: 52 }, { x: 39, y: 12 }, { x: 42, y: 78 }, { x: 45, y: 48 }, { x: 47, y: 50 },
    { x: 51, y: 50 }, { x: 53, y: 38 }, { x: 56, y: 30 }, { x: 59, y: 38 }, { x: 62, y: 50 },
    { x: 66, y: 50 },
  ],
  "pvc": [
    { x: 0, y: 50 }, { x: 8, y: 50 }, { x: 11, y: 43 }, { x: 14, y: 36 }, { x: 17, y: 43 }, { x: 20, y: 50 },
    { x: 24, y: 52 }, { x: 26, y: 10 }, { x: 29, y: 78 }, { x: 32, y: 46 }, { x: 34, y: 50 },
    { x: 40, y: 50 }, { x: 44, y: 38 }, { x: 48, y: 30 }, { x: 52, y: 38 }, { x: 56, y: 50 },
    { x: 58, y: 50 }, { x: 60, y: 78 }, { x: 62, y: 90 }, { x: 64, y: 15 }, { x: 67, y: 8 }, { x: 70, y: 20 }, { x: 73, y: 50 },
    { x: 77, y: 58 }, { x: 81, y: 62 }, { x: 85, y: 58 }, { x: 89, y: 50 },
    { x: 110, y: 50 },
    { x: 113, y: 43 }, { x: 116, y: 36 }, { x: 119, y: 43 }, { x: 122, y: 50 },
  ],
  "bigeminy": [
    { x: 0, y: 50 }, { x: 3, y: 43 }, { x: 6, y: 36 }, { x: 9, y: 43 }, { x: 12, y: 50 },
    { x: 15, y: 52 }, { x: 17, y: 10 }, { x: 20, y: 78 }, { x: 23, y: 46 }, { x: 25, y: 50 },
    { x: 30, y: 50 }, { x: 34, y: 38 }, { x: 37, y: 30 }, { x: 40, y: 38 }, { x: 43, y: 50 },
    { x: 45, y: 50 }, { x: 47, y: 78 }, { x: 49, y: 88 }, { x: 51, y: 14 }, { x: 54, y: 8 }, { x: 57, y: 18 }, { x: 60, y: 50 },
    { x: 63, y: 58 }, { x: 67, y: 62 }, { x: 71, y: 58 }, { x: 75, y: 50 },
    { x: 78, y: 43 }, { x: 81, y: 36 }, { x: 84, y: 43 }, { x: 87, y: 50 },
    { x: 90, y: 52 }, { x: 92, y: 10 }, { x: 95, y: 78 }, { x: 98, y: 46 }, { x: 100, y: 50 },
    { x: 105, y: 50 }, { x: 109, y: 38 }, { x: 112, y: 30 }, { x: 115, y: 38 }, { x: 118, y: 50 },
    { x: 120, y: 50 }, { x: 122, y: 78 }, { x: 124, y: 88 }, { x: 126, y: 14 }, { x: 129, y: 8 }, { x: 132, y: 18 }, { x: 135, y: 50 },
    { x: 138, y: 58 }, { x: 142, y: 62 }, { x: 146, y: 57 }, { x: 150, y: 50 },
  ],
  "idioventricular": [
    { x: 0, y: 50 }, { x: 18, y: 50 }, { x: 21, y: 56 }, { x: 24, y: 8 }, { x: 28, y: 85 }, { x: 32, y: 10 }, { x: 35, y: 80 }, { x: 38, y: 50 },
    { x: 48, y: 50 }, { x: 52, y: 38 }, { x: 57, y: 30 }, { x: 62, y: 38 }, { x: 67, y: 50 },
    { x: 110, y: 50 },
  ],
  "lbbb": [
    { x: 0, y: 50 }, { x: 12, y: 50 }, { x: 15, y: 43 }, { x: 18, y: 36 }, { x: 21, y: 43 }, { x: 24, y: 50 },
    { x: 28, y: 50 }, { x: 30, y: 52 }, { x: 33, y: 20 }, { x: 36, y: 14 }, { x: 39, y: 12 }, { x: 43, y: 18 }, { x: 46, y: 50 },
    { x: 50, y: 58 }, { x: 54, y: 64 }, { x: 58, y: 58 }, { x: 62, y: 50 },
    { x: 80, y: 50 },
  ],
  "rbbb": [
    { x: 0, y: 50 }, { x: 12, y: 50 }, { x: 15, y: 43 }, { x: 18, y: 36 }, { x: 21, y: 43 }, { x: 24, y: 50 },
    { x: 28, y: 50 }, { x: 30, y: 52 }, { x: 33, y: 18 }, { x: 37, y: 78 }, { x: 40, y: 52 },
    { x: 42, y: 48 }, { x: 44, y: 20 }, { x: 47, y: 78 }, { x: 50, y: 52 },
    { x: 54, y: 58 }, { x: 58, y: 65 }, { x: 62, y: 58 }, { x: 66, y: 50 },
    { x: 80, y: 50 },
  ],
  "wpw": [
    { x: 0, y: 50 }, { x: 10, y: 50 }, { x: 13, y: 43 }, { x: 16, y: 36 }, { x: 19, y: 43 }, { x: 22, y: 50 },
    { x: 24, y: 50 }, { x: 26, y: 52 },
    { x: 27, y: 44 }, { x: 29, y: 36 }, { x: 31, y: 22 }, { x: 33, y: 10 }, { x: 36, y: 75 }, { x: 39, y: 48 }, { x: 42, y: 50 },
    { x: 48, y: 50 }, { x: 52, y: 38 }, { x: 56, y: 30 }, { x: 60, y: 38 }, { x: 64, y: 50 },
    { x: 78, y: 50 },
  ],
};

interface EkgStripProps {
  rhythmId: string;
  height?: number;
  showLabels?: boolean;
  containerWidth?: number;
}

export function EkgStrip({ rhythmId, height = 120, containerWidth = 340 }: EkgStripProps) {
  const baseSegments = WAVEFORM_SEGMENTS[rhythmId] ?? WAVEFORM_SEGMENTS["normal-sinus"];
  const maxX = Math.max(...baseSegments.map((p) => p.x));

  const segments: React.ReactElement[] = [];
  const scaleX = containerWidth / maxX;
  let offsetX = 0;
  let iteration = 0;

  while (offsetX < containerWidth && iteration < 20) {
    iteration++;
    for (let i = 0; i < baseSegments.length - 1; i++) {
      const p1 = baseSegments[i];
      const p2 = baseSegments[i + 1];

      const x1 = (p1.x + offsetX) * scaleX;
      const y1 = (p1.y / 100) * height;
      const x2 = (p2.x + offsetX) * scaleX;
      const y2 = (p2.y / 100) * height;

      if (x1 > containerWidth) break;

      const dx = x2 - x1;
      const dy = y2 - y1;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      if (length < 0.5) continue;

      const cx = (x1 + x2) / 2;
      const cy = (y1 + y2) / 2;

      segments.push(
        <View
          key={`s-${iteration}-${i}`}
          style={{
            position: "absolute",
            left: cx - length / 2,
            top: cy - 1,
            width: length,
            height: 2,
            backgroundColor: colors.light.ekgLine,
            transform: [{ rotate: `${angle}deg` }],
          }}
        />
      );
    }
    offsetX += maxX;
  }

  const gridLines: React.ReactElement[] = [];
  const majorStep = 40;
  const minorStep = 8;

  const numMinorV = Math.ceil(containerWidth / minorStep);
  for (let i = 0; i <= numMinorV; i++) {
    const x = i * minorStep;
    const isMajor = i % 5 === 0;
    gridLines.push(
      <View
        key={`gv-${i}`}
        style={{
          position: "absolute",
          left: x,
          top: 0,
          width: isMajor ? 1 : 0.5,
          height: "100%",
          backgroundColor: isMajor ? colors.light.ekgGridMajor : colors.light.ekgGrid,
        }}
      />
    );
  }

  const numMinorH = Math.ceil(height / minorStep);
  for (let j = 0; j <= numMinorH; j++) {
    const y = j * minorStep;
    const isMajor = j % 5 === 0;
    gridLines.push(
      <View
        key={`gh-${j}`}
        style={{
          position: "absolute",
          left: 0,
          top: y,
          height: isMajor ? 1 : 0.5,
          width: "100%",
          backgroundColor: isMajor ? colors.light.ekgGridMajor : colors.light.ekgGrid,
        }}
      />
    );
  }

  return (
    <View style={[styles.container, { height }]}>
      {gridLines}
      {segments}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.light.ekgBackground,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ffc0c0",
    position: "relative",
  },
});
