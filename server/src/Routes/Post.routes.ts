import { Router } from 'express';
import PostController from '@Controllers/Post.controller';
import Path from '@Constants/Path';

const router = Router();

router.get(Path.APP.BASE_URL, PostController.GetListPostsController);
router.get(Path.APP.PARAMS.replace('id', 'postId'), PostController.GetDetailPostController);
router.post(Path.APP.BASE_URL, PostController.CreatePostController);
router.put(Path.APP.PARAMS.replace('id', 'postId'), PostController.UpdatePostController);
router.delete(Path.APP.PARAMS.replace('id', 'postId'), PostController.DeletePostController);

export default router;
