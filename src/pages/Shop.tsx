// import React from 'react'
import CommonSection from "../components/UI/commonSection"
import Helment from "../components/Helment/Helment"
import { RiSearchLine } from "react-icons/ri";
import products from "../constants/products";
import { useState } from "react";
import ProductList from "../components/UI/ProductList";

const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = (e: any) => {
    const filterValue = e.target.value
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        item => item.category === "sofa"
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        item => item.category === "mobile"
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        item => item.category === "chair"
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        item => item.category === "watch"
      )

      setProductsData(filteredProducts)
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        item => item.category === "wireless"
      )

      setProductsData(filteredProducts)
    }
  }

  const handleSearch = (e: any) => {
    const searchValue = e.target.value
    const searchedProducts = products.filter(
      item => item.productName.toLowerCase().includes(searchValue.toLowerCase())
    )

    setProductsData(searchedProducts)
  }

  return (
    <Helment title="Shop">
      <CommonSection title="Products" />

      <section>
        <div className="lg:px-36 py-14 px-4">
          <div className="lg:flex grid grid-cols-1 gap-5 lg:gap-28">
            <div className="flex md:flex-row flex-col md:justify-between lg:gap-16 gap-4">
              <div>
                <select onChange={handleFilter} className="bg-customcolor text-white px-4 py-[6px] rounded-md font-poppins">
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>

              <div>
                <select className="bg-customcolor text-white px-4 py-[6px] rounded-md font-poppins">
                  <option>sort By</option>
                  <option value="asecending">Asecending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </div>

            <div className="w-full flex items-center justify-between border-solid border-customcolor border-[1px] rounded-md pl-1 pr-2">
              <input onChange={handleSearch} className="w-full border-none outline-none py-2 px-3" type="text" placeholder="Search..." />
              <span className="text-customcolor">
                <RiSearchLine />
              </span>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="lg:px-36 px-4 mb-10 text-customcolor">
          {
            productsData.length === 0 ? "No Products are Found!" : <ProductList data={productsData} />
          }
        </div>
      </section>
    </Helment>
  );
}

export default Shop