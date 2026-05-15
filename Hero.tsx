import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';
import { CATEGORIES } from '../data/categories';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function Hero() {
  const featuredPost = POSTS.find(p => p.featured) || POSTS[0];
  const secondaryFeatured = POSTS.filter(p => !p.featured).slice(0, 2);

  return (
    <section className="bg-brand-bg dark:bg-[#121212] py-0 px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:h-[500px]">
          {/* Main Hero Card */}
          <motion.div 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 relative group cursor-pointer overflow-hidden bg-brand-emerald"
          >
            <Link to={`/post/${featuredPost.slug}`}>
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-dark via-brand-emerald-dark/40 to-transparent flex flex-col justify-end p-8 lg:p-16">
                <span className="inline-block bg-brand-gold text-white px-3 py-1 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold mb-4 w-fit">
                  Featured Article
                </span>
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight group-hover:text-brand-gold transition-colors">
                  {featuredPost.title}
                </h1>
                <p className="text-white/70 text-sm md:text-base max-w-xl mb-8 line-clamp-2">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-white/50 text-[10px] uppercase font-bold tracking-widest">
                  <span className="flex items-center gap-2">By {featuredPost.author.name}</span>
                  <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                  <span className="flex items-center gap-2">5 Min Read</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side Hero Columns */}
          <div className="lg:col-span-4 flex flex-col">
            {secondaryFeatured.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className={`flex-grow relative group overflow-hidden ${index === 0 ? 'border-b border-white/10' : ''}`}
              >
                <Link to={`/post/${post.slug}`} className="block h-full relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                   <div className="absolute inset-0 bg-brand-emerald/20 group-hover:bg-brand-gold/10 transition-colors"></div>
                  <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-brand-emerald-dark/90 to-transparent">
                    <span className="text-brand-gold text-[10px] uppercase font-bold tracking-[0.2em] mb-2 block">
                      {post.category}
                    </span>
                    <h2 className="font-serif text-xl md:text-2xl text-white font-bold leading-tight group-hover:text-brand-gold transition-colors">
                      {post.title}
                    </h2>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Pill Bar */}
        <div className="mt-12 flex flex-wrap gap-3 overflow-x-auto pb-4 scrollbar-hide px-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/category/${cat.slug}`}
              className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-brand-gold bg-white dark:bg-white/5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
