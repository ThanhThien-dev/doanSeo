import React from "react";
import dsSanPham from "./data/dsSanPham";

function Product() {
  return (
    <div className="productlist-container">
      <div className="filter-title" style={{color: 'black'}}>Sim Độc Lạ</div>
      <div className="productlist">
        {dsSanPham.dsSanPham.map((SP) => {
          const { idSP, tenSP, hinh, gia } = SP;
          return (
            <div key={idSP} className="product-detail">
              <div className="product-img">
                <img src={require(`./images/${hinh}.webp`)} alt=""></img>
              </div>
              <div className="product-text">
                <div className="tensp">{tenSP}</div>
                <div className="giasp">
                  {gia} <u>đ</u>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
