import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ekgtrainer.app",
  appName: "EKG Trainer",
  webDir: "dist/public",
  android: {
    allowMixedContent: false,
  },
};

export default config;