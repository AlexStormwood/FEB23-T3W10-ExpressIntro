const express = require('express');
const {checkForAlex} = require('./PokemonMiddleware');

// create an instance of the Express router 

const router = express.Router();

// router.use(checkForAlex);

router.get("/", (request, response) => {
	response.json({
		message:"Hello world from a router!"
	});
});

// GET /pokemon/25 
router.get("/:numberOfLePokemon", async (request, response) => {
	let pokemonId = request.params.numberOfLePokemon;

	let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId);
	let data = await result.json();

	response.json({
		name: data.name
	});
});


// POST /pokemon/
// Body: {username:"alex", pokemonId:someNumber}

/*
router.post(
	"/",
	checkForAlex,
	someOtherMiddleware,
	WhateverMiddlewareWeCreated,
	BlahBlahBlah,
	async (request, response) => {}
)
*/
router.post("/", checkForAlex, async (request, response) => {
	// let pokemonId = request.params.numberOfLePokemon;

	// if (request.body.username != "alex"){
	// 	return response.json({
	// 		message:"You are not authorised!"
	// 	});
	// }
	console.log("Post with middleware has run");

	let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + request.body.pokemonId);
	let data = await result.json();

	response.json({
		name: data.name,
		username: request.body.username,
		pokemonId: request.body.pokemonId  

	});
});





router.get("/bananas", async (request, response) => {

	let result = await fetch("https://pokeapi.co/api/v2/pokemon/25");
	let data = await result.json();


	response.json({
		message: "bananas!",
		pokemonName: data.name
	});
});


// Create out of CRUD 
router.post("/", (request, response) => {
	console.log("Post with NO middleware has run!")
	response.json({
		message:"POST request received!"
	})
});

module.exports = router;

// module.exports = {
// 	PokemonRouter: router
// }
