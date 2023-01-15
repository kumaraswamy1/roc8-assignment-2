import { brands, idealFors, sizes } from "../Utilis/functions";

export const Sidebar = ({ state, dispatch }) => {
	const inputHadler = ({ value, category }) => {
		console.log(value, category);
		dispatch({ type: "ADD_FILTERVALUE", payload: { value, category } });
	};

	return (
		<div
			className=" z-10
  lg:flex  w-96 "
		>
			<div className="lg:flex flex-col w-64 min-h-screen fixed    p-6 bg-white  border-r-2 border-gray-400 ">
				<button
					className="text-white bg-slate-700 p-2 mb-1 rounded-md "
					onClick={() => {
						dispatch({ type: "CLEAR_FILTERS" });
					}}
				>
					clear filters
				</button>
				<h3 className="mr-2 text-slate-900 font-medium">PRICE</h3>
				<div className="flex ">
					<label htmlFor="HIGH_TO_LOW">
						<input
							className="w-4 h-4  m-2 rounded  focus:ring-blue-500 "
							type="radio"
							id="HIGH_TO_LOW"
							name="sort"
							value="HIGH_TO_LOW"
							checked={state.sortBy === "HIGH_TO_LOW"}
							onChange={() =>
								dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
							}
						/>
						High to Low
					</label>
				</div>
				<div>
					<input
						className="w-4 h-4 m-2 rounded focus:ring-blue-500 "
						type="radio"
						id="LOW_TO_HIGH"
						name="sort"
						value="LOW_TO_HIGH"
						checked={state.sortBy === "LOW_TO_HIGH"}
						onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
					/>
					<label htmlFor="LOW_TO_HIGH">Low to High</label>
				</div>
				<h3 className="m-1 font-medium ">BRANDS</h3>
				{brands.map((brand) => (
					<div>
						<input
							checked={state.brand.some((value) => value === brand)}
							className="w-4 h-4    m-2 rounded focus:ring-blue-500 "
							type="checkbox"
							value={brand}
							onChange={(e) =>
								inputHadler({ value: e.target.value, category: "brand" })
							}
						/>
						<label className="m-1 text-sm  text-black">{brand}</label>
					</div>
				))}
				<h3 className="m-1  font-medium">SIZE</h3>
				{sizes.map((size) => (
					<div>
						<input
							checked={state.size.some((value) => value === size)}
							className="w-4 h-4  m-2   rounded focus:ring-blue-500 "
							type="checkbox"
							value={size}
							onChange={(e) =>
								inputHadler({ value: e.target.value, category: "size" })
							}
						/>
						<label className="m-1 text-sm  text-black">{size}</label>
					</div>
				))}
				<h3 className="m-1  font-medium">IDEAL FOR </h3>
				{idealFors.map((idealFor) => (
					<div>
						<input
							checked={state.size.some((value) => value === idealFor)}
							className="w-4 h-4    m-2 rounded focus:ring-blue-500 "
							type="checkbox"
							value={idealFor}
							onChange={(e) =>
								inputHadler({ value: e.target.value, category: "idealFor" })
							}
						/>
						<label className="m-1 text-sm  text-black">{idealFor}</label>
					</div>
				))}
			</div>
		</div>
	);
};
