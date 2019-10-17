// Start up point for the client side application

// this is the bootup place for our app in the browser
// treat it like a normal react startup location

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

ReactDOM.hydrate(<Home />, document.querySelector('#root'));  // application has already been rendered once in the server so we want to render this into the same div as the div on the server   we are not replacing we are just setting all the necessary event handlers to bind