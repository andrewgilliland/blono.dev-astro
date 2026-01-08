import type { CollectionEntry } from "astro:content";

export type ImageType = {
  src: string;
  alt: string;
};

export type NavLinkType = {
  href: string;
  text: string;
};

export type Post = {
  filePath: string;
  data: {
    title: string;
    description: string;
    date: string;
  };
};

export type EventType = {
  id: string;
  title: string;
  location: string;
  address: string;
  details: string;
  startTime: string;
  endTime: string;
  image?: ImageType;
};

export type DeveloperType = {
  image: ImageType;
  role: string;
  skills: string[];
  name: string;
  bio: string;
};

export type LessonType = {
  title: string;
  slug: string;
  description: string;
  number: number;
};

export type Workshop = CollectionEntry<"workshops">;
