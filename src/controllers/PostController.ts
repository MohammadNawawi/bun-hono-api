import { Context } from "hono";
import prisma from "../../prisma/client";

export const getPosts = async (c: Context) => {
  try {
    const posts = await prisma.post.findMany({ orderBy: { id: "desc" } });

    return c.json(
      {
        success: true,
        message: "Data List Posts!",
        data: posts,
      },
      200
    );
  } catch (error: unknown) {
    console.log(`Error Getting Posts: ${error}`);
  }
};
