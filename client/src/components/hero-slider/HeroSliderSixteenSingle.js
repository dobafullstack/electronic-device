import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderSixteenSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img ${
        sliderClass ? sliderClass : ""
      }`}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12">
            <div className="slider-content-2 slider-content-2--style2 slider-animated-1">
              <h3 className="animated no-style">{data.title}</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subTitle }}
              />
              <p className="animated text-white">{data.content}</p>
              <div className="slider-btn btn-hover">
                <Link className="animated rounden-btn" to={data.url || "/shop"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderSixteenSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default HeroSliderSixteenSingle;
