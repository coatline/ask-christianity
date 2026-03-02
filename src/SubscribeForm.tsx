import { supabase } from './supabaseClient';
import { useState } from 'react';
import './SubscribeForm.css'

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase
      .from('subscribers')
      .insert([{ email }]);
    if (error) {
      setStatus('error');
      console.log("Error", error);
    } else {
      setStatus('success');
      setEmail('');
      console.log("Success");
    }
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
        {status === 'success' && <p>Thank you for subscribing!</p>}
        {status === 'error' && <p>There was an error. Please try again.</p>}
      </form>

      {status === 'success' && <p className="msg">Check your inbox!</p>}
      {status === 'error' && <p className="msg error">Something went wrong.</p>}
    </section>
  );
}