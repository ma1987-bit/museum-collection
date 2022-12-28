import * as React from 'react'
import { Link,useStaticQuery, graphql } from 'gatsby'
import Header from './header'


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
    <>
    <div>
      <Header/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
   
    </>
  )
}

export default Layout