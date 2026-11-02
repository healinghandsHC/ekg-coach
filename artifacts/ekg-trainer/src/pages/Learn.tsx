import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { ekgData, categories } from "@/data/ekg-data";
import { EkgStrip } from "@/components/ekg/EkgStrip";
import { motion } from "framer-motion";

export default function Learn() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Learning Center
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse EKG concepts organized by topic. Select a rhythm to study its
            characteristics in detail.
          </p>
        </div>

        {categories.map((category, catIndex) => {
          const rhythms = ekgData.filter((r) => r.category === category);
          if (rhythms.length === 0) return null;

          return (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1, duration: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {category}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {rhythms.map((rhythm) => (
                  <Link
                    key={rhythm.id}
                    href={`/learn/${rhythm.id}`}
                    data-testid={`link-rhythm-${rhythm.id}`}
                  >
                    <Card className="cursor-pointer transition-all hover:border-primary/50 hover:shadow-md h-full">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">
                            {rhythm.name}
                          </CardTitle>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <EkgStrip
                          rhythmId={rhythm.id}
                          height={100}
                          className="rounded-md"
                        />
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {rhythm.rateRange}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {rhythm.rhythmRegularity}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </Layout>
  );
}
