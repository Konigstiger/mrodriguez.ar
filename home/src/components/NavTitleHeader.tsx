import "../index.css";

export default function NavTitleHeader({ title, subtitle }) {
  return (
    <div>
      <div className="bg-secondary text-text-on-secondary font-bold rounded-t-lg px-4 py-0 font-poiretOne text-2xl">
        {title}
      </div>
      <div className="bg-secondary-dark text-text-on-secondary rounded-b-lg font-serif text-base px-4">
        {subtitle}
      </div>
    </div>
  );
}
