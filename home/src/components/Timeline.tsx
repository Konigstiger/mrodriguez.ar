import "../index.css";

import WorkExperienceCard from "./WorkExperienceCard";

export default function Timeline() {
  return (
    <div className="container bg-gray-200 mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-2/4"></div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto font-semibold text-lg text-white">2022</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h4 className="mb-3 font-bold text-gray-800 text-xl">
              <a href="https://techgenies.com/">TechGenies</a>
            </h4>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Senior Software Developer"
                company="TechGenies"
                dateStart="Nov 2021"
                dateEnd="Present"
              />
            </p>
          </div>
        </div>

        {/*<!-- left timeline -->*/}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto text-white font-semibold text-lg">2021</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Flux IT</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Senior Software Developer"
                company="Flux IT"
                dateStart="Jul 2021"
                dateEnd="Oct 2021"
              />
            </p>
          </div>
        </div>

        {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto font-semibold text-lg text-white">2021</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Flux IT</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Senior Software Developer"
                company="Flux IT"
                dateStart="Jul 2021"
                dateEnd="Oct 2021"
              />
            </p>
          </div>
        </div> */}

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          {/* <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto font-semibold text-lg text-white">2019</h1>
          </div> */}
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              <a href="https://www.southworks.com/">SOUTHWORKS</a>
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Senior Software Developer / UI-UX Designer"
                company="SOUTHWORKS"
                dateStart="Jun 2019"
                dateEnd="May 2021"
              />
            </p>
          </div>
        </div>

        {/*<!-- left timeline -->*/}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto text-white font-semibold text-lg">2019</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Registro General de la Provincia de Cordoba
            </h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Senior Software Developer"
                company="Registro General Provincia de Cordoba"
                dateStart="Jan 2019"
                dateEnd="Mar 2019"
              />
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto font-semibold text-lg text-white">2019</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Registro General de la Provincia de Cordoba
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Senior Software Developer"
                company="Registro General Provincia de Cordoba"
                dateStart="Jan 2019"
                dateEnd="Mar 2019"
              />
            </p>
          </div>
        </div> */}

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto font-semibold text-lg text-white">2018</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              <a href="https://www.exet.com.ar/">Exet S.R.L.</a>
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Senior Software Developer"
                company="Exet S.R.L."
                dateStart="Mar 2018"
                dateEnd="Sep 2018"
              />
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto font-semibold text-lg text-white">2017</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Banco de la Provincia de Cordoba
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Senior Software Developer"
                company="Exet S.R.L."
                dateStart="Feb 2016"
                dateEnd="Feb 2017"
              />
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto font-semibold text-lg text-white">2015</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Horovitz, Kravetz and associates
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Freelance Software Developer"
                company="Horovitz, Kravetz and associates"
                dateStart="May 2015"
                dateEnd="Nov 2015"
              />
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-8 rounded-md">
            <h1 className="mx-auto font-semibold text-lg text-white">2014</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              <a href="https://www.hp.com/">Hewlett-Packard</a>
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              <WorkExperienceCard
                title="Software Developer"
                company="Hewlett-Packard"
                dateStart="Jul 2010"
                dateEnd="Mar 2014"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
