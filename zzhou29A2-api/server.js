var express = require('express');
var cors = require('cors');
var dbcon = require('./crowdfunding_db');

// Initialize Express app
var app = express();

// Establish database connection using a custom method from dbcon
var connection = dbcon.getconnection();

// Use CORS middleware to allow cross-origin requests from any domain
app.use(cors());

// Fetches all active fundraisers with their corresponding category data.
app.get('/fundraisers', (req, res) => {
  connection.query('SELECT * FROM fundraiser f LEFT join category c ON f.CATEGORY_ID = c.CATEGORY_ID where active = 1', (err, records) => {
    if (err) {
      console.log("Query error");
    } else {
      res.send(records)
    }
  })
});

// Fetches all categories available in the database.
app.get('/categories', (req, res) => {
  connection.query('SELECT * FROM category', (err, records) => {
    if (err) {
      console.log("Query error");
    } else {
      res.send(records)
    }
  })
});

// Search fundraisers based on optional parameters (organizer, city, category).
app.get('/fundraisers/search', (req, res) => {
  // Fetch search parameters from the query string
  var organizer = req.query.organizer;
  var city = req.query.city;
  var category = req.query.category;

  // Start building the base query to search active fundraisers
  var query = 'SELECT * FROM fundraiser f LEFT join category c ON f.CATEGORY_ID = c.CATEGORY_ID where active = 1'
  var queryParams = [];

  if (organizer) {
    query += ' AND f.ORGANIZER LIKE ?';
    queryParams.push(`%${organizer}%`);
  }
  if (city) {
    query += ' AND f.CITY LIKE ?';
    queryParams.push(`%${city}%`);
  }
  if (category) {
    query += ' AND f.CATEGORY_ID = ?';
    queryParams.push(category);
  }

  connection.query(query, queryParams, (err, records) => {
    if (err) {
      console.log("Query error");
    } else {
      res.send(records)
    }
  })
});

// Fetch a specific fundraiser by its ID.
app.get('/fundraisers/:id', (req, res) => {
  var id = req.params.id
  connection.query('SELECT * FROM fundraiser f LEFT join category c ON f.CATEGORY_ID = c.CATEGORY_ID where FUNDRAISER_ID = ' + id, (err, records) => {
    if (err) {
      console.log("Query error");
    } else {
      res.send(records)
    }
  })
});

// Start the server and listen on port 8080
app.listen(8080, function() {
  console.log(`Crowdfunding app listening on port 8080`);
});
