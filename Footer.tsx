import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-gray-400 uppercase tracking-[0.15em] gap-8">
        <div>
          &copy; {currentYear} Healthy <span className="text-brand-gold">&</span> Wealthy. Better Health, Smarter Wealth.
        </div>
        
        <div className="flex gap-8">
          <Link to="/about" className="hover:text-brand-emerald transition-colors">About</Link>
          <Link to="/terms" className="hover:text-brand-emerald transition-colors">Terms</Link>
          <Link to="/privacy-policy" className="hover:text-brand-emerald transition-colors">Privacy</Link>
          <Link to="/contact" className="hover:text-brand-emerald transition-colors">Contact</Link>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
