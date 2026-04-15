import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Swift Sail Shipping | Industry Insights",
  description: "Expert insights on global logistics, shipping trends, customs regulations, and supply chain strategies from Swift Sail Shipping LLC.",
  alternates: {
    canonical: "https://swiftsailship.com/blog",
  },
};

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Navigating Global Shipping Challenges in 2026",
      excerpt: "Strategies for resilient supply chains amid tariff volatility, Red Sea disruptions, and rising freight costs.",
      date: "March 24, 2026",
      category: "Industry Insights",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Future of UAE Logistics: Trends to Watch",
      excerpt: "How digital transformation and sustainability are reshaping the maritime industry in the Gulf region.",
      date: "February 15, 2026",
      category: "Technology",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Understanding Customs Clearance in the GCC",
      excerpt: "A comprehensive guide to navigating customs procedures across Gulf Cooperation Council countries.",
      date: "January 28, 2026",
      category: "Education",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-swift-secondary to-swift-secondary/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-swift-secondary/90 to-swift-secondary/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-swift-primary/20 border border-swift-primary/40 text-swift-primary text-xs font-semibold tracking-widest uppercase mb-4 backdrop-blur-sm">
            Industry Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Blog & <span className="text-swift-primary">Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Stay informed with expert insights on global logistics, shipping trends, and supply chain strategies.
          </p>
        </div>
      </header>

      <main className="relative z-20 -mt-10">
        {/* Featured Article */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-swift-surface-light dark:bg-swift-surface-dark rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-swift-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-swift-primary/10 text-swift-primary text-xs font-semibold tracking-widest uppercase mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-swift-secondary dark:text-white mb-4">
                  Navigating Global Shipping Challenges in 2026
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Strategies for resilient supply chains amid tariff volatility, Red Sea disruptions, and rising freight costs.
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <span>March 24, 2026</span>
                  <span>•</span>
                  <span>8 min read</span>
                  <span>•</span>
                  <span className="text-swift-primary font-medium">Industry Insights</span>
                </div>
                <Link
                  href="/blog/navigating-global-shipping-challenges-2026"
                  className="inline-flex items-center text-swift-primary font-semibold hover:translate-x-1 transition-transform uppercase tracking-wider text-sm"
                >
                  Read Full Article <i className="fa-solid fa-arrow-right ml-2 text-xs" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-swift-primary to-swift-primary-hover rounded-xl p-8 text-center text-white">
                <i className="fas fa-globe text-6xl mb-4" />
                <p className="text-sm uppercase tracking-wider">Global Logistics</p>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <h2 className="text-2xl font-display font-bold text-swift-secondary dark:text-white mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-swift-surface-dark rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-swift-primary/10 to-swift-primary/5 p-8 text-center">
                  <i className="fas fa-newspaper text-4xl text-swift-primary" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="text-swift-primary font-medium">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-swift-secondary dark:text-white mb-3 group-hover:text-swift-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{article.date}</span>
                    <Link
                      href={`/blog/${article.id}`}
                      className="text-swift-primary font-semibold text-sm hover:translate-x-1 transition-transform"
                    >
                      Read <i className="fa-solid fa-arrow-right ml-1 text-xs" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-swift-background-light dark:bg-swift-surface-dark py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-swift-secondary dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Subscribe to our newsletter for the latest logistics insights and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-swift-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
              <button className="bg-swift-primary hover:bg-swift-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all uppercase tracking-wide text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
