
export const brands = [
		"Allen Solly",
		"Puma",
		"High Lander",
		"Rebook",
		"Adidas",
];


export  const sizes = ["S", "M", "L", "XL"];
export  const idealFors = ["Men", "Women", "Boy", "Girl"];
    
export const getSortedData = (products,sortBy) => {
   if (sortBy && sortBy === "HIGH_TO_LOW") {
     return   products.sort((a,b)=>b.price - a.price);
   } if (sortBy && sortBy === "LOW_TO_HIGH"){
     return products.sort((a,b)=>a.price - b.price);
   } else 
   return products
}

export const getFilteredData = (products,state) => {
    let filteredProducts = products
   if (state?.brand.length > 0)
      {
            filteredProducts=filteredProducts.filter(({ brand }) => state?.brand?.includes(brand))
      }
   if (state?.size.length > 0)
      {
            filteredProducts = filteredProducts.filter(({ size }) => state.size.some(val => size.includes(val)))
      }  
 
      if(state?.idealFor.length > 0) 
      {
            filteredProducts = filteredProducts.filter(({ idealFor }) => idealFor.some(val => state.idealFor.includes(val)))
      }
		return filteredProducts;
};
