# React Application Setup Guide

This project was manually set up from scratch, tailored for modern React development with custom configurations for Webpack and Babel.

## Prerequisites

Before you start, ensure you have Node.js and npm installed on your system. You can download them from [https://nodejs.org](https://nodejs.org).

## Setup Instructions

### Create the Project

1. **Create a new directory and navigate into it:**

   ````mkdir my-react-app
      cd my-react-app```

   ````

2. **Initialize a new Node.js project:**
   `npm init -y`

3. **Install React and ReactDOM:**
   `npm install react react-dom`

4. **Set up Babel for JSX and ES6+ support:**
   `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev`

5. **Configure Webpack for bundling JS and CSS:**
   `npm install webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader --save-dev`

6. **Create and configure webpack.config.js:**
   Include loaders for JavaScript and CSS, plugins for HTML output, and development server settings.

7. **Create and configure .babelrc:**
   Setup presets for React and modern JavaScript features.

8. **Setup your source directory and files:**
   src/index.js: Entry point for React.
   src/App.jsx: Main React component.
   src/App.css: Styles for your application.
