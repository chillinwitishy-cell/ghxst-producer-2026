import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { user, signOut } = useAuth();
  const nav = useNavigate();

  return (
    <header className="sticky top-0 z-40 surface border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary glow" />
          <span className="font-display text-lg font-bold tracking-tight">
            GHXST DA PRODUCER<span className="text-muted-foreground">·</span><span className="text-gradient">AI</span>
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          {user ? (
            <>
              <Button variant="ghost" asChild><Link to="/library">Library</Link></Button>
              <Button variant="ghost" asChild><Link to="/settings">Settings</Link></Button>
              <Button variant="hero" asChild><Link to="/upload">Upload</Link></Button>
              <Button variant="ghost" onClick={async () => { await signOut(); nav("/"); }}>Sign out</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild><Link to="/auth">Sign in</Link></Button>
              <Button variant="hero" asChild><Link to="/auth">Get started</Link></Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}