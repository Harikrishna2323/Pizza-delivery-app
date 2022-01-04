import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/userActions";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <Link to="/" className="navbar-brand">
        Pirate's Cove Pizza
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {currentUser ? (
            <Dropdown className="dropdown ml-5">
              <Dropdown.Toggle
                style={{ color: "black" }}
                type="button"
                id="dropdown-basic"
              >
                {currentUser.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {currentUser && currentUser.isAdmin && (
                  <Dropdown.Item>
                    <Link to="/admin">Dashboard</Link>
                  </Dropdown.Item>
                )}
                <Dropdown.Item>
                  <Link to="/orders">Orders</Link>
                </Dropdown.Item>

                <Dropdown.Item
                  className="dropdown-item"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  <li>Logout</li>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          )}

          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart {cartstate.cartItems.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
