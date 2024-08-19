import React, { useState } from "react";
import "../../styles/Footer.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email.trim() === "") {
      alert("Write your email");
    } else {
      alert("Successfully Registered");
    }
  };

  return (
    <footer className="footer">
      <div className="containerr">
        <div className="footer-all">
          <div className="footer-section">
            <div className="footer__menu">
              <h3>{t("Menu")}</h3>
              <ul>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("New arrivals")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("Best sellers")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("Recently viewed")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("Popular this week")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("All products")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer__categories">
              <h3>{t("Categories")}</h3>
              <ul>
                <li>
                  <NavLink className="li-nav" to="/crockery">
                    {t("Crockery")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("Furniture")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("Homeware")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/plantPots">
                    {t("Plant pots")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/chairs">
                    {t("Chairs")}
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer__company">
              <h3>{t("Our company")}</h3>
              <ul>
                <li>
                  <NavLink className="li-nav" to="/about">
                    {t("About us")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("Vacancies")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("Contact us")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("Privacy")}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="li-nav" to="/">
                    {t("Returns policy")}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-form">
            <h3>{t("Join our mailing list")}</h3>
            <input
              type="email"
              value={email}
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit} className="btn-footer" type="submit">
              {t("Sign up")}
            </button>
          </div>
        </div>

        <hr className="hhh1" />
        <div className="footer__bottom">
          <p>{t("Copyright 2022 Avion LTD")}</p>
          <div className="footer__social">
            <span>
              <NavLink to="https://ru.linkedin.com/" className="nav-i">
                <i id="in" className="bi bi-linkedin"></i>
              </NavLink>
            </span>
            <span>
              <NavLink
                to="https://www.facebook.com/?locale=ru_RU/"
                className="nav-i"
              >
                <i id="fa" className="bi bi-facebook"></i>
              </NavLink>
            </span>
            <span>
              <NavLink to="https://www.instagram.com/" className="nav-i">
                <i id="inst" className="bi bi-instagram"></i>
              </NavLink>
            </span>
            <span>
              <NavLink to="https://www.skype.com/ru/" className="nav-i">
                <i id="sky" className="bi bi-skype"></i>
              </NavLink>
            </span>
            <span>
              <NavLink to="https://x.com/?lang=ru/" className="nav-i">
                <i id="tw" className="bi bi-twitter"></i>
              </NavLink>
            </span>
            <span>
              <NavLink to="https://www.pinterest.com/" className="nav-i">
                <i id="pin" className="bi bi-pinterest"></i>
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
