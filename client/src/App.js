import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Filter from "./components/Filter";
import Admin from "./pages/Admin";
import Userslist from "./pages/Userslist";
import Orderslist from "./pages/Orderslist";
import Pizzaslist from "./pages/Pizzaslist";
import Addpizza from "./pages/Addpizza";
import Editpizza from "./pages/Editpizza";
import AdminNav from "./pages/AdminNav";

function App() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
  return (
    <Router>
      <Navbar />
      {/* <Filter /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/orders" element={<Orders />} />

        {currentUser && currentUser.isAdmin && (
          <>
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/admin/userslist" element={<Userslist />} />
            <Route exact path="/admin/orderslist" element={<Orderslist />} />
            <Route exact path="/admin/pizzaslist" element={<Pizzaslist />} />
            <Route exact path="/admin/addpizza" element={<Addpizza />} />
            <Route
              exact
              path="/admin/editpizza/:pizzaid"
              element={<Editpizza />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
