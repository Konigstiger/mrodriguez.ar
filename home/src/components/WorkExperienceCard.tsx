import "../index.css";
import Pill from "./Pill";
import WorkExperienceDetailCard from "./WorkExperienceDetailCard";

// continuar aqui, y que reciba las pills y details desde Timeline.
export default function WorkExperienceCard({ company, title, dateStart, dateEnd, pills, details }) {


  return (
    <div className="order-1 rounded-lg w-full px-4 py-4 border mb-4 border-primary-dark bg-primary">
      <p className="mb-2 text-xl font-bold text-secondary">{company}</p>

      {/* pills start */}
      <div className="container mx-auto my-1 p-0 flex flex-wrap">
        {
          pills.map((item, index) => (
            <Pill text={item.name} />
          ))
        }
      </div>
      {/* pills end */}

      <p className="text-text-on-secondary">
        <WorkExperienceDetailCard
          title={title}
          company={company}
          dateStart={dateStart}
          dateEnd={dateEnd}
          details={details}
        />
      </p>
    </div>
  );
}
