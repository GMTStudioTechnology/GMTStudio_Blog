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
            <span className="text-white">Setting up Blog Page</span>
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
                Yo! (≧▽≦) I'm the CEO and cofounder of GMTStudio, and I'm super hyped to finally introduce our new personal blog website! This is the place where we spill the tea ☕️ on our latest discoveries, research breakthroughs, and all the crazy projects we've been cooking up in the lab. Whether it's some experimental AI model or just our random chaotic thoughts, this is where it all goes down.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Why This Blog Even Exists? (¬‿¬)</h2>
            
            <div className="grid grid-cols-2 gap-6 my-8">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-emerald-600 to-cyan-600">
                <div className="w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.4)_100%)]"></div>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-orange-600 to-pink-600">
                <div className="w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.4)_100%)]"></div>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-6">
              The old website... well, let's just say it looked like a potato (╥﹏╥) and was eating up way too much of our official website's resources. So we decided to break free from that mess and build this dedicated blog site from scratch. Now we have a clean, sleek, and optimized space just for all the geeky stuff we're working on!
            </p>

            <p className="text-zinc-300 leading-relaxed mb-6">
                Initially, this blog was meant only for project updates, but we figured... why stop there? (¬‿¬) This space is gonna be our digital brain dump where we share everything — what we've learned, tech rants, mind-blowing discoveries, and probably some weird late-night thoughts too. 
                We want to document every small step of our journey, not just for you guys, but also for ourselves. Let's build this knowledge vault together! ヾ(≧▽≦*)o
            </p>
          </article>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPost;
