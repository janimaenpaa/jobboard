import { addons } from "@storybook/addons"
import { addParameters } from "@storybook/react" // or any other type of storybook

addParameters({
  darkMode: {
    darkClass: "lights-out",
    lightClass: "lights-on",
  },
})