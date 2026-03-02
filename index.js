import app from "./src/app.js";
import dotenv from "dotenv";
import connectDb from "./src/db/db.js";

dotenv.config({
	path: "./.env",
});


const port = process.env.PORT;


connectDb();

app.listen(port, () => {
	console.log(`Listening to http://localhost:${port}`);
});