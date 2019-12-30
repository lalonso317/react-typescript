Instructions to start the app:
- First you will need to clone the repository, or even fork this repo to make your own variations to the code, then you will clone to the terminal.
- After you clone this repository to your terminal, the directory should appear. 
- You will want to confirm that all dependencies were installed, to this you will either use: 
    npm install or yarn add.
- Once that is completed, you run the app, this is done by running:
    npm start or yarn start
- The app should run in your browser in localhost:3000

This Project is a small app built with React, Node.js, Express, and Typescript.

It has a simple user interface with three buttons, each for a User, Post, and Photo.

With each press of a button it makes a call to the backend of the app, in which it makes a get request to the Json Place Holder api. It then recieves the data specificed and sends it to the frontend of the application, where it gets parsed.

Each call requests the first data set for each category.

It will then populate in the browser, and that is all to the application.

