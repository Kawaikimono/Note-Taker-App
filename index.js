const express = require ("express");
const app = express();
const path = require ("path");
const db = require ("./db/db.json");
const fs = require ("fs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const generateUniqueId = require('generate-unique-id');
const id = generateUniqueId()
const Port = process.env.PORT || 3000;


app.use(express.static("public"));


app.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname,"./public/notes.html"))
})



app.get("/api/notes",(req,res) => {
    return res.json(db)
})

app.post("/api/notes",(req,res)=>{
    db.push(req.body)
    res.send(req.body)
})


app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.listen(Port,function(){
    console.log("Connected")
})



// The application’s front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.



// ## Acceptance Criteria

// ```
//\
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
// ```




// ## Grading Requirements
// ### Technical Acceptance Criteria: 40%




// ### Repository Quality: 13%


// * Repository contains quality README file with description, screenshot, and link to deployed application.


// ### Bonus: +10 Points

// * Application allows users to delete notes.


// ## Review

// You are required to submit BOTH of the following for review:

// * The URL of the functional, deployed application.
// The URL of the GitHub repository, with a unique name and a README describing the project.
