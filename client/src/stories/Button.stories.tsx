import React from "react"
import { action } from "@storybook/addon-actions"
import Button from "../components/Button"
import ScheduleIcon from "@material-ui/icons/Schedule"

export default {
  component: Button,
  title: "Button",
}

export const button = () => (
  <Button onClick={action("button-click")}>PRESS THE BUTTON</Button>
)

export const ButtonWithIcon = () => (
  <Button onClick={action("button-click")}>
    <ScheduleIcon style={{ marginRight: "6px" }} /> PRESS THE BUTTON
  </Button>
)

export const ButtonWithStyleProps = () => (
  <Button onClick={action("button-click")} color="darkgrey" textColor="yellow">
    PRESS THE BUTTON
  </Button>
)
