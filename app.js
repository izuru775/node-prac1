const express = require('express'); // Import the express module
const app = express(); // Create an instance of express
const port = 3000; // Define the port number
const router = express.Router(); // Create a new router object

// Serve static files
const path = require('path'); // Import the path module
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.use('/test', router); // Use the router for routes starting with '/test'

// Define a route to add two numbers
router.get('/add', (req, res) => {
    let num1 = parseInt(req.query.num1); // Parse the first number from the query string
    let num2 = parseInt(req.query.num2); // Parse the second number from the query string
    let sum = num1 + num2; // Calculate the sum of the two numbers
    res.redirect(`/result?sum=${sum}`); // Redirect to the result page with the sum as a query parameter
});

// Define a route to serve the home page
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html')); // Send the index.html file as the response
});

// Define a route to handle form submissions
router.get('/submit', (req, res) => {
    console.log(req.query.firstName); // Log the first name from the query string
    res.send(`<h1>Hi ${req.query.firstName} ${req.query.lastName}!. your request submitted.</h1>`); // Send a response with a greeting message
});

// Define a route to handle dynamic name parameter
router.get('/:name', (req, res) => {
    let name = req.params.name; // Extract the name parameter from the request URL
    console.log(name); // Log the name to the console
    res.status(400).send(`<h1>${name}</h1>`); // Send a response with the name in an h1 tag and set the status to 400
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // Log a message when the server starts
});
