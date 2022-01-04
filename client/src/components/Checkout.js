import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../redux/actions/orderActions";
import Error from "./Error";
import Success from "./Success";
import Loading from "./Loading";

const Checkout = ({ subtotal }) => {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  };
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Order placed Successfully." />}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51KDsNrSDTGo88MGhm16leYKrZvMFMKHwE2qEd45AhAPOi8n1BEbN9q8iEbPv8TRgsEcS3tuCSYTETeiaPdRfxFNc009hq39WYe"
        currency="INR"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
