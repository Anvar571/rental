// server is running here
import App from "./app";

const PORT = Number(process.env.PORT)

const app = new App(PORT);

app.listen();