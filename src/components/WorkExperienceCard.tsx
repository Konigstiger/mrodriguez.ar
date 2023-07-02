import "../index.css";
import Pill from "./Pill";
import WorkExperienceDetailCard from "./WorkExperienceDetailCard";
import SubSectionHeader from "./SubSectionHeader";

// continuar aqui, y que reciba las pills y details desde Timeline.
export default function WorkExperienceCard({ company, title, dateStart, dateEnd, pills, details }) {


  return (
    <div className="order-1 rounded-lg w-full px-4 py-4 border mb-4 border-primary-dark bg-primary">
      <SubSectionHeader title={company} />

      {/* pills */}
      <div className="container mx-auto my-1 p-0 flex flex-wrap">
        {
          pills.map((item, index) => (
            <Pill id={index} text={item.name} />
          ))
        }
      </div>

      <p className="text-text-on-secondary font-oxanium">
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
