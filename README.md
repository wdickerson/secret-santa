# Secret Santa

Shows a secret santa drawing. For now, it's just static. The developer needs to perform the drawing and update the app.

## Development

`npm install` to install dependencies

`npm start` to run a dev server

Make changes in `/src`

## Drawing names

Run `node scripts/draw-names.cjs` to generate a random drawing with no self-assignments and no single cycle through all nine participants. This developer-only script prints the result without changing files and is not used by the app.

Copy the output into `DRAWN_NAMES` in [src/App.js](src/App.js), then run `npm test` to validate it.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
