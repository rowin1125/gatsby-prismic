import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import blogStyles from '../styles/blog.module.scss'
import Head from '../components/Head'

export default () => {
  const {
    allContentfulBlogPost: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: published, order: DESC }) {
        edges {
          node {
            title
            slug
            published(formatString: "do MMMM YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Post will be show up here later on</p>
      <ol className={blogStyles.posts}>
        {edges.map((blog, index) => {
          const {
            node: { published, slug, title },
          } = blog
          return (
            <li key={index}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <h5>{published}</h5>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
