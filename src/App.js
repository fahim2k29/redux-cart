import { connect } from 'react-redux';
import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import { removeFromCart } from './redux/actions/cartAction';

function App(props) {
  const {cart} = props;
  return (
    <div>
     {cart.length===0 ? "" : <Cart> </Cart>}
      <Shop></Shop>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      cart: state.cart
    }
}

const mapDispatchToProps = {
  removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
