# gatsby-theme-plone [![Build Status](https://travis-ci.org/collective/gatsby-theme-plone.svg?branch=master)](https://travis-ci.org/collective/gatsby-theme-plone)

Gatsby theme for Plone

## Install

```bash
npm install gatsby-theme-plone --save
```

# Introduction

Gatsby-theme-plone is plugin for Plone cms for creating website.

# Get Started

- Install gatsby, gatsby-theme-plone, react, react-dom

```bash
npm install --dev gatsby git+https://github.com/collective/gatsby-theme-plone
```

- Create gatsby-config.js and set your config file as shown below

```javascript
module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-plone",
      options: {
        baseUrl: 'https://plonedemo.kitconcept.com/de',
      }
    }
  ]
};
```

- And this is it just run

```bash
npm run gatsby develop
```

- You should see a plone website at localhost:8000

# Doing component shadowing

component shadowing is a process in which we shadow a component provided by themes with the new ones. Basically component shadowing is a process in which we overwrite the content which theme provided by default.

* Install react and react-dom

- steps for doing component shadowing
  1. Create src/gatsby-theme-plone/components folder
  1. Put the component which you want to overwrite

* If you want to learn more about gatsby-theme go to this [url](https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/)

* currently we are using https://plonedemo.kitconcept.com/en as base url.
* for any question please open a issue.

# How to pass a Custom Url for generating site.
Note: This is not available in npm module right now.

You can pass the custom url by passing the baseUrl property in options object during configuration of gatsby-theme-plone. 

```bash
module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-plone",
      options: {
        baseUrl: 'https://plonedemo.kitconcept.com/de',
      }
    }
  ]
};
```
You can also pass a custom url with token for accessing the private scope data.
```bash
module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-plone",
      options: {
        baseUrl: 'http://localhost:8000/Plone/',
        token: 'wejfklsadjflaskdfja',
    }
  ]
};
```