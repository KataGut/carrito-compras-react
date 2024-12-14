import { createContext } from "react";
import { useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
	const [products, setProducts] = useState([
		{ id: 1, name: "zapatos", price: 10, deleted: false },
		{ id: 2, name: "bolsos", price: 10, deleted: false },
		{ id: 3, name: "vestidos", price: 20, deleted: false },
	]);

	const addProduct = (product) => {
		setProducts([...products, product]);
	};

	const deleteProduct = (productId) => {
		setProducts(
			products.map((p) => {
				// p.id !== productId;
				if (p.id === productId) {
					return { ...p, deleted: true };
				}

				return p;
			}),
		);
	};

	const restoreProduct = (productId) => {
		setProducts(
			products.map((p) => {
				if (p.id === productId) {
					return { ...p, deleted: false };
				}

				return p;
			}),
		);
	};

	const cleanBasket = () => {
		setProducts(products.filter((p) => !p.deleted));
	};

	const deletedProducts = products.filter((p) => p.deleted);
	const undeletedProducts = products.filter((p) => !p.deleted);

	return (
		<CarritoContext.Provider
			value={{
				products,
				addProduct,
				deleteProduct,
				undeletedProducts,
				deletedProducts,
				restoreProduct,
				cleanBasket,
			}}
		>
			{props.children}
		</CarritoContext.Provider>
	);
};
