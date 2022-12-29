import React from 'react'
import { Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import Card from '@mui/material/Card';
import {billboardimage,collectionlink,collectionheader} from './collection.module.css'


export const Collection = ({collection, slug}) => {
    const profile = getImage(collection.collectionFields.billboard.localFile)
  return (
   <div className={collectionheader}>
    <Link to={slug} className={collectionlink}>
      <GatsbyImage
      className={billboardimage}
        image={profile}
        alt={collection.collectionFields.billboard.altText}
      />
      <p>
      {collection.collectionFields.collectionName}
      </p>
    </Link>
    </div>
  )
}

export default Collection;