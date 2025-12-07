interface Highlight {
  id: string;
  metric: string;
  label: string;
  description: string;
}

interface HighlightsGridProps {
  items: Highlight[];
}

const HighlightsGrid = ({ items }: HighlightsGridProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-3xl border border-slate-200 bg-white shadow-md p-6 transition duration-300 hover:border-blue-300"
        >
          <span className="text-3xl font-semibold text-slate-900">
            {item.metric}
          </span>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {item.label}
          </p>
          <p className="mt-3 text-sm text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HighlightsGrid;
