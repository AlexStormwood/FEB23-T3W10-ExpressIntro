

// Function for authorisation
// If username is not alex, respond with message
// else, pass along to next function 
function checkForAlex (request, response, next) {
	// if body data contains a username and that is NOT equal to "alex"
	if (request.body.username != "alex"){
		// break out of our route chain immediately
		return response.json({
			message:"You are not authorised!"
		});
	} else {
		// move to the next step in the chain 
		next();
	}
}

/*

instance.verb(
	path, 
	middleware, 
	checkForAlex,     --- > called response.json(), end of route ---> end 
	 	|
	 	V
	called next(), moving to someOtherMiddleware
	 	|
	 	V
	someOtherMiddleware, 
	someDifferentMiddleware,
	evenMoreMiddleware,
	asManyMiddlewareAsYouWant,
	routeFunctionOrCallback
	)

*/


module.exports = {
	checkForAlex
}