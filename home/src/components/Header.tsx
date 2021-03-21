// import Logo from "../images/logo.svg";

const Header: React.FC = () => {
	return (

		<nav className="bg-gray-800 p-1 mt-0 fixed w-full z-10 top-0">
			<div className="container mx-auto flex flex-wrap items-center">

				<div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
					<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
						<li className="mr-3">
							<a className="inline-block py-2 px-4 text-white no-underline p-12"
								href="https://blog.mrodriguez.ar/">Blog</a>
						</li>
						<li className="mr-3">
							<a className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
								href="https://blog.mrodriguez.ar/contact">Contact</a>
						</li>
						<li className="mr-3">
							<a className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
								href="https://blog.mrodriguez.ar/resume">Resume</a>
						</li>

					</ul>
				</div>
			</div>
		</nav>


	// 	<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blueGray-500 mb-3">
	// 		<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
	// 			<div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
	// 				<a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
	// 					blueGray Color
    //   </a>
	// 				<button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
	// 					<span className="block relative w-6 h-px rounded-sm bg-white"></span>
	// 					<span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
	// 					<span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
	// 				</button>
	// 			</div>
	// 			<div className="lg:flex flex-grow items-center">
	// 				<ul className="flex flex-col lg:flex-row list-none ml-auto">
	// 					<li className="nav-item">
	// 						<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
	// 							<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
	// 						</a>
	// 					</li>
	// 					<li className="nav-item">
	// 						<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
	// 							<i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
	// 						</a>
	// 					</li>
	// 					<li className="nav-item">
	// 						<a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
	// 							<i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
	// 						</a>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 		</div>
	// 	</nav>




	);
}

export default Header;
