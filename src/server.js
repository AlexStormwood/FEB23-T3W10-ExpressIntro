// import the server package 
const bananas = require('express');
// make an instance of the server that we can customise and run 
const app = bananas();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
// Ports can only be a integer between 1001 - 65536 

// instance.routes(controllers or middleware)
// instance.use(middleware)
// instance.use(router)
// instance.get(express.json())
// app.get(bananas.json())
app.use(bananas.json());
app.use(bananas.urlencoded({extended: true}));



// some comment here to trigger nodemon into restarting

// GET localhost:3000/ 
// app.get(route path, callback function)
app.get("/", (request, response) => {

	response.send("Hello world, this server is bananas!");

});

const someImportedRouterYay = require('./controllers/PokemonController');
app.use("/pokemon", someImportedRouterYay);


module.exports = {
	app,
	HOST,
	PORT
}

// Configure the server -- happens all above this line ^^^^^^