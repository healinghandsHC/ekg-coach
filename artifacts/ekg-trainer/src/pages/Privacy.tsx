import { useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    title: "Information we collect",
    content:
      "EKG Trainer does not collect personal information, names, email addresses, account information, device identifiers, advertising identifiers, location data, contacts, photos, or personal health information.",
  },
  {
    title: "Accounts and saved activity",
    content:
      "The app does not require an account or login. Quiz answers, learning progress, and browsing activity are not sent to a server or shared with the developer.",
  },
  {
    title: "Health information",
    content:
      "EKG Trainer provides general educational material about electrocardiogram rhythms. It does not ask for, collect, diagnose, or store information about an individual's health. The content is for education and is not a substitute for professional medical advice, diagnosis, or treatment.",
  },
  {
    title: "Analytics, advertising, and crash reporting",
    content:
      "The app does not use analytics, advertising, behavioral tracking, or third-party crash-reporting services. It does not sell or share user data.",
  },
  {
    title: "Third-party technology",
    content:
      "The Android app uses Capacitor and standard AndroidX libraries to display the locally packaged application. These components are not configured to transmit personal information. Distribution through Google Play is also subject to Google's own privacy practices.",
  },
  {
    title: "Offline use and external services",
    content:
      "The current app content, EKG illustrations, quizzes, fonts, and interface assets are packaged with the application and can be used offline. The app does not depend on a Replit deployment, external database, or hosted API.",
  },
  {
    title: "Children's privacy",
    content:
      "Because the app does not collect personal information from any user, it does not knowingly collect personal information from children.",
  },
  {
    title: "Changes to this policy",
    content:
      "This policy may be updated if the app's features or data practices change. Any updated policy will be posted on this page with a revised effective date.",
  },
  {
    title: "Contact",
    content:
      "Privacy questions may be sent using the developer contact information provided with the app's Google Play listing.",
  },
];

export default function Privacy() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = description?.content;

    document.title = "Privacy Policy | EKG Trainer";

    if (description) {
      description.content =
        "Read the EKG Trainer privacy policy and learn how the educational app handles data.";
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) {
        description.content = previousDescription;
      }
    };
  }, []);

  return (
    <Layout>
      <article className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-muted-foreground">
            Effective September 15, 2026
          </p>
        </div>

        <Card>
          <CardContent className="space-y-8 p-6 sm:p-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Privacy at a glance
              </h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                EKG Trainer is an educational reference and practice app. It
                does not collect, store, transmit, sell, or share personal
                information or user activity.
              </p>
            </section>

            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {section.content}
                </p>
              </section>
            ))}
          </CardContent>
        </Card>
      </article>
    </Layout>
  );
}