import Path from '@Constants/Path';
import Authentication from '@Middlewares/Authentication';
import { Express, Request, Response } from 'express';
import AuthRoute from './Auth.routes';
import RoleRoute from './Role.routes';

const router = (app: Express) => {
    app.get('/', async (req: Request, res: Response) => {
        res.json({
            message: 'Hello world',
        });
    });

    app.use(Path.AUTH.BASE_URL, AuthRoute);
    app.use(Path.ROLE.BASE_URL, Authentication, RoleRoute);
};

export default router;
