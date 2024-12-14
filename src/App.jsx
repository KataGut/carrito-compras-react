import { CarritoProvider } from "./CarritoProvider";
import { DeletedProductList } from "./DeletedProductList";
import { NewProductForm } from "./NewProductForm";
import { ProductList } from "./ProductList";

function App() {
	return (
		<>
			<h1>Carrito App</h1>
			<div
				style={{
					width: "100%",
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
				}}
			>
				<div>
					<CarritoProvider>
						<ProductList />
						<NewProductForm />
						<DeletedProductList />
					</CarritoProvider>
				</div>
				<div>
					<CarritoProvider>
						<ProductList />
						<NewProductForm />
						<DeletedProductList />
					</CarritoProvider>
				</div>
			</div>
		</>
	);
}

export default App;
