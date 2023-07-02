
export default function ProgressSegment({color}) {
	return (
		<div
		style={{ width: "20%" }}
		className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color}`}
	  ></div>
	);
}
