import Tasks from "../components/Product/Tasks";

export default function SearchPage() {

  return (
    <div className="container">
      <Tasks
      />
    </div>
  );
}
//   const [productList, setProductList] = useState(ProductData);

//   const deleteTask = (id) => {
//     setProductList(productList.filter((product) => product.id !== id));
//   };

//   const checkTask = (id) => {
//     setProductList(
//       productList.map((product) =>
//         product.id === id ? { ...product, checked: !product.checked } : product
//       )
//     );
//   };

//   return (
//     <div className="container">
//       <Tasks
//         productList={productList}
//         handelDelete={deleteTask}
//         handelChecked={checkTask}
//       />
//     </div>
//   );
// }