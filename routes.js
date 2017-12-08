'use strict';
var express = require('express');
var router = express.Router();


//First Route Handler
//GET /questions
// Routes for Questions Collection
router.get('/', function(req, res){
  res.json(
    {
      response: 'You have sent me a GET request'
    }
  );
});
//POST /questions
// Routes for Creating Questions
router.post('/', function(req, res){
  res.json(
    {
      response: 'You have sent me a POST request',
      body: req.body
    }
  );
});

//GET /questions/:id
// Routes for Specific Questions
router.get('/:qID', function(req, res){
  res.json(
    {
      response: 'You have sent me a GET request for ID'+ req.params.qID
    }
  );
});

//POST /questions/:id/answers
// Routes for Creating an Answer
router.post('/:qID/answers', function(req, res){
  res.json(
    {
      response: 'You have sent me a POST request to /answers',
      questionId: req.params.qID,
      body: req.body
    }
  );
});

//PUT /questions/:qID/answers/:aID
// Eddit a Specific Answer
router.put('/:qID /answers/:aID', function(req, res){
  res.json(
    {
      response: 'You have sent me a PUT request to /answers',
      questionId: req.params.qID,
      answerId: req.params.aID,
      body: req.body
    }
  );
});

//DELETE /questions/:qID/answers/:aID
// Delete a Specific Answer
router.delete('/:qID /answers/:aID', function(req, res){
  res.json(
    {
      response: 'You have sent me a DELETE request to /answers',
      questionId: req.params.qID,
      answerId: req.params.aID,
    }
  );
});

//POST /questions/:qID/answers/:aID/vote-up
//POST /questions/:qID/answers/:aID/vote-down
// Vote on a Specific Answer
router.post('/:qID /answers/:aID/vote-:dir', function(req, res){
  res.json(
    {
      response: 'You have sent me a POST request to /vote-' + req.params.dir,
      questionId: req.params.qID,
      answerId: req.params.aID,
      vote: req.params.dir
    }
  );
});





















module.exports = router;
