import Products from "../components/Product/Products";
import SaleBox from "../components/Product/SaleBox";
import AddProduct from "../components/Product/AddProduct";

export default function HomePage() {

  return (
    <div className="container">
      <AddProduct />
      <SaleBox />
      <Products />
    </div>
  );
  }
  