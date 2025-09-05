import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Product from "../components/Product";
import PageTitle from "../components/PageTitle";
import Loader from "../shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, removeErrors } from "../features/products/productSlice";
import { toast } from "react-toastify";

function Home() {
  const { loading, error, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct({ keyword: "" }));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error.message, { position: "top-center", autoClose: 3000 });
      dispatch(removeErrors());
    }
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PageTitle title="Home - My Website" />
          <Navbar />
          <ImageSlider />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16  ">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8 text-center sm:text-left">
              Trending Now
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Product product={product} key={product._id || index} />
              ))}
            </div>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
