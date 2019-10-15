// this is the root file for application 
// this is an express server

const express = require('express');
const app = express();
// require react dom library to handle converting componenets to string to ship to browser
const React = require('react');
const renderToString = require('react-dom/Server').renderToString;
const Home = require ('./client/components/Home').default;

// route handlers
// route to listen to root route of app
// if anyone makes get request to root path run  this func
app.get ('/', (req, res) => {
    console.log('Request to root made!');
    //attempt to render as string
    const content = renderToString(<Home />); // to to config server to run JSX
    //send back
    res.send(content);
});


app.listen(3000, () => {
    console.log('Listening on Port 3000');
} )