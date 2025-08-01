import { loader } from "fumadocs-core/source"
import { icons } from "lucide-react"
import { createElement } from "react"
import { docs } from "../../.source"

export const source = loader({
  baseUrl: "/",
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons])
  },
  source: docs.toFumadocsSource(),
})
