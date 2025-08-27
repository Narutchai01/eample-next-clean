import { PostRepository } from "@/infra/repositories/post.repository";
import { PostService } from "@/core/application/post.service";

export const baseUrl: string = "https://jsonplaceholder.typicode.com";

const postRepository = new PostRepository(baseUrl);
export const postService = new PostService(postRepository);
