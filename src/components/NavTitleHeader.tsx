
export default function NavTitleHeader({ title, subtitle }) {
  return (
    <div>
      <div className="bg-secondary text-text-on-secondary font-bold rounded-t-lg px-4 py-0 font-poiretOne text-xl">
        {title}
      </div>
      <div className="bg-secondary-dark text-text-on-secondary rounded-b-lg font-oxanium text-sm px-4">
        {subtitle}
      </div>
    </div>
  );
}
