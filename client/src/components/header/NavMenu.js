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
            <Link to={process.env.PUBLIC_URL + "/shop"}>
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
                    <Link
                      to={{
                        pathname: `/shop/${category._id}`,
                        state: ``,
                      }}
                    >
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
                          <div key={att._id}>
                            <br />
                            <p className="text-left ml-4">{att.name}</p>
                            {att.types.map((type) => (
                              <li key={type._id}>
                                <Link
                                  to={{
                                    pathname: `/shop/${category._id}`,
                                    state: `?${att.unit}=${type.name}`,
                                  }}
                                >
                                  {type.name}
                                </Link>
                              </li>
                            ))}
                          </div>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
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
