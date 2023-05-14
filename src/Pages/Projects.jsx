import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useEffect } from "react";
import Footer from "../components/Footer";
const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div id="Project" className="wrapper my-6">
				<div className="contain relative">
					<Link to="/">
						<MdOutlineKeyboardBackspace size={30} />
					</Link>
				</div>
				<div className="flex w-full flex-col items-center justify-center">
					<h1 className="title font-bold text-black">Projects</h1>
					<span className="h-[2px] w-[60px] bg-yellow lg:w-[100px]"></span>
				</div>
				{/* Project Sections Start from here */}
				<div className="contain 4xl: flex  flex-col items-center justify-center 4xl:grid 4xl:grid-cols-2 4xl:gap-6">
					<div className="a mt-[2.5rem] flex w-full flex-col items-center justify-center rounded-xl  bg-white md:mt-[5rem] md:flex-row xl:w-[1050px] 4xl:w-full">
						<div className="w-full px-1 py-8 md:w-[50%] md:px-4">
							<h1 className="subTitle text-center font-bold text-black md:text-left">
								Project Title
							</h1>
							<p className="des my-2 text-center font-normal leading-[150%] text-gray md:text-left">
								I created this personal project in order to show how to create
								an interface in Figma using a portfolio as an example.
							</p>
							<button className="btn3 mx-auto block md:mx-0 ">
								View Project
							</button>
						</div>
						<div className="w-full md:w-[50%]">
							<img
								src="project-1.png"
								className="w-full rounded-b-xl md:rounded-l-none md:rounded-r-xl"
								alt=""
							/>
						</div>
					</div>
					<div className="a mt-[2.5rem] flex w-full flex-col-reverse items-center justify-center rounded-xl  bg-white md:mt-[5rem] md:flex-row xl:w-[1050px] 4xl:w-full">
						<div className="w-full md:w-[50%]">
							<img
								src="project-2.png"
								className="w-full rounded-b-xl md:rounded-l-xl md:rounded-r-none"
								alt=""
							/>
						</div>
						<div className="w-full px-1 py-8 md:w-[50%] md:px-4">
							<h1 className="subTitle text-center font-bold text-black md:text-left">
								Project Title
							</h1>
							<p className="des my-2 text-center font-normal leading-[150%] text-gray md:text-left">
								I created this personal project in order to show how to create
								an interface in Figma using a portfolio as an example.
							</p>
							<button className="btn3 mx-auto block md:mx-0 ">
								View Project
							</button>
						</div>
					</div>
					<div className="a mt-[2.5rem] 4xl:mt-0 flex w-full flex-col items-center justify-center rounded-xl  bg-white md:mt-[5rem] md:flex-row xl:w-[1050px] 4xl:w-full">
						<div className="w-full px-1 py-8 md:w-[50%] md:px-4">
							<h1 className="subTitle text-center font-bold text-black md:text-left">
								Project Title
							</h1>
							<p className="des my-2 text-center font-normal leading-[150%] text-gray md:text-left">
								I created this personal project in order to show how to create
								an interface in Figma using a portfolio as an example.
							</p>
							<button className="btn3 mx-auto block md:mx-0 ">
								View Project
							</button>
						</div>
						<div className="w-full md:w-[50%]">
							<img
								src="project-3.png"
								className="w-full rounded-b-xl md:rounded-l-none md:rounded-r-xl"
								alt=""
							/>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		</>
	);
};

export default Projects;
