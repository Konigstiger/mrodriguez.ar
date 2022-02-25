
import classnames from "classnames";
import illustration from "../images/csharp-02.png";

function StackedCard(props) {    
    // defaults and dynamic styles from props, if any.
    const dynamicClass = classnames(
        "max-w-sm rounded overflow-hidden shadow-lg",
        props.bgColor);

    return (
        // <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-200">
        
        <div className={dynamicClass}>
        <img className="w-full" src={props.img} alt="Illustration" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <p className="text-gray-700 text-base">
            {props.text}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#netcore</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#microsoft</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#csharp</span>
        </div>
        </div>
    );
}

export default StackedCard;

