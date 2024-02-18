const express = require('express');
const app = express();
var cors = require('cors')
const mongoose = require('mongoose');
const port=5000;

DB_URL='mongodb://localhost:27017/ruhaan';

mongoose.connect(DB_URL);
const conn = mongoose.connection;

conn.once('open',()=>{
    console.log('Connected to DB');
    app.use(cors())
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

})