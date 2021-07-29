import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publlishableKey = 'pk_test_51JIMwhK0H8OYdELC408hJulRTEVo7Oh1opAxjEfqAV9Y6PXcmQ8gApOqFqHTp7afKqc0sASIFq2W2I8KMSj8BtHB00EMVf8Jci';

  const onToken = token => {
    console.log(token);
    alert('Payment Successfully!');
  };

  return (
    <StripeCheckout
      stripeKey={publlishableKey}
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
export default StripeCheckoutButton;
