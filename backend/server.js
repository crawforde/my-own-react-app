const express = require ('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MAKE BUILD FOLDER PUBLICLY AVAILABLE
app.use(express.static('build'));
app.use(bodyParser.json());
// mongoose
mongoose.connect(process.env.MONGODB_URI);

app.use('/db',dbRoutes);

app.listen(3000, () => {
  console.log('Sever for React Todo App listening on port 3000!')
});
