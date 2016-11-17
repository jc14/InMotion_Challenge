# Movie Shelf

### Getting Started

`npm run build` Will run Browserify to build the bundle.js file.

`npm start` Will begin the server process using Nodemon.

### Features

- Users can
  - Add and delete movies from their Shelf
  - click on a movie in their Shelf to edit the movie (Will take the user to the add movie form and update the input fields with the data of that movie)
  - Add/edit movie form has validation
  - use the search bar to filter to all movies that contain the search text
    - Can be used to filter for movies from a certain year as well as movies that have a certain actor


### Backend

Data is only stored in local storage for this challenge. It's stored as a json string and modifying the project to send data to the server would not be difficult.

Since the data is stored in local storage, it's only available to the client. We will need to add a user system to the backend to support logging in and having user specific shelves.


### Tech Stack

#### Front-end

- Angular
- Bootstrap


#### Backend

- Node
- Express
- Browserify
