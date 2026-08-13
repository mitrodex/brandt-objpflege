function SectionIntro({ eyebrow, title, children, inverted = false }) {
  const eyebrowColor = inverted ? "text-slate-200" : "text-[#071b3d]";
  const bodyColor = inverted ? "text-slate-300" : "text-slate-600";

  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-semibold uppercase tracking-wide ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-5xl">{title}</h2>
      <p className={`mt-5 text-lg leading-8 ${bodyColor}`}>{children}</p>
    </div>
  );
}

export default SectionIntro;
