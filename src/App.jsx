import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import { Product } from "./components/Product";

function App() {
  const { isOpenCart } = useSelector((state) => state.fruits);
  console.log(isOpenCart);
  return (
    <>
      <Header />
      <Product />
      {isOpenCart && <Cart />}
    </>
  );
}

export default App;
