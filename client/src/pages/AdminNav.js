import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="row justify-content-center p-3">
      <div className="col-md-10">
        <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

        <ul className="adminfunctions">
          <li>
            <Link to={"/admin/userslist"} style={{ color: "white" }}>
              Users List
            </Link>
          </li>
          <li>
            <Link to={"/admin/pizzaslist"} style={{ color: "white" }}>
              Pizzas List
            </Link>
          </li>
          <li>
            <Link to={"/admin/addpizza"} style={{ color: "white" }}>
              Add Pizza
            </Link>
          </li>
          <li>
            <Link to={"/admin/orderslist"} style={{ color: "white" }}>
              Orders List
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;
