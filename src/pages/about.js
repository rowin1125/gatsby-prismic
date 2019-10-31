import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const about = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        About me <Link to="/contact"></Link>
      </p>
    </Layout>
  )
}

export default about
