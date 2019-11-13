import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
    width:3.75rem;
    height:100vh;
    border-left:1px solid var(--borders);
    background:var(--mediumBackground);
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
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 1.75rem;
  padding: 1.1rem;
  position: relative;
  width: 1.75rem;

  &.light {
    color: #d4d400;
    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }
`