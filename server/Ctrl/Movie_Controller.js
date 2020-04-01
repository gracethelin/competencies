const axios = require('axios')

const movies = [
    // {
    //     id: 0,
    //     title: ''
    // }
]

let id = 1



module.exports = {

    showMovies: (req ,res) => {
        res.status(200).send(movies)
    },

    addMovies: (req, res) => {
        const {title} = req.body
        
        const obj = {
            title: title,
            id: id,
           
        }
        id++
        movies.push(obj)

        res.status(200).send(movies)
    },

        rateMovie: (req, res) => {
            const {id} = req.params

            const {rating} = req.body

            const index = movies.findIndex( element => {
                return element.id === +id
            })

            movies[index].rating = rating 

            res.status(200).send(movies)

        },


    deleteMovies: (req, res) => {
        const {id} = req.params

        const index = movies.findIndex(element => {
            return element.id === +id
        })

        movies.splice(index, 1)

        res.status(200).send(movies)
    }
}

