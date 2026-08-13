function ProcessStep({ number, title, text }) {
  return (
    <article className="w-full border-b border-white/10 bg-[#071b3d] p-7 last:border-b-0 sm:w-1/2 sm:border-r sm:last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
      <p className="text-sm font-bold text-slate-200">{number}</p>
      <h3 className="mt-8 text-xl font-bold">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>
    </article>
  );
}

export default ProcessStep;
