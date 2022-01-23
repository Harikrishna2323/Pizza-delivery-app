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
        stripeKey="pk_test_51KLB1HCLrFCRNjj7tFF1NNG7mfmdCMvKOB5wsFQty1xTpB4xMsTgyq8z28KHxhN0mkf1zw7IfZnnNUJzLjJtSgXn009fHKwIZa"
        currency="USD"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
