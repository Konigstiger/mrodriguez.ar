import Timeline from "./Timeline";
import SectionHeader from "./SectionHeader";

export default function Articles() {
  return (
    <div id="WorkExperienceSection">
      <div className="bg-primary-light  shadow-xl px-2 border border-primary rounded p-4">
        <SectionHeader title="Work Experience" />
        <Timeline />
      </div>
    </div>
  );
}
