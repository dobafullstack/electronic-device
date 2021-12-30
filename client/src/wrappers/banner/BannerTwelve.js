import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import bannerData from "../../data/banner/banner-twelve.json";
import BannerTwelveSingle from "../../components/banner/BannerTwelveSingle.js";

const BannerTwelve = ({ spaceBottomClass }) => {
  const [banner, setBanner] = useState([]);
  const data = [
    {
      id: 1,
      image: "/assets/img/banner/banner-mac-m1.png",
      title: "",
      subtitle: "",
      link: "/shop",
    },
    {
      id: 2,
      image: "/assets/img/banner/banner-manhinh.png",
      title: "",
      subtitle: "",
      link: "/shop",
    },
    {
      id: 3,
      image: "/assets/img/banner/banner-lap-gaming.png",
      title: "",
      subtitle: "",
      link: "/shop",
    },
  ];

  useEffect(() => {
    setBanner(data);
  }, []);

  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="row no-gutters">
        {banner &&
          banner.map((single, key) => {
            return (
              <BannerTwelveSingle
                data={single}
                key={key}
                spaceBottomClass="mb-30"
              />
            );
          })}
      </div>
    </div>
  );
};

BannerTwelve.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default BannerTwelve;
