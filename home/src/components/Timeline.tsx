import "../index.css";

import WorkExperienceCard from "./WorkExperienceCard";

export default function Timeline() {
  const workExperience_tg = [
    { desc: "◾ Client: Insala" },
    { desc: "Software maintenance of legacy live project." },
    { desc: "Rewrite and upgrade technology from scratch." },
    // {
    //   desc: "Tech: C#, asp.net core, Azure DevOps (CI/CD), Tailwind CSS, React, Redis.",
    // },
  ];

  const workExperience_flux = [
    {
      desc: "Worked with the Architecture team that handled cross aspects of the project. Expansion of APIs for communicating with AAA financial entities: Coelsa, Link Network, Prisma, Banelco, others.",
    },
    {
      desc: "Created functionality to retrieve and authorize using signed certificates from KeyVault, refactored code, presented an in-company .net introduction to other employees with different stacks.",
    },
    // { desc: "Tech: C# (.netcore), Azure DevOps (CI/CD), Key Vault." },
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
    // { desc: "Tech: Azure (VM, Topics), GStreamer, C#, React, Typescript." },
  ];

  const workExperience_registro = [
    {
      desc: "Time and attendance control application, for internal use in the General Register of the Province of Córdoba. Adapted a fingerprint reader and SDK, creating a software for time and attendance and report generation.",
    },
    {
      desc: "Developed a flowchart design tool for modeling flows of documents and approvals, linked with Real State data and filling locations.",
    },
    { desc: "Coach junior and semi-senior developers." },
    // { desc: "Tech: .NET C# (C wrappers, C#, WPF, and SQL Server." },
  ];

  const workExperience_exet = [
    { desc: "Project RentUp" },
    {
      desc: "Client: General Income Directorate (DGR), Córdoba, Ministry of Modernization.",
    },
    {
      desc: "Tasks: Analysis, investigation, interviews, design, programming.",
    },
    // {
    //   desc: "Tech: Oracle Weblogic, Oracle Databases, .NET C#, and SQL server integration services (SSIS).",
    // },
  ];

  const workExperience_bank_cba = [
    {
      desc: "Financial software maintenance: Credit cards, Loans, Investments, fraud.",
    },
    {
      desc: "Performed several tasks of maintenance of existing applications, and backend operations.",
    },
    // {
    //   desc: "Tech: .NET C#, VB.NET, ASP.NET, MVC, SQL Server, Oracle, SSIS, Web Services",
    // },
  ];

  const workExperience_hka = [
    { desc: "Maintained legacy Bank and Financial software." },
    // { desc: "Tech: ASP Classic, SQL Server, Web Services." },
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

  const workExperience_arconsultores = [
    { desc: "◾ Client: Claro (El Salvador, Central America)" },
    { desc: "Consulting / developing for telecom provider." },
    { desc: "Traveled to work in El Salvador (1 month)." },
    {
      desc: "Provided onsite consulting about .NET / Oracle, for the ERP system of the company.",
    },
    // {
    //   desc: "Tech: Asp.NET, C#, Asp classic, SQL Server, Oracle, SSIS, Web Services.",
    // },
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

  const workExperience_utn = [
    { desc: "◾ Clinical Engineering Group" },
    { desc: "Received a modest scholarship from the University." },
    {
      desc: "Developed a J2EE web-based system to measure technical indicators and collaborate in diagnostics of patients with potential neuropsychological problems.",
    },
    // { desc: "Tech: J2EE, IBM WebSphere, IBM DB/2." },
  ];


  return (
    <div className="w-full">
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2022
              </h1>
            </div>
          </div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">TechGenies</p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              .netcore
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                react
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              Azure
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              Tailwind CSS
              </div>
            </div>
          </div>
          {/* chips end */}

          <p className="text-gray-700">
            <WorkExperienceCard
              title="Senior Software Developer"
              company="TechGenies"
              dateStart="Nov 2021"
              dateEnd="Present"
              details={workExperience_tg}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-bold text-lg text-gray-600">2021</h1>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg> */}
            </div>
          </div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">Flux IT</p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              netcore
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                KeyVault
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                Microservices
              </div>
            </div>
          </div>
          {/* chips end */}

          <p className="text-gray-700">
            <WorkExperienceCard
              title="Senior Software Developer"
              company="Flux IT"
              dateStart="Jul 2021"
              dateEnd="Oct 2021"
              details={workExperience_flux}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2021
              </h1>
            </div>
          </div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">SOUTHWORKS</p>
          {/* chips start */}
          <div className=" mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              .netcore
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                Azure
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                React
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                TypeScript
              </div>
            </div>
          </div>
          {/* chips end */}          
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Senior Software Developer / UI-UX Designer"
              company="SOUTHWORKS"
              dateStart="Jun 2019"
              dateEnd="May 2021"
              details={workExperience_southworks}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2019
              </h1>
            </div>
          </div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">
            Registro General de la Provincia de Cordoba
          </p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              C#
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                WPF
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                C Wrappers
              </div>
            </div>
          </div>
          {/* chips end */}
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Senior Software Developer"
              company="Registro General de la Provincia de Cordoba"
              dateStart="Jan 2019"
              dateEnd="Mar 2019"
              details={workExperience_registro}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2018
              </h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">Exet S.R.L.</p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              Oracle
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                Oracle Service Bus
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                MS SQL Server
              </div>
            </div>
          </div>
          {/* chips end */}     
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Senior Software Developer"
              company="Exet S.R.L."
              dateStart="Mar 2018"
              dateEnd="Sep 2018"
              details={workExperience_exet}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2017
              </h1>
            </div>
          </div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">
            Banco de la Provincia de Cordoba
          </p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              C#
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                MS SQL Server
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              VB.NET
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              Oracle
              </div>
            </div>
          </div>
          {/* chips end */}
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Senior Software Developer (outsourced)"
              company="Bank of Cordoba Province"
              dateStart="Feb 2016"
              dateEnd="Feb 2017"
              details={workExperience_bank_cba}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2015
              </h1>
            </div>
          </div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">
            Horovitz, Kravetz and Associates
          </p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              ASP Classic
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                MS SQL Server
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              Web Services
              </div>
            </div>
          </div>
          {/* chips end */}

          <p className="text-gray-700">
            <WorkExperienceCard
              title="Freelance Software Developer"
              company="Horovitz, Kravetz and associates"
              dateStart="May 2015"
              dateEnd="Nov 2015"
              details={workExperience_hka}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2014
              </h1>
            </div>
          </div>
          
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">
            Hewlett-Packard
          </p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 bg-white flex flex-row">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              C#
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                ETL
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              MS SQL Server
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              J2EE
              </div>
            </div>
          </div>
          {/* chips end */}
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Software Developer"
              company="Hewlett-Packard"
              dateStart="Jul 2010"
              dateEnd="Mar 2014"
              details={workExperience_hp}
            />
          </p>
          
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2010
              </h1>
            </div>
          </div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* shadow style */}
        {/* <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-full px-4 py-4 border-0 mb-4"> */}
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">AR Consultores</p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              ASP Classic
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                MS SQL Server
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              Web Services
              </div>
            </div>
          </div>
          {/* chips end */}          
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Software Developer"
              company="AR Consultores"
              dateStart="Feb 2009"
              dateEnd="Jul 2010"
              details={workExperience_arconsultores}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2008
              </h1>
            </div>
          </div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">Gruppo IT</p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              ASP.net
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                MS SQL Server
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              XML
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              GDI+
              </div>
            </div>
          </div>
          {/* chips end */}          
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Software Developer"
              company="Gruppo IT"
              dateStart="Feb 2007"
              dateEnd="Jul 2008"
              details={workExperience_gruppoit}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2002
              </h1>
            </div>
          </div>
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="order-1 bg-neutral-400 rounded-lg w-full px-4 py-4 border mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600 ">
            University UTN-FRC
          </p>
          {/* chips start */}
          <div className="container mx-auto my-1 p-0 flex flex-wrap">
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              J2EE
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
                IBM DB/2
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              WebSphere
              </div>
            </div>
            <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
              <div className="flex-initial max-w-full leading-none text-xs font-normal">
              XML
              </div>
            </div>
          </div>
          {/* chips end */}              
          <p className="text-gray-700 text-base font-normal">
            <WorkExperienceCard
              title="Junior Researcher"
              company="UTN FRC"
              dateStart="Mar 2000"
              dateEnd="Feb 2002"
              details={workExperience_utn}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
