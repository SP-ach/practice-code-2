const express = require("express");
let app = express();
let cors = require("cors");
app.use(cors());

const middileware = (req, res, next) => {
  console.log("hello im middleware");
  next();
};
const middileware2 = (req, res, next) => {
  console.log("hello im middleware2");
  next();
};

// app.use(middileware);

app.get("/", middileware, middileware2, (req, res) => {
  res.send("hello middileware from server ");
});

// const log=(req,res,next)=>{
//   console.log(`${req.method} request to ${req.url}`);
//   next();
// }

// const error=(err,req,res,next)=>{
//   console.log(err);
//   res.status(404).send("page not found")
// }

// app.use(log);
// app.use(error);

// app.get("/",(req,res)=>{
//   res.send("hello");
// });

// app.get("/",(req,res)=>{
//   res.send("home")
// })
// app.get("/about",(req,res)=>{
//   res.send("about")
// })
// app.get("/contact",(req,res)=>{
//   res.send("contact")
// })

// const server=http.createServer((req,res)=>{
//   if(req.url =="/"){
//     res.end("<h1>Hello</h1>")
//   }

// })
app.listen(3010);
