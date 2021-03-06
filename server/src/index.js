// this is the root file for application 
// this is an express server
// Because we are now using webpack on the server we can use es2015 syntax on the server!
// BEFORE: 
// const express = require('express');
// const app = express();
// require react dom library to handle converting componenets to string to ship to browser
// const React = require('react');
// const renderToString = require('react-dom/Server').renderToString;
// const Home = require ('./client/components/Home').default;

// AFTER: 
import express from 'express';
import React from  'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();
// need to tell the world the public folder is publically available to the outside world
app.use(express.static('public'));

// route handlers
// route to listen to root route of app
// if anyone makes get request to root path run  this func
app.get ('/', (req, res) => {
    console.log('Request to root made!');
    //attempt to render as string
    const content = renderToString(<Home />); // to to config server to run JSX
    //tell the browser to sownload the public directory and stuff content into the HTML template
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div> 
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
    //send back
    res.send(html);
});


app.listen(3000, () => {
    console.log('Listening on Port 3000');
} )