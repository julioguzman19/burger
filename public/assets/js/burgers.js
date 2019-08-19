$(function() {
	// Handling the user entering a new burger (POST)
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		let newBurger = {
			burger_name: $("#burgerInfo").val().trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {

				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	// When the user clicks the "Devour It!!" button (PUT)
	$(".devourBurgerButton").on("click", function(event) {
		let id = $(this).data("id")
		let changeBurger = {
			devoured: 0
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: changeBurger
		}).then(
			function () {
				console.log("Updated burger status.");
				location.reload();
			}
		);
	});
	
});