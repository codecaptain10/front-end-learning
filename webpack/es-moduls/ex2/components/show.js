//Modul with functions to show information about products
//import productInfo
import productInfo from "./products.js";



export const showInfoInConsole = (info) => {
    console.log(info);
}

export const showInfoInDOM = (info, tag = productInfo.htmlElement) => {
    const element = document.createElement(tag);
    element.textContent = info;
    document.body.appendChild(element);
}