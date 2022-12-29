import React from 'react'
import { graphql} from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Collection from '../../components/collection'
import {collectionheader,collectiondescription,exhibitiontitle,exhibitionimage,exhibitioncontainer} from '../page.module.css'
export const collections = ({
  data:{
    allWpCollection:{edges},
    wpPage:{exihibtions},
  }
}) => {
  const image = getImage(exihibtions.billboard.localFile)
  return (
 
    <Layout>
      <div className={exhibitioncontainer}>
      <GatsbyImage image={image} alt={exihibtions.billboard.altText} className={exhibitionimage}/>
      
        <div
        className={collectiondescription}
          dangerouslySetInnerHTML={{
            __html: exihibtions.description,
          }}
        />
        <h2 className={exhibitiontitle}>{exihibtions.title}</h2>
        <div className={collectionheader}>
          {edges.map(({ node: collection }) => (
            <Collection key={collection.id} slug={collection.slug} collection={collection} />
          ))}
        </div>
   
      </div>
    </Layout>
   
  )
}
export const query = graphql`
  query {
    wpPage(slug: {eq: "museum-collections"}) {
      exihibtions {
        description
        title
        fieldGroupName
        billboard {
          localFile {
            childImageSharp {
              gatsbyImageData( placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
    allWpCollection {
      edges {
        node {
          collectionFields {
            fieldGroupName
            collectionName
            address
            constructionYear
            curator
            exhibitionCapacity
            exhibitionFloor
            billboard {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                }
              }
              altText
             
            }
          }
          slug
          id
        }
      }
    }
  }
`
export default collections;