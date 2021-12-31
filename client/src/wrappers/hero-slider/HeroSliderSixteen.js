import React, { useState } from "react";
import Swiper from "react-id-swiper";
import HeroSliderSixteenSingle from "../../components/hero-slider/HeroSliderSixteenSingle.js";
import { useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import { useMemo } from "react";

const HeroSliderSixteen = () => {
  const [sliders, setSliders] = useState();

  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };

  useEffect(() => {
    axiosClient
      .get("/slider")
      .then((res) => setSliders(res.result))
      .catch((err) => console.log(err));
  }, []);

  const keyValue = useMemo(() => Math.round(), [sliders]);

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params} key={Date.now()}>
          {sliders &&
            sliders.map((single, key) => {
              return (
                <HeroSliderSixteenSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderSixteen;
