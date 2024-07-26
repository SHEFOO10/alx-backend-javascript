const express = require('express');

const app = express();

const validateIdParam = (req, res, next) => {
  const id = req.params.id;
  if (!isNaN(parseInt(id, 10))) {
    next();
  } else {
    res.status(404).send(`Cannot GET /cart/${id}`);
  }
};

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', validateIdParam, (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
