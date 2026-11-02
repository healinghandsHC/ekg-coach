import { Layout } from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "wouter";
import { BookOpen, PenTool, FileText, Activity } from "lucide-react";
import { EkgStrip } from "@/components/ekg/EkgStrip";
import { ekgData, categories } from "@/data/ekg-data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="mx-auto h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <Activity className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Master EKG Interpretation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your clinical study companion for identifying rhythms, understanding
            mechanisms, and building confidence in reading EKG strips.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <EkgStrip
            rhythmId="normal-sinus"
            height={140}
            animate={true}
            showLabels={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Link href="/learn" data-testid="link-learn">
            <Card className="cursor-pointer h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-3">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle>Learn</CardTitle>
                <CardDescription>
                  Study {ekgData.length} rhythms across {categories.length}{" "}
                  categories with interactive visual guides and clinical details.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/practice" data-testid="link-practice">
            <Card className="cursor-pointer h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <div className="h-12 w-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-3">
                  <PenTool className="h-6 w-6" />
                </div>
                <CardTitle>Practice</CardTitle>
                <CardDescription>
                  Test your knowledge with 15 randomized quiz questions and get
                  immediate feedback with detailed explanations.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/reference" data-testid="link-reference">
            <Card className="cursor-pointer h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <div className="h-12 w-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-3">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>Quick Reference</CardTitle>
                <CardDescription>
                  A cheat sheet with all rhythms, their key features, and
                  identifying characteristics for fast review.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="bg-primary/5 border-primary/10">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3">
                What You Will Learn
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {categories.map((cat) => {
                  const count = ekgData.filter(
                    (r) => r.category === cat
                  ).length;
                  return (
                    <div
                      key={cat}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {cat}{" "}
                      <span className="text-muted-foreground">
                        ({count} rhythms)
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
}
