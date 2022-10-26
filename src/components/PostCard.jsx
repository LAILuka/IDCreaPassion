import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API_URL } from '../config';
import { Link } from 'react-router-dom';

export default function PostCard({post}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {post.attributes.image !== null ? API_URL + post.attributes.image.data[0].attributes.formats.small.url : "..."}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.attributes.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.attributes.content.substring(0,150)} ...
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={"/post/"+ post.id}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
