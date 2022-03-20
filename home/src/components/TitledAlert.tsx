import "../index.css";

export default function TitledAlert(props) {
  return (
    <div role="alert">
      <div className="bg-secondary text-gray-800 font-bold rounded-t px-4 py-2">
        {props.title}
      </div>
      <div className="bg-tertiary px-4 py-3 text-text-on-primary">
        <p className="text-sm">{props.message}</p>
      </div>
    </div>
  );
}
