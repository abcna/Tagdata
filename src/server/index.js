const express = require('express');
const mongoose = require('mongoose');
const FormData = require('./models/FormData');
const app = express();

mongoose.connect('mongodb://localhost:27017/businesscards', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Endpoint برای ذخیره داده‌های فرم
app.post('/api/formdata', (req, res) => {
  const formData = new FormData(req.body);
  formData.save()
    .then(() => {
      console.log('Form data saved:', formData);
      res.status(201).send(formData);
    })
    .catch(err => res.status(400).send(err));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});