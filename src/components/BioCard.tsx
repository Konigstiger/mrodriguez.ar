import portrait from "../images/mrodriguez-portrait-small.jpg";
import largePortrait from "../images/mrodriguez-large.jpg";

import SocialMediaIcons from "../components/SocialMediaIcons";

export default function BioCard({ ...rest }) {
  return (
    <div>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 ">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-100 mx-6 lg:mx-0 bg-tertiary "
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${portrait})` }}
            ></div>

            <h1 className="text-5xl font-bold lg:pt-0 text-text-on-secondary font-poiretOne">
              Mariano Rodriguez
            </h1>

            <div className="mx-auto lg:mx-0 pt-3 border-b-2 border-secondary-dark opacity-25"></div>

            <h3 className="pt-4 flex justify-center lg:justify-start text-text-on-primary font-oxanium font-semibold text-xl">
              Senior Software Developer
            </h3>

            <div className="mx-auto lg:mx-0 pt-3 border-b-2 border-secondary-dark opacity-25"></div>


            <p className="pt-4 text-text-on-secondary font-oxanium text-base">
              I'm a Software Developer experienced in several programming
              languages and industries.
            </p>

            <div className="mx-auto lg:mx-0 pt-3 border-b-2 border-secondary-dark opacity-25"></div>

            <h4 className="pt-2 flex items-center justify-center lg:justify-start text-text-on-primary font-oxanium font-semibold text-base">
              Cordoba, Argentina [remote]
            </h4>

            <div className="lg:w-3/5">
              <SocialMediaIcons />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            src={largePortrait}
            alt="mr"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
