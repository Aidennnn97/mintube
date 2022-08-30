import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`)
app.listen(PORT, handleListening);

const handleHome = (req, res) => {
    return res.end("<h1>This is Home</h1>");
}

app.get("/", handleHome);

const handleLogin = (req, res) => {
    return res.end("<h1>This is Login</h1>");
}

app.get("/login", handleLogin);

