import "../index.css";

import illustration from "../images/csharp-02.png";
import illustration2 from "../images/react.png";
import WorkExperienceCard from "./WorkExperienceCard";


export default function Timeline() {
  return (
    <div className="container bg-gray-200 mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-2/4"
        //   style="left: 50%"
        ></div>
        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-green-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                <WorkExperienceCard title="Senior Software Developer" />
            </p>
          </div>
        </div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-green-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-1/2">
    //   <div className="flex">
    //     <div className="flex flex-col items-center mr-4">
    //       <div>
    //         <div className="flex items-center justify-center w-10 h-10 border rounded-full">
    //           {/* <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-6 h-6 text-gray-500"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M17 13l-5 5m0 0l-5-5m5 5V6"
    //             />
    //           </svg> */}
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
    //               clipRule="evenodd"
    //             />
    //             <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
    //           </svg>
    //         </div>
    //       </div>
    //       <div className="w-px h-full bg-gray-300"></div>
    //     </div>
    //     <div className="pb-8 ">
    //       <p className="mb-2 text-xl font-bold text-gray-600">Step 1</p>
    //       <p className="text-gray-700">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
    //         libero facilis minus reprehenderit.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex">
    //     <div className="flex flex-col items-center mr-4">
    //       <div>
    //         <div className="flex items-center justify-center w-10 h-10 border rounded-full">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-6 h-6 text-gray-500"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M17 13l-5 5m0 0l-5-5m5 5V6"
    //             />
    //           </svg>
    //         </div>
    //       </div>
    //       <div className="w-px h-full bg-gray-300"></div>
    //     </div>
    //     <div className="pb-8 ">
    //       <p className="mb-2 text-xl font-bold text-gray-600">Step 2</p>
    //       <p className="text-gray-700">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
    //         libero facilis minus reprehenderit.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex">
    //     <div className="flex flex-col items-center mr-4">
    //       <div>
    //         <div className="flex items-center justify-center w-10 h-10 border rounded-full">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-6 h-6 text-gray-500"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M17 13l-5 5m0 0l-5-5m5 5V6"
    //             />
    //           </svg>
    //         </div>
    //       </div>
    //       <div className="w-px h-full bg-gray-300"></div>
    //     </div>
    //     <div className="pb-8 ">
    //       <p className="mb-2 text-xl font-bold text-gray-600">Step 3</p>
    //       <p className="text-gray-700">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
    //         libero facilis minus reprehenderit.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="flex">
    //     <div className="flex flex-col items-center mr-4">
    //       <div>
    //         <div className="flex items-center justify-center w-10 h-10 border rounded-full">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-6 h-6 text-gray-500"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M5 13l4 4L19 7"
    //             />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="pt-1">
    //       <p className="mb-2 text-lg font-bold text-gray-600">Done</p>
    //     </div>
    //   </div>
    // </div>
  );
}
