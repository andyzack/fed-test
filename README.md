# Coding Test

[Click here to preview the output](http://www.andrewaz.com/fed-test/).

## Challenge

To build card design and output the content using JSON data [see more details below](#user-content-carter-fed-test)

CARD UI: [View design](https://raw.githubusercontent.com/andyzack/fed-test/master/src/assets/CardGrid-design.png)

JSON API: [View data](http://prototype.carter-dev.net/fed-test/items.json)

## Approach

Build using vue.js and tailwind.css

Vue is a progressive framework for building user interfaces. I'm using Vue CLI that takes care of most of the tooling configurations, configures webpack so when we deploy app, all the static pages incluing JS, CSS and all dependencies get properly bundled together and optimised and minify upon deployment resulting in faster loading speed.

Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.


## Project setup

To start the project, clone the repo using your favourite terminal and run the following command:

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Tools

>[Node.js](https://nodejs.org/en/download/)

>[Vue.js](https://vuejs.org/v2/guide/installation.html)

>[Tailwind.css](https://tailwindcss.com/docs/installation)

>[purgecss](https://tailwindcss.com/docs/installation)

>[SVG loader](https://vue-svg-loader.js.org/)

>[gh-pages](https://cli.vuejs.org/guide/deployment.html)


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


---

# Carter FED Test
Code test for potential Carter front-end developers

## The challenge:
Use a heady combination of front-end technologies to produce the card grid layout in `/CardGrid.jpg` (don't forget to make it responsive). All the content for the cards is in a .json file - read from this to output your cards onto the page.

The JSON can be found here - http://prototype.carter-dev.net/fed-test/items.json

You can use a framework if you like but avoid plugins - no need to change your style, just code how you normally would.

If you have time, apply some nice hover style to the cards, whatever you like.

Comment where needed.

Feel free to ask questions.

## Notes

### Fonts
Open Sans - weights: 400, 600, 700
Available on Google Fonts

### Icons
Arrow & document SVG files are provided in the `/svg` directory
