
//import illustration from "../images/csharp-02.png";
import portrait from "../images/mrodriguez-portrait-small.jpg";

import Avatar from '@mui/material/Avatar';


export default function HorizontalCard(props) {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url(${props.img})` }}>
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        {props.tag}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                {/* TODO: make me a component */}
                <div className="flex items-center">
                    {/* <img className="w-10 h-10 rounded-full mr-4" src={portrait} alt="Avatar" /> */}
                    {/* <Avatar alt="Mariano Rodriguez" src={portrait} sx={{ width: 64, height: 64 }} /> */}
                    <Avatar alt="Mariano Rodriguez" src={portrait} sx={{ width: 128, height: 128 }} />
                    
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">Mariano Rodriguez</p>
                        <p className="text-gray-600">Feb 24</p>
                    </div>
                </div>
            </div>
        </div>
    );
}