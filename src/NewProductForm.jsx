import { useContext } from "react";
import { CarritoContext } from "./CarritoProvider";
import { useState } from "react";

export const NewProductForm = () => {
	const { products } = useContext(CarritoContext);
	const [nombre, setNombre] = useState("");
	const [precio, setPrecio] = useState("");

	return (
		<>
			<h2>Add a new product:</h2>
			<form>
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
						value={precio}
						onChange={(e) => setPrecio(Number(e.target.value))}
					/>
				</div>
			</form>
		</>
	);
};
