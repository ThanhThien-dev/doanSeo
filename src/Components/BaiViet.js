import React from "react";
import { useLocation } from "react-router-dom";
import dsBaiViet from "./data/dsBaiViet";

function BaiViet() {
  const state = useLocation();
  const ds = dsBaiViet.filter(
    (baiviet) => baiviet.id === state.state.idbaiviet
  );
  return (
    <div>
      {ds.map((baiviet) => {
        const { id, tenbaiviet, hinh, content, noidung } = baiviet;
        return (
          <div key={id}>
            {noidung}
          </div>
        );
      })}
    </div>
  );
}

export default BaiViet;
