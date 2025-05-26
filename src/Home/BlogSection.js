import React from "react";
import "./BlogSection.css";

// Images
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const blogs = [
  {
    img: blog1,
    title: "The Difference Between Artificial & Naturally Alkaline Water",
    desc: "You may have heard people mention the phrase “artificially alkaline water” and wondered what they meant by that. Isn’t water either alkaline or….",
    link: "#"
  },
  {
    img: blog2,
    title: "Genki Hou!",
    desc: "During our ambassador retreat to the Big Island this year, our seven Waiākea ambassadors were able to get their hands in some community giveback work, and we mean…",
    link: "#"
  },
  {
    img: blog3,
    title: "Hawaiian Kona Coffee: Blends & Percentages",
    desc: "Let’s explore one of the most talked-about coffee varieties—Kona coffee! We’ll dive into what makes Kona so special and take a closer look at how percentages in coffee…",
    link: "#"
  }
];

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-title">EXPLORE OUR BLOGS</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt={`Blog ${index}`} className="blog-img" />
            <h3 className="blog-heading">{blog.title}</h3>
            <p className="blog-desc">{blog.desc}</p>
            <a className="blog-link" href={blog.link}>
              Read More <span>→</span>
            </a>
          </div>
        ))}
      </div>
      <button>read our blog</button>
    </div>
  );
};

export default BlogSection;
