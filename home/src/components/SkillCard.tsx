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
            <Pill id="1" text="Reading" />
            <Pill id="2" text="UI/UX Design" />
            <Pill id="3" text="Software Architecture" />
            <Pill id="4" text="Good Practices" />
            <Pill id="5" text="Mentoring" />
            <Pill id="6" text="Videogames" />

            <Pill id="7" text="Game Development" />
            <Pill id="8" text="Graphic Design" />
            <Pill id="9" text="Unity" />
            <Pill id="8" text="GameDev: Character Design" />
            <Pill id="8" text="GameDev: Skeletal Animation" />
          </div>
        </div>
      </div>
    </div>
  );
}
