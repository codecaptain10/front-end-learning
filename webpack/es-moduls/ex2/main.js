//Main module to import all modules
import {
    showInfoInConsole,
    showInfoInDOM
} from "./components/show.js";

import bike from './components/products.js';


showInfoInConsole('Information from console');
showInfoInDOM('Information from DOM', 'h1');
showInfoInDOM('Information from DOM without tag argument');

let bikePrice = `Bike price is: ${bike.price}`;
showInfoInDOM(bikePrice, 'h3');