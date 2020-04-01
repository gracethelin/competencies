require("dotenv").config();
const express = require("express"),
    massive = require("massive"),
    session = require("express-session"),
    authCtrl = require("./controllers/authController"),
const express = require(`express`);
const cors = require('cors')
const movieCtrl = require('./Controllers/Movie_Controller')


const app = express()
app.use(express.json());
const PORT = 4060

app.use(express.json())

app.use(cors())

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        rejectUnauthorized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
        secret: SESSION_SECRET
    })
);


app.get('/api/movies', movieCtrl.showMovies)
app.post('/api/movies', movieCtrl.addMovies)
app.put('/api/movies/:id', movieCtrl.rateMovie)
app.delete('/api/movies/:id', movieCtrl.deleteMovies)



app.listen(PORT, () => {
    console.log(`${PORT} Is Workinnn!`)
})

