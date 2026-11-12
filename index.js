const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to sequelize application' });
});

const Sequelize = require('sequelize');
const sequelize = new Sequelize("mysql://root:password@localhost:3306/sequelize_db")

sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});