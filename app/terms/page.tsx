export const metadata = {
  title: "Terms",
  description: "Terms of use for Home Blend Kitchen."
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6 space-y-4">
      <h1 className="text-3xl font-bold text-hbk-slate dark:text-hbk-oat">Terms of Use</h1>
      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        This site is provided “as‑is” for informational purposes and does not constitute medical
        advice. By using Home Blend Kitchen, you agree to consult with your healthcare providers
        for personalised guidance and to validate any information presented here before applying
        it to your situation.
      </p>
    </div>
  );
}