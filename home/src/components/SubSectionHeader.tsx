import "../index.css";

export default function SubSectionHeader({ title }) {
  return (
    <div
      className="bg-secondary backgroundPattern text-text-on-secondary font-bold rounded px-4 py-1 mb-1">
      {title}
    </div>
  );
}
