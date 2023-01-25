import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { usersList, usersListConfig } from "./backend/users/ListUsers";
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
  CategoryDetail,
} from "./components/routes";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

import CartProvider from "./context/CartContext";
import { Login } from "./components/login/Login";
import { Register } from "./components/login/Register";
import CartItem from "./components/navbar/CartItem";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <div className="container-fluid padre">
              <div className="row hijo">
                <ProtectedRoute>
                  <NavBar usersList={usersList} profile={usersListConfig} />
                </ProtectedRoute>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/nosotros"
                    element={
                      <ProtectedRoute>
                        <AboutUS />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/blog"
                    element={
                      <ProtectedRoute>
                        <Blog />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/post"
                    element={
                      <ProtectedRoute>
                        <Post />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/category"
                    element={
                      <ProtectedRoute>
                        <Category />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/category/:id"
                    element={
                      <ProtectedRoute>
                        <Category />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/item/:id"
                    element={
                      <ProtectedRoute>
                        <CategoryDetail />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/contacto"
                    element={
                      <ProtectedRoute>
                        <Contact />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <ProtectedRoute>
                        <NotFoundPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </div>
            </div>
            <ProtectedRoute>
              <Whatsapp />
              <Footer />
            </ProtectedRoute>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
