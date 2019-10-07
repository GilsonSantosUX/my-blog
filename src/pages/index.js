import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from "../components/PostItem"

const IndexPage = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
        query PostItem {
            allMarkdownRemark {
                edges {
                node {
                    id
                    frontmatter {
                    title
                    date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                    description
                    category
                    color
                    }
                    timeToRead
                }
                }
            }
        }`)

    const postList = allMarkdownRemark.edges
    return (
    <Layout>
        <SEO title="Home" />
        {postList.map((
            {node: {
                frontmatter: { title, date, description, category, color},
                timeToRead
            }}) => (
                 <PostItem
                    slug="/slug"
                    color={color}
                    title={title}
                    category={category}
                    date={date}
                    timeToRead={timeToRead}
                    description={description}
                />
            ))}
    </Layout>
    )
}

export default IndexPage
