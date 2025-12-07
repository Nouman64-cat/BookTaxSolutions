import { FiClock, FiUsers, FiPlayCircle, FiStar } from "react-icons/fi";
import type { Course } from "../../types";
import AccentButton from "../common/AccentButton";

interface CourseCardProps {
  course: Course;
  variant?: "default" | "compact";
}

const CourseCard = ({ course, variant = "default" }: CourseCardProps) => {
  const courseSlug = course.slug ?? course.id;
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md p-6 transition duration-300 hover:border-blue-300 hover:shadow-xl">
      <div className="absolute inset-x-6 top-6 flex justify-between text-xs uppercase tracking-[0.3em] text-blue-600">
        <span>{course.category ?? "General"}</span>
        {course.badgeLabel && (
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-600">
            {course.badgeLabel}
          </span>
        )}
      </div>
      <div className="aspect-[16/10] overflow-hidden rounded-2xl">
        <img
          src={
            course.imageUrl ??
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
          }
          alt={course.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">
            {course.title}
          </h3>
          {course.shortDescription && (
            <p className="text-sm text-slate-600 line-clamp-3">
              {course.shortDescription}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
          {course.duration && (
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <FiClock />
              <span>{course.duration}</span>
            </div>
          )}
          {course.lessons != null && (
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <FiPlayCircle />
              <span>{course.lessons} lessons</span>
            </div>
          )}
          {course.students != null && (
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <FiUsers />
              <span>{course.students.toLocaleString()} learners</span>
            </div>
          )}
          {course.rating != null && (
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <FiStar className="text-amber-500" />
              <span>{course.rating.toFixed(2)} rating</span>
            </div>
          )}
        </div>
        {variant === "default" && (
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex -space-x-3 overflow-hidden">
              {(course.instructors ?? [])
                .slice(0, 3)
                .map((instructor, index) => (
                  <img
                    key={instructor.id ?? `${courseSlug}-instructor-${index}`}
                    src={
                      instructor.avatar ??
                      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=60"
                    }
                    alt={instructor.name}
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
            </div>
            <AccentButton to={`/courses/${courseSlug}`} className="shrink-0">
              View Program
            </AccentButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
