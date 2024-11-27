import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://f57fb2def783c513311adefd2e780817@o673219.ingest.us.sentry.io/4508369701109760",
  debug: true,
  tracesSampleRate: 1.0, // Capture 100% of the transactions
});
