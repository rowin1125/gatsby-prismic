import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi im Rowin</h1>
      <h2>Frontend dev from Purmerend</h2>
      <p>
        Need a dev, <Link to="/contact">contact me</Link>
      </p>
    </Layout>
  )
}

export default index
