import PropTypes from "prop-types";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import categoryApi from "../../api/categoryApi";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryApi.getAllCategoryApi().then((res) => setCategories(res.result));
  }, []);

  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop"}>
              {" "}
              {strings["shop"]}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              Category
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            {categories.length > 0 && (
              <ul className="submenu">
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link to={`/shop/${category._id}`}>
                      {category.name} <i className="fa fa-angle-right" />
                    </Link>
                    <ul className="side-submenu">
                      <p className="text-left ml-4">Hãng sản xuất</p>
                      {categories
                        .find((x) => x._id === category._id)
                        .childCate.map((child) => (
                          <li key={child._id}>
                            <Link to={`/shop/child/${child._id}`}>
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      {categories
                        .find((x) => x._id === category._id)
                        .attributes.map((att) => (
                          <>
                            <br />
                            <p className="text-left ml-4">{att.name}</p>
                            {att.types.map((type) => (
                              <li key={type._id}>
                                <Link to={`/shop/child/${type._id}`}>
                                  {type.name}
                                </Link>
                              </li>
                            ))}
                          </>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
              {strings["blog"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                  {strings["blog_standard"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                  {strings["blog_no_sidebar"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                  {strings["blog_right_sidebar"]}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  {strings["blog_details_standard"]}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);
