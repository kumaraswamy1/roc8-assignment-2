import { getFilteredData, getSortedData } from "../Utilis/functions";
import { SingleCard } from "./SingleCard";

export const ProductListing = ({ state }) => {
	const sortedData = getSortedData(state.data, state.sortBy);
	const filteredData = getFilteredData(sortedData, state);
	return (
		<>
			<div className="mx-auto   sm:py-24 sm:px-6  lg:px-8">
				<h2 className="text-xl font-bold tracking-tight text-gray-900">
					Clothing And Accessories
				</h2>
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
					{filteredData?.map((product) => (
						<SingleCard product={product}/>
					))}
				</div>
			</div>
		</>
	);
};
