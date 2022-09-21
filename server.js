const express = require ('express');
const routes = require('./routes/flight'); // import the routes
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const app = express();

app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to db");
  });
app.use('/api', routes); //to use the routes

const listener = app.listen(port, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
