import { RiAddLine } from "react-icons/ri"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import {  toast } from "react-toastify";

interface Product {
  id: string;
  productName: string;
  imgUrl: string;
  category: string;
  price: number;
  shortDesc: string;
  description: string;
  avgRating: number;
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({item}) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      image: item.imgUrl,
      quantity: 1,
      totalPrice: item.price,
    }))

    toast.success('product added to cart')
  }

  return (
    <div className="cursor-pointer">
      <div>
        <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
      </div>
      <div className="leading-3">
        <h3 className="text-customcolor font-semibold text-base font-poppins"><Link to={`/productdetails/${item.id}`}>{item.productName}</Link></h3>
        <span className="text-customcolor/80 text-sm font-poppins">{item.category}</span>
      </div>
      <div className="pt-2 flex items-center justify-between">
        <span>${item.price}</span>
        <motion.span onClick={addToCart} whileTap={{scale: 1.2}} className="bg-customcolor text-white p-1 rounded-full"><RiAddLine /></motion.span>
      </div>
    </div>
  )
}

export default ProductCard