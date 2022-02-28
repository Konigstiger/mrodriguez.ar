import "../index.css";

import WorkExperienceCard from "./WorkExperienceCard";

export default function Timeline2() {
  return (
    <div className="w-full">

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">2022</h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4" >
          <p className="mb-2 text-xl font-bold text-gray-600">TechGenies</p>
          <p className="text-gray-700">
          <WorkExperienceCard
                title="Senior Software Developer"
                company="TechGenies"
                dateStart="Nov 2021"
                dateEnd="Present"
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
              />  
          </p>

          
        </div>
        
      </div>


      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">2021</h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4" >
          <p className="mb-2 text-xl font-bold text-gray-600">SOUTHWORKS</p>
          <p className="text-gray-700">
          <WorkExperienceCard
                title="Senior Software Developer / UI-UX Designer"
                company="SOUTHWORKS"
                dateStart="Jun 2019"
                dateEnd="May 2021"
              />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">2019</h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4" >
          <p className="mb-2 text-xl font-bold text-gray-600">Registro General de la Provincia de Cordoba</p>
          <p className="text-gray-700">
          <WorkExperienceCard
                title="Senior Software Developer / UI-UX Designer"
                company="Registro General de la Provincia de Cordoba"
                dateStart="Jan 2019"
                dateEnd="Mar 2019"
              />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">2018</h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4" >
          <p className="mb-2 text-xl font-bold text-gray-600">Exet S.R.L.</p>
          <p className="text-gray-700">
          <WorkExperienceCard
                title="Senior Software Developer"
                company="Exet S.R.L."
                dateStart="Mar 2018"
                dateEnd="Sep 2018"
              />
          </p>
        </div>
      </div>





      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">2017</h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4" >
          <p className="mb-2 text-xl font-bold text-gray-600">Banco de la Provincia de Cordoba</p>
          <p className="text-gray-700">
          <WorkExperienceCard
                title="Senior Software Developer"
                company="Exet S.R.L."
                dateStart="Feb 2016"
                dateEnd="Feb 2017"
              />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">2015</h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4" >
          <p className="mb-2 text-xl font-bold text-gray-600">Horovitz, Kravetz and associates</p>
          <p className="text-gray-700">
          <WorkExperienceCard
                title="Freelance Software Developer"
                company="Horovitz, Kravetz and associates"
                dateStart="May 2015"
                dateEnd="Nov 2015"
              />
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">2014</h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4" >
          <p className="mb-2 text-xl font-bold text-gray-600">Hewlett-Packard</p>
          <p className="text-gray-700">
          <WorkExperienceCard
                title="Software Developer"
                company="Hewlett-Packard"
                dateStart="Jul 2010"
                dateEnd="Mar 2014"
              />
          </p>
        </div>
      </div>


      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">2009</h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4" >
          <p className="mb-2 text-xl font-bold text-gray-600">AR Consultores</p>
          <p className="text-gray-700">
          <WorkExperienceCard
                title="Software Developer"
                company="AR Consultores"
                dateStart="Feb 2009"
                dateEnd="Jul 2010"
              />
          </p>
        </div>
      </div>


      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md">
              <h1 className="mx-auto font-semibold text-lg text-gray-600">2008</h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        {/* <div className="pb-8 "> */}
        <div className="order-1 bg-neutral-400 rounded-lg shadow-xl w-3/4 px-4 py-4 border-1 mb-4" >
          <p className="mb-2 text-xl font-bold text-gray-600">Gruppo IT</p>
          <p className="text-gray-700">
          <WorkExperienceCard
                title="Software Developer"
                company="Hewlett-Packard"
                dateStart="Feb 2007"
                dateEnd="Jul 2008"
              />
          </p>
        </div>
      </div>


      {/* great icon down */}
      {/* <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full">
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
          <div className="w-px h-full bg-gray-300"></div>
        </div>
        <div className="pb-8 ">
          <p className="mb-2 text-xl font-bold text-gray-600">Step 3</p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
            libero facilis minus reprehenderit.
          </p>
        </div>
      </div> */}

      {/* great done icon */}
      {/* <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-10 h-10 border rounded-full">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-1">
          <p className="mb-2 text-lg font-bold text-gray-600">Done</p>
        </div>
      </div> */}

    </div>
  );
}
