


const Contact = () => {
	return (
		<div id="contact" className="wrapper mt-[6rem]">
			<div className="flex w-full s   flex-col items-center justify-center">
				<h1 className="title font-bold text-black">Contact</h1>
				<span className="h-[2px] w-[60px] bg-yellow lg:w-[100px]"></span>
			</div>
			<div className="contain flex flex-col items-center justify-center">
				<div className="mt-[2.5rem] flex w-full flex-col items-center justify-center rounded-xl   md:mt-[5rem] md:flex-row 3xl:max-w-[800px]">
					<form action="" className="flex w-full flex-col gap-4">
						<div>
							<label htmlFor="" className="text-base font-semibold text-black">
								Name
							</label>
							<input
								required
								type="text"
								className="mt-3 h-10 w-full rounded-lg border-[1px] border-[#E8ECF4] bg-white pl-2 text-gray outline-none"
							/>
						</div>
						<div>
							<label htmlFor="" className="text-base font-semibold text-black">
								Email
							</label>
							<input
								required
								type="email"
								className="mt-3 h-10 w-full rounded-lg border-[1px] border-[#E8ECF4] bg-white pl-2 text-gray outline-none"
							/>
						</div>
						<div>
							<label htmlFor="" className="text-base font-semibold text-black">
								Message
							</label>
							<textarea
								rows={5}
								required
								type="email"
								className=" mt-3 w-full rounded-lg border-[1px] border-[#E8ECF4] bg-white p-2 pl-2 text-gray outline-none"
							/>
						</div>
						<div className="flex w-full items-end justify-end">
							<button type="submit" className="btn">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
			
		</div>
	);
};

export default Contact;
