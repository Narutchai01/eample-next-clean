import { IPost } from "@/core/domain/post";

export interface IPostRepository {
  getPosts(): Promise<IPost[]>;
  getPostById(id: number): Promise<IPost | null>;
}
