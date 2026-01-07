import type { EventType } from "@/types";
import eventsData from "@/data/events.json";

export function getAllEvents(): EventType[] {
  return eventsData as EventType[];
}

export function getEventById(id: string): EventType | undefined {
  const events = getAllEvents();
  return events.find((event) => event.id === id);
}

export function getUpcomingEvents(): EventType[] {
  const events = getAllEvents();
  const now = new Date();
  return events
    .filter((event) => new Date(event.startTime) > now)
    .sort(
      (a, b) =>
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );
}

export function getPastEvents(): EventType[] {
  const events = getAllEvents();
  const now = new Date();
  return events
    .filter((event) => new Date(event.startTime) < now)
    .sort(
      (a, b) =>
        new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
    );
}
