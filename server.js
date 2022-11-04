const express = require('express');
const connectDb = require('./config/db');

const app = express();

//connect database
connectDb();

//to accept body data
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to Contacts App API...' }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
