import { t } from "@lingui/macro";
import { Image as ChakraImage } from '@chakra-ui/react'

// Not functional: https://github.com/chakra-ui/chakra-ui/discussions/2475
export const Image = (props) => {
  const { src, alt, ...rest } = props
  return (
    <ChakraImage src={src} alt={alt} {...rest} loading='lazy'></ChakraImage>
  )
}
