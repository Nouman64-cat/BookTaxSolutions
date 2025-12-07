import Container from "../common/Container";

interface TrustedPartnersProps {
  partners: string[];
}

const TrustedPartners = ({ partners }: TrustedPartnersProps) => {
  return (
    <section className="pt-16">
      <Container className="rounded-[2.5rem] border border-slate-200 bg-slate-50 px-6 py-10 text-center sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
          Trusted by modern teams
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3 md:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold uppercase tracking-[0.32em] text-slate-700"
            >
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedPartners;
