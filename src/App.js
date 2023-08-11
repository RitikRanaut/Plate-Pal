import { useState } from "react";

import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShownCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
