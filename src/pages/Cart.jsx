import { useCart } from "../context/CartContext";
import { Button, Card, CardContent, Typography } from "@mui/material";
import '../App.css'; // Corrected Import Path

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Shopping Cart</Typography>
      {cart.map((product) => (
        <Card key={product.id} className="card">
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography>{product.price}</Typography>
            <Button variant="contained" color="secondary" onClick={() => removeFromCart(product.id)} className="card-button">
              Remove
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cart;