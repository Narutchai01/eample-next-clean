import { IPostRepository } from "../../core/ports/post.repository";
import { IPost } from "@/core/domain/post";

export class PostRepository implements IPostRepository {
  async getPosts(): Promise<IPost[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  }
}
