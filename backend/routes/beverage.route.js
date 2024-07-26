import express from 'express';
import beverageModel from '../models/beverage.model.js';

const router = express.Router();

router.get('/beverages', async (req, res) => { // Correct parameter order
  try {
    const data = await beverageModel.find();
    res.status(200).json(data);
  } catch (err) { // Receive the error object
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});

export default router;
