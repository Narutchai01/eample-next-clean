import { IPost } from "@/core/domain/post";
import { PostList } from "./post.clinet";
import { Metadata } from "next";
import { postService } from "@/infra/container";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await postService.getPosts();
  return {
    title: `Posts (${posts.length}) | MySite`,
    description: "Latest posts from MySite.",
    openGraph: {
      title: "Posts | MySite",
      description: "Latest posts from MySite.",
    },
    robots: { index: true, follow: true },
  };
}

const PostPage = async () => {
  const posts: IPost[] = await postService.getPosts();
  return <PostList posts={posts} />;
};

export default PostPage;
