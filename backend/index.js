import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import everydayRoute from './routes/everyday.route.js';
import pizzaRoute from './routes/pizza.route.js'
import beverageRoute from './routes/beverage.route.js'

const app = express();

app.use(cors())

mongoose.connect('mongodb+srv://root:root@cluster0.d2wlybb.mongodb.net/dominos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB', err));

app.use(express.json());

app.use('/api', everydayRoute);
app.use('/api', pizzaRoute);
app.use('/api', beverageRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
