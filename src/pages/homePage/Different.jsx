import React from "react";
import "../../styles/Different.scss";
import { useTranslation } from "react-i18next";

const Different = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper-different">
      <div className="container">
        <h1>{t("What makes our brand different")}</h1>
        <div className="box">
          <div className="boxOne">
            <i className="bi bi-truck"></i>
            <h3>{t("Next day as standard")}</h3>
            <p>
              {t(
                "Order before 3pm and get your order the next day as standard"
              )}
            </p>
          </div>
          <div className="boxOne">
            <i className="bi bi-check-circle"></i>
            <h3>{t("Made by true artisans")}</h3>
            <p>
              {t(
                "Handmade crafted goods made with real passion and craftmanship"
              )}
            </p>
          </div>
          <div className="boxOne">
            <i className="bi bi-credit-card-2-back"></i>
            <h3>{t("Unbeatable prices")}</h3>
            <p>
              {t(
                "For our materials and quality you won’t find better prices anywhere"
              )}
            </p>
          </div>
          <div className="boxOne">
            <i className="bi bi-virus"></i>
            <h3>{t("Recycled packaging")}</h3>
            <p>
              {
                " We use 100% recycled packaging to ensure our footprint is manageable"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
