import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <h3>Index</h3>
    <ul>
      {data.allMarkdownRemark.edges.map(post =>
        <li key={post.node.id}>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      )}
    </ul>
  </Layout>
)

// maybe add date to frontmatter { path, title, date }
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
