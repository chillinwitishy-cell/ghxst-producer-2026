import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessagesSquare, Download, Play } from 'lucide-react';

export default function TrackDetail() {
  const { trackId } = useParams();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', content: 'Welcome! Your track has been analyzed. What would you like me to adjust?' },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory(prev => [...prev, { role: 'user', content: message }]);
    
    // Mock AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        role: 'ai',
        content: 'I understand you want to adjust the track. In a real implementation, I would process your request and create a new version with those changes.'
      }]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Track Info */}
          <div className="surface rounded-2xl border border-white/20 p-8">
            <h1 className="text-3xl font-bold mb-4">Demo Track {trackId}</h1>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>BPM:</span>
                <span>120</span>
              </div>
              <div className="flex justify-between">
                <span>Key:</span>
                <span>C Major</span>
              </div>
              <div className="flex justify-between">
                <span>Genre:</span>
                <span>Hip Hop</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <Button variant="hero" className="flex-1">
                <Play className="w-4 h-4 mr-2" />
                Play
              </Button>
              <Button variant="ghost" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
          
          {/* AI Chat */}
          <div className="surface rounded-2xl border border-white/20 p-8">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <MessagesSquare className="w-5 h-5 mr-2" />
              Chat with GHXST
            </h2>
            
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`p-3 rounded-lg ${
                  msg.role === 'ai' 
                    ? 'bg-purple-500/20 text-purple-100' 
                    : 'bg-white/5 text-white'
                }`}>
                  <div className="font-medium text-xs mb-1">
                    {msg.role === 'ai' ? 'GHXST' : 'You'}
                  </div>
                  {msg.content}
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask GHXST to adjust your track..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button variant="hero" onClick={handleSendMessage}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}