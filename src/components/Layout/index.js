import React from "react"
import PropTypes from "prop-types"
import Profile from '../Profile'
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle  from '../../styles/global.js'
import * as S from './styled'
import Sidebar from "../Sidebar"

const Layout = ({ children }) => {
  return (
    <S.LayoutWarpper>
      <GlobalStyle />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWarpper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
