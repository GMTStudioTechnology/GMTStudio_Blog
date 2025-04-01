import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Bookmark,
  Calendar,
  ChevronRight,
  Folder,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Blog_pic from "../../assets/Blog.png";

type Category = "Tech" | "AI" | "GMTStudio" | "Blog";

// Post interface
export interface ListItemProps {
  category: Category;
  title: string;
  description: string;
  date: string;
  image?: string;
  author?: string;
  link: string;
}

// Configuration for each category style.  
const categoryConfig: Record<Category, { text: string; bg: string }> = {
  Tech: { text: "text-emerald-400", bg: "bg-emerald-500/10" },
  AI: { text: "text-violet-400", bg: "bg-violet-500/10" },
  GMTStudio: { text: "text-sky-400", bg: "bg-sky-500/10" },
  Blog: { text: "text-pink-400", bg: "bg-pink-500/10" },
};

const ListItem: React.FC<ListItemProps> = ({
  category,
  title,
  description,
  date,
  image,
  author,
  link,
}) => {
  const config =
    categoryConfig[category] || { text: "text-gray-400", bg: "bg-gray-500/10" };
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <Link to={link} className="block">
      <motion.article
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="relative flex items-center gap-6 rounded-xl border border-zinc-800 p-5 bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 shadow-lg font-mono"
      >
        {image && (
          <img
            src={image}
            alt={title}
            className="w-28 h-28 object-cover rounded-lg"
          />
        )}

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white hover:underline">
            {title}
          </h3>
          {author && <p className="text-sm text-zinc-400">by {author}</p>}

          <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
            {description}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span
              className={`px-3 py-1 rounded-lg text-sm font-medium ${config.bg} ${config.text}`}
            >
              {category}
            </span>
            <div className="flex items-center text-sm text-zinc-500 gap-2">
              <Calendar className="w-4 h-4 opacity-70" />
              {date}
              <ChevronRight className={`${config.text} w-5 h-5`} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              // Prevent navigation on button click
              e.stopPropagation();
            }}
            className="text-zinc-400 hover:text-white transition"
            aria-label="Share"
          >
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
            }}
            className={`transition ${
              isBookmarked ? "text-yellow-400" : "text-zinc-400 hover:text-white"
            }`}
            aria-label="Bookmark"
          >
            <Bookmark
              className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
            />
          </motion.button>
        </div>
      </motion.article>
    </Link>
  );
};

interface SidebarProps {
  categories: (Category | "All")[];
  posts: ListItemProps[];
  selectedCategory: Category | "All";
  setSelectedCategory: (cat: Category | "All") => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  posts,
  setSelectedCategory,
  selectedCategory,
}) => {
  // Track which categories are expanded.
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});
  // Track number of visible nested items per category.
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({});

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
    setVisibleCounts((prev) => ({
      ...prev,
      [cat]: prev[cat] ?? 5,
    }));
    // Also update the selected category for filtering the content.
    setSelectedCategory(cat as Category | "All");
  };

  // Helper function to get posts corresponding to the given category.
  const getPostsForCategory = (cat: Category | "All") => {
    if (cat === "All") return posts;
    return posts.filter((p) => p.category === cat);
  };

  return (
    <aside className="w-64 p-4 bg-black  font-mono fixed h-full pt-24 overflow-y-auto hidden md:block">
      {/* Sidebar header */}
      <div className="flex items-center gap-2 mb-4">
        <img
          src={Blog_pic}
          alt="鴨的研究室"
          className="w-8 h-8 object-cover rounded-full border border-white"
        />
        <h2 className="text-xl font-bold text-white">鴨的研究室</h2>
      </div>

      <ul className="space-y-3">
        {categories.map((cat) => {
          const postsForCategory = getPostsForCategory(cat);
          const visibleCount = visibleCounts[cat] || 5;
          const visiblePosts = postsForCategory.slice(0, visibleCount);
          const hasMore = visibleCount < postsForCategory.length;
          return (
            <li key={cat} className="pb-2 border-b border-white">
              <button
                onClick={() => toggleCategory(cat)}
                className={`flex items-center justify-between w-full p-2 rounded transition text-white ${
                  selectedCategory === cat
                    ? "bg-gray-700"
                    : "bg-zinc-900 hover:bg-zinc-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Folder className="w-5 h-5" />
                  <span>{cat}</span>
                </div>
                {expandedCategories[cat] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {expandedCategories[cat] && (
                <ul className="mt-2 pl-4 space-y-1">
                  {visiblePosts.map((post, idx) => (
                    <li key={idx}>
                      <Link
                        to={post.link}
                        className="block p-2 bg-zinc-800 hover:bg-zinc-700 rounded border border-white text-sm text-white"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                  {hasMore ? (
                    <li>
                      <button
                        onClick={() =>
                          setVisibleCounts((prev) => ({
                            ...prev,
                            [cat]: visibleCount + 5,
                          }))
                        }
                        className="w-full text-left text-sm p-1 text-emerald-400 hover:text-emerald-500"
                      >
                        Show more
                      </button>
                    </li>
                  ) : (
                    postsForCategory.length > 0 && (
                      <li className="text-sm p-1 text-zinc-500">
                        No more things here.
                      </li>
                    )
                  )}
                  {postsForCategory.length === 0 && (
                    <li className="text-sm p-1 text-zinc-500">
                      No posts in this category.
                    </li>
                  )}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<Category | "All">("All");

  // Final posts list.
  const posts: ListItemProps[] = [
    {
      category:"Blog",
      title: "C++ Programming - Lottery system",
      description: "This blog page is about the C++ programming.",
      date: "April 01, 2025",
      image: Blog_pic,
      author:"Alston Chang",
      link: "/blog3",
    },
    {
      category: "AI",
      title: "About our Artificial Intelligence research ",
      description: "In this blog page, we would discuss about our AI research.",
      date: "March 07, 2025",
      image: Blog_pic,
      author: "Alston Chang",
      link: "/blog2",
    },
    {
      category: "Blog",
      title: "Setting up Blog Page",
      description: "This website is my personal blog page.",
      date: "Feb 17, 2025",
      image: Blog_pic,
      author: "Alston Chang",
      link: "/blog1",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sidebar categories.
  const categories: (Category | "All")[] = ["All", "Tech", "AI", "GMTStudio", "Blog"];

  return (
    <div className="flex h-screen font-mono bg-black">
      {/* Desktop Sidebar */}
      <Sidebar
        categories={categories}
        posts={posts}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content Area */}
      <div className="flex-1 ml-0 md:ml-64 bg-black overflow-y-auto pt-24">
        {/* Mobile Header: visible only on small screens */}
        <div className="md:hidden mb-4">
          <div className="flex flex-col gap-2 bg-black border border-white p-4">
            <div className="flex items-center gap-2">
              <img
                src={Blog_pic}
                alt="鴨的研究室"
                className="w-8 h-8 rounded-full border border-white"
              />
              <h2 className="text-xl font-bold text-white">鴨的研究室</h2>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Category | "All")}
                className="w-full p-2 rounded bg-zinc-900 text-white border border-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-6 px-4">
          <input
            type="search"
            placeholder="Search posts..."
            className="w-full rounded-lg border border-white bg-black px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Blog Posts */}
        <div className="space-y-6 px-4">
          {filteredPosts.map((post, idx) => (
            <ListItem key={idx} {...post} />
          ))}
          {filteredPosts.length === 0 && (
            <p className="text-zinc-400">No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;