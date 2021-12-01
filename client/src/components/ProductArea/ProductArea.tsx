import React, { useEffect, useState } from "react";
import { getAllCategoryAction } from "../../app/actions/category.action";
import { getAllBestSellerAction, getAllNewArrivalAction, getBestSellerByCategoryIdAction, getNewArrivalByCategoryIdAction } from "../../app/actions/product.action";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductModel from "../../models/Product";
import Product from "./Product";

interface ProductAreaProps {
    head?: string;
    bottomBordered?: boolean;
    products: ProductModel[];
    isBestSeller?: boolean;
    isNewArrival?: boolean;
}

function ProductArea({
    head,
    bottomBordered,
    isBestSeller,
    isNewArrival,
}: ProductAreaProps) {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.category);
    const bestSeller = useAppSelector((state) => state.product.bestSeller);
    const newArrival = useAppSelector((state) => state.product.newArrival);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    useEffect(() => {
        dispatch(getAllCategoryAction());
        if (isBestSeller) {
            dispatch(getAllBestSellerAction());
        } else if (isNewArrival) {
            dispatch(getAllNewArrivalAction());
        }
    }, []);

    useEffect(() => {
        if (isBestSeller) {
            dispatch(getBestSellerByCategoryIdAction(selectedCategory));
        }else if (isNewArrival){
            dispatch(getNewArrivalByCategoryIdAction(selectedCategory));
        }
    }, [selectedCategory]);

    const getAllProduct = () => {
        if (isBestSeller){
            dispatch(getAllBestSellerAction())
        }else if (isNewArrival){
            dispatch(getAllNewArrivalAction())
        }
    }

    return (
        <div className='product-area pt-115 pb-80'>
            <div className='container'>
                <div className='section-title-tab-wrap mb-55'>
                    <div className='section-title-4'>
                        <h2>
                            {isBestSeller
                                ? "Best seller"
                                : isNewArrival
                                ? "New arrival"
                                : head}
                        </h2>
                    </div>
                    <div className='tab-btn-wrap-2'>
                        <div className='tab-style-5 nav'>
                            <a
                                className='active'
                                href='#all'
                                onClick={() => getAllProduct()}
                                data-bs-toggle='tab'>
                                Tất cả{" "}
                            </a>
                            {/* <a href="#phone" data-bs-toggle="tab">Điện thoại </a>
                                <a href="#laptop" data-bs-toggle="tab">Laptop </a>
                                <a href="#tablet" data-bs-toggle="tab">Tablet</a>
                                <a href="#watch" data-bs-toggle="tab">Đồng hồ</a> */}
                            {category.map((item) => (
                                <a
                                    href={`#${item.name.split(" ").join("")}`}
                                    data-bs-toggle='tab'
                                    onClick={() =>
                                        setSelectedCategory(item._id)
                                    }
                                    key={item._id}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className='btn-style-6 ml-60'>
                            <a href='shop.html'>All Product</a>
                        </div>
                    </div>
                </div>
                <div className='tab-content jump'>
                    <div id='all' className='tab-pane active'>
                        <div className='row'>
                            {isBestSeller
                                ? bestSeller.map((product) => (
                                      <Product
                                          listLayout={false}
                                          product={product}
                                      />
                                  ))
                                : newArrival.map((product) => (
                                      <Product
                                          listLayout={false}
                                          product={product}
                                      />
                                  ))}
                        </div>
                    </div>
                    {category.map((item) => (
                        <div
                            id={item.name.split(" ").join("") || ""}
                            className='tab-pane'>
                            <div className='row'>
                                {isBestSeller
                                    ? bestSeller.map((product) => (
                                          <Product
                                              listLayout={false}
                                              product={product}
                                          />
                                      ))
                                    : newArrival.map((product) => (
                                          <Product
                                              listLayout={false}
                                              product={product}
                                          />
                                      ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductArea;
