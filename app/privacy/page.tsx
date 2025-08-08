export const metadata = {
  title: "Privacy",
  description: "Privacy policy for Home Blend Kitchen."
};

export default function PrivacyPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p className="text-gray-700">
        Home Blend Kitchen is a local‑first MVP. We do not collect personal data on this site. Saved
        blends are stored locally in your browser (for example in localStorage).
      </p>
    </div>
  );
}