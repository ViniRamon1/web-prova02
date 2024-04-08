const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://viniciusramonn007:MGpfNkDEEqveSBtK@foods.koaqfes.mongodb.net/food_inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Food Schema
const foodSchema = new mongoose.Schema({
  name: String,
  category: String,
  quantity: Number,
  expirationDate: Date,
  price: Number
});

const Food = mongoose.model('Food', foodSchema);

// Routes
app.get('/api/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/foods/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.json(food);
  } catch (err) {
    res.status(404).json({ message: 'Food not found' });
  }
});

app.post('/api/foods', async (req, res) => {
  const food = new Food({
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity,
    expirationDate: req.body.expirationDate,
    price: req.body.price
  });

  try {
    const newFood = await food.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put('/api/foods/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (req.body.name) food.name = req.body.name;
    if (req.body.category) food.category = req.body.category;
    if (req.body.quantity) food.quantity = req.body.quantity;
    if (req.body.expirationDate) food.expirationDate = req.body.expirationDate;
    if (req.body.price) food.price = req.body.price;

    const updatedFood = await food.save();
    res.json(updatedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/api/foods/:id', async (req, res) => {
  try {
    await Food.findByIdAndRemove(req.params.id);
    res.json({ message: 'Food deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
