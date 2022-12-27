import React from 'react'
import { Link} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Collection = ({collection, slug}) => {
    const profile = getImage(collection.collectionFields.billboard.localFile)
  return (
    
    <Link to={slug}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <GatsbyImage
        image={profile}
        alt={collection.collectionFields.billboard.altText}
      />
      
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {collection.collectionFields.collectionName}
        </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  
  )
}

export default Collection;