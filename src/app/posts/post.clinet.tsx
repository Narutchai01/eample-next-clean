"use client";

import { IPost } from "@/core/domain/post";
import { PostCard } from "@/ui/shared/post/card";
export const PostList = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
