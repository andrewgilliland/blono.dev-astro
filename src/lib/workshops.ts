import { getCollection } from "astro:content";
import type { Workshop } from "@/types";

export async function getAllWorkshops(): Promise<Workshop[]> {
  return await getCollection("workshops");
}

export async function getSortedWorkshops(): Promise<Workshop[]> {
  const workshops = await getAllWorkshops();
  return workshops.sort((a, b) => a.data.number - b.data.number);
}

export function getAdjacentWorkshops(
  currentSlug: string,
  workshops: Workshop[]
) {
  const currentIndex = workshops.findIndex(
    (w) => (w.data.slug || w.slug) === currentSlug
  );
  return {
    prev: currentIndex > 0 ? workshops[currentIndex - 1] : null,
    next:
      currentIndex < workshops.length - 1 ? workshops[currentIndex + 1] : null,
  };
}

export function getWorkshopSlug(workshop: Workshop): string {
  return workshop.data.slug || workshop.slug;
}
