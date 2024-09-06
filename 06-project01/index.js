const express = require('express');
const app = express();
const PORT = 3000;
const userRouter = require('./routes/user');
const {connectMongoDB} = require('./connection');
const {logReqRes} = require('./middlewares/index');

app.use(express.json());

// mongoose connect URL
connectMongoDB()
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))

app.use(logReqRes('log.txt'));

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
