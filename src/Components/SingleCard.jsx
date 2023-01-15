export const SingleCard = ({ product }) => { 

    return(<div key={product.id} className="group relative">
							<div className="min-h-80  overflow-hidden rounded-md  group-hover:opacity-75  lg:h-80">
								<img
									src={product.image}
									alt={product.image}
									className="h-56 w-72"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<p className="mt-1 text-sm text-gray-500">{product.brand}</p>
									<p className="mt-1  font-medium text-gray-900">
										{product.name}
									</p>
									<p className="text-sm font-medium text-gray-900">
										Size {product.size.map((s) => `${s}  `)}
									</p>
								</div>
								<p className="text-sm font-medium text-gray-900">
									₹ {product.price}
								</p>
							</div>
						</div>)
}