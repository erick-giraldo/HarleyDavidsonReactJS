import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { usersList, usersListConfig } from "./backend/users/ListUsers";
// import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import {
  Home,
  Blog,
  Post,
  Cart,
  Contact,
  AboutUS,
  Whatsapp,
  Category,
  NotFoundPage,
  CategoryDetail
} from "./components/routes";

import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="container-fluid padre">
            <div className="row hijo">
              <NavBar usersList={usersList} profile={usersListConfig} />
              <Routes>
                {/* <Route
            path=""
            element={<NavBar usersList={usersList} profile={usersListConfig} />}
          /> */}
                {/* <Route
            path=""
            element={<ItemListContainer usersList={usersList} />}
          /> */}
                <Route path="" element={<Home />} />
                <Route path="/nosotros" element={<AboutUS />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/post" element={<Post />} />
                <Route path="/category" element={<Category />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/item/:id" element={<CategoryDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
          <Whatsapp />
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
