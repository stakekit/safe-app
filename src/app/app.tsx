import { Box } from "../components/atoms/box"
import { Header } from "./header"
import { container, layoutContainer } from "./style.css"
import { Widget } from "./widget"
import { HelpModals } from "./widget/help-modals"

export const App = () => {
  return (
    <Box className={layoutContainer}>
      <Box className={container}>
        <Header />
        <Widget />
        <Box marginTop={{ tablet: "0", mobile: "8" }}>
          <HelpModals />
        </Box>
      </Box>
    </Box>
  )
}
