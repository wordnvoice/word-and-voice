export type AnalyticsEvent =
  | "music_page_view"
  | "youtube_video_click"
  | "youtube_playlist_click"
  | "book_page_view"
  | "book_purchase_click"
  | "support_page_view"
  | "donation_click";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEvent,
  eventParams?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, eventParams);
}