function ServiceCard({ number, title, text }) {
  return (
    <article className="w-full border-b border-slate-200 bg-white p-7 last:border-b-0 sm:p-9 md:w-1/2 md:border-r md:last:border-r-0 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0">
      <p className="text-sm font-bold text-[#071b3d]">{number}</p>
      <h3 className="mt-8 text-2xl font-bold">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{text}</p>
    </article>
  );
}

export default ServiceCard;
