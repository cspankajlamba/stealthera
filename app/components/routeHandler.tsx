import React from "react";
import Router from './routerwrapper';
import Home from '../pages/landing';
import About from '../pages/about';
import Contact from '../pages/contact';

const RouteHandler = () => {
    return (
        <main>
            <Router path="/" component={Home} />
            <Router path="/about" component={About} />
            <Router path="/contact" component={Contact} />
        </main>
    );
}

export default RouteHandler;