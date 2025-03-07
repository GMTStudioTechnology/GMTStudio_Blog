import { ChevronRight, Clock, Share2, BookmarkPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import blog from '../../../../assets/Blog.png';

const BlogPost = () => {
  return (
    <div className="bg-black text-white">
      {/* Navigation Breadcrumb */}
      <nav className="px-4 py-3 pt-24 bg-zinc-900/50 backdrop-blur-lg fixed top-0 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-zinc-400">
          <a href="/blog" className="hover:text-white cursor-pointer transition">Blog</a>
            <ChevronRight size={16} />
              <a href="/blog" className="hover:text-white cursor-pointer transition">Technology</a>
            <ChevronRight size={16} />
            <span className="text-white">About Artificial intelligence</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <header className="mb-12 pt-8">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Setting Up Blog page
            </h1>
            
            <div className="flex items-center justify-between text-zinc-400 text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>? min read</span>
                </div>
                <span>•</span>
                <span>Feb 17, 2025</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="hover:text-white transition">
                  <Share2 size={20} />
                </button>
                <button className="hover:text-white transition">
                  <BookmarkPlus size={20} />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600">
            <div className="w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.4)_100%)]">
                <img src={blog} alt="blog" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert max-w-none">
            <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                Yo! (≧▽≦) I'm the CEO and cofounder of GMTStudio, and I'm here to announce our research about our very own Artificial intelligence model - Mazs AI T-1 
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Why we choose "why we choose T-1 as our Model name </h2>
            
            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-emerald-600 to-cyan-600">
                <div className="w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.4)_100%)]"></div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-orange-600 to-pink-600">
                <div className="w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.4)_100%)]"></div>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-6">
                T Series of our AI models are name after the word " Technology" , due to the fact that AI is a stuff that will bring the next generation of technology, and we also want to let our model help more and more people around the world, so we use T and number as the version of our AI model.
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
                Mazs AI T series will be the natural language processing model that can answer us in simple conversation, we want to make people feels like they are really talking to a human, but acutally a robot. Also, we are trying to make our AI model WITHOUT any help of existing plugin or library like tensorflow or pytorch, we want to make our AI model from scratch, so we can have a better understanding of how AI works.
                We would like to share our new progress of out AI model in the future, stay tuned and find out more. 
            </p>
          </article>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPost;
