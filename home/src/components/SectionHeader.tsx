import "../index.css";

export default function SectionHeader({ title }) {
  return (
    <div role="article"
      className="bg-secondary text-text-on-secondary font-bold rounded px-4 py-2 mb-2">
      {title}
    </div>
  );
}
