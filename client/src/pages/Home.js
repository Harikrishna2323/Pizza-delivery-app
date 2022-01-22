import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../redux/actions/pizzaActions";

const Home = () => {
  const { pizzas, error, loading } = useSelector(
    (state) => state.getAllPizzasReducer
  );
  const dispatch = useDispatch();
  console.log(pizzas);

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div className="homepage">
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <h1>
            <Loading />
          </h1>
        ) : error ? (
          <h1>
            <Error error="Something went wrong." />
          </h1>
        ) : (
          pizzas.map((pizza) => (
            <div className="col-md-3 m-3" key={pizza._id}>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
