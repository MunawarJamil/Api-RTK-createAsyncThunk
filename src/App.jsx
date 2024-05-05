import "./App.css";
import Product from "./components/Product";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./redux/store/Store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
