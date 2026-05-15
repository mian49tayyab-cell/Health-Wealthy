import { useState } from 'react';
import { generateBloggerXml } from '../utils/bloggerXml';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, ExternalLink } from 'lucide-react';

export default function BloggerExportModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const xmlCode = generateBloggerXml();

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="p-8 border-b border-gray-100 dark:border-white/10 flex justify-between items-center bg-brand-black text-white">
              <div>
                <h2 className="font-serif text-3xl font-bold">Blogger XML Source</h2>
                <p className="text-brand-gold text-xs uppercase tracking-widest mt-1 font-bold">Deployment Ready Package</p>
              </div>
              <button onClick={onClose} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 flex-grow overflow-auto">
              <div className="bg-gray-50 dark:bg-black rounded-2xl p-6 relative group">
                <button 
                  onClick={handleCopy}
                  className="absolute top-4 right-4 bg-brand-green hover:bg-brand-green-dark text-white p-2 rounded-lg flex items-center gap-2 transition-all shadow-lg z-10"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                  <span className="text-xs font-bold uppercase tracking-widest">{copied ? 'Copied' : 'Copy XML'}</span>
                </button>
                <pre className="text-xs font-mono text-brand-black dark:text-gray-400 overflow-x-auto whitespace-pre-wrap">
                  {xmlCode}
                </pre>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold">How to Install</h3>
                  <ol className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-decimal pl-4">
                    <li>Log in to your <strong>Blogger Dashboard</strong>.</li>
                    <li>Go to <strong>Theme</strong> section.</li>
                    <li>Click the down arrow next to "Customize" and select <strong>Edit HTML</strong>.</li>
                    <li>Delete all existing code and paste the copied XML.</li>
                    <li>Click <strong>Save</strong> (disk icon).</li>
                  </ol>
                </div>
                <div className="bg-brand-gold/10 p-6 rounded-2xl flex flex-col justify-center">
                  <h3 className="font-serif text-xl font-bold text-brand-gold-dark mb-2">Support Healthy & Wealthy</h3>
                  <p className="text-xs text-brand-black/70 mb-4 font-semibold uppercase tracking-wide">Premium Features Enabled</p>
                  <a href="https://blogger.com" target="_blank" className="bg-brand-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors">
                    Open Blogger <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
