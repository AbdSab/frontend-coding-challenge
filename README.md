# FrontEnd Challenge
## Technology used
I have choosen to use React, it's the best solution for small apps which doesn't require complexe architecure.
### Libraries
* React
* bootstrap, for prototyping
* node-sass, for future update in style's app
## Usage
To run the app you should first install the dependencies then run the app:
```shell
npm install
npm start
```

## Features
The app will first list the results of the first api call.

Once you scroll to bottom results for next page will appear.

While fetching the api, a placeholder similar to facebook's loading will appear as a loading process.

## Project Structure
#### api
This folder contain the wrapper for github api.
#### components
React's componenets
#### helper
It has some useful functions, in this case it contain the infinite scroll function
#### mock
Used to store some mock data for local testing
#### pages
Different pages of the app, one page in our case
#### service
To make managing functionalities easy by only modifying them without touching main code.