
// provide the controller a link to the author model
const fs = require('fs');
const authors = require('../models/author.js');
const express = require('express');

const app = express();

// Function to handle a request to get all authors
const getAllAuthors = (req, res) => {
    res.send(authors); // return the list of authors
};

// Function to handle a request to a particular author
const getAuthorByID = (req, res) => {
// search for author in the database via ID
    const author = authors.find(author => author.id === req.params.id);
    if (author){
        res.send(author); // send back the author details
    }
    else{
// you can decide what to return if author is not found
// currently, an empty list will be return.
        res.send([]);
    }
};

const addAuthor = (req, res) => {
    console.log("received post");
    let author = req.body;
    authors.push(author);
    res.send(author);
    console.log("%j", author);
};

const modifyAuthor = (req,res) => {
    console.log("modifying");
    let authorIx = authors.findIndex(author => author.id === req.body.id);
    authors.splice(authorIx,1, req.body);
    console.log(authors);
    res.send(authors);

};

// Remember to export the callbacks
module.exports = {
    getAllAuthors, getAuthorByID, addAuthor, modifyAuthor
};