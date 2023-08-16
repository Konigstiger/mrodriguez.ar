import "../index.css";
import ProgressCard from "./ProgressCard";
import SectionHeader from "./SectionHeader";
import Pill from "./Pill";

export default function SkillCard() {
  return (
    <div className="bg-primary-dark rounded p-0">

      {/* un div con padding */}
      <div id="SkillsSection">
        <div  id="SoftSkillsSection" className="bg-primary-light opacity-100 border border-primary rounded p-4">
          <SectionHeader title="Soft Skills" />

          <ProgressCard n={4} title="Teamwork" />
          <ProgressCard n={3} title="Adaptability" />
          <ProgressCard n={4} title="Problem solving" />
          <ProgressCard n={4} title="Creativity" />
        </div>

        <div id="TechSkillsSection" className="bg-primary-light border border-primary rounded opacity-100 p-4">
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
          <ProgressCard n={3} title="Azure" />
          <ProgressCard n={5} title="Visual Basic 6" />
          <ProgressCard n={4} title="Graphic Design" />
          <ProgressCard n={2} title="3D Modeling" />
          <ProgressCard n={3} title="UI/UX Prototyping" />
          <ProgressCard n={3} title="Unity" />
          <ProgressCard n={3} title="Adobe Photoshop" />
          <ProgressCard n={4} title="Adobe Illustrator" />
        </div>

        <div id="InterestsSection" className="bg-primary-dark">
          <SectionHeader title="Interests" />

          <div className="container mx-auto bg-primary flex flex-wrap p-2">
            <Pill key="1" text="Reading" />
            <Pill key="2" text="UI/UX Design" />
            <Pill key="3" text="Software Architecture" />
            <Pill key="4" text="Good Practices" />
            <Pill key="5" text="Mentoring" />
            <Pill key="6" text="Videogames" />

            <Pill key="7" text="Game Development" />
            <Pill key="8" text="Graphic Design" />
            <Pill key="9" text="Unity" />
            <Pill key="10" text="GameDev: Character Design" />
            <Pill key="11" text="GameDev: Skeletal Animation" />
          </div>
        </div>
      </div>
    </div>
  );
}
