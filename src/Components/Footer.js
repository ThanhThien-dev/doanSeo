import React from "react";
import "../App.css";
import { FcCallback, FcCollaboration } from "react-icons/fc";

function Footer() {
  return (
    <footer>
      <div className="bch">
        <div className="bch-content">
          <h3 style={{ fontSize: "30px" }}>Hệ thống cửa hàng trên toàn quốc</h3>

          <h3>
            <u>Hà Nội</u>
          </h3>
          <ul>
            <li>Phường Thanh Mai, Quận Thanh Xuân, Hà Nội</li>
          </ul>
          <h3>
            <u>TP. Hồ Chí Minh</u>
          </h3>
          <ul>
            <li>Phường Linh Trung, Thành phố Thủ Đức, HCM</li>
          </ul>
          <h3>
            <u>Tỉnh thành khác</u>
          </h3>
          <ul>
            <li>Hiệp Ninh, Thành phố Tây Ninh, Tây Ninh</li>
          </ul>
        </div>

        <div className="bch-img">
          <img src={require("./images/map.JPG")} alt="" />
        </div>
      </div>

      <div className="hotline_footer">
        <button style={{ background: "yellow" }} className="btn" id="lh">
          <FcCollaboration />
          &nbsp;Chat tư vấn
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ background: "green", color: "white" }} className="btn">
          <FcCallback />
          &nbsp;0123.456.789
        </button>
      </div>

      <div className="end">
        <p>
          <b>
            © PTCHH - Hệ thống phân phối Sim Viettel độc lạ lớn nhất Việt
            Nam!
          </b>
        </p>
        <div>
          <p></p>
          <b>Kho sim PTCHH</b> là trang web chuyên về{" "}
          <a href="">số đẹp giá rẻ nhưng độc lạ</a>
          <br></br>
          <span style={{ color: "red" }}>
            <b>Kho sim PTCHH - giao sim miễn phí tận nhà trên toàn quốc.</b>
          </span>
        </div>
        <img src={require("./images/logoFooter.png")} className="img-footer" />
        <br></br>
      </div>

      <div className="bch-end">
        <div className="end">
          <a href="" style={{ color: "white" }}>
            Giới thiệu
          </a>
          &nbsp; | &nbsp;
          <a href="" style={{ color: "white" }}>
            Mua hàng &amp; Thanh toán
          </a>
          &nbsp; | &nbsp;
          <a href="" style={{ color: "white" }}>
            Kiến thức sim
          </a>
          &nbsp; |&nbsp;
          <a href="" style={{ color: "white" }}>
            Điều khoản &amp; điều kiện
          </a>
          &nbsp; |&nbsp;
          <a href="" style={{ color: "white" }}>
            Chính sách đổi trả
          </a>
          &nbsp; |&nbsp;
          <a href="" style={{ color: "white" }}>
            Chính sách bảo mật
          </a>
          &nbsp; |&nbsp;
          <a href="" style={{ color: "white" }}>
            Liên hệ
          </a>
          &nbsp; | &nbsp;
          <a href="" style={{ color: "white" }}>
            Đăng ký/Đăng bán
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
