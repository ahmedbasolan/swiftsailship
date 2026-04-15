import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<string, any> = {
  "navigating-global-shipping-challenges-2026": {
    title: "Navigating Global Shipping Challenges in 2026: Strategies for Resilient Supply Chains",
    date: "March 24, 2026",
    author: "Swift Sail Editorial Team",
    readTime: "8 min read",
    category: "Industry Insights",
    content: `
      <p class="text-lg leading-relaxed mb-8 font-light">
        The global shipping industry in 2026 faces a convergence of challenges that would have seemed improbable just a decade ago. From escalating trade wars and geopolitical flashpoints to persistent supply chain disruptions and environmental compliance pressures, businesses must adapt or risk being left behind. This article examines the key challenges and provides actionable strategies for building resilient supply chains.
      </p>

      <h2 class="text-2xl md:text-3xl text-swift-secondary dark:text-white mt-12 mb-6">The 2026 Shipping Landscape: A Perfect Storm</h2>
      <p class="mb-6">The global logistics landscape has undergone seismic shifts. The container shipping industry, valued at over $14 billion, is grappling with overcapacity, fluctuating demand, and a regulatory environment that grows more complex by the quarter.</p>
      
      <p class="mb-6">Several factors have converged to create what many industry analysts are calling a "perfect storm" for global trade:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>US tariff escalation</strong> reaching 145% on Chinese goods and 25% on steel/aluminum imports</li>
        <li><strong>Ongoing Red Sea disruptions</strong> forcing vessels on longer, costlier routes around the Cape of Good Hope</li>
        <li><strong>Labor shortages</strong> across port operations, trucking, and warehousing sectors</li>
        <li><strong>Environmental regulations</strong> including IMO 2030 targets driving fleet modernization costs</li>
        <li><strong>Cybersecurity threats</strong> targeting port infrastructure and logistics management systems</li>
      </ul>

      <h2 class="text-2xl md:text-3xl text-swift-secondary dark:text-white mt-12 mb-6">Tariff Volatility: The New Normal</h2>
      <p class="mb-6">Perhaps the most impactful development for global trade in 2026 has been the dramatic escalation in tariff activity. The United States has implemented sweeping tariff measures that have reshaped trade patterns.</p>
      
      <blockquote class="border-l-4 border-swift-primary pl-4 my-6 italic text-gray-700 dark:text-gray-300">
        "The cumulative effect of tariffs, counter-tariffs, and exemptions has created a regulatory maze that even experienced importers struggle to navigate. The key is not just understanding the tariffs—it's anticipating the next move."
      </blockquote>

      <p class="mb-6">For UAE-based businesses, this presents both challenges and opportunities. The UAE's extensive network of bilateral trade agreements and free trade zones offers potential advantages for businesses willing to restructure their supply chains.</p>

      <h2 class="text-2xl md:text-3xl text-swift-secondary dark:text-white mt-12 mb-6">Resilience Strategies for 2026</h2>
      <p class="mb-6">Building a resilient supply chain requires a multi-faceted approach:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Diversification:</strong> Spread risk across multiple suppliers, routes, and logistics providers</li>
        <li><strong>Real-time Visibility:</strong> Implement end-to-end tracking systems for complete supply chain transparency</li>
        <li><strong>Buffer Inventory:</strong> Maintain strategic stockpiles of critical components</li>
        <li><strong>Flexible Contracts:</strong> Negotiate terms that allow for route and mode changes</li>
        <li><strong>Partnership Approach:</strong> Build strong relationships with logistics partners who can provide creative solutions</li>
      </ul>

      <h2 class="text-2xl md:text-3xl text-swift-secondary dark:text-white mt-12 mb-6">The UAE Advantage</h2>
      <p class="mb-6">The UAE's strategic position offers unique advantages for businesses navigating these challenges:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Geographic Location:</strong> Situated at the crossroads of East-West trade routes</li>
        <li><strong>World-Class Infrastructure:</strong> Jebel Ali Port and extensive free zone network</li>
        <li><strong>Business-Friendly Regulations:</strong> Streamlined customs procedures and tax incentives</li>
        <li><strong>Expert Logistics Partners:</strong> Experienced freight forwarders familiar with global complexities</li>
      </ul>

      <h2 class="text-2xl md:text-3xl text-swift-secondary dark:text-white mt-12 mb-6">Conclusion</h2>
      <p class="mb-6">While the challenges facing global shipping in 2026 are significant, they also present opportunities for businesses that can adapt and innovate. By building resilient supply chains, leveraging strategic partnerships, and taking advantage of the UAE's unique position in the global trade network, businesses can not only weather the storm but emerge stronger.</p>
    `
  }
};

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  
  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Article Header */}
      <header className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-swift-secondary to-swift-secondary/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-swift-secondary/90 to-swift-secondary/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-swift-primary text-sm font-medium mb-6 hover:text-white transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-swift-primary/20 text-swift-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-swift-primary/40">
              {article.category}
            </span>
            <span className="text-gray-300 text-xs">
              <i className="far fa-clock mr-1"></i> {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-300 text-sm">
            <span>
              <i className="far fa-calendar mr-1"></i> {article.date}
            </span>
            <span>•</span>
            <span>
              <i className="far fa-user mr-1"></i> {article.author}
            </span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <main className="relative z-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <h3 className="text-sm font-bold text-swift-primary uppercase tracking-widest mb-4">Contents</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#landscape" className="toc-link block text-gray-500 dark:text-gray-400 hover:text-swift-primary transition-all">
                    The 2026 Landscape
                  </a>
                  <a href="#tariffs" className="toc-link block text-gray-500 dark:text-gray-400 hover:text-swift-primary transition-all">
                    Tariff Volatility
                  </a>
                  <a href="#strategies" className="toc-link block text-gray-500 dark:text-gray-400 hover:text-swift-primary transition-all">
                    Resilience Strategies
                  </a>
                  <a href="#uae-advantage" className="toc-link block text-gray-500 dark:text-gray-400 hover:text-swift-primary transition-all">
                    The UAE Advantage
                  </a>
                  <a href="#conclusion" className="toc-link block text-gray-500 dark:text-gray-400 hover:text-swift-primary transition-all">
                    Conclusion
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-swift-surface-light dark:bg-swift-surface-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 md:p-12 text-center">
            <h3 className="text-2xl font-display font-bold text-swift-secondary dark:text-white mb-4">
              Need Help with Your Supply Chain?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our experts can help you navigate the complex logistics landscape and build a resilient supply chain strategy.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center bg-swift-primary hover:bg-swift-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-swift-primary/30 uppercase tracking-wide text-sm"
            >
              Get a Consultation <i className="fa-solid fa-arrow-right ml-2 text-xs" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
