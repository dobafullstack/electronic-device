import React from 'react'

function BlogArea() {
    return (
        <div className='blog-area pt-115 pb-75'>
            <div className='container'>
                <div className='section-title-tab-wrap mb-55'>
                    <div className='section-title-4'>
                        <h2>press &amp; looks</h2>
                    </div>
                    <div className='btn-style-6 ml-60'>
                        <a href='blog-details.html'>All articles</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <div className='blog-wrap mb-30'>
                            <div className='blog-img mb-25'>
                                <a href='blog-details.html'>
                                    <img
                                        src='https://didongblog.com/wp-content/uploads/2021/11/dien-thoai-samsung-chup-anh-dep-gia-re.jpg'
                                        alt='blog-img'
                                    />
                                </a>
                            </div>
                            <div className='blog-content'>
                                <div className='blog-meta'>
                                    <ul>
                                        <li>
                                            <a href='#'>News </a>
                                        </li>
                                        <li>May 25, 2020</li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href='blog-details.html'>
                                        TOP điện thoại Samsung chụp ảnh đẹp giá
                                        rẻ dưới 5 triệu đáng mua nhất
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className='blog-wrap mb-30'>
                            <div className='blog-img mb-25'>
                                <a href='blog-details.html'>
                                    <img
                                        src='https://didongblog.com/wp-content/uploads/2021/10/iphone-13-gia-bao-nhieu-2-600x290.jpg'
                                        alt='blog-img'
                                    />
                                </a>
                            </div>
                            <div className='blog-content'>
                                <div className='blog-meta'>
                                    <ul>
                                        <li>
                                            <a href='#'>Inspiration </a>
                                        </li>
                                        <li>May 25, 2020</li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href='blog-details.html'>
                                        Tổng hợp giá bán iPhone 13 series ra mắt
                                        năm 2021
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className='blog-wrap mb-30'>
                            <div className='blog-img mb-25'>
                                <a href='blog-details.html'>
                                    <img
                                        src='https://didongblog.com/wp-content/uploads/2021/10/3-1-600x290.jpg'
                                        alt='blog-img'
                                    />
                                </a>
                            </div>
                            <div className='blog-content'>
                                <div className='blog-meta'>
                                    <ul>
                                        <li>
                                            <a href='#'>Lookbook </a>
                                        </li>
                                        <li>May 25, 2020</li>
                                    </ul>
                                </div>
                                <h3>
                                    <a href='blog-details.html'>
                                        Top 5 loa thông minh hỗ trợ tiếng Việt
                                        tốt nhất 2021
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogArea
