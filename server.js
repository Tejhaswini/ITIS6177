const express = require('express')
const cors = require('cors');
const app = express()
const axios = require("axios");
const port = 3000
app.use(cors());

app.get('/', (req, res) => {
   
 axios.get('https://996549kioa.execute-api.us-east-1.amazonaws.com/myDateAPI')
.then(resp => {
    res.send(resp.data.body);
}).catch(function (error)
{
    console.log(error);
})
})

//make a call to lambda , get the text  
//got back to api and front end ... 
//get response to front end 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
