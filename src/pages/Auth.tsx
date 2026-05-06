import { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo auth:', { email, password, isSignUp });
    alert('Demo mode - authentication would work here!');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-md py-12 mx-auto">
        <div className="surface rounded-2xl border border-white/20 p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label>Email</Label>
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <Label>Password</Label>
              <Input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            
            <Button type="submit" variant="hero" className="w-full">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>
          </form>
          
          <p className="text-center mt-6 text-gray-400">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-purple-400 hover:text-purple-300 ml-1"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}