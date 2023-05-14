import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
	return (
		<>
			{" "}
			<div className="wrapper">
				<div className="contain mt-[6rem] flex items-center justify-center gap-4 text-black md:gap-2">
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
				<div>
					<p className="mt-6 text-center text-gray">Madelyn Torff 2021 </p>
				</div>
			</div>
			<div className="w-full">
				<img src="Footer.png" className="w-full" alt="" />
			</div>
		</>
	);
};

export default Footer;
