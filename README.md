# Overview

React/Redux resume app built using webpack bundler, SASS and SVG.

## Getting started

- Clone this repo
- `npm install` to install all required dependencies.

## Development

To run develoment mode simply run this command:
`npm run live-dev`

This command will run a fake JSON API, which can be run individually (`npm run json-server`). also the webpack dev server which can be run individually (`npm run dev`)

## Production

To run develoment mode simply run this command:
`npm run live-prod`

This command will run a fake JSON API, which can be run individually (`npm run json-server`). also the webpack build command which can be run individually (`npm run prod`)

## Important

It's important to run the both commands (json-server and dev server or bundler command) so the application can fetch data form the JSON API or it will throw an error to the console.
