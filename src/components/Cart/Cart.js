import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
const Cart = (props) => {
  const {cart, removeFromCart} = props;
  console.log(cart);
  const totalPrice = cart.reduce( (sum, pd) => sum + pd.price, 0);
  const cartColor = cart.length ? "secondary" : "";  

  return (
    <div style={{border: '2px solid cyan', marginLeft:'70%'}}>

      <h5>This is Cart: 
          <IconButton aria-label="cart"  color={cartColor}>
            <StyledBadge badgeContent={cart.length}  color="primary">
                <ShoppingCartIcon /> 
            </StyledBadge>
          </IconButton>
      </h5>
      <h5>Total Price: $ {totalPrice}</h5>
      <ul>
        {
          cart.map(pd =>
             <li key={pd.cartId}>{pd.name}  
             <button style={{backgroundColor:"red"}} onClick={()=> removeFromCart(pd.cartId)}> X </button>
             </li>)
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart    
  }
}

const mapDispatchToProps = {
  removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
