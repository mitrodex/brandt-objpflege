import { features } from "../data/siteContent";

function FeatureBand() {
  return (
    <section className="bg-slate-100 px-5 py-6 sm:px-8 lg:flex lg:h-32 lg:items-center lg:py-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden rounded-md border border-slate-200 bg-slate-200 shadow-sm sm:flex-row">
        {features.map((feature) => (
          <Feature key={feature.marker} {...feature} />
        ))}
      </div>
    </section>
  );
}

function Feature({ marker, label, text }) {
  return (
    <div className="flex flex-1 items-center gap-4 border-b border-slate-200 bg-white px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:py-5 sm:last:border-r-0 lg:min-h-20">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[#071b3d] text-xs font-bold text-white">
        {marker}
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-500">{label}</p>
        <p className="mt-1 text-base font-bold">{text}</p>
      </div>
    </div>
  );
}

export default FeatureBand;
