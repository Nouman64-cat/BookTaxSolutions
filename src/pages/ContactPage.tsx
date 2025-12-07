import { useState, type FormEvent } from "react";
import {
  FiSend,
  FiPhone,
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import AccentButton from "../components/common/AccentButton";
import { sendContactEmail } from "../services/emailService";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const result = await sendContactEmail({ name, email, message });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });
      event.currentTarget.reset();
    } else {
      setSubmitStatus({
        type: "error",
        message: result.message,
      });
    }
  };

  return (
    <div className="space-y-16">
      <PageHeader
        eyebrow="Contact"
        title="Let's design your learning journey."
        description={
          <p>
            Have questions about programs, enterprise rollouts, or
            accessibility? Drop us a note and a learner success advisor will
            respond within a business day.
          </p>
        }
      />

      <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-lg"
        >
          {submitStatus.type && (
            <div
              className={`rounded-2xl border p-4 ${
                submitStatus.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              <div className="flex items-start gap-3">
                {submitStatus.type === "success" ? (
                  <FiCheckCircle className="mt-0.5 flex-shrink-0" size={20} />
                ) : (
                  <FiAlertCircle className="mt-0.5 flex-shrink-0" size={20} />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Full name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Taylor Morgan"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              How can we help?
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell us about your goals, team size, and timeline."
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <AccentButton type="submit" icon={<FiSend />} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
          </AccentButton>
        </form>

        <div className="space-y-6 rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Additional touchpoints
            </span>
            <p className="text-sm text-slate-600">
              Prefer to connect instantly? Reach us via phone or drop by our
              studio. We host open office hours every Friday.
            </p>
          </div>
          <div className="space-y-4 text-sm text-slate-900">
            <div className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-4">
              <FiPhone className="mt-1 text-blue-600" />
              <div>
                <p className="font-semibold">Call us</p>
                <p className="text-slate-600">
                  +1 (800) 555-0192
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-4">
              <FiMapPin className="mt-1 text-blue-600" />
              <div>
                <p className="font-semibold">Visit the studio</p>
                <p className="text-slate-600">
                  87 Innovation Way
                  <br />
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-4 text-xs text-blue-700">
            Access needs? We provide captions, transcription, and alternative
            formats for all sessions. Mention your requirements when you reach
            out.
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
