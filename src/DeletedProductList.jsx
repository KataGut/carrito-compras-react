import { useContext } from "react";
import { CarritoContext } from "./CarritoProvider";

export const DeletedProductList = () => {
	// const { products, categories } = useContext(CarritoContext);
	const context = useContext(CarritoContext);
	const { deletedProducts, cleanBasket, restoreProduct } = context;

	return (
		<>
			<h2>Products Deleted:</h2>
			{deletedProducts.length === 0 && <p>No hay elementos</p>}
			{deletedProducts.length > 0 && (
				<button type="button" onClick={() => cleanBasket()}>
					Clean basket
				</button>
			)}

			<ul>
				{deletedProducts.map((item, idx) => {
					return (
						<li key={item.id}>
							{idx + 1}. Producto: {item.name} - precio: ${item.price}{" "}
							<button type="button" onClick={() => restoreProduct(item.id)}>
								🔙
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};
