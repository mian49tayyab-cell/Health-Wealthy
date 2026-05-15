import { Link } from 'react-router-dom';
import { Post } from '../types';
import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: Post;
  horizontal?: boolean;
}

export default function PostCard({ post, horizontal = false }: PostCardProps) {
  if (horizontal) {
    return (
      <motion.div 
        whileHover={{ y: -5 }}
        className="flex gap-6 group"
      >
        <Link to={`/post/${post.slug}`} className="w-1/3 aspect-square overflow-hidden rounded-xl bg-gray-100 flex-shrink-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        <div className="flex flex-col justify-center gap-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-green dark:text-brand-gold">
            {post.category}
          </span>
          <Link to={`/post/${post.slug}`}>
            <h3 className="font-serif text-lg font-bold leading-tight group-hover:text-brand-green dark:text-white transition-colors">
              {post.title}
            </h3>
          </Link>
          <div className="flex items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
            <span>{post.date}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex flex-col h-full group"
    >
      <Link to={`/post/${post.slug}`} className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 mb-4">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col flex-grow">
        <div className="flex gap-2 text-[10px] uppercase font-bold text-brand-gold mb-2">
          <span>{post.category}</span>
          <span>&bull;</span>
          <span>{post.date}</span>
        </div>
        <Link to={`/post/${post.slug}`}>
          <h2 className="font-serif text-xl font-bold mb-3 leading-tight group-hover:text-brand-emerald dark:text-white transition-colors italic">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </motion.div>
  );
}
