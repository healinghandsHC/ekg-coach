import React from "react";
import { Link } from "wouter";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t bg-white">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-5 text-sm text-muted-foreground">
          <span>© 2026 EKG Trainer</span>
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
