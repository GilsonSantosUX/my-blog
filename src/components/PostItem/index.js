import React from "react"
import PropTypes from 'prop-types'

import * as S from "./styled"


const PostItem = ({
    slug,
    color,
    category,
    date,
    timeToRead,
    title,
    description
}) => (
    <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag bg={color}>{category}}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>
        <S.PostItemTitle>
          {title}
        </S.PostItemTitle>
        <S.PostItemDescription>
          {description}
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.prototype = {
    slug: PropTypes.string.isRequired,
    color: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default PostItem