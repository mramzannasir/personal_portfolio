import { Link } from "react-router-dom";
const Hero = () => {
	return (
		<>
			<main id="home" className="wrapper my-6">
				<div className="contain pt-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
					<div className="w-full flex-1 md:w-[50%]">
						<p className="text-center text-lg font-bold text-yellow md:text-left md:text-xl">
							Web Developer
						</p>
						<h1 className="heading text-center font-bold  leading-[120%] text-black md:text-left ">
							Hello, my name is Madelyn Torff
						</h1>
						<p className="heroDes my-2 text-center font-normal leading-6 text-gray md:text-left lg:my-3">
							Short text with details about you, what you do or your
							professional <br /> career. You can add more information on the
							about page.
						</p>
						<div className="flex w-full items-center justify-center gap-5 md:justify-start">
							<button className="btn flex items-center justify-center text-base">
							<Link to="projects">	Projects</Link>
							</button>
							<button className="btn2 flex items-center justify-center border border-black text-base">
								{" "}
								<a target="_blank" href="#">
									Linkedin
								</a>{" "}
							</button>
						</div>
					</div>
					<div className="flex flex-1 w-full items-center justify-center md:w-[50%]">
						<img src="Hero.png" className="h-[20rem] md:h-auto lg:mt-10" alt="" />
					</div>
				</div>
			</main>
		</>
	);
};

export default Hero;
