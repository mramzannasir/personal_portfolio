import Contact from "../Pages/Contact";
import Hero from "../Pages/Hero";
import Project from "../Pages/Project";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonial from "../Pages/testimonial";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Project />
			<Testimonial/>
			<Contact />
			<Footer />
		</>
	);
};

export default Layout;
