import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  HomepageImage,
  HomepageLink,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

export interface HeroProps {
  image?: HomepageImage
  kicker?: string
  h1: string
  subhead: string
  text: string
  links: HomepageLink[]
}

export default function Hero(props: HeroProps) {
  return (
    <Section>
      <Container width="wide">
        <Flex variant="center">
          {props.image && (
            <GatsbyImage
              alt={props.image.alt}
              image={getImage(props.image.gatsbyImageData)}
            />
          )}
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    h1: heading
    subhead
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
