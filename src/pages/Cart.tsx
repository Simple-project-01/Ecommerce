import Helment from "../components/Helment/Helment";
import CommonSection from "../components/UI/commonSection";
import { RiDeleteBinLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { RootState } from '../redux/store';
import { Link } from "react-router-dom";

const Cart = () => {

  const cartItems = useSelector((state: RootState) => state.cart.cartItems)
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)

  return (
    <Helment title="Cart">
      <CommonSection title="Shopping cart" />

      <section className="py-8 md:py-12">
        <div className="px-4 sm:px-6 md:px-12 lg:px-36">
          <div className="overflow-x-auto">
            {
              cartItems.length === 0 ? <h2 className="text-center text-xl font-medium text-customcolor">No item added to the cart!</h2> :

                <div className="grid grid-cols-1 lg:grid-cols-customgrid2 gap-6">
                  <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border-spacing-4 w-full text-left min-h-full">
                      <thead>
                        <tr className="text-customcolor border-b border-customcolor text-xs md:text-sm uppercase leading-normal">
                          <th className="pb-4 w-16 md:w-20">Image</th>
                          <th className="pb-4 w-40 md:w-56">Title</th>
                          <th className="pb-4 w-20 md:w-24">Price</th>
                          <th className="pb-4 w-16 md:w-24">Qty</th>
                          <th className="pb-4 w-12 md:w-16">Delete</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cartItems.map((item, index) => (
                          <Tr itemTr={item} key={index} />
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-customcolor w-full md:w-auto">
                    <div>
                      <h6 className="font-medium flex justify-between">
                        Subtotal <span className="font-bold text-lg md:text-xl">${totalAmount}</span>
                      </h6>
                    </div>
                    <p className="text-sm mt-2">Taxes and shipping will be calculated in Checkout</p>
                    <div className="mt-6 flex flex-col gap-3 md:gap-4">
                      <Link to="/checkout">
                        <button className="bg-customcolor w-full text-white py-2 rounded-lg text-sm md:text-base">
                          Checkout
                        </button>
                      </Link>

                      <Link to="/shop">
                        <button className="bg-customcolor w-full text-white py-2 rounded-lg text-sm md:text-base">
                          Continue Shopping
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </section>
    </Helment>
  );
};

const Tr = ({ itemTr }: { itemTr: { id: string; image: string; productName: string; price: number; quantity: number } }) => {
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(itemTr.id))
  }

  return (
    <tr className="text-customcolor border-b border-customcolor text-xs md:text-sm">
      <td className="py-3 md:py-4">
        <img src={itemTr.image} alt="Product" className="w-12 h-12 md:w-16 md:h-16" />
      </td>
      <td className="py-3 md:py-4 text-base truncate w-40 md:w-56 max-w-xs overflow-hidden">{itemTr.productName}</td>
      <td className="py-3 md:py-4 text-base">${itemTr.price}</td>
      <td className="py-3 md:py-4 text-base">{itemTr.quantity}</td>
      <td className="py-3 md:py-4 text-base">
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={deleteItem}
          style={{ transformOrigin: 'center' }}
        >
          <RiDeleteBinLine className="text-lg cursor-pointer text-red-500 hover:text-red-700" />
        </motion.div>
      </td>
    </tr>
  );
};

export default Cart;
