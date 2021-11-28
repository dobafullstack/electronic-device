# Electronic device store

## Headers
```bash
    {
        authorization: Bearer + token
    }
```

## Routes
---
### Role (only admin)
- Create
```bash
    method: POST,
    url: "/role/",
    body: {
        name: string
    },
    headers: {
        authorization: Bearer + token
    }
```
- Get list
```bash
    method: GET,
    url: "/role/",
    headers: {
        authorization: Bearer + token
    }
```
- Get detail
```bash
    method: GET,
    url: "/role/:roleId",
    headers: {
        authorization: Bearer + token
    }
```
- Update
```bash
    method: PUT,
    url: "/role/:roleId",
    body: {
        name?: string
    },
    headers: {
        authorization: Bearer + token
    }
```
- Delete
```bash
    method: DELETE,
    url: "/role/:roleId",
    headers: {
        authorization: Bearer + token
    }
```
### Auth
- Register
```bash
    method: POST,
    url: "/auth/register",
    body: {
        name: string;
        username: string;
        email: string;
        password: string;
        phone: string;
    }
```
- Login
```bash
    method: POST,
    url: "/auth/login",
    body: {
        usernameOrEmail: string;
        password: string;
    }
```
- Get My User
```bash
    method: GET,
    url: "/auth/token",
    headers: {
        authorization: Bearer + token
    }
```
- Update user
```bash
    method: PUT,
    url: "/auth/update",
    body: {
        name?: string,
        phone?: string;
        address?: string;
        avatar?: string;
        wishList?: [];
    }
    headers: {
        authorization: Bearer + token
    }
```
- Delete user (only manager)
```bash
    method: DELETE,
    url: "/auth/delete/:userId",
    headers: {
        authorization: Bearer + token
    }
```
### Attributes
- Create (only manager)
```bash
    method: POST,
    url: "/attribute/",
    body: {
        name: string;
        unit: string;
        types: [
            {
                name: string
            }
        ]
    },
    headers: {
        authorization: Bearer + token
    }
```
- Get list
```bash
    method: GET,
    url: "/attribute/"
```
- Get detail
```bash
    method: GET,
    url: "/attribute/:attributeId"
```
- Update (only manager)
```bash
    method: PUT,
    url: "/attribute/:attributeId",
    body: {
        name?: string;
        unit?: string;
        types?: [
            {
                name?: string
            }
        ]
    },
    headers: {
        authorization: Bearer + token
    }
```
- Delete (only manager)
```bash
    method: DELETE,
    url: "/attribute/:attributeId",
    headers: {
        authorization: Bearer + token
    }
```
### Product type
- Create (only manager)
```bash
    method: POST,
    url: "/product-type/",
    body: {
        name: string;
        attributes: String[]
    },
    headers: {
        authorization: Bearer + token
    }
```
- Get list
```bash
    method: GET,
    url: "/product-type/"
```
- Get detail
```bash
    method: GET,
    url: "/product-type/:productTypeId"
```
- Update (only manager)
```bash
    method: PUT,
    url: "/product-type/:productTypeId",
    body: {
        name?: string;
        attributes?: String[]
    },
    headers: {
        authorization: Bearer + token
    }
```
- Delete (only manager)
```bash
    method: DELETE,
    url: "/product-type/:productTypeId",
    headers: {
        authorization: Bearer + token
    }
```
### Category
- Create (only manager)
```bash
    method: POST,
    url: "/category",
    body: {
        name: string;
        childCate: [{
            name: string;
            childCate: []
        }]
    },
    headers: {
        authorization: Bearer + token
    }
```
- Get list
```bash
    method: GET,
    url: "/category"
```
- Get detail
```bash
    method: GET,
    url: "/category/:categoryId"
```
- Update (only manager)
```bash
    method: PUT,
    url: "/category/:categoryId",
    body: {
        name?: string;
        childCate?: [{
            name?: string;
            childCate?: []
        }]
    },
    headers: {
        authorization: Bearer + token
    }
```
- Delete (only manager)
```bash
    method: DELETE,
    url: "/category/:categoryId",
    headers: {
        authorization: Bearer + token
    }
```
- Add child (only manager)
```base
    method: POST,
    url: "/category/child/:categoryId/:categoryDetailId",
    body: {
        name: string;
        childCate: [{
            name: string;
            childCate: []
        }]
    },
    headers: {
        authorization: Bearer + token
    }
```
- Update child (only manager)
```base
    method: PUT,
    url: "/category/child/:categoryId/:categoryDetailId",
    body: {
        name?: string;
        childCate?: [{
            name?: string;
            childCate?: []
        }]
    },
    headers: {
        authorization: Bearer + token
    }
```
- Delete child (only manager)
```base
    method: DELETE,
    url: "/category/child/:categoryId/:categoryDetailId",
    headers: {
        authorization: Bearer + token
    }
```
### Product
- Create (only manager)
```bash
    method: POST,
    url: "/product/",
    body: {
        category_detail_id: string;
        product_type_id: string;
        name: string;
        price: number;
        images: String[];
        count: number;
    },
    headers: {
        authorization: Bearer + token
    }
```
- Get list
```bash
    method: GET,
    url: "/product/"
```
- Get detail
```bash
    method: GET,
    url: "/product/:productId"
```
- Get products by CategoryId
```bash
    method: GET,
    url: "/product/category/:categoryId"
```
- Get products by CategoryDetailId
```bash
    method: GET,
    url: "/product/category-detail/:categoryDetailId"
```
- Get products by ProductName
```bash
    method: GET,
    url: "/product/search/:productName"
```
- Update (only manager)
```bash
    method: PUT,
    url: "/product/:productId",
    body: {
        category_detail_id?: string;
        product_type_id?: string;
        name?: string;
        price?: number;
        images?: String[];
        count?: number;
    },
    headers: {
        authorization: Bearer + token
    }
```
- Delete (only manager)
```bash
    method: DELETE,
    url: "/product/:productId",
    headers: {
        authorization: Bearer + token
    }
```
### Order
- Create (only manager)
```bash
    method: POST,
    url: "/order/",
    body: {
        userId: string;
        products: [{
            productId: string;
            count: number;
        }];
        delivery: {
            name: string;
            phone: string;
            address: string;
            status: "pending" | "canceled" | "delivering" | "success",
            method: string
        };
        payment: {
            status: boolean;
            method: string;
        };
        description: string;
    },
    headers: {
        authorization: Bearer + token
    }
```
- Get list (only manager)
```bash
    method: GET,
    url: "/order/",
    headers: {
        authorization: Bearer + token
    }
```
- Get detail (only manager)
```bash
    method: GET,
    url: "/order/:orderId",
    headers: {
        authorization: Bearer + token
    }
```
- Get my order
```bash
    method: GET,
    url: "/order/my-order",
    headers: {
        authorization: Bearer + token
    }
```
- Update (only manager)
```bash
    method: PUT,
    url: "/order/:orderId",
    body: {
        userId?: string;
        products?: [{
            productId?: string;
            count?: number;
        }];
        delivery?: {
            name?: string;
            phone?: string;
            address?: string;
            status?: "pending" | "canceled" | "delivering" | "success",
            method?: string
        };
        payment?: {
            status?: boolean;
            method?: string;
        };
        description?: string;
    },
    headers: {
        authorization: Bearer + token
    }
```
- Delete (only manager)
```bash
    method: DELETE,
    url: "/order/:orderId",
    headers: {
        authorization: Bearer + token
    }
```
### Bill
- Create (only manager)
```bash
    method: POST,
    url: "/bill/",
    body: {
        userId: string;
        products: [{
            productId: string;
            count: number;
        }];
    },
    headers: {
        authorization: Bearer + token
    }
```
- Get list
```bash
    method: GET,
    url: "/bill/"
```
- Get detail
```bash
    method: GET,
    url: "/bill/:billId"
```
- Update (only manager)
```bash
    method: PUT,
    url: "/bill/:billId",
    body: {
        userId?: string;
        products?: [{
            productId?: string;
            count?: number;
        }];
    },
    headers: {
        authorization: Bearer + token
    }
```
- Delete (only manager)
```bash
    method: DELETE,
    url: "/bill/:billId",
    headers: {
        authorization: Bearer + token
    }
```