import { useContext } from "react";
import { CarritoContext } from "./CarritoProvider";

export const DeletedProductList = () => {
	// const { products, categories } = useContext(CarritoContext);
	const context = useContext(CarritoContext);
	const { products, deletedProducts } = context;

	return (
		<>
			<h2>Products Deleted:</h2>
			<ul>
				{deletedProducts.map((item, idx) => {
					return (
						<li key={item.id}>
							{idx + 1}. Producto: {item.name} - precio: ${item.price}{" "}
							{/* <button type="button">🗑️</button> */}
						</li>
					);
				})}
			</ul>
		</>
	);
};
