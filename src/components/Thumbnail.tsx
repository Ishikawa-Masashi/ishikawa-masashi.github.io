import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import useThumbnailImage from '../hooks/useThumbnailImage'

type Props = {
  filename: string
  alt: string
}

const Thumbnail = ({ filename, alt }: Props) => {
  const fluidImage = useThumbnailImage(filename)
  return fluidImage ? <GatsbyImage alt={alt} image={fluidImage} /> : <></>
}

export default Thumbnail
