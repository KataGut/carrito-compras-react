import { useContext } from "react";
import { CarritoContext } from "./CarritoProvider";
import { useState } from "react";

export const NewProductForm = () => {
	const { products, addProduct } = useContext(CarritoContext);

	const [nombre, setNombre] = useState("");
	const [precio, setPrecio] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!nombre || !precio) {
			alert("Debes escribir un nombre de producto y precio");
		} else {
			addProduct({ id: crypto.randomUUID(), name: nombre, price: precio });
			resetInputs();
		}
	};

	const resetInputs = () => {
		setNombre("");
		setPrecio("");
	};

	return (
		<>
			<h2>Add a new product:</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="producto">Nombre del producto: </label>
					<input
						id="producto"
						type="text"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="precio">Precio del producto: </label>
					<input
						id="precio"
						type="number"
						value={precio || ""}
						onChange={(e) => setPrecio(Number(e.target.value))}
					/>
				</div>
				<div>
					<button type="submit"> Submit</button>
				</div>
			</form>
		</>
	);
};
