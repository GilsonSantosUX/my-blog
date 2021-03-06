import { Link } from 'gatsby'
import styled from 'styled-components'

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
    font-size:1.2rem;
    font-weight:300;
`

export const MenuLinksItem = styled.li`
    padding:.5rem 0;
    list-style:none;
    .active{
        color: var(--highlight);
    }
`
export const MenuLinksLink = styled(Link)`
    color:var(--texts);
    text-decoration:none;
    transition:color 0.5s;
    &:hover{
        color:var(--highlight);
    }
`

