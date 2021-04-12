const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoints

app.get('api/', (req, res) => {

})

app.post('api/', (req, res) => {
    console.log('hej');
})

app.delete('api/', (req, res) => {

})

// Start server

app.listen(port, () => {
    console.log(`Server is runnin on http://localhost${port}`)
});