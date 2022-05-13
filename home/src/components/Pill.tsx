
export default function Pill({text}) {
	return (
		<div className="flex justify-center items-center m-1 px-2 py-1 rounded-full text-base bg-tertiary text-text-on-secondary">
			<div className="flex-initial max-w-full leading-none text-xs font-oxanium">
				{text}
			</div>
		</div>
	);
}
