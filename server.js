const express = require("express");
const app = express();

const guitars = [
	{
		id: 1,
		price: 16899,
		label: "Gibson",
		model: "S-G",
	},
	{
		id: 2,
		price: 14500,
		label: "Gibson",
		model: "Les Paul",
	},
	{
		id: 3,
		price: 30000,
		label: "Fender",
		model: "Telecaster",
	},
	{
		id: 4,
		price: 4000,
		label: "Fender",
		model: "Stratocaster",
	},
];

app.use(express.json());

app.get("/api/guitars", (req, res) => {
	res.json(guitars);
});

app.get("/api/guitars/:id", (req, res) => {
	const id = req.params.id;

	let foundGuitar = guitars.find((guitar) => {
		return guitar.id == id;
	});
	if (!foundGuitar) {
		res.status(404).json({ Error: "gitarren finns inte" });
	}
	res.json(foundGuitar);
});

app.post("/api/guitars", (req, res) => {
	const labelOfGuitar = req.body.label;
	const priceOfGuitar = req.body.price;
	const modelOfGuitar = req.body.model;

	let newId = 0;
	for (const guitar of guitars) {
		if (guitar.id > newId) {
			newId = guitar.id;
		}
	}

	newId++;

	const newGuitar = {
		id: newId,
		price: priceOfGuitar,
		label: labelOfGuitar,
		model: modelOfGuitar,
	};

	guitars.push(newGuitar);
	res.status(201).json(newGuitar);
});

app.put("/api/guitars/:id", (req, res) => {
	const id = req.params.id;

	const foundGuitar = guitars.find((guitar) => {
		return guitar.id == id;
	});

	if (foundGuitar) {
		foundGuitar.price = req.body.price;
		foundGuitar.label = req.body.label;
		foundGuitar.model = req.body.model;
		res.json(foundGuitar);
		return;
	}
	if (!foundGuitar) {
		res.status(404);
		return;
	}
});

app.delete("/api/guitars/:id", (req, res) => {
	const id = req.params.id;
	const guitar = guitars.find((guitar) => {
		return guitar.id == id;
	});

	if (!guitar) {
		res.status(404);
		return;
	}
	const index = guitars.indexOf(guitar);
	if (guitar.id == id) {
		guitars.splice(index, 1);
	}
	res.json({ "Borttagen gitarr": guitar });
});

app.listen(3000);
