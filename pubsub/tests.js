test("dispatcher should be defined", function() { 
	ok(Nevermind.dispatcher !== undefined, "instagram wrapper is exists and is not undefined");
});

test("should add new event", function() { 
	ok(typeof Nevermind.dispatcher.on === "function", "on should be a function");
	
	Nevermind.dispatcher.on("testEvents", function() {
		console.log("ok");
	});

	ok(Nevermind.dispatcher.getListener("testEvents").length === 1, "listener should be 1");
});

test("should trigger and event", function() {
	var placeholder = false;

	Nevermind.dispatcher.on("testEvents", function() {
		placeholder = true;
	});

	Nevermind.dispatcher.trigger("testEvents");

	ok(placeholder === true, "should trigger the event");
});