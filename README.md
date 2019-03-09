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
npm install gatsby
npm install gatsby-theme-plone
npm install react
npm install react-dom
```

- Create gatsby-config.js and set your config file as shown below

```javascript
module.exports = {
  pathPrefix: "/gatsby-theme-plone",
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-plone",
      options: {}
    }
  ]
};
```

- And this is it just run

```bash
gatsby develop
```

- You should see a plone website at localhost:8000

# Doing component shadowing

#### component shadowing is a process in which we shadow a component provided by themes with the new ones. Basically component shadowing is a process in which we overwrite the content which theme provided bydefault.

- steps for doing component shadowing
  1. Create src/gatsby-theme-plone/components folder
  1. Put the component which you want to overwrite

* currently we are using https://plonedemo.kitconcept.com/en as base url.
* for any question please open a issue.
