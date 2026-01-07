import { defineCollection, z } from "astro:content";

const workshops = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    number: z.number(),
  }),
});

export const collections = {
  workshops,
};
