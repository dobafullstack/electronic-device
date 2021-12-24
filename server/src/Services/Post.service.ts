import Logger from '@Configs/Logger';
import Result from '@Constants/Result';
import Post from '@Models/Post';
import CreatePost from '@Types/Input/CreatePost';
import ApiResponse from '@Types/ResponseType';
import GetActionResult from '@Utils/GetActionResult';
import _ from 'lodash';

export default class PostService {
    public static async CreatePostService(createPostInput: CreatePost): Promise<ApiResponse> {
        const result = Post.create(createPostInput)
            .then(() => GetActionResult(201, null, null, Result.POST.CREATE))
            .catch((err: any) => {
                Logger.error(err);
                return GetActionResult(400, null, { message: err.message }, Result.POST.CREATE);
            });

        return result;
    }

    public static async GetListPostsService(): Promise<ApiResponse> {
        const Posts = await Post.find();

        return GetActionResult(200, Posts, null);
    }

    public static async GetDetailPostService(postId: string): Promise<ApiResponse> {
        if (!postId) return GetActionResult(400, null, { message: 'Invalid id' }, Result.POST.GET_DETAIL);

        const post = await Post.findById(postId);

        if (!post) return GetActionResult(400, null, { message: 'Can not find any Post' }, Result.POST.GET_DETAIL);

        return GetActionResult(200, post, null);
    }

    public static async UpdatePostService(postId: string, body: any): Promise<ApiResponse> {
        if (!postId) return GetActionResult(400, null, { message: 'Invalid id' }, Result.POST.UPDATE);

        const existingPost = await Post.findById(postId);

        if (!existingPost) return GetActionResult(400, null, { message: 'Can not find any Post' }, Result.POST.UPDATE);

        _.extend(existingPost, body);

        const result = await existingPost
            .save()
            .then(() => GetActionResult(200, null, null))
            .catch((err) => {
                console.log(err);
                return GetActionResult(400, null, err, Result.POST.UPDATE);
            });

        return result;
    }

    public static async DeletePostService(postId: string): Promise<ApiResponse> {
        if (!postId) return GetActionResult(400, null, { message: 'Invalid id' }, Result.POST.DELETE);

        const existingPost = await Post.findById(postId);

        if (!existingPost) return GetActionResult(400, null, { message: 'Can not find any Post' }, Result.POST.DELETE);

        await Post.findByIdAndDelete(postId);

        return GetActionResult(200, null, null, Result.POST.DELETE);
    }
}
