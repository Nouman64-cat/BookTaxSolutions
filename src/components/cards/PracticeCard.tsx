import { FiTrendingUp, FiTrendingDown, FiClock } from "react-icons/fi";
import type { PracticeSet } from "../../types";
import { cn } from "../../utils/cn";

interface PracticeCardProps {
  topic: PracticeSet;
  highlighted?: boolean;
}

const PracticeCard = ({ topic, highlighted = false }: PracticeCardProps) => {
  const TrendIcon = topic.trend === "down" ? FiTrendingDown : FiTrendingUp;

  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10",
        highlighted && "border-blue-400",
      )}
    >
      <div className="flex items-start justify-between">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-blue-600 transition-colors">
          {topic.tag ?? "Practice"}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
            topic.trend === "down"
              ? "bg-rose-100 text-rose-600"
              : "bg-emerald-100 text-emerald-600",
          )}
        >
          <TrendIcon />
          {topic.accuracy != null ? `${topic.accuracy}%` : "New"}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{topic.title}</h3>
      {topic.description && (
        <p className="mt-2 text-xs text-slate-600 line-clamp-2">{topic.description}</p>
      )}
      <p className="mt-2 text-sm text-slate-600">
        {topic.questions != null ? `${topic.questions} curated MCQs` : "Adaptive MCQs"} •{" "}
        <span className="inline-flex items-center gap-1 text-blue-600">
          <FiClock />
          {topic.estimatedTime ?? "Approx. 20 mins"}
        </span>
      </p>
      <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600 transition-colors">
        <span>Adaptive feedback enabled</span>
        <span className="font-semibold text-blue-600">Try Quiz</span>
      </div>
    </div>
  );
};

export default PracticeCard;
