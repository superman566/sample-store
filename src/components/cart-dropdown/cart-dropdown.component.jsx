import React from 'react';

import {connect} from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from 'react-router-dom';

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import '../../redux/cart/cart.reducer';

import './cart-dropdown.styles.scss';
import {createStructuredSelector} from "reselect";

import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
  <div
    className={'cart-dropdown'}
  >
    <div className={'cart-items'}>
      {
        cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
          />
        )) : (
          <span className={'empty-message'}>Your cart is empty</span>
          )
      }
    </div>
    <CustomButton onClick={()=> {
      toggleCartHidden();
      history.push('/checkout');
    }}>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch =>({
  toggleCartHidden: ()=> dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
