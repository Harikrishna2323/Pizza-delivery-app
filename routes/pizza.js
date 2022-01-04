const express = require("express");
const router = express.Router();
const Pizza = require("../models/Pizza");

//GET ALL PIZZAs
router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//POST PIZZA
router.post("/addpizza", async (req, res) => {
  const { name, image, varients, description, category, prices } = req.body;

  try {
    const newpizza = new Pizza({
      name,
      image,
      varients,
      description,
      category,
      prices,
    });
    await newpizza.save();
    res.status(201).json(newpizza);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//GET PIZZA BY ID
router.post("/getpizzabyid", async (req, res) => {
  const pizzaid = req.body.pizzaid;

  try {
    const pizza = await Pizza.findOne({ _id: pizzaid });
    res.send(pizza);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//EDIT PIZZA
router.post("/editpizza", async (req, res) => {
  const editedpizza = req.body.editedpizza;

  try {
    const pizza = await Pizza.findOne({ _id: editedpizza._id });

    (pizza.name = editedpizza.name),
      (pizza.description = editedpizza.description),
      (pizza.image = editedpizza.image),
      (pizza.category = editedpizza.category),
      (pizza.prices = [editedpizza.prices]);

    await pizza.save();

    res.send("Pizza Details Edited successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//DELETE PIZZA
router.post("/deletepizza", async (req, res) => {
  const pizzaid = req.body.pizzaid;

  try {
    await Pizza.findOneAndDelete({ _id: pizzaid });
    res.send("Pizza Deleted successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
