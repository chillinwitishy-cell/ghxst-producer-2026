import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Button variant="hero" asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}