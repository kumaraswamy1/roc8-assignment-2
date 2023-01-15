import { default as logo } from "../flipkart_logo.svg";

export const Navbar = () => {
	return (
		<div className=" border-b-2 flex z-10 sticky top-0  p-3 px-10 align-middle items-center bg-gray-800  flex-row justify-between mx-auto">
			<img src={logo} alt=" Logo" />
		</div>
	);
};
