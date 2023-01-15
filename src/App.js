import { useReducer } from "react";
import { Navbar } from "./Components/Navbar";
import { ProductListing } from "./Components/Products";
import { Sidebar } from "./Components/Filters";

import { productReducer } from "./Reducer/Product-reducer";
import { products } from "./Data/data";


function App() {

const intialData = {
    data:products,
		brand: [],
		size: [],
    idealFor: [],
    sortBy: null,
    sortedData:[]
  }

const [ state, dispatch ]=useReducer(productReducer,intialData)
  return (
   <div className=" min-h-screen pb-7">
			<Navbar />
     <div className=" flex flex-row">
        <Sidebar state={state} dispatch={dispatch} />
        <ProductListing state={state}  />
      </div>
    </div>
  );
}

export default App;
