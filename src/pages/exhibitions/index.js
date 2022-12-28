import React from 'react'
import { graphql} from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Collection from '../../components/collection'

export const collections = ({
  data:{
    allWpCollection:{edges},
    wpPage:{exihibtions},
  }
}) => {
  const image = getImage(exihibtions.billboard.localFile)
  return (
 
    <Layout>
      <GatsbyImage image={image} alt={exihibtions.billboard.altText}/>
      
      <section>
      <h2>{exihibtions.title}</h2>
        <div
        
          dangerouslySetInnerHTML={{
            __html: exihibtions.description,
          }}
        />
        <div>
          {edges.map(({ node: collection }) => (
            <Collection key={collection.id} slug={collection.slug} collection={collection} />
          ))}
        </div>
      </section>
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