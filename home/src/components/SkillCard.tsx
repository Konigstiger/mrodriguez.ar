import "../index.css";
import ProgressCard from "./ProgressCard";
import SectionHeader from "./SectionHeader";
import Pill from "./Pill";

export default function SkillCard() {
  return (
    <div className="bg-primary-dark rounded p-2">

      {/* un div con padding */}
      <div id="SkillsSection">
        <div  id="SoftSkillsSection" className="max-w-sm bg-primary-light opacity-100 border border-primary rounded p-2">
          <SectionHeader title="Soft Skills" />

          <ProgressCard n={3} title="Communications" />
          <ProgressCard n={4} title="Teamwork" />
          <ProgressCard n={3} title="Adaptability" />
          <ProgressCard n={4} title="Problem solving" />
          <ProgressCard n={4} title="Creativity" />
        </div>

        <div id="TechSkillsSection" className="max-w-sm bg-primary-light border border-primary rounded opacity-100 p-2">
          <SectionHeader title="Tech Skills" />

          <ProgressCard n={4} title=".NET" />
          <ProgressCard n={4} title="HTML" />
          <ProgressCard n={3} title="CSS" />
          <ProgressCard n={4} title="C#" />
          <ProgressCard n={3} title="JS" />

          <ProgressCard n={3} title="React" />
          <ProgressCard n={2} title="Python" />
          <ProgressCard n={4} title="SQL" />

          <ProgressCard n={2} title="Non Relational Databases" />
          <ProgressCard n={2} title="J2EE" />
          <ProgressCard n={3} title="Azure" />
          <ProgressCard n={1} title="AWS" />
          <ProgressCard n={5} title="WinForms" />
          <ProgressCard n={5} title="Visual Basic 6" />
          <ProgressCard n={3} title="Graphic Design" />
          <ProgressCard n={2} title="3D Modeling" />
          <ProgressCard n={3} title="UI/UX Prototyping" />

        </div>

        <div id="InterestsSection" className="bg-primary-dark">
          <SectionHeader title="Interests" />

          <div className="container mx-auto my-0 bg-primary flex flex-wrap">
            <Pill text="UI/UX Design" />
            <Pill text="Software Architecture" />
            <Pill text="Good Practices" />
            <Pill text="Mentoring" />
            <Pill text="Videogames" />
          </div>
        </div>
      </div>
    </div>
  );
}
