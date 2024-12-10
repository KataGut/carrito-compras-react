import { createContext } from "react";
import { useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
	const [products, setProducts] = useState([
		{ id: 1, name: "zapatos", price: 10 },
		{ id: 2, name: "bolsos", price: 10 },
		{ id: 3, name: "vestidos", price: 20 },
	]);

	const addProduct = (product) => {
		setProducts([...products, product]);
	};

	const deleteProduct = (productId) => {
		setProducts(
			products.filter((p) => {
				return p.id !== productId;
			}),
		);
	};

	return (
		<CarritoContext.Provider
			value={{
				products,
				addProduct,
				deleteProduct,
			}}
		>
			{props.children}
		</CarritoContext.Provider>
	);
};
