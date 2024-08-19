import React from "react";
import "../styles/Home.scss";

import Different from "./homePage/Different";
import NewCeramics from "../components/newCeramics/NewCeramics";
import Benefits from "./homePage/Benefits";
import Footer from "../components/footer/Footer";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="home-wrapper">
        <div className="container ">
          <div className="text-button">
            <h3>
              {t("The furniture brand for the future, with timeless designs")}
            </h3>

            <button>{t("View collection")}</button>
            <p>
              {t(
                "A new era in eco friendly furniture with Avelon, the French luxury retail brand "
              )}
              <tr />
              {t(
                "with nice fonts, tasteful colors and a beautiful way to display things digitally"
              )}
              <tr />
              {t("using modern web technologies.")}
            </p>
          </div>
          <div className="img-img">
            <img
              className="images-home"
              src="https://s3-alpha-sig.figma.com/img/318c/9b7a/b01e6c4660bc72629bd073b338a795ca?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aRd4oDIl7YZwAcSLzmMKASS~xGotPHH3BFyEF0pMa-nTqdekvkZz2sMabV7c7CuVzBx90Ga-GpbFUk7jiiYHL7K-jyTYYV2Eq49e36ImpbugMxvAIRaaPMmQCFtcBPI~V6WtYgqmQSo1etWsDuN9JLIqzACtAVtcOA2l71Oa5JhPAs2ZtYhqY6NDFAJFRvuVkbO1YBKtKrbkaAgHB~Y9nG-Z2eB63kbGdPlLHmDgjBWPf3ATmuXLim-5iYGYryWYS3hD2GyEntK6UvVuvpqGhtx1LYQbRnM1Go1OR-E4C0gnAxH~y4RPkCDq07H4ncH8vbCLUBUO1PGEXhUzhsIr5g__"
              alt=""
            />
          </div>
        </div>
      </div>
      <Different />
      <NewCeramics />
      <Benefits />
      <div className="fromStudio-wrapper">
        <div className="fromStudio-text">
          <h1>
            {t("From a studio in London to a global brand with")}
            <tr />
            {t("over 400 outlets")}
          </h1>
          <p>
            {t(
              "When we started Avion, the idea was simple. Make high quality furniture"
            )}
            <tr />
            {t("affordable and available for the mass market.")}
            <br />
            <br />
            {t(
              "Handmade, and lovingly crafted furniture and homeware is what we live,"
            )}
            <tr />
            {t(
              "breathe and design so our Chelsea boutique become the hotbed for the"
            )}
            <tr />
            {t("London interior design community.")}
          </p>
          <button>{t("Get in touch")}</button>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/dfed/c272/6ec9d1d8cc3cbaace9b398067e11a4af?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dzoni9QZzZ1KN8L4tCWt9hKpADziR5-TSUeDA8oOKOU5BZNf2O8D0l65vp9y9EcGXZ8EoswFjtINjFmYbdtgci90Lh05Txqf-grFOrl4HHz-OEgJdcswrwQBpdMO1yqCCKQigpBnJxKaLBHvFvleA6fCkZErdL2ow2CiJ0YRtVAHpryPIiaTE8lDGOd36ZegrkiiMJpJ1RyTXrBh9kqKqdgqBDSbByW35bGq9DU4mgdUPJydwmOhB9XFzdYoGFoRgBuMFXus7YJMLbexlp9aCdWtPuEs2Z83cHxo9rBLWf9NjmyTFpo7BZwiqI0cHI~1P4Hyw7TRcv-KGPKtYwPLjA__"
          alt=" not image"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
