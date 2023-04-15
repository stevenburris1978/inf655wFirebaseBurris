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
  
  // const [productList, setProductList] = useState(ProductData);

  // const addProduct = (newProduct) => {
  //   newProduct.id = uuidv4();
  //   newProduct.checked = false;
  //   setProductList([newProduct, ...productList]);
  // };

  // const deleteTask = (id) => {
  //   setProductList(productList.filter((product) => product.id !== id));
  // };

  // const checkTask = (id) => {
  //   setProductList(
  //     productList.map((product) =>
  //       product.id === id ? { ...product, checked: !product.checked } : product
  //     )
  //   );
  // };

//   return (
//     <div className="container">
//       <AddProduct handelAdd={addProduct} />
//       <SaleBox />
//       <Products
//         productList={productList}
//         handelDelete={deleteProduct}
//         handelChecked={checkProduct}
//       />
//     </div>
//   );
// }