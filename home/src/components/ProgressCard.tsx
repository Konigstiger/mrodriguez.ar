export default function ProgressCard({ n, title }) {

  return (
    // TODO: podria pasar por props el max-w- asi puedo definir el ancho
    <div className="relative py-1 mb-1">
      <div className="flex items-center justify-between">
        <div className="pb-1">
          <span
            className="
                     text-xs
                     font-semibold
                     inline-block
                     py-1
                     px-2
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
            {/* {20*n}% */}
            {n}/5
          </span>
        </div>
      </div>

      {/* <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
        <div
          style={{ width: `${n}%` }}
          className={`
		  	shadow-none
			flex flex-col
			text-center
			whitespace-nowrap
			text-white
			justify-center
				${n < 70 ? "bg-accent-primary" : "bg-accent-secondary"}`}
        ></div>
      </div> */}

      <div className="overflow-hidden h-2 mb-4 text-xs flex  rounded-full bg-gray-200">

        {/* normal */}
        {/* <div
          style={{ width: 20 * n + "%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-400"
        ></div> */}

        {/* {[...Array(n+1)].map((e, j) => (
          <div
            style={{ width: (20 * j) + "%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-400"
          ></div>
        ))} */}

        {n > 0 && (
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-400"
          ></div>
        )}

        {n > 1 && (
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
          ></div>
        )}

        {n > 2 && (
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
          ></div>
        )}

        {n > 3 && (
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-700"
          ></div>
        )}

        {n > 4 && (
          // puedo probar encapsular esto en un componente a repetir, como ProgressSegment
          <div
            style={{ width: "20%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-800"
          ></div>
        )}

      </div>
    </div>
  );
}
