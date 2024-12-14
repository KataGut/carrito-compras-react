import { useContext } from "react";
import { CarritoContext } from "./CarritoProvider";

export const ProductList = () => {
	// const { products, categories } = useContext(CarritoContext);
	const context = useContext(CarritoContext);
	const { deleteProduct, undeletedProducts } = context;

	return (
		<>
			<h2>Your shopping basket:</h2>
			{undeletedProducts.length === 0 && <p>No hay elementos</p>}

			<ul>
				{undeletedProducts.map((item, idx) => {
					return (
						<li key={item.id}>
							{idx + 1}. Producto: {item.name} - precio: ${item.price}{" "}
							<button type="button" onClick={() => deleteProduct(item.id)}>
								🗑️
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};
