import React from 'react'

import PostItem from '../PostItem'

const Hit = ({ hit }) => (
    <PostItem
        slug={hit.fields.slug}
        color={hit.color}
        category={hit.category}
        date={hit.date}
        timeToRead={hit.timeToRead}
        title={hit.title}
        description={hit.description}/>
)

export default Hit