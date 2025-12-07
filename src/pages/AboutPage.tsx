import { FiCompass, FiLayers } from "react-icons/fi";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";

const values = [
  {
    icon: <FiCompass />,
    title: "Our Vision",
    description:
      "A world where businesses make smarter financial decisions powered by data and automation.",
  },
  {
    icon: <FiLayers />,
    title: "Our Mission",
    description:
      "To make finance effortless, insightful, and innovation-driven.",
  },
];

const AboutPage = () => {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="About Us"
        title="Your Growth Partner in the World of Finance"
        description={
          <p>
            We’re not your average accounting firm. BookTaxSolutions is a
            future-focused finance agency blending expertise, technology, and
            strategy to deliver measurable impact. With certified accountants,
            financial analysts, and tax professionals, we’re redefining how
            businesses handle their books, plan their taxes, and forecast their
            future.
          </p>
        }
      />

      <Container className="space-y-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6 text-sm text-slate-700 dark:text-slate-200"
            >
              <div className="flex items-center gap-3 text-blue-600 dark:text-indigo-200">
                <span className="text-lg">{value.icon}</span>
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {value.title}
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 dark:from-indigo-500/20 dark:via-indigo-500/10 dark:to-white/5 p-8 sm:p-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-indigo-200">
                Our origin
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Born inside an innovation lab, now serving builders worldwide.
              </h2>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                We started as an internal academy to upskill engineers,
                designers, and PMs shipping complex AI products. Word spread,
                and our curriculum evolved into an open platform for teams
                everywhere.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-700 dark:text-indigo-100">
              <p>
                • 48K+ learners spanning startups, enterprises, and
                consultancies.
              </p>
              <p>
                • 320+ projects and simulations reviewed by active
                practitioners.
              </p>
              <p>
                • Partnerships with CourFactory, Orbit Labs, Nebula Systems, and
                more.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
