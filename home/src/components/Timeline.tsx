import "../index.css";

import WorkExperienceCard from "./WorkExperienceCard";

export default function Timeline() {
  const myWorkExperiences = [
    { description: "Did things." },
    { description: "More things." },
  ];

  const workExperience_tg = [
    { description: "Software maintenance of legacy live project." },
    { description: "Rewrite and upgrade technology from scratch." },
    { description: "Tech: C#, asp.net core, Azure DevOps (CI/CD), Tailwind CSS, React, Redis." },
  ];

  const workExperience_flux = [
    { description: "Worked with the Architecture team that handled cross aspects of the project. Expansion of APIs for communicating with AAA financial entities: Coelsa, Link Network, Prisma, Banelco, others." },
    { description: "Created functionality to retrieve and authorize using signed certificates from KeyVault, refactored code, presented an in-company .net introduction to other employees with different stacks." },
    { description: "Tech: C# (.netcore), Azure DevOps (CI/CD), Key Vault." },
  ];

  const workExperience_southworks = [
    { description: "Contributed to create and design a currently [NDA] undisclosable new streaming solution, for selling to Microsoft / other companies." },
    { description: "Contributed with the integration with other APIs / live streaming platforms like YouTube, LinkedIn." },
    { description: "UI/UX design of the majority of the MS Teams extension." },
    { description: "Created functional prototype (React) for UI/UX demo." },
    { description: "Tech: Azure (VM, Topics), GStreamer, C#, React, Typescript." },    
  ];

  const workExperience_registro = [
    { description: "Time and attendance control application, for internal use in the General Register of the Province of Córdoba. Adapted a fingerprint reader and SDK, creating a software for time and attendance and report generation." },
    { description: "Developed a flowchart design tool for modeling flows of documents and approvals, linked with Real State data and filling locations." },
    { description: "Coach junior and semi-senior developers." },
    { description: "Tech: .NET C# (C wrappers, C#, WPF, and SQL Server." },
  ];

  const workExperience_exet = [
    { description: "Project RentUp" },
    { description: "Client: General Income Directorate (DGR), Córdoba, Ministry of Modernization." },
    { description: "Tasks: Analysis, investigation, interviews, design, programming." },
    { description: "Tech: Oracle Weblogic, Oracle Databases, .NET C#, and SQL server integration services (SSIS)." },
  ];

  const workExperience_bank_cba = [
    { description: "Financial software maintenance: Credit cards, Loans, Investments, fraud." },
    { description: "Performed several tasks of maintenance of existing applications, and backend operations." },
    { description: "Tech: .NET C#, VB.NET, ASP.NET, MVC, SQL Server, Oracle, SSIS, Web Services" },
  ];

  const workExperience_hka = [
    { description: "Project: Internal" },
    { description: "Maintained legacy Bank and Financial software." },
    { description: "Tech: ASP Classic, SQL Server, Web Services." },
  ];

  /*
Client: Universal Music Group
Administration of legal rights of exploitation of artists
and their creative work.
> Traveled to Los Angeles, California (USA) to be part of
the maintenance from UMG.
> Interviewed Project Managers and programmers about how
the systems worked, documenting it for later and preparing
to show our understanding to the client.
> Fixing bugs and improving ETL processes.
Tech: .NET C#. ASP.NET. MVC. ETL processes, SQL Server,
Oracle.


Client: Nextel
Rebranding of 6 applications. Nextel changed its Brand and
colors and required those changes reflected on its
applications.
> Switched to J2EE development and Oracle Service Bus to
create, migrate and orchestrate web services
Tech: C#, HTML, CSS, Oracle Service Bus, Oracle, and J2EE.


Client: American Airlines
Maintained the web services of American Airlines.
> Monitored the status of the services and developed
utilities and small internal tools.
Tech: J2EE, Web Services, testing and DevOps.

  
  */

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
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">TechGenies</p>
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
            <div className="flex items-center justify-center w-12 h-8 border rounded-full">
              {/* <h1 className="mx-auto font-semibold text-lg text-gray-600"></h1> */}
              <svg
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
              </svg>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-6 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">Flux IT</p>
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
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">SOUTHWORKS</p>
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
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">
            Registro General de la Provincia de Cordoba
          </p>
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
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">Exet S.R.L.</p>
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
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">
            Banco de la Provincia de Cordoba
          </p>
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
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">
            Horovitz, Kravetz and Associates
          </p>
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
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">
            Hewlett-Packard
          </p>
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Software Developer"
              company="Hewlett-Packard"
              dateStart="Jul 2010"
              dateEnd="Mar 2014"
              details={myWorkExperiences}
            />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">
                2009
              </h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">AR Consultores</p>
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Software Developer"
              company="AR Consultores"
              dateStart="Feb 2009"
              dateEnd="Jul 2010"
              details={myWorkExperiences}
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
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4">
          <p className="mb-2 text-xl font-bold text-gray-600">Gruppo IT</p>
          <p className="text-gray-700">
            <WorkExperienceCard
              title="Software Developer"
              company="Hewlett-Packard"
              dateStart="Feb 2007"
              dateEnd="Jul 2008"
              details={myWorkExperiences}
            />
          </p>
        </div>
      </div>

      {/* great icon down */}
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

      {/* great done icon */}
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
          d="M5 13l4 4L19 7"
        />
      </svg> */}
    </div>
  );
}
