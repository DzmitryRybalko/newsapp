# README #

This README would normally document whatever steps are necessary to get your application up and running.

## Requirements
* [node](https://nodejs.org/) `^4.5.0`

## Getting Started

1. First, clone the project `git clone https://bitbucket.org/MessierM1/newsapp.git`

2. Then install dependencies `npm install`

3. And check to see it works `npm start`

4. If everything works, you should see application at localhost:8080 in your browser

## Application Structure
```
.
├── src                      # Application source code
│   ├── actions              # Redux actions
│   ├── components           # Global Reusable Presentational Components
|   |   ├── package.json     # Registry component
|   |   ├── component.js     # Component implemenation
|   |   └── component.scss   # Component styles
│   ├── constants            # Project constants
│   ├── images               # Project images
│   ├── reducers             # Reducer registry and injection
|   ├── shared               # Project libs and configs
│   └── client.js            # Application bootstrap and rendering
└── index.html               # Main HTML page container for app

```
