const express = require('express');
const app = express();

const guitars = [
    {
       id: 1,
       pris: 16899,
       tillverkare: "Gibson",
       modell: "S-G"

    },
    {
       id: 2,
       tillverkare: "Gibson",
       modell: "Les Paul",
       pris: 14500,

    },
    {
       id: 3,
       pris: 3000,
       tillverkare: "Fender",
       modell: "CD-60"

    },
    {
       id: 4,
       pris: 4000,
       tillverkare: "Ibanez",
       modell: "AD519-NT"

    }, 
];

app.use(express.json())

app.get("/api/guitars", (req, res) => {
    res.json(guitars)
    res.status(200).json(req.body)
})

app.post("/api/guitars", (req, res) => {
    guitars.push(req.body);
    res.status(201).json(req.body);
})

// app.put("/api/guitars", (req, res) => {
//     const guitars = req.guitars;

//     guitars = _.extend(guitars, req.body);

//     guitars.save(function(err){
//         if(err) {
//             return res.send("/guitars", {
//                 errors: err.errors,
//                 guitars: guitars
//             });
//         } else {
//             res.json(guitars);
//         }
//     })
// })

app.delete("/api/guitars", (req, res) => {
    const index = guitars.findIndex(g => g.name === "En gitarr");
    const deletedGuitars = guitars.splice(index, 1);
    res.json(deletedGuitars)
})

app.listen(3000);