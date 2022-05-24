import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import Header from "./Components/Header";
import SimpleSlider from "./Components/Slider";
import About from "./Components/About";
import Filter from "./Components/Filter";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Noidung1 from "../src/Components/data/noidung1";
import Noidung2 from "../src/Components/data/noidung2";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <SimpleSlider></SimpleSlider>
      <Routes>
        <Route
          path="/"
          element={
              <About></About>
          }
        ></Route>
        <Route path="/tintuc" element={<News></News>}></Route>
        <Route path="/tintuc/1" element={<Noidung1></Noidung1>}></Route>
        <Route path="/tintuc/2" element={<Noidung2></Noidung2>}></Route>
        <Route path="/giohang" element={
          <div className="product-container">
            <Filter></Filter>
            <Product></Product>
          </div>
        }
        ></Route>
        <Route path="/home" element={<About />}></Route>
        <Route path="/home/lienhe" element={<Footer />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
