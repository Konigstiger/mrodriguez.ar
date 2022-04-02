import "../index.css";

import WorkExperienceCard from "./WorkExperienceCard";
import TimelineSection from "./TimelineSection";

// data imports
import workExperience_utn from "./data/workExperience_utn";
import pills_utn from "./data/pills_utn";
import workExperience_gruppoit from "./data/workExperience_gruppoit";
import pills_gruppoit from "./data/pills_gruppoit";
import workExperience_arconsultores from "./data/workExperience_arconsultores";
import pills_arconsultores from "./data/pills_arconsultores";
import workExperience_hka from "./data/workExperience_hka";
import pills_hka from "./data/pills_hka";
import workExperience_bank_cba from "./data/workExperience_bank_cba";
import pills_bank_cba from "./data/pills_bank_cba";
import workExperience_hp from "./data/workExperience_hp";
import pills_hp from "./data/pills_hp";
import workExperience_exet from "./data/workExperience_exet";
import pills_exet from "./data/pills_exet";
import workExperience_registro from "./data/workExperience_registro";
import pills_registro from "./data/pills_registro";
import workExperience_southworks from "./data/workExperience_southworks";
import pills_southworks from "./data/pills_southworks";
import workExperience_flux from "./data/workExperience_flux";
import pills_flux from "./data/pills_flux";
import workExperience_tg from "./data/workExperience_tg";
import pills_tg from "./data/pills_tg";

export default function Timeline() {

  return (
    <div className="w-full">
      <div className="flex">
        <TimelineSection year={2022} />
        <WorkExperienceCard
          company="TechGenies"
          title="Senior Software Developer"
          dateStart="Nov 2021"
          dateEnd="Present"
          pills={pills_tg}
          details={workExperience_tg} />
      </div>

      <div className="flex">
        <TimelineSection year={2021} />
        <WorkExperienceCard
          company="Flux IT"
          title="Senior Software Developer"
          dateStart="Jul 2021"
          dateEnd="Oct 2021"
          pills={pills_flux}
          details={workExperience_flux} />

      </div>

      <div className="flex">
        <TimelineSection year={2021} />
        <WorkExperienceCard
          company="SOUTHWORKS"
          title="Senior Software Developer / UI-UX Designer"
          dateStart="Jun 2019"
          dateEnd="May 2021"
          pills={pills_southworks}
          details={workExperience_southworks} />
      </div>

      <div className="flex">

        <TimelineSection year={2019} />
        <WorkExperienceCard
          company="Registro General de la Provincia de Cordoba"
          title="Senior Software Developer"
          dateStart="Jan 2019"
          dateEnd="Mar 2019"
          pills={pills_registro}
          details={workExperience_registro} />

      </div>

      <div className="flex">
        <TimelineSection year={2018} />
        <WorkExperienceCard
          company="Exet S.R.L."
          title="Senior Software Developer"
          dateStart="Mar 2018"
          dateEnd="Sep 2018"
          pills={pills_exet}
          details={workExperience_exet} />
      </div>

      <div className="flex">
        <TimelineSection year={2017} />
        <WorkExperienceCard
          company="Bank of Cordoba Province"
          title="Senior Software Developer (outsourced)"
          dateStart="Feb 2016"
          dateEnd="Feb 2017"
          pills={pills_bank_cba}
          details={workExperience_bank_cba} />
      </div>

      <div className="flex">
        <TimelineSection year={2015} />
        <WorkExperienceCard
          company="Horovitz, Kravetz and associates"
          title="Software Developer (freelance)"
          dateStart="May 2015"
          dateEnd="Nov 2015"
          pills={pills_hka}
          details={workExperience_hka} />

      </div>

      <div className="flex">
        <TimelineSection year={2014} />
        <WorkExperienceCard
          company="Hewlett-Packard"
          title="Software Developer"
          dateStart="Jul 2010"
          dateEnd="Mar 2014"
          pills={pills_hp}
          details={workExperience_hp} />
      </div>

      <div className="flex">
        <TimelineSection year={2010} />
        <WorkExperienceCard
          company="AR Consultores"
          title="Software Developer"
          dateStart="Feb 2009"
          dateEnd="Jul 2010"
          pills={pills_arconsultores}
          details={workExperience_arconsultores} />
      </div>

      <div className="flex">
        <TimelineSection year={2008} />
        <WorkExperienceCard
          company="Gruppo IT"
          title="Software Developer"
          dateStart="Feb 2007"
          dateEnd="Jul 2008"
          pills={pills_gruppoit}
          details={workExperience_gruppoit} />
      </div>

      <div className="flex">
        <TimelineSection year={2002} />
        <WorkExperienceCard
          company="UTN FRC"
          title="Junior Researcher"
          dateStart="Mar 2000"
          dateEnd="Feb 2002"
          pills={pills_utn}
          details={workExperience_utn} />

      </div>
    </div>
  );
}
