import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
function CollectionPage({
    data:{
        wpCollection:{
            collectionFields : collection,
            typeCollections : {nodes:typeCollections}
        }
    }
}) {
  const image = getImage(collection.billboard.localFile)
  const picture1 = getImage(collection.picture1.localFile)
  const picture2 = getImage(collection.picture2.localFile)
  const picture3 = getImage(collection.picture3.localFile)
  return (
    <Layout>
    <section >
        <article>
          <h1>
            {collection.collectionName}
          </h1>
          <div>
            {typeCollections.map((role, i) => (
              <span>
                {role.name} {i + 1 < typeCollections.length && "- "}
              </span>
            ))}
          </div>
          <p>
            <span >Curator:</span> {collection.curator}
          </p>
          <p>
            <span >ConstructionYear:</span> {collection.constructionYear}
          </p>
          <p>
            <span >ExhibitionCapacity:</span> {collection.exhibitionCapacity}
          </p>
          <p>
            <span >ExhibitionFloor:</span> {collection.exhibitionFloor}
          </p>
          <p>
            <span >TicketPrice:</span> {collection.ticketPrice}£
          </p>
          <p>
            <span >Address:</span> {collection.address}
          </p>
        </article>
        <GatsbyImage
          image={image}
          alt={collection.billboard.altText}
        />
      </section>
      <section >
       {picture1 && (
          <GatsbyImage
            image={picture1}
            alt={collection.picture1.altText}
          />
        )}
        {picture2 && (
          <GatsbyImage
            image={picture2}
            alt={collection.picture2.altText}
          />
        )}
        {picture3 && (
          <GatsbyImage
            image={picture3}
            alt={collection.picture3.altText}
          />
        )}
      </section>
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