import React from 'react';

import {connect} from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from 'react-router-dom';

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import '../../redux/cart/cart.reducer';

import {createStructuredSelector} from "reselect";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer
} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
          />
        )) : (
          <EmptyMessageContainer>
            Your cart is empty
          </EmptyMessageContainer>
          )
      }
    </CartItemsContainer>
    <CustomButton onClick={()=> {
      toggleCartHidden();
      history.push('/checkout');
    }}>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch =>({
  toggleCartHidden: ()=> dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
