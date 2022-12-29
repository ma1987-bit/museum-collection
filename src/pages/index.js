import * as React from "react"
import { graphql} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Button from '@mui/material/Button';
import {homepicture,homedescripition,featuredtext,homebutton,featureddescription} from'./page.module.css'
import Collection from "../components/collection";




const IndexPage = ({data:{wpPage: {homeFields}}}) => {
  const image = getImage(homeFields.picture.localFile)
  return (
  <Layout>
  <section>
   
     <GatsbyImage
     className={homepicture}
            image={image}
            alt={homeFields.picture.altText}
          />     <div className={homedescripition} dangerouslySetInnerHTML={{
              __html: homeFields.description,
          }}/>
        
         <Button className={homebutton} target="__blank" variant="contained" href={homeFields.callToAction.url}>{homeFields.callToAction.title}</Button>
         </section>
         
      <h2 className={featuredtext}>Featured Collections</h2>
      <p className={featureddescription} >
      Anybody home?
      From December 17, 2022
Go in search of the sewer crocodile, listen to talking crockery, play board games or draw on the walls... In the playful new family exhibition 'Someone at home?' you will explore the MAS collection together. With the whole family  </p>
      <div >
        {homeFields.featuredCollections.map(collection => {
          return <Collection slug={`exhibitions/${collection.slug}`} key={collection.id} collection={collection} />
        })}
      </div>
  
        
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