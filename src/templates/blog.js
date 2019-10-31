import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Local md file system

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      published(formatString: "do MMMM YYYY")
      body {
        json
      }
    }
  }
`

export default ({
  data: {
    contentfulBlogPost: {
      title,
      published,
      body: { json },
    },
  },
}) => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img src={url} alt={alt} />
      },
    },
  }
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{published}</p>
      {documentToReactComponents(json, options)}
    </Layout>
  )
}
