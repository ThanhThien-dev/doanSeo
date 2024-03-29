import React, { useState, useEffect } from "react";
import "../App.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
    if (size > 1000) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div className="header">
      <div className="left-header">
        <Link to={"/"}>
          <img src={require("./images/logo1.png")} alt="" height={"110px"} />
        </Link>
      </div>
      <div className="middle-header">
        <input
          className="search-bar"
          type="text"
          placeholder="Tìm kiếm sim"
        ></input>
        <BsSearch className="search-button" size="30px"></BsSearch>
      </div>
      <div
        className={isMobile ? "right-header-mobile" : "right-header"}
        onClick={() => setIsMobile(false)}
      >
        <Link to={"/tintuc"} className="non-textdecoration">
          <div className="tintuc">Tin tức</div>
        </Link>

        <Link to={"/giohang"} className="non-textdecoration">
          <div className="giohang">Sản phẩm</div>
        </Link>

        <Link to={"/home"} className="non-textdecoration">
        <div className="trogiup">Giới thiệu</div>
          </Link>

          <Link to={"/lienhe"} className="non-textdecoration">
        <div className="lienhe">Liên hệ</div>
        </Link>

      </div>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes></FaTimes> : <FaBars></FaBars>}
      </button>
    </div>
  );
}

export default Header;
