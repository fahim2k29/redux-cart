import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "150px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 201,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const Product = (props) => {
  const { addToCart, product } = props;
  const classes = useStyles();

  return (
    // <div style={{border:'1px solid pink'}}>
    //     <h5>{product.name}</h5>
    //     <p>${product.price}</p>
    //     <button onClick={()=>addToCart(product.id, product.name, product.price)}>Add to cart</button>
    // </div>
    <div style={{ float: "left", margin: "20px" }}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {product.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              ${product.price}
            </Typography>
          </CardContent>
          <Button
            onClick={() => addToCart(product.id, product.name, product.price)}
            variant="contained"
            size="small"
            color="primary"
            style={{ width: "80%" }}
          >
            Add to cart
          </Button>
        </div>
        <CardMedia
          className={classes.cover}
          image={product.picture}
          title="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default Product;
