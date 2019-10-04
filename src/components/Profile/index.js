import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
   const {
     site: {
      siteMetadata: {
        author,
        profissao,
        description
      }
    }
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          profissao
        }
      }
    }
    `)

    return (
      <S.ProfileWrapper>
        <Avatar />
        <S.ProfileLink>
          <S.ProfileAuthor>{ author }</S.ProfileAuthor>
          <S.ProfileProfissao>{ profissao }</S.ProfileProfissao>
          <S.ProfileDescription>{ description }</S.ProfileDescription>
        </S.ProfileLink>
      </S.ProfileWrapper>
    )
}


// Usando componente do gatsby
// const Profile = () => (
//   <StaticQuery 
//   query={
//     graphql`
//       query MySiteMetadata {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             profissao
//           }
//         }
//       }
//     `}
//   render={({site : { siteMetadata : {author, profissao, description },}})=>(
//     <div className="profile-wrapper">
//         <h1>{ author }</h1>
//         <h2>{profissao}</h2>
//         <p>{description}</p>
//         </div>
//     )}
//   >
//   </StaticQuery>
//   )

export default Profile