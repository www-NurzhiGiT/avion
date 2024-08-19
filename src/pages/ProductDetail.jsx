import React, { useContext, useState } from "react";

import Footer from "../components/footer/Footer";
import NewCeramics from "../components/newCeramics/NewCeramics";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/AppContext";
import "../styles/ProductDetail.scss";
import Different from "./homePage/Different";
import { Header } from "antd/es/layout/layout";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const ProductDetail = ({ item }) => {
  // const { addToCart } = useCart();
  const { t } = useTranslation();
  const { id } = useParams();
  const context = useContext(DataContext);
  const { addToCart } = context;
  const product = context.products.find((p) => p.id === id);

  const [counter, setCounter] = useState(1);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  // const [cartItems, setCartItems] = useState([]);
  // const [total, setTotal] = useState(0);

  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  //   setTotal(total + item.price);
  // };

  if (!product) {
    return (
      <div>
        <Header />
        <h1>ProductDetail not found</h1>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <div className="productDetail">
        <img src={product.image} alt={product.title} />
        <div className="desc">
          <div>
            <h1>{product.title}</h1>
            <h4>{product.price}</h4>
          </div>
          <div>
            <p>{t("Description")}</p>
            <p>{product.description}</p>
          </div>
          <p>{t("Dimensions")}</p>
          <div className="info">
            <p>
              {t("Heigth")} <br /> {product.height}
            </p>
            <p>
              {t("Width")} <br /> {product.width}
            </p>
            <p>
              {t("Depth")} <br /> {product.depth}
            </p>
          </div>
          <div className="count-div">
            <p>{t("Amount")}:</p>
            <div className="count">
              <button className="button-min-plus" onClick={handleClick2}>
                -
              </button>
              <div className="span">{counter}</div>

              <button className="button-min-plus" onClick={handleClick1}>
                +
              </button>
            </div>

            <button
              id="desc-btn"
              onClick={() => addToCart(product)}
              // onClick={() => addToCart(item)}
            >
              {t("Add to cart")}
            </button>
          </div>
        </div>
      </div>
      <NewCeramics />
      <Different />

      <Footer />
    </div>
  );
};

export default ProductDetail;
