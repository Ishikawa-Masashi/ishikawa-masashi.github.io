import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import useThumbnailImage from '../hooks/useThumbnailImage'

type Props = {
  filename: string
  alt: string
}

export const Image = ({ filename, alt }: Props) => {
  const fluidImage = useThumbnailImage(filename)
  return fluidImage ? <GatsbyImage className="max-h-40" alt={alt} image={fluidImage} /> : null
}
