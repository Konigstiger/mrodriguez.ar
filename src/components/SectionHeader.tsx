import "../input.css";

export default function SectionHeader({ title }) {
  return (
    <div
      className="bg-secondary text-text-on-secondary font-bold rounded px-4 py-2 font-poiretOne text-2xl">
      {title}
    </div>
  );
}
