const express = require('express');
const studentRoutes = require('./src/student/routes');
const app = express();
const port = 3000;

app.use(express.json());
// this is a middleware that allows us to post and get json data
// from our endpoints

// app.get("/" , (req,res) => {
//       res.send("Hello World!");
// })

app.use('/api/v1/students' , studentRoutes);

app.listen(port , () => console.log(`app listening on port ${port}`));