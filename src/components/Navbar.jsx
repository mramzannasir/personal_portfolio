import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
const Navbar = () => {
	const [show, setShow] = useState(false);
	const [activeLink, setActiveLink] = useState("home");
	return (
		<>
			{/* Overlay */}
			<div
				className={`${
					show ? "block" : "hidden"
				}  top absolute left-0 z-[98]  w-full bg-black bg-opacity-70 md:hidden`}>
				{" "}
			</div>
			<main className="wrapper relative pt-2">
				<div className="contain flex items-center justify-between">
					<div>
						<h3 className="text-lg font-bold">Madelyn Torff</h3>
					</div>
					{/* Nav Items */}
					<nav
						className={`navbar absolute  left-0 top-0 z-[98] flex h-screen w-full flex-col items-center justify-center gap-[50px] bg-black text-lg  font-normal text-white transition-all duration-1000 md:static md:h-auto md:w-auto md:flex-row  md:items-center  md:justify-start md:gap-5 md:bg-inherit  md:p-0 md:text-black lg:gap-[30px] ${
							show ? "left-0" : "left-[-880px]"
						} `}>
						<Link
							className="relative cursor-pointer"
							activeClass="activeLink"
							to="home"
							spy={true}
							offset={-200}
							smooth={true}
							duration={1000}
							// onSetInactive={() => setActiveLink("")}
							onSetActive={() => setActiveLink("home")}
							onSetInactive={() => setActiveLink("")}
							onClick={() => setShow(false)}>
							<h4 className="text-lg font-medium">About </h4>
						</Link>
						<Link
							activeClass="activeLink"
							className="relative cursor-pointer"
							to="Project"
							spy={true}
							offset={-50}
							smooth={true}
							duration={1000}
							onSetInactive={() => setActiveLink("")}
							onClick={() => setShow(false)}
							onSetActive={() => setActiveLink("service")}>
							<h4 className="text-lg font-medium"> Projects </h4>
						</Link>
						<Link
							activeClass="activeLink"
							className="relative cursor-pointer"
							to="contact"
							spy={true}
							offset={-200}
							smooth={true}
							duration={1000}
							onSetInactive={() => setActiveLink("")}
							onClick={() => setShow(false)}
							onSetActive={() => setActiveLink("contact")}>
							{activeLink === "contact" && (
								<span className="bg-darkBrown absolute left-0 top-[130%] hidden h-[3px] w-full rounded-xl md:block"></span>
							)}
							<h4 className="text-lg font-medium"> Contact </h4>
						</Link>
						<dir className="w-full md:hidden">
							<div className="contain mt-5 flex items-center justify-center gap-4 text-white md:gap-2">
								<div>
									<a target="_blank" href="#">
										<AiFillInstagram size={50} />
									</a>
								</div>
								<div>
									<a target="_blank" href="#">
										<AiFillLinkedin size={45} />
									</a>
								</div>
								<div>
									<a target="_blank" href="#">
										<IoMdMail size={50} />
									</a>
								</div>
							</div>
						</dir>
						<div className="absolute left-0 top-4 z-[100] flex w-full justify-between px-3 md:hidden">
							<div className="text-white">
								<h3 className="text-lg font-bold">Madelyn Torff</h3>
							</div>
							<span onClick={() => setShow(false)} className=" text-white ">
								<RxCross2 size={29} />
							</span>
						</div>
					</nav>
					<div onClick={() => setShow(true)} className={`md:hidden`}>
						<FiMenu size={29} />
					</div>
				</div>
			</main>
		</>
	);
};

export default Navbar;
