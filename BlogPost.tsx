import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../data/posts';
import Sidebar from '../components/Sidebar';
import { Bookmark, Share2, MessageCircle, Clock, ChevronRight, User, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find(p => p.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-serif mb-4">Under Construction</h1>
        <p className="text-gray-500">The wisdom you seek is being prepared by our editors.</p>
        <Link to="/" className="text-brand-green underline mt-8 inline-block">Back to Dashboard</Link>
      </div>
    );
  }

  const relatedPosts = POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <div className="dark:bg-[#121212] transition-colors duration-300">
      {/* Article Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block bg-brand-gold text-brand-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
                {post.category}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-8 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-8 text-white/80 text-sm uppercase tracking-widest font-semibold">
                <span className="flex items-center gap-2"><User size={18} className="text-brand-gold" /> {post.author.name}</span>
                <span className="flex items-center gap-2"><Clock size={18} className="text-brand-gold" /> {post.date}</span>
                <span className="flex items-center gap-2"><MessageCircle size={18} className="text-brand-gold" /> 12 Comments</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-12 border-b border-gray-100 pb-4">
              Home <ChevronRight size={14} /> {post.category} <ChevronRight size={14} /> Article
            </div>

            <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-brand-green dark:prose-a:text-brand-gold prose-img:rounded-3xl">
              <div className="italic text-2xl text-gray-500 mb-12 border-l-4 border-brand-gold pl-6 py-2 leading-relaxed font-serif">
                {post.excerpt}
              </div>
              
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* FAQS */}
              {post.faqs && (
                <div className="mt-16 bg-gray-50 dark:bg-white/5 p-10 rounded-3xl border border-gray-100 dark:border-white/10">
                  <h2 className="text-3xl font-serif mb-8">Executive FAQs</h2>
                  <div className="flex flex-col gap-8">
                    {post.faqs.map((faq, i) => (
                      <div key={i} className="border-b border-gray-200 dark:border-white/10 pb-6 last:border-0">
                        <h4 className="font-bold text-lg mb-2 text-brand-green dark:text-brand-gold">{faq.question}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-gray-500">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="font-bold uppercase tracking-widest text-xs">Share Knowledge:</span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-brand-gold transition-colors"><Facebook size={16} /></button>
                    <button className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-brand-gold transition-colors"><Twitter size={16} /></button>
                    <button className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-brand-gold transition-colors"><LinkIcon size={16} /></button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-gray-200 transition-colors uppercase"><Bookmark size={16} /> Save</button>
                  <button className="flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-brand-green-dark transition-colors uppercase"><Share2 size={16} /> Share</button>
                </div>
              </div>
            </article>

            {/* Author Bio */}
            <div className="mt-20 bg-brand-black text-white p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
              <img src={post.author.avatar} alt={post.author.name} className="w-32 h-32 rounded-full border-4 border-brand-gold" />
              <div>
                <h3 className="font-serif text-3xl mb-2">{post.author.name}</h3>
                <p className="text-gray-400 leading-relaxed italic mb-4">Senior Health Consultant and Wealth Strategist</p>
                <p className="text-gray-300 text-sm">Dedicated to exploring the intersections of biological longevity and financial sustainability. Over 15 years of helping executives optimize their lives.</p>
              </div>
            </div>

            {/* Comments Placeholder */}
            <div className="mt-20">
              <h3 className="font-serif text-3xl mb-8 flex items-center gap-3">
                <MessageCircle size={32} className="text-brand-green" /> Reader Dialogue
              </h3>
              <div className="bg-white border border-gray-100 p-8 rounded-3xl">
                <p className="text-gray-500 italic mb-8">Join the conversation. What are your thoughts on this strategy?</p>
                <textarea 
                  placeholder="Share your perspective..." 
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 min-h-[150px] mb-6 focus:outline-none focus:ring-1 focus:ring-brand-green"
                ></textarea>
                <button className="bg-brand-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-gold transition-colors">Post Comment</button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
