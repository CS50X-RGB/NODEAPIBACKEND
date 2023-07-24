import {app} from './app.js';
import connectDB from './data/database.js';

connectDB();

app.listen(3001,() => {
    console.log("Server is running!!")
})