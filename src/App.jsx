import { CarritoProvider } from "./CarritoProvider";
import { DeletedProductList } from "./DeletedProductList";
import { NewProductForm } from "./NewProductForm";
import { ProductList } from "./ProductList";

function App() {
	return (
		<CarritoProvider>
			<ProductList />
			<NewProductForm />
			<DeletedProductList />
		</CarritoProvider>
	);
}

export default App;
