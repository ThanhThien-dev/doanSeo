import React from "react";
import "../App.css";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
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
      <div className="right-header">
        <Link to={"/tintuc"} className="non-textdecoration">
          <div>Tin tức</div>
        </Link>
        <div>Giỏ hàng</div>
        <div>Trợ giúp</div>
        <div>
          <a href="/" className="non-textdecoration">
            Liên hệ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
