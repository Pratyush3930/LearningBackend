const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1";
// the $1 means we're gonna pass a variable in its place later on
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
// s is an alias for students
const addStudent =
"INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)";

const removeStudent = 
"DELETE FROM students WHERE id = $1";

const updateStudent = 
"UPDATE students SET name=$1 , email=$2 , age=$3 , dob =$4 WHERE id = $5";
module.exports = {
    getStudents,
    getStudentsById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent
};