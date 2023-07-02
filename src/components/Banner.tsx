import { PinDropSharp } from "@mui/icons-material";
import "../index.css";

export default function Banner(props) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-6 max-w-5xl mx-8 rounded-xl bg-blue-800">
          <div className="col-span-4">
            <h2 className="font-bold text-3xl text-white ml-10 mt-8">
              {props.title}
            </h2>

            <p className="font-light text-white text-sm ml-10 mt-5">
              {props.message}
            </p>

            <button className="text-white font-semibold ml-10 mt-5 mb-8">
              {props.action}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          <div className="col-span-2 relative">
            <img
              alt=""
              src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
