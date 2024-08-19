import React, { useState } from "react";
import "../../styles/Benefits.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Benefits = () => {
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
    <div className="benefits-wrapper">
      <div className="benefits">
        <h2>{t("Join the club and get the benefits")}</h2>
        <p>
          {t("Sign up for our newsletter and receive exclusive offers on new")}{" "}
          <tr />
          {t("ranges, sales, pop-up stores and more")}
        </p>
        <div className="benefits__form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
          <button onClick={handleSubmit} type="submit">
            {t("Sign up")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
