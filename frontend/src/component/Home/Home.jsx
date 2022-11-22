import React from "react";
import { useEffect } from "react";
import background2 from "../../Assets/background2.jpg";
import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from "../Layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layout/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Esmartkart" />
          <div>
            <img src={background2} style={{ width: "100%" }}></img>
            <h2 className="homeHeading" style={{ textAlign: "center" }}>
              Featured Products
            </h2>

            <div className="container" id="container">
              {products &&
                products.map((product) => <Product product={product} />)}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
