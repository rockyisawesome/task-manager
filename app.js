require('dotenv').config()
const express = require('express')
const app =  express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


app.use(express.static('./public'))

app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)



app.use(notFound )

app.use(errorHandlerMiddleware);



const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, ()=>{
            console.log("server is running on port 3000")
        
        }) 
        
    } catch (error) {
        console.log(error);
    }

}
start();



//app.get('api/v1/tasks) ........... get all tasks
//app.post('api/v1/tasks) ..........  create a new task
//app.get('api/v1/tasks/:id) ........... get single tasks
//app.patch('api/v1/tasks/:id) ........... update task
//app.delete('api/v1/tasks/:id) ........... delete tasks


