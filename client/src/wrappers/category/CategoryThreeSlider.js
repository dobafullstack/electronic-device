import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
// import categoryData from "../../data/category/category-two.json";
import CategoryThreeSingle from "../../components/category/CategoryThreeSingle.js";
import { useSelector } from "react-redux";

const CategoryThreeSlider = ({ spaceTopClass, spaceBottomClass }) => {
  const categories = useSelector((state) => state.categoryData.categories);
  const isLoading = useSelector((state) => state.categoryData.loading);
  const categoryData = !isLoading
    ? categories.map((item) => {
        return {
          id: item._id,
          title: item.name,
          subtitle: item.subtitle,
          link: `/shop/${item._id}`,
          image: item.image || "/assets/img/product/hm8-pro-1.jpg",
        };
      })
    : null;
  // swiper slider settings
  const settings = {
    loop: false,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    !isLoading && (
      <div
        className={`collections-area ${spaceTopClass ? spaceTopClass : ""}  ${
          spaceBottomClass ? spaceBottomClass : ""
        }`}
      >
        <div className="container">
          <div className="collection-wrap">
            <div className="collection-active">
              <Swiper {...settings}>
                {categoryData &&
                  categoryData.map((single, key) => {
                    return (
                      <CategoryThreeSingle
                        data={single}
                        key={key}
                        sliderClass="swiper-slide"
                      />
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

CategoryThreeSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default CategoryThreeSlider;
