import { useState, useEffect } from "react"
import Helment from "../components/Helment/Helment"

import HeroImg from "../assets/images/hero-img.png"
import CounterImg from "../assets/images/counter-timer-img.png"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import Services from "../Services/Services"
import ProductList from "../components/UI/ProductList"
import products from "../constants/products"
import Clock from "../components/UI/Clock"

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

const Home = () => {

  const [TrendingProduct, setTrendingProduct] = useState<Product[]>([])
  const [TrendingSales, setTrendingSales] = useState<Product[]>([])
  const [MobileProduct, setMobileProduct] = useState<Product[]>([])
  const [WirelessProduct, setWirelessProduct] = useState<Product[]>([])
  const [popularProduct, setpopularProduct] = useState<Product[]>([])

  const Year = new Date().getFullYear()

  const combinedData = [...MobileProduct, ...WirelessProduct]

  useEffect(() => {
    const filterTrendingProduct = products.filter(
      (item) => item.category === "chair"
    )

    const filterTrendingSales = products.filter(
      (item) => item.category === "sofa"
    )

    const filterMobileProduct = products.filter(
      (item) => item.category === "mobile"
    )

    const filterWirelessProduct = products.filter(
      (item) => item.category === "wireless"
    )

    const filterpopularProduct = products.filter(
      (item) => item.category === "watch"
    )

    setTrendingProduct(filterTrendingProduct)
    setTrendingSales(filterTrendingSales)
    setMobileProduct(filterMobileProduct)
    setWirelessProduct(filterWirelessProduct)
    setpopularProduct(filterpopularProduct)
  }, [])

  return <Helment title="Home">
    <section className="bg-herobg">
      <div className="px-3 lg:px-36 mb-16 pt-3">
        <div className="flex md:flex-row flex-col justify-between items-center py-[50px]">
          <div className="">
            <p className="font-medium font-poppins text-base text-customcolor">Trending product in {Year}</p>
            <h2 className="font-semibold font-poppins lg:text-4xl md:text-3xl text-2xl my-5 text-customcolor">Make Your Interior More Minmalistic & Modern</h2>
            <p className="font-poppins text-base leading-[35px] text-customcolor">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam neque nisi libero vero impedit, harum modi nobis soluta quod.</p>
            <motion.button whileTap={{ scale: 1.2 }} className="mt-[30px] bg-customcolor text-white px-4 py-1 rounded-md">
              <Link to="/shop">
                SHOP NOW
              </Link>
            </motion.button>
          </div>

          <div className="w-full">
            <img src={HeroImg} alt="Heroimg" />
          </div>
        </div>
      </div>
    </section>

    <Services />

    <section>
      <div className="lg:px-36 px-3 mb-28">
        <div>
          <h4 className="text-2xl font-semibold font-poppins text-customcolor text-center justify-center">Trending</h4>
        </div>
        <ProductList data={TrendingProduct} />
      </div>
    </section>

    <section>
      <div className="lg:px-36 px-3 mb-28">
        <div>
          <h4 className="text-2xl font-semibold font-poppins text-customcolor text-center justify-center">Best Sales</h4>
        </div>
        <ProductList data={TrendingSales} />
      </div>
    </section>

    <section className="w-full h-[70%]">
      <div className="bg-customcolor lg:px-36 px-3 mb-28">
        <div className="lg:flex items-center justify-between py-9">
          <div>
            <div>
              <h3 className="text-white/90 font-poppins text-sm mb-1">Limited Offers</h3>
            </div>
            <div className="text-center lg:text-left">
              <h4 className="text-white font-poppins text-base">Quality Armchair</h4>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className="bg-white px-5 p-1 rounded-md text-customcolor/85 hover:text-customcolor font-semibold text-base mt-3"><Link to="productdetails/:id">Visit store</Link></motion.button>
            </div>
          </div>

          <div className="flex justify-end ">
            <img className="lg:block hidden object-contain w-[70%] h-[70%]" src={CounterImg} alt="counterimg" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="lg:px-36 px-3 mb-24">
        <div>
          <h4 className="text-2xl font-semibold font-poppins text-customcolor text-center justify-center mb-5">New Arrivals</h4>
        </div>
        <ProductList data={combinedData} />
      </div>
    </section>

    <section>
      <div className="lg:px-36 px-3 mb-28">
        <div>
          <h4 className="text-2xl font-semibold font-poppins text-customcolor text-center justify-center mb-7">Popular In Category</h4>
        </div>
        <ProductList data={popularProduct} />
      </div>
    </section>
  </Helment>
}

export default Home