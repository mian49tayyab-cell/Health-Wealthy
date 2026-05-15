import { motion } from 'motion/react';
import Sidebar from '../components/Sidebar';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

interface StaticPageProps {
  title: string;
}

export default function StaticPage({ title }: StaticPageProps) {
  return (
    <div className="dark:bg-[#121212] transition-colors duration-300">
      <div className="bg-brand-black py-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl text-white font-bold"
        >
          {title}
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {title === 'Contact Us' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="font-serif text-3xl mb-6">Get in Touch</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Have a question about a health protocol or a wealth-building strategy? Connect with our team of experts.
                    </p>
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Us</p>
                          <p className="font-semibold">contact@healthywealthy.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Call Us</p>
                          <p className="font-semibold">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-black/10 rounded-full flex items-center justify-center text-brand-black dark:text-white">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Visit Us</p>
                          <p className="font-semibold">77 Wealth Avenue, Wellness City, NY</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl">
                    <form className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">FullName</label>
                        <input type="text" className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 p-4 rounded-xl" placeholder="John Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                        <input type="email" className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 p-4 rounded-xl" placeholder="john@example.com" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                        <textarea className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 p-4 rounded-xl min-h-[150px]" placeholder="How can we help you?"></textarea>
                      </div>
                      <button className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-4 rounded-xl uppercase tracking-widest text-xs transition-colors">Send Message</button>
                    </form>
                  </div>
                </div>
              ) : title === 'About Us' ? (
                <div>
                  <h2 className="font-serif text-4xl mb-6">Our Philosophy</h2>
                  <p>In a world of increasing complexity, we believe that the two most important pillars of a successful life are often decoupled. One can have millions in the bank but be physically unable to enjoy it. Conversely, one can be in peak physical condition but burdened by financial stress.</p>
                  <p><strong>Healthy & Wealthy</strong> was founded to bridge this gap. We curate the latest scientific breakthroughs in longevity, nutrition, and fitness, alongside timeless principles of capital management, investing, and entrepreneurship.</p>
                  <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-gray-50 dark:bg-white/5 rounded-3xl">
                      <h3 className="text-4xl font-serif text-brand-green mb-2">50k+</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Daily Readers</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 dark:bg-white/5 rounded-3xl">
                      <h3 className="text-4xl font-serif text-brand-gold mb-2">15+</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Expert Writers</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 dark:bg-white/5 rounded-3xl">
                      <h3 className="text-4xl font-serif text-brand-green-dark mb-2">5k+</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Research Hours</p>
                    </div>
                  </div>
                  <h3>The Healthy & Wealthy Standard</h3>
                  <p>We don't publish "clickbait." Every article is researched, vetted, and designed to provide actual utility. Whether it's a 10-minute workout or a 10-year investment plan, our standard remains the same: <strong>Excellence.</strong></p>
                </div>
              ) : (
                <div>
                  <p>Last Updated: May 15, 2026</p>
                  <p>This is the official {title} of Healthy & Wealthy. We take your privacy and our ethical standards seriously. By using this website, you agree to comply with our terms. We ensure that your data is protected and our advice is presented for informational purposes only. Consult with qualified professionals before making major life decisions.</p>
                  <ul>
                    <li>Integrity in reporting</li>
                    <li>Transparency in affiliations</li>
                    <li>Security of user data</li>
                    <li>Commitment to excellence</li>
                  </ul>
                </div>
              )}
            </article>
          </div>

          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
