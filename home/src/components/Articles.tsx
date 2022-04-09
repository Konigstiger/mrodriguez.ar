import Timeline from "./Timeline";
import Pill from "./Pill";
import SectionHeader from "./SectionHeader";

export default function Articles() {
  return (
    <div>
      <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-0 pt-2 px-1">
        <div className="bg-primary-dark lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 py-2 px-2">
          <div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item bg-primary-dark border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <button
                    className="
                      accordion-button
                      relative
                      flex
                      items-center
                      w-full
                      py-2
                      px-5
                      text-base text-gray-800 text-left
                      bg-primary-dark
                      border-0
                      rounded-none
                      transition
                      focus:outline-none
                    "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <SectionHeader title="Work Experience" />
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4 px-5">
                    <Timeline />
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-primary-dark border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingTwo">
                  <button
                    className="
                      accordion-button
                      collapsed
                      relative
                      flex
                      items-center
                      w-full
                      py-2
                      px-5
                      text-base text-gray-800 text-left
                      bg-primary-dark
                      border-0
                      rounded-none
                      transition
                      focus:outline-none
                    "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <SectionHeader title="Interests" />
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4 px-5">
                    {/* chips start */}
                    <div className="container mx-auto my-0 bg-primary flex flex-wrap">
                      <Pill text="UI/UX Design" />
                      <Pill text="Software Architecture" />
                      <Pill text="Good Practices" />
                      <Pill text="Mentoring" />
                      <Pill text="Videogames" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* chips end */}
        </div>
      </div>
    </div>
  );
}
