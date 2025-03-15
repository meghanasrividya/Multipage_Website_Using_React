import { useParams } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import '../App.css'; // Import the CSS

const products = [
  { id: 1, name: "Elegant Chair", price: "$150" },
  { id: 2, name: "Modern Lamp", price: "$75" },
  { id: 3, name: "Wooden Desk", price: "$250" },
  { id: 4, name: "Leather Sofa", price: "$500" },
  { id: 5, name: "Stylish Bed Frame", price: "$350" },
  { id: 6, name: "Dining Table", price: "$400" },
  { id: 7, name: "Bookshelf", price: "$200" },
  { id: 8, name: "Coffee Table", price: "$120" },
  { id: 9, name: "Office Chair", price: "$180" },
  { id: 10, name: "Bedside Table", price: "$80" },
  ];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h6">{product.price}</Typography>
        <Typography>{product.description}</Typography>
        <Button variant="contained" onClick={() => addToCart(product)} className="card-button">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;