import React from "react";
import dsNhaCungCap from "./data/dsNhaCungCap";
import dsDauSo from "./data/dsDauSo";
import dsKieuSoDep from "./data/dsKieuSoDep";

function Filter() {
  return (
    <>
      <div className="filter-container">
        <div className="filter-title">Mạng di động</div>
        <div className="mangdidong-list">
          {dsNhaCungCap.dsNhaCungCap.map((NCC) => {
            const { idNCC, tenNCC } = NCC;
            return (
              <button className="btn" key={idNCC}>
                {tenNCC}
              </button>
            );
          })}
        </div>
        <div className="filter-title">Đầu Số</div>
        <div className="dauso-list">
          {dsDauSo.dsDauSo.map((DS) => {
            const { idDS, tenDS } = DS;
            return (
              <button className="btn" key={idDS}>
                {tenDS}
              </button>
            );
          })}
        </div>
        <div className="filter-title">Kiểu Số Đẹp</div>
        <div className="kieuso-list">
          {dsKieuSoDep.dsKieuSoDep.map((KS) => {
            const { idKS, ten1, ten2 } = KS;
            return (
              <div className="kieuso-kieuso-list" key={idKS}>
                <div className="ten1">{ten1}</div>
                <div className="ten2">{ten2}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Filter;
