import React from "react";
import { postService } from "@/infra/container";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await postService.getPostById(Number(id));

  return <div>page {post ? post.title : "Post not found"}</div>;
}
