
export default function Pill({text}) {
	return (
		<div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-400 rounded-full bg-secondary-light text-base text-text-on-secondary font-medium">
			<div className="flex-initial max-w-full leading-none text-xs font-normal">
				{text}
			</div>
		</div>
	);
}
