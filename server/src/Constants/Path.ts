export default {
    APP: {
        BASE_URL: '/',
        PARAMS: '/:id',
    },
    AUTH: {
        BASE_URL: '/auth',
        LOGIN: '/login',
        REGISTER: '/register',
        GET_USER: '/',
        UPDATE_USER: '/update',
        DELETE_USER: '/delete/:userId',
    },
    ROLE: {
        BASE_URL: '/role',
    },
    CATEGORY: {
        BASE_URL: '/category',
        CHILD: '/child/:categoryId/:categoryDetailId',
    },
    PRODUCT: {
        BASE_URL: '/product',
        CATEGORY: '/category/:categoryId',
        CATEGORY_DETAIL: '/category-detail/:categoryDetailId',
        SEARCH: '/search/:productName',
    },
    PRODUCT_TYPE: {
        BASE_URL: '/product-type',
    },
    ORDER: {
        BASE_URL: '/order',
        MY_ORDER: '/my-order',
    },
    BILL: {
        BASE_URL: '/bill',
    },
    ATTRIBUTE: {
        BASE_URL: '/attribute',
    },
    SLIDER: {
        BASE_URL: '/slider',
    },
    POST: {
        BASE_URL: '/post',
    },
};
