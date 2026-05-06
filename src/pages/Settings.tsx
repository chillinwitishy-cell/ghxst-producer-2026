import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function Settings() {
  const [defaultGenre, setDefaultGenre] = useState('hiphop');
  const [drumIntensity, setDrumIntensity] = useState(0.7);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-2xl py-12">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <div className="surface rounded-2xl border border-white/20 p-8 space-y-6">
          <div>
            <Label>Default Genre</Label>
            <select 
              value={defaultGenre} 
              onChange={(e) => setDefaultGenre(e.target.value)}
              className="w-full mt-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-white"
            >
              <option value="hiphop">Hip Hop</option>
              <option value="trap">Trap</option>
              <option value="afro">Afrobeats</option>
            </select>
          </div>
          
          <div>
            <Label>Default Drum Intensity</Label>
            <Input 
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={drumIntensity}
              onChange={(e) => setDrumIntensity(Number(e.target.value))}
            />
            <span className="text-sm text-gray-400">{drumIntensity.toFixed(1)}</span>
          </div>
          
          <Button variant="hero" className="w-full">
            Save Settings
          </Button>
        </div>
      </main>
    </div>
  );
}