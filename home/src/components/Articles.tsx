import Timeline from "./Timeline";
//import Pill from "./Pill";
import SectionHeader from "./SectionHeader";

export default function Articles() {
  return (
    <div>
      <div id="WorkExperienceSection" className="bg-primary-dark rounded-lg shadow-xl py-2 px-2 xs:min-w-full">
        <SectionHeader title="Work Experience" />
        <Timeline />
      </div>
    </div>
  );
}
