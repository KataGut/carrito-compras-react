import { createContext } from "react";
import { useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = (props) => {
	const [products, setProducts] = useState([
		{ id: 1, name: "zapatos", price: 10 },
		{ id: 2, name: "bolsos", price: 10 },
		{ id: 3, name: "vestidos", price: 20 },
	]);

	const addProducts = () => {};

	return (
		<CarritoContext.Provider
			value={{
				products,
				addProducts,
			}}
		>
			{props.children}
			{/*             <label htmlFor="productName">
                Write your new product:
            </label>
            <input id="productName" value={products.name} type='text' onChange={e => setProducts(e.value.target)}>
            </input> */}
		</CarritoContext.Provider>
	);
};
