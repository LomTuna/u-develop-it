const mysql = require('mysql2');
const { application } = require('express');
const express = require('express'); 
const req = require('express/lib/request');
const res = require('express/lib/response');
const PORT = process.env.PORT || 3001;
const app = express();
//Express middleware 
app.use(express.urlencoded({extended: false})); 
app.use(express.json()); 

//Connects to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    //mySQL Username
    user: 'root',
    password: 'Ballinger15', 
    database: 'election'
  },
  console.log('Connected to the election database.')
);

db.query('SELECT * FROM candidates', (err, rows) =>{
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});