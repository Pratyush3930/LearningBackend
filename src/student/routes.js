const {Router} = require('express');
// or we can use
// const express = require('express); 

const controller = require('./controller');

const router = Router();

router.get('/' , controller.getStudents);
router.post('/' , controller.addStudent);
router.get('/:id' , controller.getStudentsById);

module.exports = router;