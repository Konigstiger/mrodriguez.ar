
import classnames from "classnames";
import Chip from '@mui/material/Chip';

export default function StackedCard(props) {
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
            <div className="mx-4 my-4 ">
                <Chip
                    // avatar={<Avatar alt="#" src={hashIcon} />}
                    label="#netcore"
                />
                <Chip
                    // avatar={<Avatar alt="#" src={hashIcon} />}
                    label="#csharp"
                />

            </div>
        </div>
    );
}
