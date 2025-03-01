import React from 'react';
import { FadeIn } from '../components/animations/FadeIn';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-600">Latest updates, guides, and insights</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.2}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}