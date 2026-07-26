require('dotenv').config();

const puerto = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

console.log("Puerto:", process.env.PORT);
console.log("API Key cargada correctamente");