import portrait from "../images/mrodriguez-portrait-small.jpg";
import demoPic from "../images/mountain-200.jpg";
import demoAuthor from "../images/plato-200.png";

interface IQuoteImageCard {
    title: string
    subtitle?: string
    text: string
    name: string
    authorPic?      // TODO: add this and remove the problem of the imports that create-react-app generates
}

const QuoteImageCard: React.FC<IQuoteImageCard> = (props) => {
    return (

        <div className="min-h-screen bg-gray-200 flex justify-center items-center">

            <div className="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
                <div id="header" className="flex">
                    
                    <img className="w-45 rounded-md border-2 border-gray-300" src={demoPic} alt="illustration"/>
                    
                    <div id="body" className="flex flex-col ml-5">
                        <h4 id="title" className="text-xl font-semibold mb-2">{props.title}</h4>
                        <p id="text" className="text-gray-800 mt-2">{props.text}</p>
                        <div className="flex mt-5">
                            <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300" src={demoAuthor} />
                            <p className="ml-3">{props.name}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default QuoteImageCard;