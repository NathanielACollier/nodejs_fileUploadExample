import express = require('express');

export const generalController = express.Router();

generalController.get('/hello', (req,res)=>{
    //res.status(200).json({message: 'Hello World!'});
    res.status(200).json('Hello World!');
});
