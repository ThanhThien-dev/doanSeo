import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 9000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <>
        <div className="slide-container">
          <Slider {...settings}>
            <div>Sim Viettel độc lạ</div>
            <div>Thế giới sim Viettel uy tín</div>
            <div>Kho sim PTCHH</div>
          </Slider>
        </div>
      </>
    );
  }
}
