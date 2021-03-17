// import './Header.css';
// import Logo from "../images/logo.svg";

function Header() {
  return (
	<nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
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
  );
}

export default Header;
