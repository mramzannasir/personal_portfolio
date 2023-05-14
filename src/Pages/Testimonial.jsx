import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri";
const Testimonial = () => {
	return (
		<div className="wrapper my-[10rem]">
			<div className="flex w-full flex-col items-center justify-center">
				<h1 className="title font-bold text-black">Testimonial</h1>
				<span className="h-[2px] w-[60px] bg-yellow lg:w-[100px]"></span>
			</div>
			<div className="contain relative flex items-center justify-center">
				<Splide
					options={{
						perPage: 1,
						perMove: 1,
						width: "100%",
						autoplay: true,
						pagination: true,
						arrows: false,
						speed: "2000",
						drag: true,
						type: "loop",
						gap: "80px",

						// breakpoints: {
						// 	1100: {
						// 		perPage: 2,
						// 	},
						// 	800: {
						// 		perPage: 1,
						// 	},
						// },
					}}>
					<SplideSlide>
						<div className="z-[99] flex w-full flex-col items-center justify-center rounded-md p-2 py-[100px] lg:mx-auto  lg:max-w-[600px]">
							<div className="flex w-full flex-col  items-center justify-center  ">
								<div className="">
									<img src="1.png" className="mx-auto" alt="" />
									<p className="text-xl font-semibold">Jon Doe</p>
								</div>
								<div>
									<img src="star44.png" alt="" />
								</div>
							</div>
							<div className="relative">
								<div className="absolute -top-4 left-1 h-3 w-3 text-[40px] opacity-20">
									<RiDoubleQuotesL />
								</div>
								<div className="absolute bottom-0 right-4 h-3 w-3 text-[40px] opacity-20 sm:bottom-3">
									<RiDoubleQuotesR />
								</div>

								<p className="mt-4 text-center text-base">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amet minim mollit non deserunt
									ullamco est sit aliqua dolor do amet sint. Velit officia
									consequat duis enim velit mollit. Exercitation veniam
									consequat sunt nostrud amet. Amet minim mollit non dese
								</p>
							</div>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="z-[99] flex w-full flex-col items-center justify-center rounded-md p-2 py-[100px] lg:mx-auto  lg:max-w-[600px]">
							<div className="flex w-full flex-col  items-center justify-center  ">
								<div className="">
									<img src="2.png" className="mx-auto" alt="" />
									<p className="text-xl font-semibold">Jon Doe</p>
								</div>
								<div>
									<img src="star4.png" alt="" />
								</div>
							</div>
							<div className="relative">
								<div className="absolute -top-4 left-1 h-3 w-3 text-[40px] opacity-20">
									<RiDoubleQuotesL />
								</div>
								<div className="absolute bottom-0 right-4 h-3 w-3 text-[40px] opacity-20 sm:bottom-3">
									<RiDoubleQuotesR />
								</div>

								<p className="mt-4 text-center text-base">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amet minim mollit non deserunt
									ullamco est sit aliqua dolor do amet sint. Velit officia
									consequat duis enim velit mollit. Exercitation veniam
									consequat sunt nostrud amet. Amet minim mollit non dese
								</p>
							</div>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div className="z-[99] flex w-full flex-col items-center justify-center rounded-md p-2 py-[100px] lg:mx-auto  lg:max-w-[600px]">
							<div className="flex w-full flex-col  items-center justify-center  ">
								<div className="">
									<img src="3.png" className="mx-auto" alt="" />
									<p className="text-xl font-semibold">Jon Doe</p>
								</div>
								<div>
									<img src="star44.png" alt="" />
								</div>
							</div>
							<div className="relative">
								<div className="absolute -top-4 left-1 h-3 w-3 text-[40px] opacity-20">
									<RiDoubleQuotesL />
								</div>
								<div className="absolute bottom-0 right-4 h-3 w-3 text-[40px] opacity-20 sm:bottom-3">
									<RiDoubleQuotesR />
								</div>

								<p className="mt-4 text-center text-base">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amet minim mollit non deserunt
									ullamco est sit aliqua dolor do amet sint. Velit officia
									consequat duis enim velit mollit. Exercitation veniam
									consequat sunt nostrud amet. Amet minim mollit non dese
								</p>
							</div>
						</div>
					</SplideSlide>
				</Splide>
			</div>
		</div>
	);
};
export default Testimonial;
