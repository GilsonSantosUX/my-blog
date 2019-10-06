import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
    width:3.75rem;
    height:100vh;
    border-left:1px solid #38444d;
    background:#192734;
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-between;
    position:fixed;
    padding:.8rem 0;
    right:0;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 1.75rem;
  padding: 1.1rem;
  position: relative;
  width: 1.75rem;
  &:hover {
    color: #1fa1f2;
  }
`