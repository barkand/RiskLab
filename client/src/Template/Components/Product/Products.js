import React from "react";
import { Grid, Box } from "@mui/material";
import ProductItem from "./ProductItem";
import ProductList from "../../../Content/Static/ProductList";

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {ProductList.map((product) => (
          <Grid item xs={12} md={6} lg={4} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
