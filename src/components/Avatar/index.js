import React from 'react'
import { useStaticQuery , graphql } from 'gatsby'
import * as S from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query{
        avatarImage: file(relativePath: { eq: "gatsby-icon.png"}) {
          childImageSharp {
            fixed(width:60,height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        
      }
    `)

    return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
    
}

export default Avatar

// ,fluid(maxWidth: 60, maxHeight: 60) {
//   ...GatsbyImageSharpFluid_traceSVG
// }
// return <Img fluid={avatarImage.childImageSharp.fluid} />