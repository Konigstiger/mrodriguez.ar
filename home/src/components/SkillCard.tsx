import "../index.css";
import ProgressCard from "./ProgressCard";
import SectionHeader from "./SectionHeader";

export default function SkillCard() {
  return (
        <div className="bg-primary pb-1">
          <SectionHeader title="Soft Skills" />
          <div className="mx-6 border p-2 max-w-sm">
            <ProgressCard n={3} title="Communications" />
            <ProgressCard n={4} title="Teamwork" />
            <ProgressCard n={3} title="Adaptability" />
            <ProgressCard n={4} title="Problem solving" />
            <ProgressCard n={4} title="Creativity" />
          </div>

          <SectionHeader title="Tech Skills" />
          <div className="mx-6 border p-2 max-w-sm">
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

        </div>
  );
}
