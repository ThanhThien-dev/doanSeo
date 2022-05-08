import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import Header from "./Components/Header";
import SimpleSlider from "./Components/Slider";
import Filter from "./Components/Filter";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaiViet from "./Components/BaiViet";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <SimpleSlider></SimpleSlider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="product-container">
                <Filter></Filter>
                <Product></Product>
              </div>
            }
          ></Route>
          <Route path="/tintuc" element={<News></News>}></Route>
          <Route path="/tintuc/:id" element={<BaiViet></BaiViet>}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
