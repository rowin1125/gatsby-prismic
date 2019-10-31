import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Head from '../components/Head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="Page not Found" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
