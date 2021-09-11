import React from 'react';

import {
  useSelector,
  useDispatch
} from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useHistory } from 'react-router-dom';

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import '../../redux/cart/cart.reducer';
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
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
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  )
}

export default CartDropdown;
