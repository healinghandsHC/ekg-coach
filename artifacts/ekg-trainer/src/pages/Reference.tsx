import { useState } from "react";
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
import { ekgData, categories } from "@/data/ekg-data";
import { EkgStrip } from "@/components/ekg/EkgStrip";
import { motion } from "framer-motion";

export default function Reference() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredRhythms =
    activeCategory === "All"
      ? ekgData
      : ekgData.filter((r) => r.category === activeCategory);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Quick Reference
          </h1>
          <p className="text-muted-foreground text-lg">
            A summary cheat sheet of all EKG rhythms and their key features.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeCategory === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("All")}
            data-testid="button-filter-all"
          >
            All ({ekgData.length})
          </Button>
          {categories.map((cat) => {
            const count = ekgData.filter((r) => r.category === cat).length;
            return (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                data-testid={`button-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {cat} ({count})
              </Button>
            );
          })}
        </div>

        <div className="space-y-4">
          {filteredRhythms.map((rhythm, idx) => (
            <motion.div
              key={rhythm.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-lg">{rhythm.name}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{rhythm.category}</Badge>
                      <Badge variant="outline">{rhythm.rateRange}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <EkgStrip rhythmId={rhythm.id} height={120} />

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground font-medium">
                        Rhythm:
                      </span>
                      <p className="text-foreground">
                        {rhythm.rhythmRegularity}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-medium">
                        P Wave:
                      </span>
                      <p className="text-foreground">
                        {rhythm.pWaveDescription}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-medium">
                        PR Interval:
                      </span>
                      <p className="text-foreground">{rhythm.prInterval}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-medium">
                        QRS Duration:
                      </span>
                      <p className="text-foreground">{rhythm.qrsDuration}</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <span className="text-muted-foreground text-sm font-medium">
                      Key Features:
                    </span>
                    <ul className="mt-1 space-y-1">
                      {rhythm.keyFeatures.map((f, i) => (
                        <li
                          key={i}
                          className="text-sm text-foreground flex items-start gap-2"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
