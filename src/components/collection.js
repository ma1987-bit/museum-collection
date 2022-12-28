import React from 'react'
import { Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import Card from '@mui/material/Card';
import {collectioncard,collectionname} from './collection.module.css'


export const Collection = ({collection, slug}) => {
    const profile = getImage(collection.collectionFields.billboard.localFile)
  return (
   
    <Link to={slug} className={collectioncard}>
      <GatsbyImage
        image={profile}
        alt={collection.collectionFields.billboard.altText}
      />
      <article>
      <p className={collectionname}>
      {collection.collectionFields.collectionName}
      </p>
      </article>
    </Link>
   
  )
}

export default Collection;