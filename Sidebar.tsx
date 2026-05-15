import { POSTS } from '../data/posts';
import { CATEGORIES } from '../data/categories';
import PostCard from './PostCard';
import { Mail, TrendingUp, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const trendingPosts = POSTS.filter(p => p.trending).slice(0, 4);

  return (
    <aside className="flex flex-col gap-12">
      {/* Newsletter */}
      <div className="bg-brand-emerald text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
        <h3 className="font-serif text-2xl mb-2 italic flex items-center gap-2 relative z-10">
          Newsletter
        </h3>
        <p className="text-white/70 text-[11px] uppercase tracking-widest font-bold mb-6 relative z-10">
          Join 50k+ Readers getting smarter
        </p>
        <form className="flex flex-col gap-3 relative z-10">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-4 text-xs mb-1 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 ring-brand-gold"
          />
          <button className="bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-3 rounded-lg text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95">
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-gray-200 pb-2">
          Trending Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.slice(0, 8).map(cat => (
            <Link 
              key={cat.slug} 
              to={`/category/${cat.slug}`}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[11px] font-semibold hover:border-brand-gold hover:text-brand-gold transition-all shadow-sm"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Trending Posts */}
      <div className="flex-1 overflow-hidden">
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 border-b border-gray-200 pb-2">
          Most Popular
        </h3>
        <div className="space-y-6">
          {trendingPosts.map(post => (
            <div key={post.id} className="flex gap-4 group cursor-pointer">
              <Link to={`/post/${post.slug}`} className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </Link>
              <div className="flex flex-col justify-center">
                <Link to={`/post/${post.slug}`}>
                  <h4 className="text-sm font-bold leading-snug group-hover:text-brand-gold transition-colors line-clamp-2 italic font-serif">
                    {post.title}
                  </h4>
                </Link>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold">{post.category}</span>
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest">1.2k Views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
