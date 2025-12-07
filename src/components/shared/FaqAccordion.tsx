import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { FaqItem } from "../../types";
import { cn } from "../../utils/cn";

interface FaqAccordionProps {
  items: FaqItem[];
}

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "rounded-3xl border border-slate-200 bg-white p-5 transition duration-200",
              isOpen &&
                "border-blue-300 bg-blue-50"
            )}
          >
            <button
              className="flex w-full items-center justify-between gap-3 text-left"
              onClick={() => setActiveId(isOpen ? null : item.id)}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {item.category}
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {item.question}
                </p>
              </div>
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition",
                  isOpen && "rotate-180 border-blue-400"
                )}
              >
                <FiChevronDown />
              </span>
            </button>
            {isOpen && (
              <p className="mt-4 text-sm text-slate-700">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
