/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1440px",
				"2xl": "1680px",
				"3xl": "1920px",
				"4xl": "2560px"
			},
			colors: {
				black: "#25282B",
				yellow: "#FDC435",
				gray: "#828282",
				lightGray: "#9A9FA8",
				lightWhite: "#F9FAFF",
			},
		},
	},
	plugins: [],
};
