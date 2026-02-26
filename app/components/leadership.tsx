"use client";

export default function LeadershipImpact() {
  return (
    <section className="relative py-28 text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Frontend Expertise
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Building modern, scalable, and high-performance user interfaces
            using the latest frontend technologies and best practices.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Card 1 */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4">
              Modern UI Development
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Developed responsive and pixel-perfect interfaces using 
              React.js, Next.js, and Tailwind CSS. Focused on clean layouts, 
              reusable components, and smooth user experience across devices.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4">
              API Integration & State Management
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Integrated REST APIs, handled authentication flows, and managed
              application state efficiently using modern React patterns and
              best practices for scalable frontend architecture.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4">
              Performance Optimization
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Improved application speed through code-splitting, lazy loading,
              optimized images, and efficient rendering techniques to ensure
              smooth performance in production environments.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold mb-4">
              Tools & Workflow
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Experienced with Git & GitHub, Figma design handoff, 
              RESTful APIs, responsive debugging, deployment workflows, 
              and maintaining clean, production-ready codebases.
            </p>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-24 text-center">
          <p className="text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            “Frontend development is about transforming ideas into interactive,
            fast, and accessible digital experiences.”
          </p>
        </div>
      </div>
    </section>
  );
}