export const metadata = {
  title: "Privacy",
  description: "Privacy policy for Home Blend Kitchen."
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6 space-y-4">
      <h1 className="text-3xl font-bold text-hbk-slate dark:text-hbk-oat">Privacy Policy</h1>
      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        Home Blend Kitchen is built with privacy in mind. We don’t require accounts or logins,
        and we never send your data off of your device. Blends you create are stored in your
        browser using localStorage and never transmitted to our servers.
      </p>
    </div>
  );
}