import ProgressSegment from "./ProgressSegment";

export default function ProgressCard({ n, title }) {
  return (
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
            {n}/5
          </span>
        </div>
      </div>

      <div className="overflow-hidden h-2 mb-4 text-xs flex  rounded-full bg-gray-200">
        {n > 0 && <ProgressSegment color="bg-progresslevel-400" />}
        {n > 1 && <ProgressSegment color="bg-progresslevel-500" />}
        {n > 2 && <ProgressSegment color="bg-progresslevel-600" />}
        {n > 3 && <ProgressSegment color="bg-progresslevel-700" />}
        {n > 4 && <ProgressSegment color="bg-progresslevel-800" />}
      </div>
    </div>
  );
}
