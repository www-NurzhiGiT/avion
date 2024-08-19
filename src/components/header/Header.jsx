import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Header.scss";
import { DataContext } from "../../context/AppContext";
import { Avatar } from "antd";
import i18n from "../../i18n/i18n";
import { SearchOutlined, TranslationOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Auth from "../auth/Auth";
import America from "../../assets/svg/America.svg";
import Russia from "../../assets/svg/Russia.svg";
import Kyrgyzstan from "../../assets/svg/Kyrgyzstan.svg";

const Header = ({ userAvatar, itemCount }) => {
  const { i18n, t } = useTranslation();
  const [active, setActive] = useState("en");

  const changeLng = (language) => {
    i18n.changeLanguage(language);
    setActive(language);
  };
  const context = useContext(DataContext);
  console.log(context);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  const [categories, setCategories] = useState([
    { name: "Plant pots", rout: "plantPots" },
    { name: "Ceramics", rout: "ceramics" },
    { name: "Tables", rout: "tables" },
    { name: "Chairs", rout: "chairs" },
    { name: "Crockery", rout: "crockery" },
    { name: "Tableware", rout: "tableware" },
    { name: "Cutlery", rout: "cutlery" },
  ]);

  const [lngMenuOpen, setLngMenuOpen] = useState(false);

  const toggleLngMenu = () => {
    setLngMenuOpen(!lngMenuOpen);
  };

  return (
    <div>
      <div className="avion-logo">
        {context.user}
        <div className="div-search">
          <SearchOutlined className="SO" onClick={toggleSearch} />
          {searchOpen && (
            <div className="search-menu">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search..."
                className="search-input"
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          )}
        </div>
        <p>
          <NavLink className="navLi-avion" to="/">
            Avion
          </NavLink>
        </p>
        <div className="div-cart-person">
          {/* TODO: Переводчик */}
          <TranslationOutlined
            className="translateOut"
            onClick={toggleLngMenu}
          />
          {lngMenuOpen && (
            <div className="language-menu">
              <button
                className={active === "en" ? "active" : ""}
                onClick={() => changeLng("en")}
              >
                <img src={America} alt="" />
                EN
              </button>
              <button
                className={active === "ru" ? "active" : ""}
                onClick={() => changeLng("ru")}
              >
                <img src={Russia} alt="" />
                RU
              </button>
              <button
                className={active === "kg" ? "active" : ""}
                onClick={() => changeLng("kg")}
              >
                <img src={Kyrgyzstan} alt="" />
                KG
              </button>
            </div>
          )}
          <div>
            {/* TODO: Корзина */}
            <NavLink to={"/basket"} className="basket-i">
              <i className="bi bi-cart3"></i>
            </NavLink>
            {/* TODO: Зарегистироватся */}
            <NavLink className="user-av">
              <img
                src={userAvatar ? userAvatar : "./src/assets/svg/signUp.svg"}
                onClick={openModal}
                alt="not Fund img"
                className="us-av"
              />
              {modalOpen && (
                <div className="modal">
                  <div className="auth-modal">
                    <Auth />
                  </div>
                </div>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      <hr className="hh" />

      <ul className="navList">
        {categories.map((categ) => (
          <li key={categ.rout}>
            <NavLink className="navLi" to={`/${categ.rout}`}>
              {t(categ.name)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
