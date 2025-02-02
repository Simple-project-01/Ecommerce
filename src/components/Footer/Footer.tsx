import { RiMapPinLine, RiPhoneLine, RiMessageLine } from "react-icons/ri"

const Footer = () => {
  return <footer className="bg-customcolor">
    <div className="lg:px-36 px-3 pt-10 pb-7">
      <div className="grid md2:grid-cols-customgrid md:grid-cols-3 gap-5">
        <div>
          <div>
            <h1 className="font-bold font-poppins text-white text-lg">Multimart</h1>
          </div>

          <p className="mt-4 text-white/75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut officiis suscipit architecto quos quaerat similique in est facilis! Voluptatum!
          </p>
        </div>

          <div>
            <h4 className="text-base font-medium font-poppins text-white">Top Categories</h4>
            <ul className="mt-4 leading-loose">
              <li className="text-white/75">Mobile phones</li>
              <li className="text-white/75">Modern Sofa</li>
              <li className="text-white/75">Arm Chair</li>
              <li className="text-white/75">Smart Watches</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium font-poppins text-white">Useful Links</h4>
            <ul className="mt-4 leading-loose">
              <li className="text-white/75">Shop</li>
              <li className="text-white/75">Cart</li>
              <li className="text-white/75">Login</li>
              <li className="text-white/75">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-medium font-poppins text-white">Contact</h4>
            <ul className="mt-4 leading-loose">
              <li className="flex items-center gap-3">
                <span className="text-white/75"><RiMapPinLine /></span>
                <p className="text-white/75">shelter afrique, Akwa ibom</p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white/75"><RiPhoneLine /></span>
                <p className="text-white/75">+2348166243109</p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white/75"><RiMessageLine /></span>
                <p className="text-white/75">Udokadivine07@gmail.com</p>
              </li>
            </ul>
          </div>
        
      </div>
      <div className="pt-7 text-center">
        <p className="text-white/75">copyright 2025 developed by Divine Udoka. All rights reserved.</p>
      </div>
    </div>
  </footer>
}

export default Footer