// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Product A", price: "$20", description: "This is Product A" },
  { id: 2, name: "Product B", price: "$30", description: "This is Product B" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  return (
    <Card style={{ margin: "20px", padding: "20px" }}>
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h6">{product.price}</Typography>
        <Typography>{product.description}</Typography>
        <Button variant="contained" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
