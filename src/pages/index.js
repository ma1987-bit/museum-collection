import * as React from "react"
import { Link ,graphql} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Button from '@mui/material/Button';





const IndexPage = ({data:{wpPage: {homeFields}}}) => {
  const image = getImage(homeFields.picture.localFile)
  return (
  <Layout>
     <h1>{homeFields.title}</h1>
     <GatsbyImage
            image={image}
            alt={homeFields.picture.altText}
          />     <div dangerouslySetInnerHTML={{
              __html: homeFields.description,
          }}/>
         <Button target="__blank" variant="contained" href={homeFields.callToAction.url}>{homeFields.callToAction.title}</Button>
  </Layout>
  )
}


export default IndexPage

 export const query = graphql `
query{
  wpPage(slug: {eq: "home"}) {
    homeFields {
      featuredCollections {
        ... on WpCollection {
          id
          slug
          collectionFields {
            collectionName
            constructionYear
            curator
            exhibitionCapacity
            exhibitionFloor
            billboard {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
      callToAction {
        title
        url
      }
      title
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      description
    }
  }
}

`