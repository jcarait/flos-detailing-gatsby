import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// OK
export function Dino() {
  // Local variables are fine
  const width = 60
  return (
    <StaticImage
      src="../favicon.png"
      width={width}
      alt="an icon logo in the shape of a shield"
    />
  )
}

export default function GatsbyContentfulLogo() {
  return <Dino />
}
