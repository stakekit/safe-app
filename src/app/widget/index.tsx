import "@stakekit/widget/style.css"
import { lightTheme, SKApp } from "@stakekit/widget"
import { config } from "../../config"
import { tracking } from "../tracking"

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      isSafe
      theme={lightTheme}
      tracking={tracking}
      referralCheck={config.enableReferralCheck}
    />
  )
}
