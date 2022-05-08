import React from "react";
import { dsBaiViet } from "./data/dsBaiViet";
import { Link } from "react-router-dom";

function News() {
  return (
    <div className="news-container">
      <div className="news-article">
        {dsBaiViet.map((baiviet) => {
          const { id, tenbaiviet, content, hinh } = baiviet;
          return (
            <div className="article-list" key={id}>
              <div className="article-image">
                <img src={require(`./images/${hinh}.png`)} alt="" />
              </div>
              <Link to={`/tintuc/${tenbaiviet}`} state={{ idbaiviet: id }}>
                <div className="article-name">{tenbaiviet}</div>
              </Link>
              <div className="article-content">{content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
