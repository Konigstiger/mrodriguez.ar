// import './Home.css'; //already imports Backgrounds.css

//<link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet"></link>
// import url(https://afeld.github.io/emoji-css/emoji.css)
import React from 'react';

import portrait from '../../assets/img//mrodriguez-portrait-small.jpg';
import largePortrait from '../../assets/img/mrodriguez-large.jpg';
import mountainPic from '../../assets/img/mountain-200.jpg';
import platoPic from '../../assets/img/plato-200.png';

import Footer from '../components/Footer';

// these are my own cards
import CardDemoChart from './Cards/CardDemoChart';
import MyProfileCard from './Cards/MyProfileCard';

// texts
const text_card_01: string = 'We are consuming an API to retrieve the following information.';
const text_card_02: string = 'This should be a more practical approach, showcasing something important.';

const endpoint1: string = 'https://localhost:44369/api/weather/now';
const endpoint2: string = 'https://localhost:44369/api/weather/stock';
const endpoint3: string = 'https://jsonplaceholder.typicode.com/posts';
const endpoint4: string = 'https://reqres.in/api/users?delay=1';

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-3 py-5">
          <MyProfileCard />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div className="rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0">
            <CardDemoChart />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <MyProfileCard />
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"></div>

        <div className="w-full xl:w-4/12 px-4">
          
        </div>
      </div>
    </>
  );
}
