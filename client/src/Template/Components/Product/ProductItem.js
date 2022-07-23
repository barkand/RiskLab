import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

export default function ProductItem({ product }) {
  return (
    <>
      <Card sx={{ Width: 503 }}>
        <CardActionArea>
          <Link to={product.link}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </>
  );
}
