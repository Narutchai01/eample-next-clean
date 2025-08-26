import { IPost } from "@/core/domain/post";
export const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
      <p className="text-sm text-gray-400 mt-2">User ID: {post.userId}</p>
    </div>
  );
};
