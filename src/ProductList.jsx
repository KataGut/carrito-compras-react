import { useContext } from "react";
import { CarritoContext } from "./CarritoProvider";

export const ProductList = () => {
	// const { products, categories } = useContext(CarritoContext);
	const context = useContext(CarritoContext);
	const { products, deleteProduct } = context;

	return (
		<>
			<h2>Your shopping basket:</h2>
			<ul>
				{products.map((item, idx) => (
					<li key={item.id}>
						{idx + 1}. Producto: {item.name} - precio: ${item.price}{" "}
						<button type="button" onClick={() => deleteProduct(item.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};
