import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Sparkles, Waves, MessagesSquare, Upload as UploadIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="container py-24 md:py-36">
          <div className="mx-auto max-w-3xl text-center animate-float-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 surface px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
              AI co-producer · in private beta
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              Master your tracks with <span className="text-gradient">GHXST Da Producer</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Upload a rough mix. Get a mastered version in seconds. Then chat with the AI to iterate —
              tighter low-end, warmer vocals, louder ceiling — and ship the version that hits.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="hero" asChild><Link to="/auth">Start producing</Link></Button>
              <Button size="lg" variant="glass" asChild><Link to="/auth">Sign in</Link></Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: UploadIcon, title: "Upload anything", body: "Drop in WAV, MP3, or AIFF up to 6 minutes. Stored privately on your account." },
              { icon: Waves, title: "AI mastering", body: "BPM and key detection plus a tailored EQ, compression and limiter chain per track." },
              { icon: MessagesSquare, title: "Chat to iterate", body: "Ask for changes in plain English. Each tweak creates a new version you can compare." },
            ].map((f, i) => (
              <div key={i} className="surface rounded-2xl border border-border/60 p-6 elegant transition-smooth hover:border-primary/40">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary/20 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container pb-32">
          <div className="surface relative overflow-hidden rounded-3xl border border-border/60 p-12 text-center elegant">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="relative">
              <Sparkles className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl font-bold">Your next single, mastered tonight.</h2>
              <p className="mt-3 text-muted-foreground">No plugins. No waiting. Just upload and ship.</p>
              <Button size="lg" variant="hero" className="mt-8" asChild><Link to="/auth">Get started — it’s free</Link></Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GHXST Da Producer AI
      </footer>
    </div>
  );
};

export default Index;