import { useState } from 'react';
import './SubscribeForm.css'

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Logic: Send the email to your backend or email service API
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) setStatus('success');
    else setStatus('error');
  };

  return (
    <section className="subscribe-section">
      <form onSubmit={handleSubscribe}>
        <input 
          type="email" 
          placeholder="your@email.com" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining...' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && <p className="msg">Check your inbox!</p>}
      {status === 'error' && <p className="msg error">Something went wrong.</p>}
    </section>
  );
}