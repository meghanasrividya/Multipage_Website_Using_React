// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

const products = [
  { id: 1, name: "Product A", price: "$20" },
  { id: 2, name: "Product B", price: "$30" },
];

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      {products.map((product) => (
        <Card key={product.id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography>{product.price}</Typography>
            <Button component={Link} to={`/product/${product.id}`} variant="contained">
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Home;
