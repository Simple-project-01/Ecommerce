import React from "react";
import ProductCard from "./ProductCard";

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

interface Props {
  data: Product[]; 
}

const ProductList: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid md2:grid-cols-4 md:grid-cols-3 grid-flow-dense items-center justify-center gap-8">
      {data?.map((item, index) => (
        <ProductCard key={index} item={item} /> 
      ))}
    </div>
  );
};

export default ProductList;