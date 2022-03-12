import "../index.css";

export default function TitledAlert(props) {
  return (
    <div role="alert">
      <div className="bg-color-04-pinky text-gray-800 font-bold rounded-t px-4 py-2">
        {props.title}
      </div>
      <div className="border border-t-0 border-gray-300 rounded-b bg-gray-100 px-4 py-3 text-gray-800">
        <p className="text-sm">{props.message}</p>
      </div>
    </div>
  );
}
