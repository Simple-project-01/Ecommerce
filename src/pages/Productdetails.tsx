import { useParams } from "react-router-dom";
import products from "../constants/products";
import CommonSection from "../components/UI/commonSection";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, } from "react";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

interface Review {
    rating: number;
    text: string;
}

interface Product {
    id: string;
    productName: string;
    imgUrl: string;
    price: number;
    shortDesc: string;
    avgRating: number;
    reviews: Review[];
    description: string;
    category: string;
}

const Productdetails = () => {

    const [Tab, setTab] = useState("description")
    const [_rating, setRating] = useState<number>(0)

    const reviewUser = useRef<HTMLInputElement>(null);
    const reviewMsg = useRef<HTMLTextAreaElement>(null);

    const dispatch = useDispatch()

    const { id } = useParams<{ id: string }>();
    const product = products.find((item: Product) => item.id === id);

    if (!id) {
        return <div>Invalid product ID</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const {
        productName,
        imgUrl,
        price,
        shortDesc,
        avgRating,
        reviews,
        description,
        category,
    } = product;

    const relatedProducts = products.filter(item => item.category === category)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (reviewUser.current && reviewMsg.current) {
            const reviewUserName = reviewUser.current.value;
            const reviewMessage = reviewMsg.current.value;

            const reviewObj = {
                user: reviewUserName,
                rating: _rating,
                message: reviewMessage,
            }
            console.log(reviewObj)
            toast.success("Review Submitted")

            // Clear the inputs
            reviewUser.current.value = '';
            reviewMsg.current.value = '';
            setRating(0);
        }
    };

    const addToCart = () => {
        const totalPrice = price;

        dispatch(cartActions.addItem({
            id,
            productName,
            price,
            image: imgUrl,
            quantity: 1,
            totalPrice,
        }))

        toast.success('product added to cart')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <div>
            <CommonSection title={productName} />

            <section className="py-10">
                <div className="container lg:px-36 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex justify-center">
                        <img className="w-full h-auto rounded-lg shadow-lg" src={imgUrl} alt={productName} />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl text-customcolor font-semibold mb-4">{productName}</h2>
                        <div className="flex items-center mb-2">
                            <div className="flex text-coral">
                                <span onClick={() => setRating(1)}><RiStarFill /></span>
                                <span onClick={() => setRating(2)}><RiStarFill /></span>
                                <span onClick={() => setRating(3)}><RiStarFill /></span>
                                <span onClick={() => setRating(4)}><RiStarFill /></span>
                                <span onClick={() => setRating(5)}><RiStarHalfFill /></span>
                            </div>
                            <p className="ml-2 text-gray-600">(<span className="text-coral">{avgRating}</span> ratings)</p>
                        </div>

                        <div className="flex items-center gap-5 mb-4">
                            <span className="text-2xl font-bold text-customcolor">${price}</span>
                            <span>Category: {category.toLowerCase()}</span>
                        </div>
                        <p className="text-gray-700 mb-6">{shortDesc}</p>

                        <motion.button whileTap={{ scale: 1.2 }} onClick={addToCart} className="mt-4 bg-customcolor text-white py-2 px-6 rounded-lg shadow transition duration-300">
                            Add to Cart
                        </motion.button>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:px-36 px-4 py-10 min-h-[200px]">
                    <div>
                        <div className="flex gap-5">
                            <h6 className={`cursor-pointer text-customcolor ${Tab === "description" ? "font-semibold text-customcolor" : ""}`}
                                onClick={() => setTab("description")}>Description</h6>
                            <h6 className={`cursor-pointer text-customcolor ${Tab === "rev" ? "font-semibold text-customcolor" : ""}`}
                                onClick={() => setTab("rev")}>Reviews ({reviews.length})</h6>
                        </div>

                        <div className="mt-4">
                            {
                                Tab === "description" ? (
                                    <p className="text-customcolor text-opacity-65 pb-4">{description || "No description available."}</p>
                                ) : reviews.length > 0 ? (
                                    <div>
                                        <ul>
                                            {
                                                reviews.map((item, index) => (
                                                    <li key={index} className="mb-3">
                                                        <h6 className="text-customcolor">Ebuka Chineke</h6>
                                                        <span className="text-coral">{item.rating} (rating)</span>
                                                        <p className="mt-3">{item.text}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        <div className="w-4/5 m-auto mt-12 min-h-[300px]">
                                            <h4 className=" text-xl font-semibold mb-7">Leave your review</h4>
                                            <form action="" onSubmit={submitHandler}>
                                                <div>
                                                    <input className="w-full border-2 border-solid rounded-md px-4 py-1 focus:outline-none" ref={reviewUser} required type="text" placeholder="Enter name" />
                                                </div>

                                                <div className="flex my-5 gap-5 text-coral cursor-pointer">
                                                    <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(1)} className="flex items-center">1<RiStarFill /></motion.span>
                                                    <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(2)} className="flex items-center">2<RiStarFill /></motion.span>
                                                    <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(3)} className="flex items-center">3<RiStarFill /></motion.span>
                                                    <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(4)} className="flex items-center">4<RiStarFill /></motion.span>
                                                    <motion.span whileTap={{scale: 1.2}} onClick={() => setRating(5)} className="flex items-center">5<RiStarFill /></motion.span>
                                                </div>

                                                <div className="mb-14">
                                                    <textarea rows={4} className="w-full border-2 border-solid rounded-md px-4 py-1 focus:outline-none" ref={reviewMsg} required placeholder="Review Message..." />
                                                </div>

                                                <div>
                                                    <motion.button whileTap={{scale: 1.2}} type="submit" className="bg-customcolor text-white font-medium  px-4 py-[6px] rounded-md">Sumbit</motion.button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                ) : (
                                    <p>No reviews yet.</p>
                                )

                            }
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg mt-5">You might also like</h2>
                        </div>

                        <ProductList data={relatedProducts} />


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Productdetails