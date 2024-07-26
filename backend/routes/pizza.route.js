import express from 'express';
import pizzaModel from '../models/pizza.model.js';

const router = express.Router();

router.get('/pizzas', async (req, res) => { // Correct parameter order
  try {
    const data = await pizzaModel.find();
    res.status(200).json(data);
  } catch (err) { // Receive the error object
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});

export default router;
