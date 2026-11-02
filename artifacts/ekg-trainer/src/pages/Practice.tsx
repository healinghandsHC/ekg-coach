import { useState, useCallback } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { EkgStrip } from "@/components/ekg/EkgStrip";
import { getShuffledQuestions } from "@/data/quiz-data";
import type { QuizQuestion } from "@/data/quiz-data";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  ArrowRight,
  Trophy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type AnswerState = "unanswered" | "correct" | "incorrect";

export default function Practice() {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    getShuffledQuestions()
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + (answerState !== "unanswered" ? 1 : 0)) / questions.length) * 100;

  const handleAnswer = useCallback(
    (answer: string) => {
      if (answerState !== "unanswered") return;
      setSelectedAnswer(answer);
      if (answer === currentQuestion.correctAnswer) {
        setAnswerState("correct");
        setScore((s) => s + 1);
      } else {
        setAnswerState("incorrect");
      }
    },
    [answerState, currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
    setAnswerState("unanswered");
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setQuestions(getShuffledQuestions());
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswerState("unanswered");
    setScore(0);
    setFinished(false);
  }, []);

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Layout>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center">
              <CardContent className="pt-10 pb-10 space-y-6">
                <div className="mx-auto h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Quiz Complete
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Here are your results
                  </p>
                </div>
                <div className="text-5xl font-bold text-primary">
                  {score}/{questions.length}
                </div>
                <p className="text-lg text-muted-foreground">
                  {percentage >= 80
                    ? "Excellent work! You have a strong grasp of EKG interpretation."
                    : percentage >= 60
                    ? "Good effort! Review the topics you missed and try again."
                    : "Keep studying! Review the Learning Center and practice more."}
                </p>
                <div className="flex justify-center gap-3">
                  <Button
                    onClick={handleRestart}
                    className="gap-2"
                    data-testid="button-restart-quiz"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Try Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Practice Mode
            </h1>
            <p className="text-muted-foreground">
              Identify the rhythm shown on each strip
            </p>
          </div>
          <Badge variant="outline" className="text-base px-3 py-1">
            {score} / {currentIndex + (answerState !== "unanswered" ? 1 : 0)}{" "}
            correct
          </Badge>
        </div>

        <Progress value={progress} className="h-2" />

        <p className="text-sm text-muted-foreground text-center">
          Question {currentIndex + 1} of {questions.length}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id + "-" + currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-base text-muted-foreground">
                  What rhythm is shown below?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <EkgStrip
                  rhythmId={currentQuestion.rhythmId}
                  height={180}
                  animate={answerState === "unanswered"}
                  showLabels={true}
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  {currentQuestion.options.map((option) => {
                    let variant:
                      | "outline"
                      | "default"
                      | "destructive"
                      | "secondary" = "outline";
                    let extraClass = "";

                    if (answerState !== "unanswered") {
                      if (option === currentQuestion.correctAnswer) {
                        variant = "default";
                        extraClass =
                          "bg-emerald-600 hover:bg-emerald-600 border-emerald-600 text-white";
                      } else if (
                        option === selectedAnswer &&
                        answerState === "incorrect"
                      ) {
                        variant = "destructive";
                      }
                    }

                    return (
                      <Button
                        key={option}
                        variant={variant}
                        className={`h-auto py-3 px-4 text-left justify-start whitespace-normal ${extraClass}`}
                        onClick={() => handleAnswer(option)}
                        disabled={answerState !== "unanswered"}
                        data-testid={`button-answer-${option.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        {answerState !== "unanswered" &&
                          option === currentQuestion.correctAnswer && (
                            <CheckCircle className="h-4 w-4 mr-2 shrink-0" />
                          )}
                        {answerState === "incorrect" &&
                          option === selectedAnswer && (
                            <XCircle className="h-4 w-4 mr-2 shrink-0" />
                          )}
                        {option}
                      </Button>
                    );
                  })}
                </div>

                {answerState !== "unanswered" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <Card
                      className={`${
                        answerState === "correct"
                          ? "border-emerald-200 bg-emerald-50/50"
                          : "border-red-200 bg-red-50/50"
                      }`}
                    >
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          {answerState === "correct" ? (
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                          <span
                            className={`font-semibold ${
                              answerState === "correct"
                                ? "text-emerald-800"
                                : "text-red-800"
                            }`}
                          >
                            {answerState === "correct"
                              ? "Correct!"
                              : "Incorrect"}
                          </span>
                        </div>
                        <p
                          className={`text-sm ${
                            answerState === "correct"
                              ? "text-emerald-700"
                              : "text-red-700"
                          }`}
                        >
                          {currentQuestion.explanation}
                        </p>
                      </CardContent>
                    </Card>

                    <div className="flex justify-end">
                      <Button
                        onClick={handleNext}
                        className="gap-2"
                        data-testid="button-next-question"
                      >
                        {currentIndex + 1 >= questions.length
                          ? "See Results"
                          : "Next Question"}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}
