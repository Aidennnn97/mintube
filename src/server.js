import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`)
app.listen(PORT, handleListening);

// MiddleWare Logger
const urlLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const timeLogger = (req, res, next) => {
    var date = new Date();
    console.log(`Request Time: ${date}`);
    next();
}

const securityLogger = (req, res, next) => {
    const protocol = req.protocol;
    if(protocol === 'https'){
        console.log('Secure!');
    } else {
        console.log('Insecure!');
    }
    next();
}

const protectorMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){ // /protected로 이동하려고 할 경우 이동하지 못하도록 함
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may continue.")
    next();
}

// GET URL
const handleHome = (req, res) => {
    return res.send("<h1>This is Home</h1>");
}

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.");
}

//app.enable('trust proxy'); proxy서버일 때 https인식
app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleLogin = (req, res) => {
    return res.send({ message: "This is Login" });
}

app.get("/login", handleLogin);

