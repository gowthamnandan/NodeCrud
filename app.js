const express = require('express');
const app = express();
const port = 5000;

app.get('/', (request, respond)=>{
    respond.status(200).json({
        message: 'welcome to my project'
    });
});

app.listen(port, (request, respond) => {
    console.log(`Serving on ${port}`) 
});