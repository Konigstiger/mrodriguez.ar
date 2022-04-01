import "../index.css";

import WorkExperienceCard from "./WorkExperienceCard";
import TimelineSection from "./TimelineSection";


export default function Timeline() {
  const workExperience_tg = [
    { desc: "◾ Client: Insala" },
    { desc: "Software maintenance of legacy live project." },
    { desc: "Rewrite and upgrade technology from scratch." },
  ];

  const pills_tg = [
    { name: '.netcore', },
    { name: 'react', },
    { name: 'azure', },
    { name: 'tailwind css', },
  ];

  const workExperience_flux = [
    {
      desc: "Worked with the Architecture team that handled cross aspects of the project. Expansion of APIs for communicating with AAA financial entities: Coelsa, Link Network, Prisma, Banelco, others.",
    },
    {
      desc: "Created functionality to retrieve and authorize using signed certificates from KeyVault, refactored code, presented an in-company .net introduction to other employees with different stacks.",
    },
  ];

  const pills_flux = [
    { name: '.netcore', },
    { name: 'KeyVault', },
    { name: 'Microservices', },
  ];

  const workExperience_southworks = [
    {
      desc: "Contributed to create and design a currently [NDA] undisclosable new streaming solution, for selling to Microsoft / other companies.",
    },
    {
      desc: "Contributed with the integration with other APIs / live streaming platforms like YouTube, LinkedIn.",
    },
    { desc: "UI/UX design of the majority of the MS Teams extension." },
    { desc: "Created functional prototype (React) for UI/UX demo." },
  ];

  const pills_southworks = [
    { name: '.netcore', },
    { name: 'azure', },
    { name: 'React', },
    { name: 'React', },
  ];

  const workExperience_registro = [
    {
      desc: "Time and attendance control application, for internal use in the General Register of the Province of Córdoba. Adapted a fingerprint reader and SDK, creating a software for time and attendance and report generation.",
    },
    {
      desc: "Developed a flowchart design tool for modeling flows of documents and approvals, linked with Real State data and filling locations.",
    },
    { desc: "Coach junior and semi-senior developers." },
  ];

  const pills_registro = [
    { name: "C#", },
    { name: "WPF", },
    { name: "C wrappers", },
  ];

  const workExperience_exet = [
    { desc: "Project RentUp" },
    {
      desc: "Client: General Income Directorate (DGR), Córdoba, Ministry of Modernization.",
    },
    {
      desc: "Tasks: Analysis, investigation, interviews, design, programming.",
    },
  ];

  const pills_exet = [
    { name: "Oracle", },
    { name: "Service Bus", },
    { name: "SQL Server", },
  ];

  const workExperience_bank_cba = [
    {
      desc: "Financial software maintenance: Credit cards, Loans, Investments, fraud.",
    },
    {
      desc: "Performed several tasks of maintenance of existing applications, and backend operations.",
    },
  ];

  const pills_bank_cba = [
    { name: "C#", },
    { name: "SQL Server", },
    { name: "Oracle", },
    { name: "vb.net", },
  ];

  const workExperience_hka = [
    { desc: "Maintained legacy Bank and Financial software." },
  ];

  const pills_hka = [
    { name: "asp classic", },
    { name: "SQL Server", },
    { name: "Web Services", },
  ];

  const workExperience_hp = [
    { desc: "◾ Universal Music Group", bold: true },
    {
      desc: "Administration of legal rights of exploitation of artists and their creative work.",
    },
    {
      desc: "Traveled to Los Angeles, California (USA) to be part of the maintenance from UMG.",
    },
    {
      desc: "Interviewed Project Managers and programmers about how the systems worked, documenting it for later and preparing to show our understanding to the client.",
    },
    { desc: "Tech: .NET C#. ASP.NET. MVC. ETL processes, SQL Server, Oracle." },
    { desc: " " },
    { desc: "◾ Nextel" },
    { desc: "Rebranding of 6 applications." },
    {
      desc: "Used J2EE and Oracle Service Bus to create, migrate and orchestrate web services.",
    },
    { desc: "Tech: C#, HTML, CSS, Oracle Service Bus, Oracle, and J2EE." },
    { desc: " " },
    { desc: "◾ American Airlines" },
    { desc: "Maintained the web services of American Airlines." },
    {
      desc: "Monitored the status of the services and developed utilities and internal tools.",
    },
    { desc: "Tech: J2EE, Web Services, DevOps." },
  ];

  const pills_hp = [
    { name: "C#", },
    { name: "SQL Server", },
    { name: "J2EE", },
    { name: "ETL", },
  ];

  const workExperience_arconsultores = [
    { desc: "◾ Client: Claro (El Salvador, Central America)" },
    { desc: "Consulting / developing for telecom provider." },
    { desc: "Traveled to work in El Salvador (1 month)." },
    {
      desc: "Provided onsite consulting about .NET / Oracle, for the ERP system of the company.",
    },
  ];

  const pills_arconsultores = [
    { name: "asp classic", },
    { name: "SQL Server", },
    { name: "Web Services", },
  ];


  const workExperience_gruppoit = [
    { desc: "◾ Client: SmartGolf" },
    {
      desc: "Maintenance of web portal for Golf Community and related services. Developed new features: generation and printing process of gaming cards for the affiliated Golf clubs.",
    },
    { desc: " " },
    { desc: "◾ Client: Sistema Odontológico Privado" },
    {
      desc: "ERP software for Odontology. Maintenance and on-site support. Added feature to display dental diagrams.",
    },
    { desc: " " },
    { desc: "◾ Client: Auto Entrada" },
    {
      desc: "Online ticket selling portal. Generated prototypes for tickets and simple anti-forgery mechanisms (guilloches)",
    },
  ];

  const pills_gruppoit = [
    { name: "asp.net", },
    { name: "SQL Server", },
    { name: "GDI+", },
    { name: "XML", },
  ];

  const workExperience_utn = [
    { desc: "◾ Clinical Engineering Group" },
    { desc: "Received a modest scholarship from the University." },
    {
      desc: "Developed a J2EE web-based system to measure technical indicators and collaborate in diagnostics of patients with potential neuropsychological problems.",
    },
  ];

  const pills_utn = [
    { name: "J2EE", },
    { name: "IBM DB/2", },
    { name: "WebSphere", },
    { name: "XML", },
  ];



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
