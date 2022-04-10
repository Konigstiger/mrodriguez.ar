export default function MisteryProgress({ percentage, title }) {
  return (
    // TODO: creo que deberia pasar por props el max-w- asi puedo definir el ancho
    <div className="relative pt-1 mb-10">
      <div className="flex items-center justify-between">
        <div className="pb-1">
          <span
            className="
                     text-xs
                     font-semibold
                     inline-block
                     py-1
                     px-2
                     uppercase
                     rounded-full
					 bg-tertiary 
					 text-text-on-secondary
                     "
          >
            {title}
          </span>
        </div>

        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-purple-600">
            {percentage}%
          </span>
        </div>
      </div>

      <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
        <div
          style={{ width: `${percentage}%` }}
          className={`
		  	shadow-none
			flex flex-col
			text-center
			whitespace-nowrap
			text-white
			justify-center
				${percentage < 70 ? "bg-accent-primary" : "bg-accent-secondary"}`}
        ></div>
      </div>

      <div className="overflow-hidden h-2 mb-4 text-xs flex  rounded-full bg-gray-200">
        {percentage > 0 && (
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-300"
          ></div>
        )}

        {percentage > 20 && (
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
          ></div>
        )}

        {percentage > 40 && (
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-700"
          ></div>
        )}

        {percentage > 60 && (
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-800"
          ></div>
        )}

        {percentage > 80 && (
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-900"
          ></div>
        )}
      </div>
    </div>
  );
}
