import { CarritoProvider } from "./CarritoProvider";
import { NewProductForm } from "./NewProductForm";
import { ProductList } from "./ProductList";

function App() {
	return (
		<CarritoProvider>
			<ProductList />
			<NewProductForm />
		</CarritoProvider>
	);
}

export default App;
