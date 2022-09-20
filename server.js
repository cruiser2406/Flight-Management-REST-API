const express = require ('express');
const routes = require('./routes/flight'); // import the routes
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://john:john@cluster0.kwqmn8j.mongodb.net/flight?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to db");
  });
app.use('/api', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
