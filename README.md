# Pokédex App

This repo is a fullstack Pokédex web application built using TypeScript, React, Node.js, Express.js, MongoDB, and Docker.

The backend initially consumes the [Poké API](https://pokeapi.co) to populate the database with all the Pokémon's details, sprites, and text entries. The data is then exposed through an API.

The frontend consumes the API to list Pokémon along with their picture and details, search a Pokémon by their number or name, and add them to favorites.

## Getting Started

1. First you need a Mongo database:
   - You can use your own local or hosted Mongo database
   - Or mount one with Docker Compose by running `docker compose up` in the root
2. Set the backend environment variable to your Mongo instance:
   - In `./backend` copy the file `.env.example` -> `.env.local`
   - Change the value of `MONGO_URI` to your instance's URI
   - If you used Docker it should be similar to: `mongodb://localhost/pokedex`
3. Populate the database:
   - Open a terminal in `./backend`
   - Run `npm install` to install the NPM dependencies
   - Execute the script using `npm run populate-db`
   - The script is located at `backend/scripts/populateDb.ts`, and it consumes the public PokéAPI, fetches each Pokémon's details, and then stores it into our database
4. Now we can expose the stored data through our API:
   - Still inside `./backend`, run `npm run dev` to start the development server
   - The API be available in your localhost through the `PORT` specified in the `.env.local` file
   - If nothing was changed, the API should be listening on [http://localhost:8080](http://localhost:8080)
5. Finally start the frontend application to consume and visualize our data:
   - Open a new terminal in `./frontend`
   - Run `npm install` to install the NPM dependencies
   - Run `npm run dev` to start the React application
   - View the app at [http://localhost:5173](http://localhost:5173)

## References

Read more about the technologies and tools used in this project:

- [Poké API](https://pokeapi.co)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev)
- [NodeJS](https://nodejs.org/)
- [Express.js](https://expressjs.com)
- [MongoDB](https://mongodb.com)
- [Docker](https://docker.com)
