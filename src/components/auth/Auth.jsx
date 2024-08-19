import React, { useEffect, useState } from "react";
import axios from "../../axios/auth.js";
import "../style/Auth.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export const createUser = async (user) => {
  const { data } = await axios.post("users/", user);
  const loginData = await axios.post("auth/login", {
    email: data.email,
    password: data.password,
  });
  return { ...data, token: loginData.token };
};

const Auth = () => {
  const [showModal, setShowModal] = useState(true);

  let [userData, setUserData] = useState({
    avatar: "",
    name: "",
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const setUser = (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log(userData);
    createUser(userData);
    setUser(userData);
    // setShowModal(false);
  };

  const getLocal = () => {
    const user = localStorage.getItem("user");
    if (user) {
      userData = JSON.parse(user);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      setShowModal(false);
    }
  };

  let userAvatar = userData.avatar;
  useEffect(() => {
    getLocal();
  }, []);

  if (userAvatar == undefined) {
    return <h2>Loading...</h2>;
  }

  return (
    showModal && (
      <div className="modal-overlay" onClick={handleOutsideClick}>
        <div className="auth">
          <Avatar
            className="user-avatar"
            size={64}
            src={userAvatar ? userAvatar : <UserOutlined />}
          />
          <form onSubmit={sendForm}>
            <input
              onChange={changeInput}
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              onChange={changeInput}
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              onChange={changeInput}
              type="password"
              placeholder="Password"
              name="password"
            />
            <input
              onChange={changeInput}
              type="text"
              placeholder="Avatar"
              name="avatar"
            />
            <input className="create" type="submit" value={"Create Account"} />
          </form>
        </div>
      </div>
    )
  );
};

export default Auth;

