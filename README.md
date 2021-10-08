# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



## Custom hook for data fetching
    -useFetch.js is custom hook for data fetch from backend. <br/>
    -It's reusual component just taking the api request url as a parameter. <br/>

## Tricky part
    - searching movie using title is optional OMDb API so it's little tricky to estimate if there is a such movie which its title is same as input. <br/>
    - I use reponse property to check if there is a movie that I am looking for. (App.js line 23). <br/>
## Todo
  -Remove search button by sending request  using debounce
