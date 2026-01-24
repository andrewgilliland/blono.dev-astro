export const TIMEZONE = 'America/Chicago';

/**
 * Format event date for display in header banner
 * Example: "Thursday, January 29"
 */
export function formatEventDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timeZone: TIMEZONE,
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Format time string for display
 * Example: "05:00 PM"
 */
export function formatTimeString(dateString: string): string {
  return new Date(dateString).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: TIMEZONE,
  });
}

/**
 * Get date components for badge display
 */
export function getDateComponents(dateString: string) {
  const dateObj = new Date(dateString);
  return {
    month: dateObj.toLocaleString('default', {
      month: 'short',
      timeZone: TIMEZONE,
    }),
    day: dateObj.getDate(),
    dayOfWeek: dateObj.toLocaleString('default', {
      weekday: 'short',
      timeZone: TIMEZONE,
    }),
  };
}

/**
 * Check if an event is upcoming (in the future)
 */
export function isUpcomingEvent(dateString: string): boolean {
  return new Date() < new Date(dateString);
}
