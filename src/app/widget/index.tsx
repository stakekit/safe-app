"use client";

import "@stakekit/widget/style.css";
import { SKApp, lightTheme } from "@stakekit/widget";
import { config } from "../../config";
import { tracking } from "../tracking";

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      isSafe
      theme={lightTheme}
      tracking={tracking}
      referralCheck={config.enableReferralCheck}
    />
  );
};
