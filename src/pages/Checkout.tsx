import Helment from "../components/Helment/Helment"
import CommonSection from "../components/UI/commonSection"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const Checkout = () => {

  const totalQty = useSelector((state: RootState) => state.cart.totalQuantity)
  const totalAmt = useSelector((state: RootState) => state.cart.totalAmount)

  return (
    <Helment title="Checkout">
      <CommonSection title="Checkout" />

      <section>
        <div className="lg:px-36 px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-customgrid2 gap-5">
            <div>
              <h6 className="mb-4 font-bold text-customcolor">Billing Information</h6>
              <form action="">
                <div className="gap-4 flex flex-col">
                  <div>
                    <input className="border px-4 py-1 rounded-md text-sm outline-none border-customcolor border-opacity-50 w-full" type="text" required placeholder="Enter your name" />
                  </div>
                  <div>
                    <input className="border px-4 py-1 rounded-md text-sm outline-none border-customcolor border-opacity-50 w-full" type="email" required placeholder="Enter your email" />
                  </div>
                  <div>
                    <input className="border px-4 py-1 rounded-md text-sm outline-none border-customcolor border-opacity-50 w-full" type="number" required placeholder="Phone number" />
                  </div>
                  <div>
                    <input className="border px-4 py-1 rounded-md text-sm outline-none border-customcolor border-opacity-50 w-full" type="text" required placeholder="Street address" />
                  </div>
                  <div>
                    <input className="border px-4 py-1 rounded-md text-sm outline-none border-customcolor border-opacity-50 w-full" type="text" required placeholder="City" />
                  </div>
                  <div>
                    <input className="border px-4 py-1 rounded-md text-sm outline-none border-customcolor border-opacity-50 w-full" type="text" required placeholder="Postal code" />
                  </div>
                  <div>
                    <input className="border px-4 py-1 rounded-md text-sm outline-none border-customcolor border-opacity-50 w-full" type="text" required placeholder="Country" />
                  </div>
                </div>
              </form>
            </div>

            <div className="text-customcolor">
              <div className="bg-customcolor p-5 text-white rounded-md">
                <h6 className="flex text-base items-center justify-between mb-2">Total Qty: <span>{totalQty} items</span></h6>
                <h6 className="flex text-base items-center justify-between mb-2">Subtotal: <span>${totalAmt}</span></h6>
                <h6 className="flex text-base items-center justify-between mb-4">
                  <span>
                    Shipping: <br /> 
                    Free shipping
                  </span>
                  <span>$120</span>
                </h6>
                <h4 className="flex text-xl items-center justify-between border-t border-gray-400/50 py-5">Total Cost: <span>${totalAmt}</span></h4>
                <button className="w-full font-medium text-customcolor bg-white rounded-md py-1">Place an order</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helment>
  )
}

export default Checkout