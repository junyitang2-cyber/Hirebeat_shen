import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const stripePromise = loadStripe('pk_test_51MeV74FbNTGaIf1Z315ReJ41QcUrNeGkknXOdfljWDRQV6zIfFLjqwS4nGQTWp56JF57Zsg5b4yJmDC8FtkhVRfq00USVRMSSp');

  return (
    <section className="checkout-wrapper">
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </section>
  )
}

export default Checkout
