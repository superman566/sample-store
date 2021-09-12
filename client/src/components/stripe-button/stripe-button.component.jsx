import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from "react-redux";
import {removeAllItemsFromCart} from "../../redux/cart/cart.actions";
import axios from "axios";
import {response} from "express";

const StripeCheckoutButton = ({price, removeAll}) => {
  const priceForStripe = price * 100;
  const PublishableKey = 'pk_test_51JIMwhK0H8OYdELC408hJulRTEVo7Oh1opAxjEfqAV9Y6PXcmQ8gApOqFqHTp7afKqc0sASIFq2W2I8KMSj8BtHB00EMVf8Jci';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successfully!');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment!')
    })
    removeAll();
    console.log(token);

  };

  return (
    <StripeCheckout
      stripeKey={PublishableKey}
      label={'Pay Now'}
      name={'Sample Store'}
      billingAddress
      shippingAddress
      image='https://stripe.com/img/documentation/checkout/marketplace.png'
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel={'Pay Now'}
      token={onToken}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  removeAll: ()=> dispatch(removeAllItemsFromCart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
