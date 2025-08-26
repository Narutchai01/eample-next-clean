import { IPostRepository } from "@/core/ports/post.repository";
import { IPost } from "@/core/domain/post";

export class PostService {
  constructor(private postRepository: IPostRepository) {}

  async getPosts(): Promise<IPost[]> {
    return this.postRepository.getPosts();
  }
}
