import { PostRepository } from "@/infra/repositories/post.repository";
import { PostService } from "@/core/application/post.service";

const postRepository = new PostRepository();
export const postService = new PostService(postRepository);
