import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3">
          <Link to={`/blog/${post.id}`} className="hover:text-green-600 transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(post.date).toLocaleDateString()}
          </div>
        </div>
        <Link
          to={`/blog/${post.id}`}
          className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
        >
          Read More <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </motion.article>
  );
}