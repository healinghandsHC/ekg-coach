import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import colors from "@/constants/colors";
import { getShuffledQuestions } from "@/data/quiz-data";
import type { QuizQuestion } from "@/data/quiz-data";
import { EkgStrip } from "@/components/EkgStrip";

type AnswerState = "unanswered" | "correct" | "incorrect";

export default function PracticeScreen() {
  const insets = useSafeAreaInsets();
  const [questions] = useState<QuizQuestion[]>(() => getShuffledQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>(questions);

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const currentQuestion = shuffledQuestions[currentIndex];
  const progress = (currentIndex + (answerState !== "unanswered" ? 1 : 0)) / shuffledQuestions.length;

  const handleAnswer = useCallback(
    (answer: string) => {
      if (answerState !== "unanswered") return;
      setSelectedAnswer(answer);
      if (answer === currentQuestion.correctAnswer) {
        setAnswerState("correct");
        setScore((s) => s + 1);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } else {
        setAnswerState("incorrect");
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
    },
    [answerState, currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= shuffledQuestions.length) {
      setFinished(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
    setAnswerState("unanswered");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }, [currentIndex, shuffledQuestions.length]);

  const handleRestart = useCallback(() => {
    setShuffledQuestions(getShuffledQuestions());
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswerState("unanswered");
    setScore(0);
    setFinished(false);
  }, []);

  if (finished) {
    const pct = Math.round((score / shuffledQuestions.length) * 100);
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.resultContent, { paddingTop: topPad + 20, paddingBottom: bottomPad + 20 }]}
      >
        <View style={styles.resultCard}>
          <View style={styles.trophyBadge}>
            <Ionicons name="trophy" size={40} color={colors.light.primary} />
          </View>
          <Text style={styles.resultTitle}>Quiz Complete</Text>
          <Text style={styles.resultScore}>{score}/{shuffledQuestions.length}</Text>
          <Text style={styles.resultPercent}>{pct}% correct</Text>
          <Text style={styles.resultMessage}>
            {pct >= 80
              ? "Excellent! You have a strong grasp of EKG interpretation."
              : pct >= 60
              ? "Good effort! Review the topics you missed and try again."
              : "Keep studying! Visit the Learning Center and practice more."}
          </Text>
          <TouchableOpacity style={styles.restartBtn} onPress={handleRestart} testID="button-restart">
            <Ionicons name="refresh" size={18} color="#fff" />
            <Text style={styles.restartBtnText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingTop: topPad + 16, paddingBottom: bottomPad + 16 }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.quizHeader}>
        <View>
          <Text style={styles.title}>Practice</Text>
          <Text style={styles.questionCount}>
            Question {currentIndex + 1} of {shuffledQuestions.length}
          </Text>
        </View>
        <View style={styles.scoreBadge}>
          <Text style={styles.scoreText}>{score} correct</Text>
        </View>
      </View>

      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
      </View>

      <View style={styles.stripCard}>
        <Text style={styles.promptText}>What rhythm is shown below?</Text>
        <EkgStrip
          rhythmId={currentQuestion.rhythmId}
          height={160}
          showLabels={true}
        />
      </View>

      <View style={styles.optionsGrid}>
        {currentQuestion.options.map((option) => {
          let btnStyle = styles.optionBtn;
          let textStyle = styles.optionText;

          if (answerState !== "unanswered") {
            if (option === currentQuestion.correctAnswer) {
              btnStyle = { ...styles.optionBtn, ...styles.optionCorrect };
              textStyle = { ...styles.optionText, color: "#fff" };
            } else if (option === selectedAnswer && answerState === "incorrect") {
              btnStyle = { ...styles.optionBtn, ...styles.optionIncorrect };
              textStyle = { ...styles.optionText, color: "#fff" };
            }
          }

          return (
            <TouchableOpacity
              key={option}
              style={btnStyle}
              onPress={() => handleAnswer(option)}
              disabled={answerState !== "unanswered"}
              activeOpacity={0.75}
              testID={`option-${option.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {answerState !== "unanswered" && option === currentQuestion.correctAnswer && (
                <Ionicons name="checkmark-circle" size={18} color="#fff" style={styles.optionIcon} />
              )}
              {answerState === "incorrect" && option === selectedAnswer && (
                <Ionicons name="close-circle" size={18} color="#fff" style={styles.optionIcon} />
              )}
              <Text style={textStyle}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {answerState !== "unanswered" && (
        <View style={[styles.explanationCard, answerState === "correct" ? styles.explanationCorrect : styles.explanationIncorrect]}>
          <View style={styles.explanationHeader}>
            <Ionicons
              name={answerState === "correct" ? "checkmark-circle" : "close-circle"}
              size={20}
              color={answerState === "correct" ? "#16a34a" : "#dc2626"}
            />
            <Text style={[styles.explanationLabel, { color: answerState === "correct" ? "#166534" : "#991b1b" }]}>
              {answerState === "correct" ? "Correct!" : "Incorrect"}
            </Text>
          </View>
          <Text style={[styles.explanationText, { color: answerState === "correct" ? "#166534" : "#991b1b" }]}>
            {currentQuestion.explanation}
          </Text>
          <TouchableOpacity
            style={[styles.nextBtn, { backgroundColor: answerState === "correct" ? "#16a34a" : colors.light.primary }]}
            onPress={handleNext}
            testID="button-next"
          >
            <Text style={styles.nextBtnText}>
              {currentIndex + 1 >= shuffledQuestions.length ? "See Results" : "Next Question"}
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background },
  content: { paddingHorizontal: 16, gap: 16 },
  resultContent: { paddingHorizontal: 20, alignItems: "center", gap: 0 },
  resultCard: {
    backgroundColor: colors.light.card,
    borderRadius: colors.radius,
    borderWidth: 1,
    borderColor: colors.light.border,
    padding: 32,
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  trophyBadge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#eff6ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  resultTitle: { fontSize: 24, fontWeight: "700" as const, color: colors.light.foreground },
  resultScore: { fontSize: 48, fontWeight: "700" as const, color: colors.light.primary },
  resultPercent: { fontSize: 16, color: colors.light.mutedForeground },
  resultMessage: { fontSize: 14, color: colors.light.mutedForeground, textAlign: "center", lineHeight: 20, marginTop: 4 },
  restartBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.light.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 8,
  },
  restartBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" as const },
  quizHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: { fontSize: 24, fontWeight: "700" as const, color: colors.light.foreground },
  questionCount: { fontSize: 13, color: colors.light.mutedForeground, marginTop: 2 },
  scoreBadge: {
    backgroundColor: colors.light.muted,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  scoreText: { fontSize: 13, fontWeight: "500" as const, color: colors.light.mutedForeground },
  progressBarBg: {
    height: 4,
    backgroundColor: colors.light.muted,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.light.primary,
    borderRadius: 2,
  },
  stripCard: {
    backgroundColor: colors.light.card,
    borderRadius: colors.radius,
    borderWidth: 1,
    borderColor: colors.light.border,
    padding: 14,
    gap: 12,
  },
  promptText: { fontSize: 14, fontWeight: "500" as const, color: colors.light.mutedForeground },
  optionsGrid: { gap: 10 },
  optionBtn: {
    backgroundColor: colors.light.card,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.light.border,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  optionCorrect: { backgroundColor: "#16a34a", borderColor: "#16a34a" },
  optionIncorrect: { backgroundColor: "#dc2626", borderColor: "#dc2626" },
  optionIcon: {},
  optionText: { flex: 1, fontSize: 14, fontWeight: "500" as const, color: colors.light.foreground },
  explanationCard: {
    borderRadius: colors.radius,
    borderWidth: 1,
    padding: 14,
    gap: 10,
  },
  explanationCorrect: { backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" },
  explanationIncorrect: { backgroundColor: "#fef2f2", borderColor: "#fecaca" },
  explanationHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  explanationLabel: { fontSize: 15, fontWeight: "600" as const },
  explanationText: { fontSize: 13, lineHeight: 20 },
  nextBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 4,
  },
  nextBtnText: { color: "#fff", fontSize: 15, fontWeight: "600" as const },
});
