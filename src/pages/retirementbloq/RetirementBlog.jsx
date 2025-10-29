// src/components/RetirementBlog.jsx
import React, { useEffect, useRef } from "react";
import { Calendar, User, TrendingUp, ArrowRight, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RetirementBlog() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const subscribeRef = useRef(null);

  const blogs = [
    {
      title: "Building the Retirement You Deserve",
      date: "October 29, 2025",
      author: "Velox Capital Insights",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "Discover how smart investing today can help you achieve financial freedom tomorrow. Learn practical tips to build a strong retirement portfolio with ease.",
      link: "/blog/building-the-retirement-you-deserve",
    },
    {
      title: "Why Time is Your Greatest Investment Asset",
      date: "October 20, 2025",
      author: "Velox Capital Team",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "Start early, stay consistent — discover the true power of compound growth and how every dollar today becomes tomorrow’s comfort.",
      link: "/blog/time-is-your-greatest-asset",
    },
    {
      title: "Top 5 Investment Strategies for a Secure Retirement",
      date: "October 10, 2025",
      author: "Velox Analysts",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1542228262-3d663b30634f?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "Explore proven strategies to diversify your investments and reduce risk while maximizing returns for a sustainable retirement plan.",
      link: "/blog/investment-strategies-retirement",
    },
  ];

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Header Title Reveal
        gsap.fromTo(
          headerRef.current.querySelector("h1"),
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          }
        );

        // Subtitle
        gsap.fromTo(
          headerRef.current.querySelector("p"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          }
        );

        // Blog Cards Stagger + Image Zoom
        cardsRef.current.forEach((card, i) => {
          const img = card.querySelector("img");
          const content = card.querySelector(".blog-content");

          // Card entrance
          gsap.fromTo(
            card,
            { y: 100, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.4)",
              delay: i * 0.2,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Image zoom on hover
          card.addEventListener("mouseenter", () => {
            gsap.to(img, { scale: 1.08, duration: 0.6, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });
          });

          // Parallax image
          gsap.to(img, {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });

          // Text fade in
          gsap.fromTo(
            content.children,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.6,
              delay: 0.3 + i * 0.2,
              scrollTrigger: {
                trigger: content,
                start: "top 90%",
              },
            }
          );
        });

        // Subscribe Section
        const subscribe = subscribeRef.current;
        gsap.fromTo(
          subscribe,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: subscribe,
              start: "top 85%",
            },
          }
        );

        // CTA Button Pulse
        gsap.to(subscribe.querySelector("button"), {
          scale: 1.05,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-12 px-4 sm:px-8 lg:px-16">
      {/* Header Section */}
      <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Plan Your Future with Confidence
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Insights and strategies to help you retire smarter — curated by the experts at{" "}
          <span className="text-teal-600 dark:text-teal-400 font-bold">Velox Capital</span>.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
            </div>
            <div className="p-6 space-y-4 blog-content">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">
                {blog.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} /> {blog.author}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{blog.excerpt}</p>
              <div className="flex justify-between items-center pt-2">
                <span className="flex items-center gap-1 text-teal-600 dark:text-teal-400 text-sm font-medium">
                  <TrendingUp size={16} /> {blog.readTime}
                </span>
                <a
                  href={blog.link}
                  className="flex items-center gap-1 text-teal-700 dark:text-teal-400 font-semibold hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <div
        ref={subscribeRef}
        className="mt-20 max-w-3xl mx-auto bg-gradient-to-br from-teal-500 to-emerald-600 dark:from-teal-700 dark:to-emerald-800 p-8 md:p-10 rounded-3xl shadow-2xl text-center text-white"
      >
        <Mail size={48} className="mx-auto mb-4 text-white/90" />
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Stay Ahead of the Market
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          Get weekly insights on retirement planning, compound growth, and market trends.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 px-5 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-100 transition transform hover:scale-105"
          >
            Subscribe Now
          </button>
        </form>
        <p className="mt-4 text-sm text-white/70">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}