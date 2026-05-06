import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Library() {
  const tracks = [
    { id: '1', title: 'Demo Track 1', bpm: 120, genre: 'Hip Hop' },
    { id: '2', title: 'Demo Track 2', bpm: 140, genre: 'Trap' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Library</h1>
          <Button variant="hero" asChild>
            <Link to="/upload">Upload New Track</Link>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <div key={track.id} className="surface rounded-2xl border border-white/20 p-6">
              <h3 className="font-bold text-xl mb-2">{track.title}</h3>
              <p className="text-gray-400 mb-4">{track.bpm} BPM • {track.genre}</p>
              <Button variant="ghost" className="w-full" asChild>
                <Link to={`/track/${track.id}`}>View Track</Link>
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}