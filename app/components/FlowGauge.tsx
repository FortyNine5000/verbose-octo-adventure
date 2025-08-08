type FlowRisk = {
  score: number;
  label: "Low" | "Moderate" | "Higher";
};

export function getFlowRisk(fiber: number, fat: number): FlowRisk {
  const score = Math.round(fiber * 10 + fat * 2);
  let label: FlowRisk["label"] = "Low";
  if (score > 30) label = "Moderate";
  if (score > 50) label = "Higher";
  return { score, label };
}

export default function FlowGauge({ fiber, fat }: { fiber: number; fat: number }) {
  const { score, label } = getFlowRisk(fiber, fat);
  return (
    <div className="mt-4 text-sm">
      <p className="font-medium">Flow Risk: <span className="font-bold">{label}</span> ({score}/100)</p>
      {(fiber > 5 || fat > 12) && (
        <p className="text-red-600">⚠️ This blend may be harder to flow (fiber or fat too high).</p>
      )}
      <p className="text-xs text-hbk-slate mt-1">Not medical advice.</p>
    </div>
  );
}
