import React from 'react'

interface ICardProps {
    photo: any,
    title: string
    subtitle?: string
}

// worked well
//const Card = (props: ICardProps) => {
const Card: React.FC<ICardProps> = (props) => {

    return (

        // <div className="w-full lg:w-2/5">
        //     <img src={largePortrait} alt="mr" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
        // </div>

        //available css backgrounds to append:
        // background-graph-paper
        // background-plus


        <div className="background-plus w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-red opacity-90 mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
                {/* Image for mobile view */}
                <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{props.title}</h1>

                {/* divider */}
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-gray-500 opacity-25"></div>

                {props.subtitle != null &&
                    <div className="font-bold text-xl mb-2">{props.subtitle}<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-gray-300 opacity-25"></div></div>
                    
                }

            </div>


            <div className='card'>
                <img src={props.photo} alt="illustration" className='rounded-none shadow-md mx-auto -mt-16 h-64 w-64 bg-cover bg-center' />

                <div className="px-6 py-4">
                    <p className="pt-4 text-base font-semibold flex items-center justify-center lg:justify-start">
                        <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>[Header Article]</p>

                    <div className="px-4 py-4">
                        {/* text base */}
                        <p className="pt-4 text-base">This is regular text. It is just an experiment for creating a custom made Card component.</p>
                        
                        {/* text small */}
                        <p className="pt-4 text-sm">Maybe Tailiwind already has something premade, but this is lots of fun.</p>
                        
                        {/* color */}
                        <p className="pt-4 text-sm text-green-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>

                        {/* chiclets with no links */}
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#testing</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#react</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#components</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Card