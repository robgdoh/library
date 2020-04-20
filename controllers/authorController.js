const mongoose = require("mongoose");

// import author model
const Author = mongoose.model("author");

    
// function to handle a request to get all authors
const getAllAuthors = async (req, res) => {
    
  try {
    const all_authors = await Author.find();
    return res.send(all_authors);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};
    
  
  

// function to modify author by ID
const updateAuthor = async (req, res) => {
  res.send("Working on this feature");
};

// function to add author
const addAuthor = async (req, res) => {
  var newAuthor = new Author({id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name});

  newAuthor.save(function (err, author) {
    if (err) return console.error(err);
    console.log(author.name + " saved to author collection.");
  });

  res.send("added " + newAuthor.name);

};

// function to get author by id
const getAuthorByID = async (req, res) => {

  try {
    const author = await Author.find(author => author.id === req.params.id);
    if (author) {
      res.send(author); // send back the author details
    }
    else{

      res.send([]);
    }
  } catch(err) {
    res.status(400);
    return res.send("Database query failed");
  }

};

// remember to export the functions
module.exports = {
  getAllAuthors,
  getAuthorByID,
  addAuthor,
  updateAuthor
};
