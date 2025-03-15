import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";
import "../App.css"; // Import the CSS

const products = [
  { id: 1, name: "Elegant Chair", price: "$150", image: "images/elegant-chair.jpg" },
  { id: 2, name: "Modern Lamp", price: "$75", image: "images/modern-lamp.jpg" },
  { id: 3, name: "Wooden Desk", price: "$250", image: "images/wooden-desk.jpg" },
  { id: 4, name: "Leather Sofa", price: "$500", image: "images/leather-sofa.jpg" },
  { id: 5, name: "Stylish Bed Frame", price: "$350", image: "images/stylish-bed-frame.jpg" },
  { id: 6, name: "Dining Table", price: "$400", image: "images/dining-table.jpg" },
  { id: 7, name: "Bookshelf", price: "$200", image: "images/bookshelf.jpg" },
  { id: 8, name: "Coffee Table", price: "$120", image: "images/coffee-table.jpg" },
  { id: 9, name: "Office Chair", price: "$180", image: "images/office-chair.jpg" },
  { id: 10, name: "Bedside Table", price: "$80", image: "images/bedside-table.jpg" },
];

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <div className="product-grid">
        {products.map((product) => (
          <Card key={product.id} className="card">
            <img src={product.image} alt={product.name} className="product-image" />
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography>{product.price}</Typography>
              <Button component={Link} to={`/product/${product.id}`} variant="contained" className="card-button">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
