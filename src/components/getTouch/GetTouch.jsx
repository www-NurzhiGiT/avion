import React from "react";
import "../style/GetTouch.scss";
import { useTranslation } from "react-i18next";
import { Button } from "antd";

const GetTouch = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="div-text">
        <div>
          <h3>
            {t(
              "From a studio in London to a global brand with over 400 outlets"
            )}
          </h3>
          <p>
            {t(
              "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market."
            )}
            <br />
            <br />
            {t(
              "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community."
            )}
          </p>
        </div>
        <Button>{t("Get in touch")}</Button>
      </div>
      <div className="div-img">
        <img src="./src/assets/png/Image.png" alt="not Image" />
      </div>
    </div>
  );
};

export default GetTouch;
