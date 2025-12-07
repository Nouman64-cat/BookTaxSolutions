import { FiLayers, FiClock } from "react-icons/fi";
import type { LearningPath } from "../../types";
import AccentButton from "../common/AccentButton";

interface LearningPathCardProps {
  path: LearningPath;
}

const LearningPathCard = ({ path }: LearningPathCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md p-6 transition duration-300 hover:border-blue-300">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-100 via-blue-50 to-transparent" />
      <div className="relative space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          <FiLayers />
          Career Track
        </span>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">
            {path.title}
          </h3>
          <p className="text-sm text-slate-600">{path.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {path.focus.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <FiClock />
            {path.estimatedTime}
          </span>
          <span>{path.courses.length} programs</span>
        </div>
        <AccentButton to="/paths" variant="secondary">
          View Path
        </AccentButton>
      </div>
    </div>
  );
};

export default LearningPathCard;
