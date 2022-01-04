import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import Aos from "aos";
import "aos/dist/aos.css";

const Pizza = ({ pizza }) => {
  Aos.init();
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addItemToCart = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  return (
    <div data-aos="zoom-in" className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h4>{pizza.name}</h4>
        <img
          className="img-fluid"
          src={pizza.image}
          style={{ height: "200px", width: "200px" }}
          alt=""
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys(0)].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <p className="mt-1">
            Price: {pizza.prices[0][varient] * quantity} Rs/-
          </p>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addItemToCart}>
            Add to cart
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="img-fluid"
            src={pizza.image}
            alt="pizza"
            style={{ height: "400px" }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
