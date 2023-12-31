const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req , res) => {
    pool.query(queries.getStudents, (err , results) =>{
        if (err) throw err;
        res.status(200).json(results.rows);
        // if the response was okay,then the status will be 200
        // and we're gonna send the row of data inside our columns 
    })
}

const getStudentsById = (req , res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    // it converts the id passed into a string
    pool.query(queries.getStudentsById, [id], (error ,results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudent = (req, res) => {
    const {name , email , age , dob} = req.body;
// check if email exists
    pool.query(queries.checkEmailExists , [email] , (error , results) =>{
        if (results.rows.length){
            res.send("Email already exists.");
        }
    })
    // add student to database if email does'nt exist
    pool.query(queries.addStudent, [name,email,age,dob], (error , results) =>{
        if(error) throw error;
        res.status(201).send("Student Created Successfully!");
        console.log("Student created");
        // 201 means the student has been created successfully
    })
}

const removeStudent = (req , res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentsById , [id] , (error , results) =>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound)
        {
             res.send("Student does not exist in the database");
        }
        else{
            pool.query(queries.removeStudent , [id] ,(error , results) =>{
                if(error) throw error;
                res.status(200).send("Student removed successfully");
             })
        }
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const {name , email , age , dob} = req.body;

    pool.query(queries.getStudentsById , [id] , (error , results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound) {
            res.send("Student does not exist in the database");
        }
        else{
            pool.query(queries.updateStudent , [name , email , age, dob ,id] , (error , results) => {
                if (error) throw error;
                res.status(200).send("Student information updated successfully");
            })
        }
    })
}


module.exports = {getStudents, getStudentsById , addStudent ,removeStudent , updateStudent};