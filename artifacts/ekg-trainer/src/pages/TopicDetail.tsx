import { Layout } from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "wouter";
import {
  ArrowLeft,
  Heart,
  Waves,
  Zap,
  Clock,
  AlertTriangle,
  Stethoscope,
} from "lucide-react";
import { getRhythmById, ekgData } from "@/data/ekg-data";
import { EkgStrip } from "@/components/ekg/EkgStrip";
import { motion } from "framer-motion";

export default function TopicDetail() {
  const params = useParams<{ topicId: string }>();
  const rhythm = getRhythmById(params.topicId || "");

  if (!rhythm) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-2xl font-bold text-foreground">
            Rhythm not found
          </h1>
          <p className="text-muted-foreground mt-2">
            The requested rhythm could not be found.
          </p>
          <Link href="/learn">
            <Button className="mt-4" data-testid="button-back-to-learn">
              Back to Learning Center
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const currentIndex = ekgData.findIndex((r) => r.id === rhythm.id);
  const prevRhythm = currentIndex > 0 ? ekgData[currentIndex - 1] : null;
  const nextRhythm =
    currentIndex < ekgData.length - 1 ? ekgData[currentIndex + 1] : null;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/learn">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1"
              data-testid="button-back"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          <Badge variant="secondary">{rhythm.category}</Badge>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {rhythm.name}
          </h1>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground font-medium">
                EKG Strip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EkgStrip
                rhythmId={rhythm.id}
                height={220}
                animate={true}
                showLabels={true}
              />
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Heart className="h-5 w-5" />
                  <h3 className="font-semibold">Rate</h3>
                </div>
                <p className="text-foreground">{rhythm.rateRange}</p>

                <Separator />

                <div className="flex items-center gap-2 text-primary">
                  <Waves className="h-5 w-5" />
                  <h3 className="font-semibold">Rhythm</h3>
                </div>
                <p className="text-foreground">{rhythm.rhythmRegularity}</p>

                <Separator />

                <div className="flex items-center gap-2 text-primary">
                  <Zap className="h-5 w-5" />
                  <h3 className="font-semibold">P Wave</h3>
                </div>
                <p className="text-foreground">{rhythm.pWaveDescription}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <h3 className="font-semibold">PR Interval</h3>
                </div>
                <p className="text-foreground">{rhythm.prInterval}</p>

                <Separator />

                <div className="flex items-center gap-2 text-primary">
                  <Zap className="h-5 w-5" />
                  <h3 className="font-semibold">QRS Duration</h3>
                </div>
                <p className="text-foreground">{rhythm.qrsDuration}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Key Identifying Features
              </h3>
              <ul className="space-y-2">
                {rhythm.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-amber-200 bg-amber-50/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Clinical Significance
                </h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {rhythm.clinicalSignificance}
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Treatment
                </h3>
                <p className="text-emerald-800 text-sm leading-relaxed">
                  {rhythm.treatment}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-between pt-4">
            {prevRhythm ? (
              <Link href={`/learn/${prevRhythm.id}`}>
                <Button
                  variant="outline"
                  className="gap-2"
                  data-testid="button-prev"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {prevRhythm.name}
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {nextRhythm ? (
              <Link href={`/learn/${nextRhythm.id}`}>
                <Button
                  variant="outline"
                  className="gap-2"
                  data-testid="button-next"
                >
                  {nextRhythm.name}
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
