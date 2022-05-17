import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import dsBaiViet from "./data/dsBaiViet";
import Noidung1 from "./data/noidung1";
import Noidung2 from "./data/noidung2";

function BaiViet() {
  const state = useLocation();
  const ds = dsBaiViet.filter(
    (baiviet) => baiviet.id === state.state.idbaiviet
  );
  return (
    <div>
      {ds.map((baiviet) => {
        const { id, tenbaiviet, hinh, content } = baiviet;
        if (id === 1) {
          return (
            <div key={id}>
              <Noidung1></Noidung1>
            </div>
          );
        }
        if (id === 2) {
          return (
            <div key={id}>
              <Noidung2></Noidung2>
            </div>
          );
          }
        })}
    </div>
  );
}

export default BaiViet;
