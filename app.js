const express = require('express');
const app = express();
require('./db');
const User = require('./model/user');
const userRouter = require('./routes/user');

const PORT = process.env.PORT || 8000;
// app.get('/', (req, res) => {
//     res.send(`<h1>hello express</h1>`)
// })
app.use(express.json());
app.use('/api/user', userRouter);


app.listen(PORT, () => {
    console.log(`app is running at ${PORT}`);
})