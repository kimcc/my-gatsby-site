import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
// Import needed styles from css modules
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  // Use tagged template literal to make a graphql query and save to the data variable
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // Get the site's title by destructuring it from the graphql query
  // The title itself is taken from the gatsby-config.js file
  const { title } = data.site.siteMetadata;

  return (
    <div className={container}>
      <title>{pageTitle} | {title}</title>
      <header className={siteTitle}>{title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;