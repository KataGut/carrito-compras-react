import { useContext } from "react";
import { CarritoContext } from "./CarritoProvider";

export const ProductList = () => {
	// const { products, categories } = useContext(CarritoContext);
	const context = useContext(CarritoContext);

	const { products } = context;

	return (
		<>
			<h2>Your shopping basket:</h2>
			<ul>
				{products.map((item) => (
					<li key={item.id}>
						{item.id}. Producto: {item.name} - precio: ${item.price}
					</li>
				))}
			</ul>
		</>
	);
};
