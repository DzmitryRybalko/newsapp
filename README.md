# README #

This README would normally document whatever steps are necessary to get your application up and running.

## Requirements
* [node](https://nodejs.org/) `^4.5.0`

## Getting Started

First, clone the project:

```bash
$ git clone https://bitbucket.org/MessierM1/newsapp.git <project-name>
$ cd <project-name>
```

Then install dependencies and check to see it works:

```bash
$ npm install
$ npm start
```

If everything works, you can see application at 8080 port in your [browser](http://localhost:8080/)

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
