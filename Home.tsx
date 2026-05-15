import { useSearchParams, useParams, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { POSTS } from '../data/posts';
import PostCard from '../components/PostCard';
import Sidebar from '../components/Sidebar';
import { CATEGORIES } from '../data/categories';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const [searchParams] = useSearchParams();
  const { category } = useParams();
  const search = searchParams.get('search');

  let filteredPosts = POSTS;
  if (category) {
    filteredPosts = POSTS.filter(p => p.category.toLowerCase().replace(' ', '-') === category);
  }
  if (search) {
    filteredPosts = POSTS.filter(p => 
      p.title.toLowerCase().includes(search.toLowerCase()) || 
      p.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  const categoryData = CATEGORIES.find(c => c.slug === category);

  return (
    <div className="bg-brand-bg dark:bg-[#121212] transition-colors duration-300">
      {!category && !search && <Hero />}
      
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 lg:border-r lg:border-gray-100 lg:dark:border-white/10 lg:pr-12">
            <div className="mb-12 flex justify-between items-end">
              <div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">
                  Dispatch <ChevronRight size={10} /> {categoryData ? categoryData.name : search ? `Query: ${search}` : 'Latest Feed'}
                </div>
                <h2 className="editorial-heading text-2xl">
                  {categoryData ? categoryData.name : search ? `Results for "${search}"` : 'Latest Insights'}
                </h2>
              </div>
              <Link to="/about" className="text-[10px] uppercase tracking-widest font-bold text-brand-gold hover:underline">
                View Archive &rarr;
              </Link>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {filteredPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white border border-gray-100 rounded-2xl">
                <h3 className="font-serif text-2xl mb-4 italic">The archive is silent.</h3>
                <p className="text-gray-500 text-sm">Narrow your search or explore a new perspective.</p>
              </div>
            )}

            {/* Pagination Placeholder */}
            {filteredPosts.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-100 flex justify-start gap-4">
                <button className="text-[10px] uppercase tracking-widest font-bold text-brand-emerald">Page 01</button>
                <button className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-brand-gold transition-colors">Page 02</button>
                <button className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-brand-gold transition-colors">Page 03</button>
              </div>
            )}
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
