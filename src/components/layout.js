import * as React from 'react'
import { Link,useStaticQuery, graphql } from 'gatsby'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql `
  query{
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  return (
    <div>
      
      <header><h1>{data.site.siteMetadata.title}</h1></header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/exhibitions">Collections</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout