import React from "react";
import { motion } from "framer-motion";
import { Calendar, Tag } from "lucide-react";
import blog1 from "@assets/Blogs/blog1.webp";
import blog2 from "@assets/Blogs/blog2.webp";
import blog3 from "@assets/Blogs/blog3.webp";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "consectetur, adipisci velit, sed quia non numquam eius",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour...",
    date: "Feb 21, 2025",
    category: "Tech",
    image: blog1,
  },
  {
    id: 2,
    title: "On the other hand, we denounce with righteous indignation",
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure...",
    date: "Feb 21, 2025",
    category: "International",
    image: blog2,
  },
  {
    id: 3,
    title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...",
    date: "Feb 21, 2025",
    category: "Lifestyle",
    image: blog3,
  },
];

const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({
  post,
  index,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden relative "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="overflow-hidden rounded-[15px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover rounded-[15px] transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div>
        <div className="flex justify-center items-center gap-3 mt-[-30px] text-gray-600 text-sm w-[250px] bg-[#fff] shadow-md py-1.5 absolute bottom-[42%] rounded-[30px] ml-12">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-[#CC7700]" />
            {post.date}
          </span>
          <span className="flex items-center gap-1 px-2 py-1 rounded-md">
            <Tag className="w-4 h-4 text-[#CC7700]" />
            {post.category}
          </span>
        </div>

        <h3 className="text-[20px] mt-12 font-bold text-[#0C0528] line-clamp-2 hover:text-[#CC7700] transition-colors">
          {post.title}
        </h3>
        <p className="text-[#747474] text-[16px] mt-4 line-clamp-2">
          {post.description}
        </p>

        <a
          href="#"
          className="text-[#CC7700] font-medium mt-3 inline-flex items-center gap-1 group underline"
          aria-label={`Read more about ${post.title}`}
        >
          Read More
        </a>
      </div>
    </motion.div>
  );
};

const Blog: React.FC = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2
            id="blog-heading"
            className="text-3xl font-extrabold text-[#0C0528]"
          >
            Our Latest Blog
          </h2>
          <a
            href="#"
            className="bg-[#CC7700] text-white py-2 px-6 rounded-lg font-medium hover:bg-[#AA6600] transition-all duration-300"
            aria-label="View more blog posts"
          >
            View More
          </a>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
