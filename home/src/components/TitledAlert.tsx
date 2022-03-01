import "../index.css";

export default function TitledAlert(props) {
  return (
    <div role="alert">
      <div className="bg-gray-400 text-gray-800 font-bold rounded-t px-4 py-2">
        {props.title}
      </div>
      <div className="border border-t-0 border-gray-400 rounded-b bg-gray-100 px-4 py-3 text-gray-800">
        <p>{props.message}</p>
      </div>
    </div>
  );
}
