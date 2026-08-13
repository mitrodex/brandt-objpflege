import brandIcon from "../assets/icon.jpeg";

function BrandLink({ compact = false, tone = "light" }) {
  const textColor = tone === "dark" ? "text-[#071b3d]" : "text-white";

  return (
    <a href="#" className={`flex items-center gap-3 font-semibold ${textColor}`}>
      <img
        src={brandIcon}
        alt=""
        className="size-10 rounded-md border border-white/20 bg-white object-cover"
      />
      {!compact && <span>Brandt Objektpflege</span>}
      {compact && (
        <span className="hidden sm:inline">Brandt Objektpflege</span>
      )}
    </a>
  );
}

export default BrandLink;
