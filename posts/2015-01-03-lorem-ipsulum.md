---
date: 2015-02-05 01:44:00
title: Lorem
description: Testando o mardwon para post.
category: Misc
color: "#440088"
---

# Lorem ipsum

Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, [adipiscing](http://google.com) eu pulvinar vel, sodales vitae dui. :thumbsup: :smile: :sparkler:

![Desert_Image](/assets/img/desert.jpg)


```jsx

import React from "react"
import PropTypes from "prop-types"
import Profile from '../Profile'
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle  from '../../styles/global.js'
import * as S from './styled'
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

const Layout = ({ children }) => {
  return (
    <S.LayoutWarpper>
      <GlobalStyle />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar/>
    </S.LayoutWarpper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

```


## Fusce a metus eu

Pellentesque `sed` sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

> Proin ornare ligula eu tellus tempus elementum. Aenean bibendum iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Ut vel arcu ac tortor adipiscing hendrerit vel sed massa. Fusce sem libero, lacinia vulputate interdum non, porttitor non quam. Aliquam sed felis ligula. Duis non nulla magna.
Nullam eros mi, mollis in sollicitudin non, tincidunt sed enim. Sed et felis metus, rhoncus ornare nibh. Ut at magna leo. Suspendisse egestas est ac dolor imperdiet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, erat sit amet venenatis luctus, augue libero ultrices quam, ut congue nisi risus eu purus. Cras semper consectetur elementum.

### Cras semper consectetur elementum

![Ocean_Image](/assets/img/ocean.jpg)

Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, bibendum eu pulvinar vel, sodales vitae dui. Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

#### Proin suscipit luctus

Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.

- Lorem
- Ipsum
- Dolor
- Sit
- amet

#### Sed enim mi

Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, bibendum eu pulvinar vel, sodales vitae dui. Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum.