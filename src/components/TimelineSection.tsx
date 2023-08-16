
export default function TimelineSection({year}) {
	return (
        <div className="flex flex-col items-center mr-4">
          <div>
            <div className="flex items-center justify-center w-12 h-8 border rounded-md border-primary">
              <h1 className="mx-auto font-semibold text-lg  text-text-on-secondary">
                {year}
              </h1>
            </div>
          </div>
          {/* color de linea */}
          <div className="w-px h-full bg-primary"></div>
        </div>
	);
}
