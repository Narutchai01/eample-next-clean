import { IPostRepository } from "../../core/ports/post.repository";
import { IPost } from "@/core/domain/post";
import { HttpHelper } from "@/lib/http";

export class PostRepository implements IPostRepository {
  private http: HttpHelper;
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = new HttpHelper(this.baseUrl);
  }

  async getPosts(): Promise<IPost[]> {
    return this.http.get<IPost[]>("/posts");
  }

  async getPostById(id: number): Promise<IPost | null> {
    try {
      return this.http.get<IPost>(`/posts/${id}`);
    } catch (error) {
      if (error instanceof Error && error.message.includes("status: 404")) {
        return null;
      }
      throw error;
    }
  }
}
