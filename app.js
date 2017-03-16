var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer().single("fileupload");

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.post("/get-file-size", upload, function(req, res){
  upload(req, res, function(err){
    if (err) {
      return res.send("An error occurred when uploading");
    }
    res.send(JSON.stringify({ name: req.file.originalname, 
      type: req.file.mimetype, size: req.file.size }));
  });
});

app.get("*", function(req, res){
  res.send("Page not found.");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("server is running");
});
