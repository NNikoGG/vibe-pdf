import { Pizza } from "lucide-react";
import { SummaryViewer } from "../summaries/summary-viewer";
import { MotionDiv, MotionH3 } from "@/components/common/motion-wrapper";

const DEMO_SUMMARY = `# Quick Overview
🎯 This is a quick overview of NextJS 15 and its new features.
• 📄 Type: Framework Release Notes
• 👥 For: Web Developers and Frontend Engineers

# Key Highlights
• 🚀 Key Point 1: Next.js 15 introduces partial pre-rendering (PPR) for even faster page loads.
• ⭐ Key Point 2: Improved Turbopack performance makes local development extremely fast.
• 💫 Key Point 3: Enhanced support for Server Components to build more dynamic and scalable apps.

# Why It Matters
• 💡 Next.js 15 empowers developers to create highly performant, dynamic websites with minimal complexity, improving user experience and developer efficiency.

# Main Points
• 🎯 Main insight or finding: Partial pre-rendering (PPR) bridges the gap between static and dynamic content delivery.
• 💪 Key strength or advantage: Turbopack delivers up to 10x faster local builds compared to Webpack.
• 🔥 Important outcome or result: Applications load faster and scale better with improved server-first architecture.

# Pro Tips
• ⭐ First practical recommendation: Leverage partial pre-rendering for critical content to maximize speed.
• 💎 Second valuable insight: Optimize your usage of Server Components for efficient data fetching.
• 🌟 Third actionable advice: Update to the latest version of Turbopack to benefit from all performance gains.

# Key Terms to Know
• 📚 Partial Pre-rendering (PPR): A method to combine static and dynamic page rendering for speed and flexibility.
• 🔍 Server Components: React components that run on the server, reducing client-side JavaScript.

# Bottom Line
• 💫 The most important takeaway: Next.js 15 is a major leap toward building faster, more scalable, and dynamic web applications effortlessly.`;

export default function DemoSection() {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <Pizza className="h-6 w-6 text-rose-500" />
          </div>
          <div className="text-center mb-16">
            <MotionH3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6"
            >
              Watch how VibePDF transforms{" "}
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                this Next.js course PDF
              </span>{" "}
              into an easy-to-read summary!
            </MotionH3>
          </div>
        </div>

        <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Summary Viewer */}
            <SummaryViewer summary={DEMO_SUMMARY} />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
