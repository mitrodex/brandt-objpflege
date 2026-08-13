import { focusAreas } from "../data/siteContent";

function FocusAreas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {focusAreas.map((area) => (
        <div
          key={area}
          className="w-full rounded-md border border-slate-200 bg-white p-5 text-lg font-bold shadow-sm sm:w-[calc(50%-0.375rem)]"
        >
          {area}
        </div>
      ))}
    </div>
  );
}

export default FocusAreas;
