# roman-convert
A basic app to convert to and from Roman numerals.

## Running The App

1. Clone the repo
2. Run 'cd server && npm i'
    * NOTE: script in server package.json should run install on client as well.
3. After install completes RUN 'npm start'

## Using the App

The app should pull up a single page with 2 fields. You may enter values into one or both fields.
The results will populate below the respective field. 
If the server cannot interperet the input you receive a message indicating the reason and the background for the message will be red.
If the server can convert the input the result will be shown with a green background.


## Running Unit Tests

NOTE: There are currently no unit tests on the front end.

To run the backend tests, run the test script in the server "package.json" file.
