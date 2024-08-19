import React, { useContext, useState } from "react";
import "../styles/Basket.scss";
import Footer from "../components/footer/Footer";

import { useTranslation } from "react-i18next";
import { DataContext } from "../context/AppContext";
// import Header from "../components/header/Header";

const Basket = () => {
  const { t } = useTranslation();
  const { cart, clearCart } = useContext(DataContext);
  const { calculateTotal } = useContext(DataContext);
  // const [quantity, setQuantity] = useState(1);
  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    alert("Checkout successful!");
    clearCart();
  };

  return (
    <div>
      <div className="basket">
        <h1>{t("Your shopping cart")}</h1>

        <div className="list">
          <div className="title">
            <h3>{t("Product")}</h3>
            <h3 className="price1">{t("Quantity")}</h3>
            <h3 className="price2">{t("Total")}</h3>
          </div>
          <hr />
          {cart.map((item) => (
            <div>
              <div className="infoOProducts">
                <div>
                  <img src={item.image} />
                  <span>
                    <h4>{item.title}</h4>
                    <p>
                      {item.description} <br />
                      {item.price}
                    </p>
                  </span>
                </div>

                <p className="price3">1</p>
                <h3 className="price2">{item.price}</h3>
              </div>
            </div>
          ))}
          <div>
            <div className="total">
              <span>
                <h5>{t("Subtotal")}</h5>
                <h4>{calculateTotal()}</h4>
              </span>
              <p>{t("Taxes and shipping are calculated at checkout")}</p>
              <div className="b-t-n">
                <button onClick={handleClearCart}>{t("Clear Cart")}</button>
                <button onClick={handleCheckout}>{t("Go to checkout")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
