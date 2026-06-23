export const config = {
  apiKey: import.meta.env.VITE_API_KEY ?? "",
  mixPanelToken: import.meta.env.VITE_MIX_PANEL_TOKEN ?? "",
  enableReferralCheck: import.meta.env.VITE_ENABLE_REFERRAL_CHECK === "true",
} as const
