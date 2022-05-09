import React from "react";
import { useLocation } from "react-router-dom";
import { dsBaiViet } from "./data/dsBaiViet";
import Noidung from "./data/noidung";

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
              <Noidung></Noidung>
            </div>
          );
        }
      })}
    </div>
  );
}

export default BaiViet;
