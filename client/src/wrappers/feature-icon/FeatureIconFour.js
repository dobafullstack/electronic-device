import PropTypes from "prop-types";
import React from "react";
import FeatureIconFourSingle from "../../components/feature-icon/FeatureIconFourSingle.js";

const featureIconData = [
  {
    id: 1,
    titleImage: "/assets/img/icon-img/support-8.png",
    title: "Free shipping on all order",
    iconImage: "/assets/img/icon-img/support-5.png",
    backgroundColor: "#ccfbe9",
  },
  {
    id: 2,
    titleImage: "/assets/img/icon-img/support-9.png",
    title: "Back guarantee under 5 days",
    iconImage: "/assets/img/icon-img/support-6.png",
    backgroundColor: "#f2fbcc",
  },
  {
    id: 3,
    titleImage: "/assets/img/icon-img/support-10.png",
    title: "On every order over $150",
    iconImage: "/assets/img/icon-img/support-7.png",
    backgroundColor: "#ddfbcc",
  },
];

const FeatureIconFour = ({
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  gutterClass,
  responsiveClass,
  bgImg,
}) => {
  return (
    <div
      className={`support-area hm9-section-padding ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""} ${
        responsiveClass ? responsiveClass : ""
      }`}
      style={
        bgImg
          ? { backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }
          : {}
      }
    >
      <div
        className={`${containerClass ? containerClass : ""} ${
          gutterClass ? gutterClass : ""
        }`}
      >
        <div className="row">
          {featureIconData &&
            featureIconData.map((single, key) => {
              return (
                <FeatureIconFourSingle
                  data={single}
                  spaceBottomClass="mb-10"
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

FeatureIconFour.propTypes = {
  bgImg: PropTypes.string,
  containerClass: PropTypes.string,
  gutterClass: PropTypes.string,
  responsiveClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default FeatureIconFour;
