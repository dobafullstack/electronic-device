import Path from '@Constants/Path';
import Authentication from '@Middlewares/Authentication';
import { Express, Request, Response } from 'express';
import AuthRoute from './Auth.routes';
import CategoryRoute from './Category.routes';
import RoleRoute from './Role.routes';
import AttributeRoute from './Attribute.routes';
import ProductTypeRoute from './ProductType.routes';
import ProductRoute from './Product.routes';
import OrderRoute from './Order.routes';
import BillRoute from './Bill.routes';
import SliderRoute from './Slider.routes';
import PostRoute from './Post.routes';
import { Strict } from '@Middlewares/Authorization';

const router = (app: Express) => {
    app.get('/', async (req: Request, res: Response) => {
        res.json({
            message: 'Hello world',
        });
    });

    app.use(Path.AUTH.BASE_URL, AuthRoute); //Auth
    app.use(Path.ROLE.BASE_URL, Authentication, Strict, RoleRoute); //Role
    app.use(Path.CATEGORY.BASE_URL, CategoryRoute); //Category
    app.use(Path.ATTRIBUTE.BASE_URL, AttributeRoute); //Attribute
    app.use(Path.PRODUCT_TYPE.BASE_URL, ProductTypeRoute); //ProductType
    app.use(Path.PRODUCT.BASE_URL, ProductRoute); //Product
    app.use(Path.ORDER.BASE_URL, OrderRoute); //Order
    app.use(Path.BILL.BASE_URL, Authentication, BillRoute); //Bill
    app.use(Path.SLIDER.BASE_URL, SliderRoute); //Slider
    app.use(Path.POST.BASE_URL, PostRoute); //Post
};

export default router;
