import { NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/images/eco-logo.png"
import UserIcon from "../../assets/images/user-icon.png"
import { RiShoppingBagLine, RiHeartLine, RiMenuLine, RiCloseLine } from "react-icons/ri"
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom"

const Header: React.FC = () => {

  const navLinks = [
    {
      path: "/home",
      dispaly: "Home"
    },
    {
      path: "/shop",
      dispaly: "Shop"
    },
    {
      path: "/cart",
      dispaly: "Cart"
    }
  ]

  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [openUser, setOpenUser] = useState(false)

  const toggleUserIcon = () => {
    setOpenUser((prev) => !prev)
  }

  const navigate = useNavigate()

  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  const handleMenuToggle = () => setMenuToggle((prev) => (!prev))

  // Prevent scrolling when the menu is open
  useEffect(() => {
    document.body.style.overflow = menuToggle ? "hidden" : "auto";
  }, [menuToggle]);

  useEffect(() => {
    const stickyHeader = () => {
      if (headerRef.current) {
        const scrollThreshold = 80;
        setIsSticky(window.scrollY > scrollThreshold)
      }
    }

    window.addEventListener("scroll", stickyHeader)

    return () => {
      window.removeEventListener('scroll', stickyHeader)
    }
  }, [])


  const navigateToCart = () => {
    navigate("./cart")
  }

  return <header
    ref={headerRef}
    className={`w-full h-[70px] flex items-center justify-between lg:px-36 px-3 py-4 transition-transform duration-500 ${isSticky ? "fixed top-0 left-0 bg-white shadow-lg z-50" : "relative"
      }`}
  >

    {/* desktop view */}
    <div className="flex items-center gap-[5px]">
      <img className="w-[20px] h-[20px]" src={logo} alt="logo" />
      <div>
        <h1 className="font-bold text-lg text-customcolor">Multimart</h1>
      </div>
    </div>

    <div className="md2:block hidden">
      <ul className="flex gap-8 cursor-pointer">
        {
          navLinks.map((items, index) => (
            <li className="font-semibold text-customcolor/95" key={index}>
              <NavLink className={(navClass) => navClass.isActive ? "text-customcolor font-bold" : ""} to={items.path}>{items.dispaly}</NavLink>
            </li>
          ))
        }
      </ul>
    </div>

    <div className="flex items-center gap-4">
      <span className="relative">
        <RiHeartLine className="text-[1.3rem]" />
        <span className="absolute flex items-center justify-center top-[-22%] right-[-8%] w-[14px] h-[14px] content-none bg-customcolor text-white rounded-[50%] text-xs z-10">1</span>
      </span>

      <span className="relative">
        <RiShoppingBagLine className="text-[1.3rem]" onClick={navigateToCart} />
        <span className="absolute flex items-center justify-center top-[-22%] right-[-8%] w-[14px] h-[14px] content-none bg-customcolor text-white rounded-[50%] text-xs z-10">{totalQuantity}</span>
      </span>

      <span onClick={toggleUserIcon} className="outline-none border-none">
        <motion.img whileTap={{ scale: 1.2 }} className="w-[28px] h-[28px]" src={UserIcon} alt="usericon" />
      </span>

      <div className="relative md:top-[35px] md:right-[55px] top-[35px] right-[65px] ">
        <div className={` rounded-md absolute z-10 ${openUser ? "w-[100px] h-70px bg-amber-100  flex flex-col items-center gap-2 py-3 top-0 left-0]" : "hidden"}`}>
          <Link to="/signup" className="text-sm text-customcolor">Signup</Link>
          <Link to="/login" className="text-sm text-customcolor">Login</Link>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div onClick={handleMenuToggle} className="lg:hidden block">
        <span className="text-xl">
          <RiMenuLine />
        </span>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-500 z-40 ${menuToggle ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div onClick={handleMenuToggle} className="flex justify-end pr-4 pt-7">
          <RiCloseLine className="text-2xl" />
        </div>
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
          {
            navLinks.map((items, index) => (
              <li className="font-semibold text-customcolor/95" key={index}>
                <NavLink className={(navClass) => navClass.isActive ? "text-customcolor font-bold" : ""} onClick={() => setMenuToggle(false)} to={items.path}>{items.dispaly}</NavLink>
              </li>
            ))
          }
        </ul>

      </div>

    </div>




  </header>
}

export default Header