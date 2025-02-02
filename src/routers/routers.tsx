import Home from "../pages/Home"
import Shop from "../pages/Shop"
import Cart from "../pages/Cart"
import Productdetails from "../pages/Productdetails"
import Login from "../pages/Login"
import Checkout from "../pages/Checkout"
import Signup from "../pages/Signup"
import { Route, Routes, Navigate } from "react-router-dom"

const routers = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="Home" />} />
    <Route path="home" element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path="cart" element={<Cart />} />
    <Route path="productdetails/:id" element={<Productdetails />} />
    <Route path="login" element={<Login />} />
    <Route path="checkout" element={<Checkout />} />
    <Route path="signup" element={<Signup />} />
  </Routes>
}

export default routers