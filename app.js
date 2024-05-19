// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */


// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';

// Correcting the component name to "HeadingComponent"

const Str = "hello jee"
const HeadingComponent = () => (
  <div>
    {Str}
    <h1>Namaste React Bhai lo</h1>
    <h2>h2 Hello jee</h2>
  </div>
);

// Create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// Passing React element (component) inside root
root.render(<HeadingComponent />);
