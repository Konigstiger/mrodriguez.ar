import React from 'react';

// This is important. Is the last version of my Profile Card.
// Should I include the Photo here or in the Home component?

import portrait from '../../assets/img/mrodriguez-portrait-small.jpg';

export default function MyProfileCard() {
  return (
    <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0">
      <div className="p-4 md:p-12 text-center lg:text-left">
        {/* Image? */}
        <div
          className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${portrait})` }}
        ></div>

        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Mariano Rodriguez</h1>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

        <p className="pt-4 text-base font-semibold flex justify-center lg:justify-start">
          <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
          </svg>
          Senior Software Developer
        </p>

        <p className="pt-4 text-base font-semibold flex items-center justify-center lg:justify-start">
          <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
          </svg>
          UI/UX Designer
        </p>
        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
          <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
          </svg>
          Cordoba, Argentina, 31.36° S, 64.20° W
        </p>

        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-200 opacity-25"></div>

        <p className="pt-8 text-sm">
          I'm a Software Developer experienced in several programming languages and industries.
        </p>
        <p className="pt-8 text-sm">
          I have great interest in UI/UX Design as complement to my frontend and general design skills. The mix between
          art and science always fascinated me.
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path fill="#FFCCEE" d="M.471 0L0 .471 2.828 3.3 5.657.47 5.185 0 2.828 2.357.471 0z"></path>
        </svg>
      </div>
    </div>
  );
}
