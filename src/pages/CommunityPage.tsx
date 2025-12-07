import { FiUsers, FiVideo, FiMessageCircle, FiCheck } from "react-icons/fi";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import AccentButton from "../components/common/AccentButton";

const communityHighlights = [
  {
    icon: <FiUsers />,
    title: "Global cohorts",
    description:
      "Connect with product builders across 92 countries in curated cohorts aligned by skill level.",
  },
  {
    icon: <FiVideo />,
    title: "Live sessions",
    description:
      "Attend weekly live critiques, code walkthroughs, and design showcases hosted by industry mentors.",
  },
  {
    icon: <FiMessageCircle />,
    title: "Peer circles",
    description:
      "Join themed peer circles to practice interviews, review portfolios, and share launch retrospectives.",
  },
];

const CommunityPage = () => {
  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Community"
        title="Learn in public, build together, and stay accountable."
        description={
          <p>
            BookTaxSolution Community is where learning sticks. Participate in
            live events, share progress updates, and receive directional
            feedback from peers and mentors to keep momentum high.
          </p>
        }
        actions={<AccentButton to="/contact">Join waitlist</AccentButton>}
      />

      <Container className="space-y-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {communityHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm"
            >
              <div className="flex items-center gap-3 text-blue-600">
                <span className="text-lg">{item.icon}</span>
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {item.title}
                </p>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* Why Choose BookTaxSolutions Section */}
        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">
            Why Choose BookTaxSolutions?
          </h2>
          <ul className="space-y-4 text-base text-slate-700">
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500 text-lg" />{" "}
              <b>Certified Experts</b> — QuickBooks ProAdvisors, Xero Certified,
              Tax Professionals
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500 text-lg" />{" "}
              <b>Data-Driven Insights</b> — From monthly reports to AI-driven
              forecasting
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500 text-lg" />{" "}
              <b>Tailored for You</b> — Scalable solutions for startups and
              enterprises
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500 text-lg" />{" "}
              <b>Security First</b> — Your data is encrypted, confidential, and
              secure
            </li>
            <li className="flex items-center gap-2">
              <FiCheck className="text-green-500 text-lg" />{" "}
              <b>Transparent Pricing</b> — No hidden fees, just results that
              matter
            </li>
          </ul>
        </section>
      </Container>
    </div>
  );
};

export default CommunityPage;
