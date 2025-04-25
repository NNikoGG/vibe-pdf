import { Pizza } from "lucide-react";
import { SummaryViewer } from "../summaries/summary-viewer";
import { MotionDiv, MotionH3 } from "@/components/common/motion-wrapper";

const DEMO_SUMMARY = `# Quick Overview
🎯 This is a quick overview of the document's content.
• 📄 Type: Business Plan
• 👥 For: Small Business Owners

# Key Highlights
• 🚀 Key Point 1: This is a key point that highlights the importance of the document.
• ⭐ Key Point 2: This is another key point that adds value to the document.
• 💫 Key Point 3: This is a key point that emphasizes the unique value of the document.

# Why It Matters
• 💡 This is a short, impactful paragraph explaining the real-world impact of the document.

# Main Points
• 🎯 Main insight or finding: This is the main takeaway of the document.
• 💪 Key strength or advantage: This is a key strength of the document.
• 🔥 Important outcome or result: This is an important outcome of the document.

# Pro Tips
• ⭐ First practical recommendation: This is a practical tip that can help readers.
• 💎 Second valuable insight: This is a valuable insight that adds value to the document.
• 🌟 Third actionable advice: This is an actionable advice that can help readers.

# Key Terms to Know
• 📚 First key term: This is a key term that readers should know.
• 🔍 Second key term: This is another key term that readers should know.

# Bottom Line
• 💫 The most important takeaway: This is the most important takeaway of the document.`;

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
              Watch how Sommaire transforms{" "}
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
