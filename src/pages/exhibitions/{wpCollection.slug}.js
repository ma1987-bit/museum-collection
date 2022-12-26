import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
function CollectionPage({
    data:{
        wpCollection:{
            collectionFields : collection,
            typeCollections:{nodes:name},
        }
    }
}) {
  return (
    <Layout>
    <div>
    <h1>{collection.collectionName}</h1>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    wpCollection(slug: {eq: $slug}) {
      collectionFields {
        collectionName
        constructionYear
        curator
        exhibitionCapacity
        exhibitionFloor
        ticketPrice
        address
        billboard {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
        picture1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture2 {
          altText
          localFile {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture3 {
          altText
          localFile {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      typeCollections {
        nodes {
          name
        }
      }
    }
  }
`
export default CollectionPage