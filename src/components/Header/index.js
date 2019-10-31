import React from "react"
import { Link } from "gatsby"
import headerStyles from "./heading.module.scss"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export default () => {
  const { title } = useSiteMetadata()
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeItem}
              to="/"
            >
              Homes
            </Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.activeItem} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.activeItem} to="/blog">
              Blogs
            </Link>
          </li>
          <li>
            <Link activeClassName={headerStyles.activeItem} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
