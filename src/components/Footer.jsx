import React, { useState } from 'react';
import {
  Phone,
  Mail,
  GitHub,
  LinkedIn,
  YouTube,
  Instagram,
  ArrowUpward,
  Send,
} from '@mui/icons-material';

// Tailwind + MUI Icons Footer component
// Features:
// - Responsive 3-column layout
// - Clickable phone & email (tel:, mailto:)
// - Social links with accessible labels and hover animation
// - Newsletter subscription (local validation + success UI)
// - Back-to-top floating button
// - Minimal, production-ready, accessible markup

const Footer=()=> {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    // Simulate an API request. Replace with real request in your app.
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 2500);
    }, 900);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Contact</h4>
            <p className="text-sm text-slate-300 mb-4">Have a question or want to work together? Reach out — I'm happy to help.</p>
            <div className="space-y-2 text-sm">
              <a href="tel:+8435423244" className="flex items-center gap-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">
                <Phone fontSize="small" />
                <span className="underline">+84 354 232 44</span>
              </a>
              <a href="mailto:ujjvalpateliya@gmail.com" className="flex items-center gap-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 rounded">
                <Mail fontSize="small" />
                <span className="underline">ujjvalpateliya@gmail.com</span>
              </a>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-medium text-slate-300 mb-2">Office hours</h5>
              <p className="text-xs text-slate-400">Mon - Fri: 9:00 AM - 6:00 PM (IST)</p>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Follow</h4>
            <p className="text-sm text-slate-300 mb-4">Find me on these platforms — I share projects, tutorials and updates.</p>

            <div className="flex items-center gap-3 mb-4">
              <a href="#" aria-label="GitHub" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 transform hover:-translate-y-0.5 transition-all">
                <GitHub />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 transform hover:-translate-y-0.5 transition-all">
                <LinkedIn />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 transform hover:-translate-y-0.5 transition-all">
                <YouTube />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700 transform hover:-translate-y-0.5 transition-all">
                <Instagram />
              </a>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-medium text-slate-300 mb-2">Quick links</h5>
              <ul className="text-sm text-slate-300 space-y-1">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/products" className="hover:text-white">Products</a></li>
                <li><a href="/about-us" className="hover:text-white">About</a></li>
                <li><a href="/contact-us" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Newsletter</h4>
            <p className="text-sm text-slate-300 mb-4">Get weekly tips, project walk-throughs, and release notes. No spam — unsubscribe anytime.</p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@mail.com"
                className="flex-1 px-3 py-2 rounded-md border border-slate-700 bg-slate-800 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                aria-describedby="footer-email-help"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 hover:bg-teal-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-teal-400"
                aria-live="polite"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                <Send fontSize="small" />
              </button>
            </form>

            <p id="footer-email-help" className={`mt-2 text-sm ${status === 'error' ? 'text-rose-400' : 'text-slate-400'}`}>
              {status === 'error' ? 'Please enter a valid email address.' : (status === 'success' ? 'Thanks for subscribing! Check your inbox.' : 'No spam. Unsubscribe anytime.')}
            </p>

            <div className="mt-6 text-xs text-slate-500">
              <p>Made with ❤️ — ujjvalCoding</p>
              <p>Designed for e‑commerce & tutorials</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-xs text-slate-400">
          <p>&copy; 2025 ujjvalpateliya. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-slate-200">Privacy</a>
            <a href="/terms" className="hover:text-slate-200">Terms</a>
            <button onClick={scrollToTop} className="p-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400" aria-label="Scroll to top">
              <ArrowUpward fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}



export default Footer;