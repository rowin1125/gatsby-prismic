import React from 'react'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import footerStyles from './footer.module.scss'

export default () => {
  const { author } = useSiteMetadata()
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {author} © 2019</p>
    </footer>
  )
}
