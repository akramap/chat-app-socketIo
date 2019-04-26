// import is a ES6 feature not suppoeted by nodejs by default and it can  supported by babel right now 
import path from "path";
import express from "express";

// this connects server to the client,setting up the path i.e currentdir/public.
const publicPath=path.join(__dirname,'../public');
console.log("publicPath",publicPath);

// setting up the port.
const port = process.env.PORT || 3000;

// configure express application.
const app = express();

// using the express middleware
app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log(`Server is up on ${port}`);
});