import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer
} from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}})=> (
  <CartItemContainer>
    <img
      src={imageUrl}
      alt={name}
    />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span >{quantity} * {price}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
